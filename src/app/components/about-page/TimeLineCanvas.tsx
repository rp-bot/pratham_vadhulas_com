// src/components/TimelineCanvas.tsx
import React from 'react';
import useMeasure from 'react-use-measure';
import { useBranchLayout } from '../../lib/hooks/useBranchLayout';
import { Branch } from './Branch';
import { BranchNode } from './BranchNode';
import { EventLabel } from './EventLabel';
import { TimelineEvent } from '../../lib/types/timeline';

interface TimelineCanvasProps {
  events: TimelineEvent[];
  height?: number;
}

export function TimelineCanvas({ events, height = 600 }: TimelineCanvasProps) {
  // measure container width for a responsive SVG
  const [ref, bounds] = useMeasure();
  const { root, ptsEdu, ptsCar, edu, car } = useBranchLayout(
    events,
    bounds.width,
    height
  );

  return (
    <div ref={ref} className="w-full overflow-auto text-wrap ">
      <svg width={bounds.width} height={height}>
        {/* 1) Draw the shared branch root */}
        <BranchNode x={root[0]} y={root[1]} color="#6B7280" radius={8} />

        {/* 2) Education branch */}
        {ptsEdu.length > 1 && <Branch points={ptsEdu} color="#3B82F6" />}
        {ptsEdu.slice(1).map(([x, y], idx) => (
          <React.Fragment key={edu[idx].id}>
            <BranchNode x={x} y={y} color="#3B82F6" />
            <EventLabel x={x} y={y} event={edu[idx]} align="left" />
          </React.Fragment>
        ))}

        {/* 3) Career branch */}
        {ptsCar.length > 1 && <Branch points={ptsCar} color="#D946EF" />}
        {ptsCar.slice(1).map(([x, y], idx) => (
          <React.Fragment key={car[idx].id}>
            <BranchNode x={x} y={y} color="#D946EF" />
            <EventLabel x={x} y={y} event={car[idx]} align="right" />
          </React.Fragment>
        ))}
      </svg>
    </div>
  );
}
