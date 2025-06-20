// src/hooks/useBranchLayout.ts
import {useMemo} from 'react';
import {TimelineEvent} from '../types/timeline';

interface BranchLayout
{
  root: [number, number];
  ptsEdu: [number, number][];
  ptsCar: [number, number][];
  edu: TimelineEvent[];
  car: TimelineEvent[];
}

// Hardcoded timeline events in chronological order
const eduEvents: TimelineEvent[] = [
  {
    id: 'edu-1',
    category: 'education',
    date: '2014-2018',
    title: 'B.S. in Computer Science',
    institution: 'University of Technology',
    description: '…',
  },
  {
    id: 'edu-2',
    category: 'education',
    date: '2018-2020',
    title: 'M.S. in Artificial Intelligence',
    institution: 'Institute of Advanced Studies',
    description: '…',
  },
];

const carEvents: TimelineEvent[] = [
  {
    id: 'car-1',
    category: 'career',
    date: '2019',
    title: 'Software Engineer Intern',
    institution: 'Innovate Corp.',
    description: '…',
  },

];


export function useBranchLayout (
  width: number,
  height: number,
  margin = {top: 40, bottom: 40}
): BranchLayout
{
  return useMemo<BranchLayout>(() =>
  {
    // 1) Use hardcoded events
    const edu = eduEvents;
    const car = carEvents;

    // 2) constants for layout calculation
    const avail = height - margin.top - margin.bottom;
    const xEdu = width * 0.3;
    const xCar = width * 0.7;

    // 3) the shared “branch point” at bottom-center
    const root: [number, number] = [xEdu, margin.top + avail];

    // 4) Calculate spacing for the education branch
    const denomEdu = Math.max(1, edu.length - 1);
    const stepEdu = avail / denomEdu;
    const coordsEdu: [number, number][] = edu.map<[number, number]>((_, i) => [
      xEdu,
      // INVERTED: Calculate Y from the bottom up
      margin.top + avail - (i * stepEdu),
    ]);
    const ptsEdu: [number, number][] =
      coordsEdu.length > 0 ? [root, ...coordsEdu] : [];

    // 5) Calculate spacing for the career branch
    const denomCar = Math.max(1, car.length - 1);
    const stepCar = avail / denomCar;
    const coordsCar: [number, number][] = car.map<[number, number]>((_, i) => [
      xCar,
      // INVERTED: Calculate Y from the bottom up
      margin.top + avail - (i * stepCar),
    ]);
    const ptsCar: [number, number][] =
      coordsCar.length > 0 ? [root, ...coordsCar] : [];

    return {root, ptsEdu, ptsCar, edu, car};
  }, [width, height, margin.top, margin.bottom]);
}