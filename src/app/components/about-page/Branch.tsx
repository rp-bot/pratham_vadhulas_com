// src/components/Branch.tsx
import { motion } from 'framer-motion';
import React from 'react';

interface BranchProps {
  points: [number, number][];
  color: string;
  strokeWidth?: number;
}

export function Branch({ points, color, strokeWidth = 4 }: BranchProps) {
  if (points.length < 2) return null;

  // 1) Pull off root and first real point
  const [x0, y0] = points[0];
  const [x1, y1] = points[1];

  // 2) Build control points exactly halfway in Y,
  //    but hugging each branch’s X
  const cp1: [number, number] = [x0, (y0 + y1) / 2];
  const cp2: [number, number] = [x1, (y0 + y1) / 2];

  // 3) Start path with cubic from root → first node
  let d = `M${x0},${y0} C${cp1[0]},${cp1[1]} ${cp2[0]},${cp2[1]} ${x1},${y1}`;

  // 4) If there are more points, just Line-to them
  for (let i = 2; i < points.length; i++) {
    const [x, y] = points[i];
    d += ` L${x},${y}`;
  }

  return (
    <motion.path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    />
  );
}
