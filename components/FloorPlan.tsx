/**
 * Stylised residential floor-plan drawing. Curated, minimal — a blueprint
 * excerpt rather than a full construction document. Client data is shown as
 * redacted, per the project showcase brief.
 */

type Rect = { x: number; y: number; w: number; h: number };
type Room = Rect & { label: string };
type Door = { x: number; y: number; rot: 0 | 1 | 2 | 3 };
type Line = { x1: number; y1: number; x2: number; y2: number };

type Plan = {
  foot: Rect;
  rooms: Room[];
  doors: Door[];
  dim: string;
  ghost?: Rect;
  hatch?: Rect;
  dashed?: Line[];
  tag?: { x: number; y: number; text: string };
};

const PLANS: Plan[] = [
  {
    // 1 — single-family residence layout
    foot: { x: 26, y: 40, w: 308, h: 198 },
    rooms: [
      { x: 26, y: 40, w: 168, h: 120, label: "LIVING" },
      { x: 194, y: 40, w: 140, h: 72, label: "KITCHEN" },
      { x: 194, y: 112, w: 140, h: 48, label: "DINING" },
      { x: 26, y: 160, w: 136, h: 78, label: "PRIMARY" },
      { x: 162, y: 160, w: 76, h: 78, label: "BATH" },
      { x: 238, y: 160, w: 96, h: 78, label: "BED" },
    ],
    doors: [
      { x: 118, y: 160, rot: 2 },
      { x: 194, y: 84, rot: 3 },
      { x: 238, y: 198, rot: 1 },
    ],
    dim: "48'-0\"",
  },
  {
    // 2 — Red Lion Drive Remodel (addition)
    foot: { x: 62, y: 40, w: 210, h: 150 },
    ghost: { x: 44, y: 60, w: 272, h: 168 },
    rooms: [
      { x: 62, y: 40, w: 120, h: 84, label: "NEW BED" },
      { x: 182, y: 40, w: 90, h: 84, label: "BATH" },
      { x: 62, y: 124, w: 84, h: 66, label: "STAIR" },
      { x: 146, y: 124, w: 126, h: 66, label: "NEW BED" },
    ],
    doors: [
      { x: 146, y: 124, rot: 0 },
      { x: 182, y: 90, rot: 3 },
    ],
    dim: "30'-0\"",
    tag: { x: 200, y: 214, text: "EXISTING FOOTPRINT" },
  },
  {
    // 3 — West 53rd Street ADUs
    foot: { x: 84, y: 52, w: 192, h: 174 },
    rooms: [
      { x: 84, y: 52, w: 124, h: 174, label: "LIVING / KITCHEN" },
      { x: 208, y: 52, w: 68, h: 98, label: "BED" },
      { x: 208, y: 150, w: 68, h: 76, label: "BATH" },
    ],
    doors: [
      { x: 208, y: 108, rot: 3 },
      { x: 146, y: 226, rot: 0 },
    ],
    dim: "24'-0\"",
  },
  {
    // 4 — interior remodel layout
    foot: { x: 28, y: 44, w: 304, h: 194 },
    hatch: { x: 28, y: 44, w: 304, h: 108 },
    rooms: [
      { x: 28, y: 44, w: 150, h: 108, label: "KITCHEN" },
      { x: 178, y: 44, w: 154, h: 108, label: "LIVING" },
      { x: 28, y: 152, w: 144, h: 86, label: "BED" },
      { x: 172, y: 152, w: 74, h: 86, label: "BATH" },
      { x: 246, y: 152, w: 86, h: 86, label: "ENTRY" },
    ],
    doors: [
      { x: 172, y: 200, rot: 1 },
      { x: 246, y: 200, rot: 3 },
    ],
    dashed: [{ x1: 178, y1: 44, x2: 178, y2: 152 }],
    dim: "44'-0\"",
    tag: { x: 180, y: 96, text: "WALL REMOVED" },
  },
  {
    // 5 — compact two-bedroom layout
    foot: { x: 66, y: 42, w: 228, h: 194 },
    rooms: [
      { x: 66, y: 42, w: 138, h: 120, label: "LIVING" },
      { x: 66, y: 162, w: 138, h: 74, label: "KITCHEN" },
      { x: 204, y: 42, w: 90, h: 86, label: "BED" },
      { x: 204, y: 128, w: 90, h: 42, label: "BATH" },
      { x: 204, y: 170, w: 90, h: 66, label: "BED" },
    ],
    doors: [
      { x: 204, y: 100, rot: 3 },
      { x: 204, y: 208, rot: 3 },
      { x: 138, y: 162, rot: 2 },
    ],
    dim: "32'-0\"",
  },
  {
    // 6 — Arroyo Seco Avenue ADUs
    foot: { x: 40, y: 66, w: 280, h: 150 },
    rooms: [
      { x: 40, y: 66, w: 128, h: 150, label: "LIVING" },
      { x: 168, y: 66, w: 84, h: 80, label: "KITCHEN" },
      { x: 168, y: 146, w: 84, h: 70, label: "BATH" },
      { x: 252, y: 66, w: 68, h: 150, label: "BED" },
    ],
    doors: [
      { x: 168, y: 110, rot: 3 },
      { x: 252, y: 150, rot: 3 },
    ],
    dashed: [{ x1: 62, y1: 216, x2: 150, y2: 216 }],
    dim: "34'-0\"",
    tag: { x: 106, y: 230, text: "FORMER GARAGE OPENING" },
  },
];

function Door({ x, y, rot }: Door) {
  const R = 19;
  return (
    <g
      transform={`rotate(${rot * 90} ${x} ${y})`}
      stroke="#8a8d91"
      strokeWidth={1}
      strokeOpacity={0.75}
      fill="none"
    >
      <path d={`M${x} ${y - R} A ${R} ${R} 0 0 1 ${x + R} ${y}`} />
      <path d={`M${x} ${y} L${x} ${y - R}`} />
    </g>
  );
}

export function FloorPlan({
  plan,
  code,
  className = "",
}: {
  plan: 1 | 2 | 3 | 4 | 5 | 6;
  code: string;
  className?: string;
}) {
  const p = PLANS[plan - 1];
  const { foot } = p;
  const hatchId = `ns-hatch-${plan}`;

  return (
    <svg
      viewBox="0 0 360 284"
      className={className}
      fill="none"
      fontFamily="var(--font-mono)"
      aria-hidden
    >
      <defs>
        <pattern
          id={hatchId}
          width="9"
          height="9"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="9"
            stroke="#8a8d91"
            strokeWidth="1"
            strokeOpacity="0.22"
          />
        </pattern>
      </defs>

      {/* corner registration marks */}
      {[
        [13, 13],
        [347, 13],
        [13, 271],
        [347, 271],
      ].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x - 6} ${y} h12 M${x} ${y - 6} v12`}
          stroke="#8a8d91"
          strokeOpacity="0.3"
          strokeWidth="1"
        />
      ))}

      {/* dimension line */}
      <g stroke="#b6a48c" strokeWidth="1" strokeOpacity="0.7">
        <path d={`M${foot.x} 24 H${foot.x + foot.w}`} />
        <path d={`M${foot.x} 19 v10 M${foot.x + foot.w} 19 v10`} />
      </g>
      <text
        x={foot.x + foot.w / 2}
        y="14"
        fill="#b6a48c"
        fontSize="9"
        letterSpacing="1"
        textAnchor="middle"
      >
        {p.dim}
      </text>

      {/* existing footprint (additions) */}
      {p.ghost && (
        <rect
          x={p.ghost.x}
          y={p.ghost.y}
          width={p.ghost.w}
          height={p.ghost.h}
          stroke="#8a8d91"
          strokeWidth="1"
          strokeOpacity="0.55"
          strokeDasharray="6 4"
        />
      )}

      {/* remodel zone hatch */}
      {p.hatch && (
        <rect
          x={p.hatch.x}
          y={p.hatch.y}
          width={p.hatch.w}
          height={p.hatch.h}
          fill={`url(#${hatchId})`}
        />
      )}

      {/* exterior double-line wall */}
      <rect
        x={foot.x}
        y={foot.y}
        width={foot.w}
        height={foot.h}
        stroke="#f3f1ec"
        strokeWidth="2"
      />
      <rect
        x={foot.x + 4}
        y={foot.y + 4}
        width={foot.w - 8}
        height={foot.h - 8}
        stroke="#f3f1ec"
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {/* rooms + labels */}
      {p.rooms.map((r, i) => (
        <g key={i}>
          <rect
            x={r.x}
            y={r.y}
            width={r.w}
            height={r.h}
            stroke="#8a8d91"
            strokeWidth="1"
            strokeOpacity="0.85"
          />
          <text
            x={r.x + r.w / 2}
            y={r.y + r.h / 2 + 3}
            fill="#8a8d91"
            fontSize="8.5"
            letterSpacing="1.2"
            textAnchor="middle"
          >
            {r.label}
          </text>
        </g>
      ))}

      {/* dashed callouts (removed walls / openings) */}
      {p.dashed?.map((l, i) => (
        <path
          key={i}
          d={`M${l.x1} ${l.y1} L${l.x2} ${l.y2}`}
          stroke="#b6a48c"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
      ))}

      {/* doors */}
      {p.doors.map((d, i) => (
        <Door key={i} {...d} />
      ))}

      {/* inline annotation */}
      {p.tag && (
        <text
          x={p.tag.x}
          y={p.tag.y}
          fill="#b6a48c"
          fillOpacity="0.85"
          fontSize="7"
          letterSpacing="1.4"
          textAnchor="middle"
        >
          {p.tag.text}
        </text>
      )}

      {/* redaction marker */}
      <g>
        <rect
          x="26"
          y="252"
          width="44"
          height="13"
          fill="#2e3134"
          stroke="#8a8d91"
          strokeWidth="1"
          strokeOpacity="0.5"
        />
        {[33, 41, 49, 57].map((x) => (
          <path
            key={x}
            d={`M${x} 253 l-7 11`}
            stroke="#8a8d91"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        ))}
        <text x="78" y="262" fill="#8a8d91" fontSize="7.5" letterSpacing="1.2">
          CLIENT DATA REDACTED
        </text>
      </g>

      {/* north arrow */}
      <g transform="translate(196 261)" stroke="#8a8d91" fill="none">
        <circle r="11" strokeOpacity="0.45" />
        <path d="M0 -8 L4 6 L0 3 L-4 6 Z" fill="#8a8d91" stroke="none" />
        <text
          y="-14"
          fill="#8a8d91"
          fontSize="8"
          textAnchor="middle"
          stroke="none"
        >
          N
        </text>
      </g>

      {/* title block */}
      <g>
        <rect
          x="232"
          y="246"
          width="102"
          height="30"
          fill="#1b1d1f"
          stroke="#f3f1ec"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        <path
          d="M232 261 H334"
          stroke="#f3f1ec"
          strokeWidth="1"
          strokeOpacity="0.18"
        />
        <text x="240" y="257" fill="#f3f1ec" fontSize="8" letterSpacing="1.6">
          NORTHSTONE
        </text>
        <text
          x="326"
          y="257"
          fill="#b6a48c"
          fontSize="8"
          letterSpacing="1"
          textAnchor="end"
        >
          {code}
        </text>
        <text x="240" y="271" fill="#8a8d91" fontSize="7" letterSpacing="1">
          SCALE 1/4&quot; = 1&apos;-0&quot;
        </text>
      </g>
    </svg>
  );
}
