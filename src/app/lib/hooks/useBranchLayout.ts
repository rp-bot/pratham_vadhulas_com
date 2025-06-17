// src/hooks/useBranchLayout.ts
import { useMemo } from 'react';
import { TimelineEvent } from '../types/timeline';

interface BranchLayout {
  root: [number, number];
  ptsEdu: [number, number][];
  ptsCar: [number, number][];
  edu: TimelineEvent[];
  car: TimelineEvent[];
}

export function useBranchLayout(
  events: TimelineEvent[],
  width: number,
  height: number,
  margin = { top: 40, bottom: 40 }
): BranchLayout {
  return useMemo<BranchLayout>(() => {
    // 1) split events
    const edu = events.filter((e) => e.category === 'education');
    const car = events.filter((e) => e.category === 'career');

    // 2) constants
    const avail = height - margin.top - margin.bottom;
    const xEdu = width * 0.3;
    const xCar = width * 0.7;

    // 3) the shared “branch point” at bottom-center
    const root: [number, number] = [xEdu , margin.top + avail];

    // 4) spacing, guarded against zero
    const denomEdu = Math.max(1, edu.length - 1);
    const stepEdu = avail / denomEdu;
    const coordsEdu: [number, number][] = edu.map<[number, number]>((_, i) => [
      xEdu,
      margin.top + i * stepEdu,
    ]);
    const ptsEdu: [number, number][] =
      coordsEdu.length > 0 ? [root, ...coordsEdu] : [];

    const denomCar = Math.max(1, car.length - 1);
    const stepCar = avail / denomCar;
    const coordsCar: [number, number][] = car.map<[number, number]>((_, i) => [
      xCar,
      margin.top + i * stepCar,
    ]);
    const ptsCar: [number, number][] =
      coordsCar.length > 0 ? [root, ...coordsCar] : [];

    return { root, ptsEdu, ptsCar, edu, car };
  }, [events, width, height, margin.top, margin.bottom]);
}
