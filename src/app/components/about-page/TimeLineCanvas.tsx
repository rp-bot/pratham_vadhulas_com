// src/components/TimelineCanvas.tsx
import React from "react";
import useMeasure from "react-use-measure";
import { Branch } from "./Branch";
import { BranchNode } from "./BranchNode";
import { TimelineEvent } from "../../lib/types/timeline";

// --- LABEL COMPONENTS ---

// Renders the date labels on the left side of the timeline
interface TimelineLabelProps {
  x: number;
  y: number;
  label: string;
}

const TimelineLabel: React.FC<TimelineLabelProps> = ({ x, y, label }) => (
  <text x={x} y={y} dominantBaseline="middle" textAnchor="end" className="font-mono text-xs text-gray-500">
    {label}
  </text>
);

// Renders the event description labels on the right side of the nodes
interface EventLabelProps {
  x: number;
  y: number;
  event: TimelineEvent;
  xOffset?: number;
}

const EventLabel: React.FC<EventLabelProps> = ({ x, y, event, xOffset = 15 }) => {
  const labelX = x + xOffset;

  // Use a foreignObject to allow for text wrapping
  return (
    <foreignObject x={labelX} y={y - 10} width={window.innerWidth >= 768 ? "100%" : "150"} height="100">
      <div className="text-left font-sans flex flex-col md:flex-row md:items-center ">
        <p className="text-sm font-semibold  text-gray-800">{event.title}</p>
        <p className="text-xs  text-gray-500 md:ml-2">{event.institution}</p>
      </div>
    </foreignObject>
  );
};

// --- DATA ---
const eduData: TimelineEvent[] = [
  {
    id: "edu-1",
    category: "education",
    date: "2020",
    title: "Began Undergrad",
    institution: "",
  },
  { id: "edu-2", category: "education", date: "", title: "", institution: "" },
  { id: "edu-3", category: "education", date: "", title: "", institution: "" },
  { id: "edu-4", category: "education", date: "", title: "", institution: "" },
  { id: "edu-5", category: "education", date: "", title: "", institution: "" },
  {
    id: "edu-6",
    category: "education",
    date: "2024",
    title: "🎓 B.S. in Computer Science",
    institution: "Purdue University",
  },
  {
    id: "edu-7",
    category: "education",
    date: "Fall 2025",
    title: "🎓 ⌛  M.S. in Music Technology",
    institution: "Georgia Institute of Technology",
  },
];

const internData: TimelineEvent = {
  id: "intern-1",
  category: "career",
  date: "Summer 2022",
  title: "Software Dev Intern",
  institution: "Vaihub, Inc.",
};

const researchData: TimelineEvent = {
  id: "research-1",
  category: "education",
  date: "Summer 2023",
  title: "Music AI Researcher",
  institution: "Indiana University, Center for Research and Learning",
};

const freelanceData: TimelineEvent = {
  id: "freelance-1",
  category: "career",
  date: "Present",
  title: "Freelance Developer",
  institution: "Self-Employed",
};

// --- MAIN COMPONENT ---
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
  const xMain = isMobile ? bounds.width * 0.25 : 100;
  const xBranchRight = isMobile ? bounds.width * 0.4 : xMain + 50;
  const xLabel = xMain - 20;
  const educationLabelXOffset = xBranchRight - xMain + 15;

  // --- POINTS ---
  const ptEduStart: [number, number] = [xMain, margin.top + availH * 0.95];
  const ptSummer1_Start: [number, number] = [xMain, margin.top + availH * 0.8];
  const ptSummer1_End: [number, number] = [xMain, margin.top + availH * 0.65];
  const ptSummer2_Start: [number, number] = [xMain, margin.top + availH * 0.55];
  const ptSummer2_End: [number, number] = [xMain, margin.top + availH * 0.4];
  const ptGraduation: [number, number] = [xMain, margin.top + availH * 0.3];

  const ptGradSchool_Y = margin.top + availH * 0.05;
  const ptGradSchool: [number, number] = [xMain, ptGradSchool_Y];

  const internshipY = (ptSummer1_Start[1] + ptSummer1_End[1]) / 2;
  const ptInternship: [number, number] = [xBranchRight, internshipY];

  const researchY = (ptSummer2_Start[1] + ptSummer2_End[1]) / 2;
  const ptResearch: [number, number] = [xBranchRight, researchY];

  // **THE FIX**: Changed the Y-coordinate multipliers to increase the distance
  // from the final freelance point to the grad school merge point.
  const ptFreelance_1: [number, number] = [xBranchRight, margin.top + availH * 0.22];
  const ptFreelance_2: [number, number] = [xBranchRight, margin.top + availH * 0.19];
  const ptFreelance_3: [number, number] = [xBranchRight, margin.top + availH * 0.16];

  // --- PATHS & DATA ---
  const undergradPath: [number, number][] = [ptEduStart, ptSummer1_Start, ptSummer1_End, ptSummer2_Start, ptSummer2_End, ptGraduation];
  const gradSchoolPath: [number, number][] = [ptGraduation, ptGradSchool];
  const internshipPath_out: [number, number][] = [ptSummer1_Start, ptInternship];
  const internshipPath_in: [number, number][] = [ptInternship, ptSummer1_End];
  const researchPath_out: [number, number][] = [ptSummer2_Start, ptResearch];
  const researchPath_in: [number, number][] = [ptResearch, ptSummer2_End];
  const freelancePath_out: [number, number][] = [ptGraduation, ptFreelance_1, ptFreelance_2, ptFreelance_3];
  const freelancePath_in: [number, number][] = [ptFreelance_3, ptGradSchool];

  const mainPoints = [
    { point: ptEduStart, event: eduData[0] },
    { point: ptSummer1_Start, event: eduData[1] },
    { point: ptSummer1_End, event: eduData[2] },
    { point: ptSummer2_Start, event: eduData[3] },
    { point: ptSummer2_End, event: eduData[4] },
    { point: ptGraduation, event: eduData[5] },
    { point: ptGradSchool, event: eduData[6] },
  ];

  const labelData = [
    { y: ptEduStart[1], label: eduData[0].date },
    { y: internshipY, label: internData.date },
    { y: researchY, label: researchData.date },
    { y: ptGraduation[1], label: eduData[5].date },
    { y: ptGradSchool[1], label: eduData[6].date },
  ];

  const uniqueLabelData = Array.from(new Map(labelData.map((item) => [item.y, item])).values());
  const keyEventIdsToLabel = ["edu-1", "edu-6", "edu-7"];

  return (
    <div ref={ref} className="w-full min-w-[360px] overflow-auto text-wrap ">
      <svg width={bounds.width} height={height} className="font-sans ">
        {/* Date Labels (Left) */}
        {uniqueLabelData.map(({ y, label }) => (
          <TimelineLabel key={`label-${y}`} x={xLabel} y={y} label={label} />
        ))}

        {/* Branches */}
        <Branch points={undergradPath} color="#3B82F6" />
        <Branch points={gradSchoolPath} color="#4F46E5" />
        <Branch points={internshipPath_out} color="#D946EF" />
        <Branch points={internshipPath_in} color="#D946EF" />
        <Branch points={researchPath_out} color="#10B981" />
        <Branch points={researchPath_in} color="#10B981" />
        <Branch points={freelancePath_out} color="#F59E0B" />
        <Branch points={freelancePath_in} color="#F59E0B" />

        {/* Main Timeline Nodes & Event Labels (Right) */}
        {mainPoints.map(({ point, event }, index) => {
          const isGradSchool = event.id === "edu-7";
          const nodeColor = isGradSchool ? "#4F46E5" : "#3B82F6";
          const showLabel = keyEventIdsToLabel.includes(event.id);
          const isLastPoint = index === mainPoints.length - 1;

          return (
            <React.Fragment key={event.id}>
              <BranchNode 
                x={point[0]} 
                y={point[1]} 
                color={nodeColor}
                className={isLastPoint ? "animate-pulse" : ""}
              />
              {showLabel && <EventLabel x={point[0]} y={point[1]} event={event} xOffset={educationLabelXOffset} />}
            </React.Fragment>
          );
        })}

        {/* Side Branch Nodes & Event Labels (Right) */}
        <React.Fragment key={internData.id}>
          <BranchNode x={ptInternship[0]} y={ptInternship[1]} color="#D946EF" />
          <EventLabel x={ptInternship[0]} y={ptInternship[1]} event={internData} />
        </React.Fragment>

        <React.Fragment key={researchData.id}>
          <BranchNode x={ptResearch[0]} y={ptResearch[1]} color="#10B981" />
          <EventLabel x={ptResearch[0]} y={ptResearch[1]} event={researchData} />
        </React.Fragment>

        {/* Freelance Path Nodes & Relocated Label */}
        <BranchNode x={ptFreelance_1[0]} y={ptFreelance_1[1]} color="#F59E0B" />
        <React.Fragment key={freelanceData.id}>
          <BranchNode x={ptFreelance_2[0]} y={ptFreelance_2[1]} color="#F59E0B" />
          <EventLabel x={ptFreelance_2[0]} y={ptFreelance_2[1]} event={freelanceData} />
        </React.Fragment>
        <BranchNode x={ptFreelance_3[0]} y={ptFreelance_3[1]} color="#F59E0B" />
      </svg>
    </div>
  );
}
