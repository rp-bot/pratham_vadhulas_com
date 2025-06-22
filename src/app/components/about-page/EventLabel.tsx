import React from 'react';

interface EventLabelProps {
  x: number;
  y: number;
  event: { date?: string; title?: string; institution?: string };
  align: 'left' | 'right';
}

export function EventLabel({ x, y, event, align }: EventLabelProps) {
  // --- POSITIONING ---
  // Horizontal offset to place the label beside the node
  const hOffset = align === 'left' ? -15 : 15;
  const textAnchor = align === 'left' ? 'end' : 'start';

  // NEW: Vertical offset to move the entire label block *above* the node
  const vOffset = -25;

  // Combine offsets in the transform
  const transform = `translate(${x + hOffset}, ${y + vOffset})`;

  return (
    <g transform={transform}>
      {/* BACKGROUND HACK:
        Render the text twice. First with a thick white stroke to create a "background" or "outline",
        and then render the normal text on top of it.
      */}

      {/* Title Text */}
      <text
        textAnchor={textAnchor}
        dominantBaseline="baseline"
        className="text-sm font-medium"
        stroke="white"
        strokeWidth="3.5"
        strokeLinejoin="round"
      >
        {event.title}
      </text>
      <text
        textAnchor={textAnchor}
        dominantBaseline="baseline"
        className="fill-current text-sm font-medium text-gray-900"
      >
        {event.title}
      </text>

      {/* Sub-line Text (Institution & Date) */}
      <text
        textAnchor={textAnchor}
        dominantBaseline="hanging"
        dy="4"
        className="text-xs text-gray-500"
        stroke="white"
        strokeWidth="3.5"
        strokeLinejoin="round"
      >
        {`${event.institution || ''} ${event.date || ''}`}
      </text>
      <text
        textAnchor={textAnchor}
        dominantBaseline="hanging"
        dy="4"
        className="fill-current text-xs text-gray-500"
      >
        {`${event.institution || ''} ${event.date || ''}`}
      </text>
    </g>
  );
}