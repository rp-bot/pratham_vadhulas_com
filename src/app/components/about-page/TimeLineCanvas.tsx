// src/components/TimelineCanvas.tsx
import React from "react";
import useMeasure from "react-use-measure";
import { Branch } from "./Branch";
import { BranchNode } from "./BranchNode";
import { EventLabel } from "./EventLabel";
import { TimelineEvent } from "../../lib/types/timeline";

// Data updated to include the final Graduation event
const eduData: TimelineEvent[] = [
  {
    id: "edu-1",
    category: "education",
    date: "Year 1",
    title: "B.S. in Applied Computer Science",
    institution: "Ivy Tech Community College",
  },
  {
    id: "edu-2",
    category: "education",
    date: "Summer 1",
    title: "First Summer Starts",
    institution: "Internship opportunity",
  },
  {
    id: "edu-3",
    category: "education",
    date: "",
    title: "First Summer Ends",
    institution: "Return to studies",
  },
  {
    id: "edu-4",
    category: "education",
    date: "Summer 2",
    title: "Second Summer Starts",
    institution: "Research opportunity",
  },
  {
    id: "edu-5",
    category: "education",
    date: "",
    title: "Second Summer Ends",
    institution: "Return to studies",
  },
  {
    id: "edu-6", // New Graduation Event
    category: "education",
    date: "Year 4",
    title: "Graduation",
    institution: "Degree Awarded",
  },
];

// Data for the first (internship) branch
const internData: TimelineEvent = {
  id: "intern-1",
  category: "career",
  date: "Summer 1",
  title: "Software Dev Intern",
  institution: "Future Systems LLC",
};

// Data for the second (research) branch
const researchData: TimelineEvent = {
    id: "research-1",
    category: "education",
    date: "Summer 2",
    title: "AI Research Assistant",
    institution: "University AI Lab",
}

interface TimelineCanvasProps {
  height?: number;
}

export function TimelineCanvas({ height = 800 }: TimelineCanvasProps) {
  const [ref, bounds] = useMeasure();

  if (!bounds.width || !height) {
    return <div ref={ref} className="w-full" style={{ height }} />;
  }

  // --- LAYOUT ---
  const margin = { top: 20, bottom: 20, left: 10, right: 10 };
  const availH = height - margin.top - margin.bottom;
  const xMain = bounds.width / 2; // Center the main timeline
  const xBranchRight = xMain + 200; // Branch off to the right
  const xBranchLeft = xMain - 200; // Branch off to the left

  // Points for the main education timeline, distributed vertically
  const ptEduStart: [number, number] = [xMain, margin.top + availH * 0.9];
  const ptSummer1_Start: [number, number] = [xMain, margin.top + availH * 0.75];
  const ptSummer1_End: [number, number] = [xMain, margin.top + availH * 0.6];
  const ptSummer2_Start: [number, number] = [xMain, margin.top + availH * 0.45];
  const ptSummer2_End: [number, number] = [xMain, margin.top + availH * 0.3];
  const ptGraduation: [number, number] = [xMain, margin.top + availH * 0.15]; // The final point is now graduation


  // Calculate midpoints for the branch nodes
  const internshipY = (ptSummer1_Start[1] + ptSummer1_End[1]) / 2;
  const ptInternship: [number, number] = [xBranchRight, internshipY];

  const researchY = (ptSummer2_Start[1] + ptSummer2_End[1]) / 2;
  const ptResearch: [number, number] = [xBranchLeft, researchY];


  // --- PATHS ---
  // The main education path is a continuous line connecting all main points up to graduation
  const mainEducationPath: [number, number][] = [
    ptEduStart,
    ptSummer1_Start,
    ptSummer1_End,
    ptSummer2_Start,
    ptSummer2_End,
    ptGraduation,
  ];

  // Paths for the internship branch
  const internshipPath_out: [number, number][] = [ptSummer1_Start, ptInternship];
  const internshipPath_in: [number, number][] = [ptInternship, ptSummer1_End];

  // Paths for the new research branch
  const researchPath_out: [number, number][] = [ptSummer2_Start, ptResearch];
  const researchPath_in: [number, number][] = [ptResearch, ptSummer2_End];

  // Combine all main timeline points and their data for easier rendering
  const mainPoints = [
      { point: ptEduStart, event: eduData[0] },
      { point: ptSummer1_Start, event: eduData[1] },
      { point: ptSummer1_End, event: eduData[2] },
      { point: ptSummer2_Start, event: eduData[3] },
      { point: ptSummer2_End, event: eduData[4] },
      { point: ptGraduation, event: eduData[5] }, // The last point now uses the graduation event
  ]

  return (
    <div ref={ref} className="w-full overflow-auto text-wrap ">
      <svg width={bounds.width} height={height} className="font-sans">
        {/* Draw the main education timeline */}
        <Branch points={mainEducationPath} color="#3B82F6" />

        {/* Draw the internship branch (right) */}
        <Branch points={internshipPath_out} color="#D946EF" />
        <Branch points={internshipPath_in} color="#D946EF" />

        {/* Draw the research branch (left) */}
        <Branch points={researchPath_out} color="#10B981" />
        <Branch points={researchPath_in} color="#10B981" />

        {/* --- Render Nodes and Labels --- */}

        {/* Main Education Nodes */}
        {mainPoints.map(({ point, event }) => (
            <React.Fragment key={event.id}>
                <BranchNode x={point[0]} y={point[1]} color="#3B82F6" />
                {/* Basic labels for branch/merge points */}
                <EventLabel x={point[0]} y={point[1]} event={event} align="right" />
            </React.Fragment>
        ))}

        {/* Internship Node & Label (Right) */}
        <React.Fragment key={internData.id}>
          <BranchNode x={ptInternship[0]} y={ptInternship[1]} color="#D946EF" />
          <EventLabel x={ptInternship[0]} y={ptInternship[1]} event={internData} align="left" />
        </React.Fragment>

        {/* Research Node & Label (Left) */}
        <React.Fragment key={researchData.id}>
          <BranchNode x={ptResearch[0]} y={ptResearch[1]} color="#10B981" />
          <EventLabel x={ptResearch[0]} y={ptResearch[1]} event={researchData} align="right" />
        </React.Fragment>
      </svg>
    </div>
  );
}