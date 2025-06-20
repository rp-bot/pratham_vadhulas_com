// src/components/TimelineCanvas.tsx
import React from 'react';
import useMeasure from 'react-use-measure';
import { Branch } from './Branch';
import { BranchNode } from './BranchNode';
import { EventLabel } from './EventLabel';
import { TimelineEvent } from '../../lib/types/timeline';

// Data remains the same, focused on the branch/merge concept.
const eduData: TimelineEvent[] = [
  {
    id: 'edu-1',
    category: 'education',
    date: 'Year 1',
    title: 'B.S. in AppliedComputer Science',
    institution: 'Ivy Tech Community College, Indianapolis',
  },
  {
    id: 'edu-2',
    category: 'education',
    date: 'Summer',
    title: 'Summer Starts',
    institution: 'Internship opportunity begins',
  },
  {
    id: 'edu-3',
    category: 'education',
    date: '',
    title: 'Summer Ends',
    institution: 'Return to studies',
  },
];

const internData: TimelineEvent = {
    id: 'intern-1',
    category: 'career',
    date: 'Summer',
    title: 'Software Dev Intern',
    institution: 'Future Systems LLC',
}


interface TimelineCanvasProps {
  height?: number;
}

export function TimelineCanvas({ height = 500 }: TimelineCanvasProps) {
  const [ref, bounds] = useMeasure();

  if (!bounds.width || !height) {
    return <div ref={ref} className="w-full" style={{ height }} />;
  }
  
  // --- LAYOUT ---
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  const availH = height - margin.top - margin.bottom;
  const xMain = margin.left + 100;
  const xBranch = bounds.width - margin.right - 100;

  // Points for the main education timeline
  const ptSummerStart: [number, number] = [xMain, margin.top + availH * 0.75];
  const ptSummerEnd:   [number, number] = [xMain, margin.top + availH * 0.25];
  // The main start point is positioned relative to the summer start
  const ptEduStart: [number, number]    = [xMain, ptSummerStart[1] + 60];

  // Calculate the midpoint Y for the internship node
  const internshipY = (ptSummerStart[1] + ptSummerEnd[1]) / 2;
  const ptInternship: [number, number] = [xBranch, internshipY];


  // --- PATHS ---
  // The main education path is a continuous line
  const mainEducationPath: [number, number][] = [ ptEduStart, ptSummerStart, ptSummerEnd ];
  
  // Split the internship path into two segments to create the cubic curve effect
  const internshipPath_out: [number, number][] = [ ptSummerStart, ptInternship ];
  const internshipPath_in: [number, number][] = [ ptInternship, ptSummerEnd ];


  return (
    <div ref={ref} className="w-1/2 overflow-auto text-wrap ">
      <svg width={bounds.width} height={height} className="font-sans">
        
        {/* Draw the main education timeline */}
        <Branch points={mainEducationPath} color="#3B82F6" />
        
        {/* Draw the internship branch in two parts for the cubic curve style */}
        <Branch points={internshipPath_out} color="#D946EF" />
        <Branch points={internshipPath_in} color="#D946EF" />

        {/* --- Render Nodes and Labels --- */}
        
        {/* Education Nodes & Labels */}
        <React.Fragment key={eduData[0].id}>
          <BranchNode x={ptEduStart[0]} y={ptEduStart[1]} color="#3B82F6" radius={8} />
          <EventLabel x={ptEduStart[0]} y={ptEduStart[1]} event={eduData[0]} align="right" />
        </React.Fragment>
        
        <React.Fragment key={eduData[1].id}>
          <BranchNode x={ptSummerStart[0]} y={ptSummerStart[1]} color="#3B82F6" />
          <EventLabel x={ptSummerStart[0]} y={ptSummerStart[1]} event={eduData[1]} align="right" />
        </React.Fragment>

        <React.Fragment key={eduData[2].id}>
          <BranchNode x={ptSummerEnd[0]} y={ptSummerEnd[1]} color="#3B82F6" />
          <EventLabel x={ptSummerEnd[0]} y={ptSummerEnd[1]} event={eduData[2]} align="right" />
        </React.Fragment>

        {/* Internship Node & Label */}
        <React.Fragment key={internData.id}>
          <BranchNode x={ptInternship[0]} y={ptInternship[1]} color="#D946EF" />
          <EventLabel x={ptInternship[0]} y={ptInternship[1]} event={internData} align="right" />
        </React.Fragment>
      </svg>
    </div>
  );
}