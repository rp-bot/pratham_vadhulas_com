interface BranchNodeProps {
    x: number;
    y: number;
    color: string;
    radius?: number;
  }
  
  export function BranchNode({ x, y, color, radius = 6 }: BranchNodeProps) {
    return <circle cx={x} cy={y} r={radius} fill={color} stroke="#fff" strokeWidth={2} />;
  }
  