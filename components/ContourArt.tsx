/**
 * Topographic contour study — a stylised Half Dome elevation rendered as
 * nested granite contour rings. Decorative only.
 */
export function ContourArt({ className = "" }: { className?: string }) {
  const cx = 372;
  const cy = 388;
  const peak =
    "M196 486 L250 372 L230 306 L300 252 L320 176 L364 210 L378 286 L440 304 L478 366 L512 432 L552 486 L470 506 L386 492 L302 512 L242 496 Z";

  const rings = [
    { s: 1.0, o: 0.16, w: 1 },
    { s: 0.87, o: 0.2, w: 1 },
    { s: 0.74, o: 0.26, w: 1.4 },
    { s: 0.61, o: 0.32, w: 1 },
    { s: 0.49, o: 0.4, w: 1 },
    { s: 0.38, o: 0.5, w: 1.4 },
    { s: 0.27, o: 0.62, w: 1 },
    { s: 0.17, o: 0.78, w: 1 },
  ];

  return (
    <svg
      viewBox="0 0 760 760"
      className={className}
      fill="none"
      aria-hidden
    >
      <defs>
        <path id="ns-peak" d={peak} />
      </defs>

      {rings.map((r, i) => (
        <use
          key={i}
          href="#ns-peak"
          stroke="#b6a48c"
          strokeWidth={r.w}
          strokeOpacity={r.o}
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          transform={`translate(${cx} ${cy}) scale(${r.s}) rotate(${i * 1.4}) translate(${-cx} ${-cy})`}
        />
      ))}

      {/* summit marker */}
      <g transform={`translate(${cx} ${cy})`}>
        <path
          d="M0 -7 L7 0 L0 7 L-7 0 Z"
          fill="#b6a48c"
          fillOpacity="0.9"
        />
        <circle r="22" stroke="#b6a48c" strokeOpacity="0.4" />
      </g>

      {/* north arrow */}
      <g transform="translate(648 132)" stroke="#8a8d91" strokeOpacity="0.7">
        <circle r="34" strokeOpacity="0.35" />
        <path d="M0 -26 L9 14 L0 5 L-9 14 Z" fill="#8a8d91" fillOpacity="0.7" />
        <text
          x="0"
          y="-40"
          fill="#8a8d91"
          fillOpacity="0.8"
          fontSize="15"
          fontFamily="var(--font-mono)"
          textAnchor="middle"
          stroke="none"
        >
          N
        </text>
      </g>

      {/* registration crosshairs */}
      {[
        [70, 70],
        [690, 690],
      ].map(([x, y], i) => (
        <g key={i} stroke="#8a8d91" strokeOpacity="0.3">
          <path d={`M${x - 13} ${y} h26 M${x} ${y - 13} v26`} />
        </g>
      ))}

      {/* coordinate annotation */}
      <text
        x="70"
        y="708"
        fill="#8a8d91"
        fillOpacity="0.55"
        fontSize="14"
        fontFamily="var(--font-mono)"
        letterSpacing="2"
      >
        37.7459° N · 119.5332° W
      </text>
    </svg>
  );
}
