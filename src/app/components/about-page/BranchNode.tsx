interface BranchNodeProps {
  x: number;
  y: number;
  color: string;
  radius?: number;
  className?: string;
}

export function BranchNode({ x, y, color, radius = 6, className = '' }: BranchNodeProps) {
  return (
    <g transform={`translate(${x},${y})`}>
      <circle 
        cx={0} 
        cy={0} 
        r={radius} 
        fill={color} 
        stroke="#fff" 
        strokeWidth={2} 
        className={className} 
      />
    </g>
  );
}