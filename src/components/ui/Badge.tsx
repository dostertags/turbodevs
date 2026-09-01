import { cn } from "@/lib/utils"

export function Badge({
  className,
  children,
  ...rest
}: React.HTMLAttributes<HTMLSpanElement> & { className?: string; children: React.ReactNode }) {
  return (
    <span
      {...rest}
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-surface px-2.5 py-1 text-[11px] font-medium tracking-[0.03em] text-muted",
        className,
      )}
    >
      {children}
    </span>
  )
}
