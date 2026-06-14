import { ICONS, type IconName } from "@/sanity/iconCatalog";

type Props = {
  name?: IconName | null;
  fallback: string;
  className?: string;
  strokeWidth?: number;
};

// Resolves a Sanity icon name to its SVG path. Falls back to the raw path
// passed by the caller (the hard-coded default for that card).
export default function Icon({
  name,
  fallback,
  className,
  strokeWidth = 1.8,
}: Props) {
  const d = (name && ICONS[name]) || fallback;
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
  );
}
