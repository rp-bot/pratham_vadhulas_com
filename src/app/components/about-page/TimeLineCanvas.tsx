// src/components/TimelineCanvas.tsx
import React from "react";
import useMeasure from "react-use-measure";
import { Branch } from "./Branch";
import { BranchNode } from "./BranchNode";
import { EventLabel } from "./EventLabel";
import { TimelineEvent } from "../../lib/types/timeline";

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
    id: "edu-6",
    category: "education",
    date: "Year 4",
    title: "Graduation",
    institution: "Degree Awarded",
  },
  {
    id: "edu-7",
    category: "education",
    date: "Fall 2025",
    title: "Graduate School",
    institution: "University of Knowledge",
  },
];

const internData: TimelineEvent = {
  id: "intern-1",
  category: "career",
  date: "Summer 1",
  title: "Software Dev Intern",
  institution: "Future Systems LLC",
};

const researchData: TimelineEvent = {
    id: "research-1",
    category: "education",
    date: "Summer 2",
    title: "AI Research Assistant",
    institution: "University AI Lab",
};

const freelanceData: TimelineEvent = {
    id: "freelance-1",
    category: "career",
    date: "Present",
    title: "Freelance Developer",
    institution: "Self-Employed",
};

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
  const xMain = bounds.width / 2;
  const xBranchRight = xMain + 200;
  // const xBranchLeft = xMain - 200; // No longer needed

  // Main timeline points
  const ptEduStart: [number, number] = [xMain, margin.top + availH * 0.95];
  const ptSummer1_Start: [number, number] = [xMain, margin.top + availH * 0.8];
  const ptSummer1_End: [number, number] = [xMain, margin.top + availH * 0.65];
  const ptSummer2_Start: [number, number] = [xMain, margin.top + availH * 0.5];
  const ptSummer2_End: [number, number] = [xMain, margin.top + availH * 0.35];
  const ptGraduation: [number, number] = [xMain, margin.top + availH * 0.25];
  
  // Points for the extended freelance branch
  const ptFreelance_1: [number, number] = [xBranchRight, margin.top + availH * 0.20];
  const ptFreelance_2: [number, number] = [xBranchRight, margin.top + availH * 0.15];
  const ptFreelance_3: [number, number] = [xBranchRight, margin.top + availH * 0.10];
  const ptFreelance_4: [number, number] = [xBranchRight, margin.top + availH * 0.05];
  
  const ptGradSchool: [number, number] = [xMain, ptFreelance_4[1]]; 

  // Branch-off points
  const internshipY = (ptSummer1_Start[1] + ptSummer1_End[1]) / 2;
  const ptInternship: [number, number] = [xBranchRight, internshipY];

  // Research point is now on the right side
  const researchY = (ptSummer2_Start[1] + ptSummer2_End[1]) / 2;
  const ptResearch: [number, number] = [xBranchRight, researchY]; 


  // --- PATHS ---
  const mainEducationPath: [number, number][] = [
    ptEduStart,
    ptSummer1_Start,
    ptSummer1_End,
    ptSummer2_Start,
    ptSummer2_End,
    ptGraduation,
    ptGradSchool,
  ];

  const internshipPath_out: [number, number][] = [ptSummer1_Start, ptInternship];
  const internshipPath_in: [number, number][] = [ptInternship, ptSummer1_End];

  const researchPath_out: [number, number][] = [ptSummer2_Start, ptResearch];
  const researchPath_in: [number, number][] = [ptResearch, ptSummer2_End];
  
  const freelancePath: [number, number][] = [ptGraduation, ptFreelance_1, ptFreelance_2, ptFreelance_3, ptFreelance_4];

  const mainPoints = [
      { point: ptEduStart, event: eduData[0] },
      { point: ptSummer1_Start, event: eduData[1] },
      { point: ptSummer1_End, event: eduData[2] },
      { point: ptSummer2_Start, event: eduData[3] },
      { point: ptSummer2_End, event: eduData[4] },
      { point: ptGraduation, event: eduData[5] },
      { point: ptGradSchool, event: eduData[6] },
  ];

  return (
    <div ref={ref} className="w-full overflow-auto text-wrap ">
      <svg width={bounds.width} height={height} className="font-sans">
        {/* Main Education Timeline */}
        <Branch points={mainEducationPath} color="#3B82F6" />

        {/* Internship Branch (Right) */}
        <Branch points={internshipPath_out} color="#D946EF" />
        <Branch points={internshipPath_in} color="#D946EF" />

        {/* Research Branch (Now on Right) */}
        <Branch points={researchPath_out} color="#10B981" />
        <Branch points={researchPath_in} color="#10B981" />

        {/* Freelance Branch (Right, from Graduation) */}
        <Branch points={freelancePath} color="#F59E0B" />

        {/* --- NODES & LABELS --- */}

        {/* Main Education Nodes */}
        {mainPoints.map(({ point, event }) => (
            <React.Fragment key={event.id}>
                <BranchNode x={point[0]} y={point[1]} color="#3B82F6" />
                <EventLabel x={point[0]} y={point[1]} event={event} align="right" />
            </React.Fragment>
        ))}

        {/* Internship Node & Label */}
        <React.Fragment key={internData.id}>
          <BranchNode x={ptInternship[0]} y={ptInternship[1]} color="#D946EF" />
          <EventLabel x={ptInternship[0]} y={ptInternship[1]} event={internData} align="left" />
        </React.Fragment>

        {/* Research Node & Label */}
        <React.Fragment key={researchData.id}>
          <BranchNode x={ptResearch[0]} y={ptResearch[1]} color="#10B981" />
          {/* Label alignment changed to "left" */}
          <EventLabel x={ptResearch[0]} y={ptResearch[1]} event={researchData} align="left" />
        </React.Fragment>

        {/* Freelance Node & Label (initial point) */}
        <React.Fragment key={freelanceData.id}>
            <BranchNode x={ptFreelance_1[0]} y={ptFreelance_1[1]} color="#F59E0B" />
            <EventLabel x={ptFreelance_1[0]} y={ptFreelance_1[1]} event={freelanceData} align="left" />
        </React.Fragment>

        {/* Render the 3 new empty nodes for the freelance branch */}
        <BranchNode x={ptFreelance_2[0]} y={ptFreelance_2[1]} color="#F59E0B" key="freelance-empty-1" />
        <BranchNode x={ptFreelance_3[0]} y={ptFreelance_3[1]} color="#F59E0B" key="freelance-empty-2" />
        <BranchNode x={ptFreelance_4[0]} y={ptFreelance_4[1]} color="#F59E0B" key="freelance-empty-3" />
      </svg>
    </div>
  );
}