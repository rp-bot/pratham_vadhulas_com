// src/components/TimelineCanvas.tsx
import React from "react";
import useMeasure from "react-use-measure";
import { Branch } from "./Branch";
import { BranchNode } from "./BranchNode";
// import { EventLabel } from "./EventLabel";
import { TimelineEvent } from "../../lib/types/timeline";

// Data arrays remain the same
const eduData: TimelineEvent[] = [
  {
    id: "edu-1",
    category: "education",
    date: "",
    title: "",
    institution: "",
  },
  {
    id: "edu-2",
    category: "education",
    date: "",
    title: "",
    institution: "",
  },
  {
    id: "edu-3",
    category: "education",
    date: "",
    title: "",
    institution: "",
  },
  {
    id: "edu-4",
    category: "education",
    date: "",
    title: "",
    institution: "",
  },
  {
    id: "edu-5",
    category: "education",
    date: "",
    title: "",
    institution: "",
  },
  {
    id: "edu-6",
    category: "education",
    date: "2024",
    title: "B.S. in Computer Science",
    institution: "Purdue University",
  },
  {
    id: "edu-7",
    category: "education",
    date: "Fall 2025",
    title: "M.S. in Music Technology",
    institution: "Georgia Institute of Technology",
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
    return <div ref={ref} className="w-full min-w-[320px]" style={{ height }} />;
  }

  // --- RESPONSIVE LAYOUT ---
  const margin = { top: 20, bottom: 20, left: 15, right: 15 };
  const availH = height - margin.top - margin.bottom;

  const isMobile = bounds.width < 500;
  // Adjust X coordinates for left alignment and reduced branch distance
  const xMain = isMobile ? bounds.width * 0.2 : 100;
  const xBranchRight = isMobile ? bounds.width * 0.7 : xMain + 50;

  // Main timeline points (Y-coordinates are unchanged)
  const ptEduStart: [number, number] = [xMain, margin.top + availH * 0.95];
  const ptSummer1_Start: [number, number] = [xMain, margin.top + availH * 0.8];
  const ptSummer1_End: [number, number] = [xMain, margin.top + availH * 0.65];
  const ptSummer2_Start: [number, number] = [xMain, margin.top + availH * 0.5];
  const ptSummer2_End: [number, number] = [xMain, margin.top + availH * 0.35];
  const ptGraduation: [number, number] = [xMain, margin.top + availH * 0.25];
  
  const ptFreelance_4_Y = margin.top + availH * 0.05;
  const ptGradSchool: [number, number] = [xMain, ptFreelance_4_Y]; 

  // Branch-off points
  const internshipY = (ptSummer1_Start[1] + ptSummer1_End[1]) / 2;
  const ptInternship: [number, number] = [xBranchRight, internshipY];

  const researchY = (ptSummer2_Start[1] + ptSummer2_End[1]) / 2;
  const ptResearch: [number, number] = [xBranchRight, researchY];

  // Points for the extended freelance branch
  const ptFreelance_1: [number, number] = [xBranchRight, margin.top + availH * 0.20];
  const ptFreelance_2: [number, number] = [xBranchRight, margin.top + availH * 0.15];
  const ptFreelance_3: [number, number] = [xBranchRight, margin.top + availH * 0.10];
  const ptFreelance_4: [number, number] = [xBranchRight, ptFreelance_4_Y];


  // --- PATHS ---
  // The main education path is now split into two for different colors
  const undergradPath: [number, number][] = [ ptEduStart, ptSummer1_Start, ptSummer1_End, ptSummer2_Start, ptSummer2_End, ptGraduation ];
  const gradSchoolPath: [number, number][] = [ ptGraduation, ptGradSchool ]; // New path for the grad school segment

  const internshipPath_out: [number, number][] = [ptSummer1_Start, ptInternship];
  const internshipPath_in: [number, number][] = [ptInternship, ptSummer1_End];
  const researchPath_out: [number, number][] = [ptSummer2_Start, ptResearch];
  const researchPath_in: [number, number][] = [ptResearch, ptSummer2_End];
  const freelancePath: [number, number][] = [ptGraduation, ptFreelance_1, ptFreelance_2, ptFreelance_3, ptFreelance_4];

  const mainPoints = [ { point: ptEduStart, event: eduData[0] }, { point: ptSummer1_Start, event: eduData[1] }, { point: ptSummer1_End, event: eduData[2] }, { point: ptSummer2_Start, event: eduData[3] }, { point: ptSummer2_End, event: eduData[4] }, { point: ptGraduation, event: eduData[5] }, { point: ptGradSchool, event: eduData[6] }, ];

  return (
    <div ref={ref} className="w-full min-w-[360px] overflow-auto text-wrap ">
      <svg width={bounds.width} height={height} className="font-sans">
        {/* Draw the undergrad path */}
        <Branch points={undergradPath} color="#3B82F6" />
        {/* Draw the grad school path with a new color */}
        <Branch points={gradSchoolPath} color="#4F46E5" />

        {/* Other branches remain the same */}
        <Branch points={internshipPath_out} color="#D946EF" />
        <Branch points={internshipPath_in} color="#D946EF" />
        <Branch points={researchPath_out} color="#10B981" />
        <Branch points={researchPath_in} color="#10B981" />
        <Branch points={freelancePath} color="#F59E0B" />

        {/* Render main timeline nodes with conditional coloring */}
        {mainPoints.map(({ point, event }) => {
            // Check if the current event is the grad school event
            const isGradSchool = event.id === 'edu-7';
            const nodeColor = isGradSchool ? '#4F46E5' : '#3B82F6';

            return (
                <React.Fragment key={event.id}>
                    <BranchNode x={point[0]} y={point[1]} color={nodeColor} />
                    {/* Note: Align main branch labels to the right to avoid them going off-screen */}
                    {/* <EventLabel x={point[0]} y={point[1]} event={event} align="right" /> */}
                </React.Fragment>
            );
        })}

        {/* Other nodes and labels remain the same */}
        <React.Fragment key={internData.id}>
          <BranchNode x={ptInternship[0]} y={ptInternship[1]} color="#D946EF" />
          {/* <EventLabel x={ptInternship[0]} y={ptInternship[1]} event={internData} align="left" /> */}
        </React.Fragment>

        <React.Fragment key={researchData.id}>
          <BranchNode x={ptResearch[0]} y={ptResearch[1]} color="#10B981" />
          {/* <EventLabel x={ptResearch[0]} y={ptResearch[1]} event={researchData} align="left" /> */}
        </React.Fragment>

        <React.Fragment key={freelanceData.id}>
            <BranchNode x={ptFreelance_1[0]} y={ptFreelance_1[1]} color="#F59E0B" />
        </React.Fragment>

        <BranchNode x={ptFreelance_2[0]} y={ptFreelance_2[1]} color="#F59E0B" key="freelance-empty-1" />
        <BranchNode x={ptFreelance_3[0]} y={ptFreelance_3[1]} color="#F59E0B" key="freelance-empty-2" />
        <BranchNode x={ptFreelance_4[0]} y={ptFreelance_4[1]} color="#F59E0B" key="freelance-empty-3" />
        {/* <EventLabel x={ptFreelance_4[0]} y={ptFreelance_4[1]} event={freelanceData} align="left" />  */}
      </svg>
    </div>
  );
}