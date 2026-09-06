import { forwardRef } from "react"

import { cn } from "@/lib/utils"

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary"
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium tracking-[0.01em] transition-colors duration-200"

const variants = {
  primary: "bg-accent text-bg hover:bg-accent-hover",
  secondary: "border border-border-strong bg-surface text-ink hover:border-accent hover:bg-surface-2",
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref,
) {
  return <a ref={ref} className={cn(base, variants[variant], className)} {...props} />
})
