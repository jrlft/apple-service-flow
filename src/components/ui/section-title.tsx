
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false, 
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-8", 
      centered && "text-center",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
