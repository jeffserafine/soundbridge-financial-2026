import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  className?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  return (
    <div className={cn("mb-12", alignClasses[align], className)}>
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

