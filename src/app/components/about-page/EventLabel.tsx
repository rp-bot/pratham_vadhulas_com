import React from 'react';

interface EventLabelProps {
  x: number;
  y: number;
  event: { date: string; title: string; institution: string };
  align: 'left' | 'right';
}

export function EventLabel({ x, y, event, align }: EventLabelProps) {
  const offset = align === 'left' ? -20 : 20;
  const anchor = align === 'left' ? 'end' : 'start';
  return (
    <g transform={`translate(${x + offset}, ${y})`}>
      <text textAnchor={anchor} dominantBaseline="middle" className="text-sm font-medium text-gray-900">
        {event.title}
      </text>
      <text
        textAnchor={anchor}
        dominantBaseline="hanging"
        className="text-xs text-gray-600"
        dy="4"
      >
        {event.institution} • {event.date}
      </text>
    </g>
  );
}
