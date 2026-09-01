import { forwardRef } from "react"

import { cn } from "@/lib/utils"

type ButtonProps = React.ComponentProps<"a"> & {
  variant?: "primary" | "secondary"
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium tracking-[0.01em] transition-colors duration-200"

const variants = {
  primary: "bg-accent text-bg hover:bg-[#f0b85c]",
  secondary: "tg-glass text-ink hover:bg-white/[0.08]",
}

export const Button = forwardRef<HTMLAnchorElement, ButtonProps>(function Button(
  { className, variant = "primary", ...props },
  ref,
) {
  return <a ref={ref} className={cn(base, variants[variant], className)} {...props} />
})
