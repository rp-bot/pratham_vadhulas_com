// src/components/TimelineCanvas.tsx
import React from 'react';
import useMeasure from 'react-use-measure';
import { Branch } from './Branch';
import { BranchNode } from './BranchNode';
import { EventLabel } from './EventLabel';
import { TimelineEvent } from '../../lib/types/timeline';

// Data remains the same
const eduData: TimelineEvent[] = [
  {
    id: 'edu-1',
    category: 'education',
    date: '2018-2022',
    title: 'B.S. in Computer Science',
    institution: 'University of Technology',
  },
  {
    id: 'edu-3',
    category: 'education',
    date: '2025',
    title: 'Project Capstone',
    institution: '',
  },
  {
    id: 'edu-2',
    category: 'education',
    date: '2025-2027',
    title: 'Ph.D. in Computational Science',
    institution: 'Institute of Advanced Studies',
  },
];

const carData: TimelineEvent[] = [
  {
    id: 'car-1',
    category: 'career',
    date: '2022-2023',
    title: 'Software Engineer',
    institution: 'Future Systems LLC',
  },
  {
    id: 'car-2',
    category: 'career',
    date: '',
    title: '',
    institution: '',
  },
];

interface TimelineCanvasProps {
  height?: number;
}

export function TimelineCanvas({ height = 600 }: TimelineCanvasProps) {
  const [ref, bounds] = useMeasure();

  if (!bounds.width || !height) {
    return <div ref={ref} className="w-full" style={{ height }} />;
  }
  
  // --- LAYOUT (Unchanged) ---
  const margin = { top: 50, bottom: 50, left: 50, right: 50 };
  const availH = height - margin.top - margin.bottom;
  const xEdu = margin.left;
  const xCar = bounds.width - margin.right;
  const ptEdu1: [number, number] = [xEdu, margin.top + availH * 0.9];
  const ptCar1: [number, number] = [xCar, margin.top + availH * 0.7];
  const ptCar2: [number, number] = [xCar, margin.top + availH * 0.5];
  const ptEdu3: [number, number] = [xEdu, margin.top + availH * 0.4];
  const ptEdu2: [number, number] = [xEdu, margin.top + availH * 0.1];

  // --- PATHS ---
  const educationBranchPoints: [number, number][] = [ptEdu1, ptEdu3, ptEdu2];
  
  // Split the career path into two segments to make the final line a curve.
  const careerPathPart1: [number, number][] = [ptEdu1, ptCar1, ptCar2];
  const careerPathPart2_Merge: [number, number][] = [ptCar2, ptEdu3]; // This will be a curve


  return (
    <div ref={ref} className="w-full overflow-auto text-wrap ">
      <svg width={bounds.width} height={height} className="font-sans">
        
        {/* Draw the Education Branch */}
        <Branch points={educationBranchPoints} color="#3B82F6" />
        
        {/* Draw the Career Branch in two parts */}
        <Branch points={careerPathPart1} color="#D946EF" />
        <Branch points={careerPathPart2_Merge} color="#D946EF" /> {/* This now draws a cubic curve */}

        {/* --- Render Nodes and Labels (Unchanged) --- */}
        
        {/* Education Nodes */}
        <React.Fragment key={eduData[0].id}>
          <BranchNode x={ptEdu1[0]} y={ptEdu1[1]} color="#3B82F6" radius={8} />
          <EventLabel x={ptEdu1[0]} y={ptEdu1[1]} event={eduData[0]} align="right" />
        </React.Fragment>
        <React.Fragment key={eduData[2].id}>
          <BranchNode x={ptEdu2[0]} y={ptEdu2[1]} color="#3B82F6" />
          <EventLabel x={ptEdu2[0]} y={ptEdu2[1]} event={eduData[2]} align="right" />
        </React.Fragment>
        <BranchNode x={ptEdu3[0]} y={ptEdu3[1]} color="#3B82F6" />

        {/* Career Nodes */}
        <React.Fragment key={carData[0].id}>
          <BranchNode x={ptCar1[0]} y={ptCar1[1]} color="#D946EF" />
          <EventLabel x={ptCar1[0]} y={ptCar1[1]} event={carData[0]} align="left" />
        </React.Fragment>
        <React.Fragment key={carData[1].id}>
          <BranchNode x={ptCar2[0]} y={ptCar2[1]} color="#D946EF" />
          {/* <EventLabel x={ptCar2[0]} y={ptCar2[1]} event={carData[1]} align="left" /> */}
        </React.Fragment>
      </svg>
    </div>
  );
}