import { forwardRef } from "react"

import { cn } from "@/lib/utils"

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary"
  size?: "default" | "small"
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[0.005em] transition-colors duration-150"

const variants = {
  primary: "bg-ink text-bg hover:bg-ink-hover",
  secondary: "bg-surface-2 text-ink hover:bg-border",
}

const sizes = {
  default: "min-h-11 px-5 py-2.5 text-[14.5px]",
  small: "min-h-9 px-4 py-2 text-[13.5px]",
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "default", ...props },
  ref,
) {
  return <a ref={ref} className={cn(base, variants[variant], sizes[size], className)} {...props} />
})
