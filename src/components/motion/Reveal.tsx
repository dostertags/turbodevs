import { motion } from "motion/react"

import { cn } from "@/lib/utils"

/**
 * A near-vertical start that flattens into a long tail. Things leap into
 * motion and then settle, which reads as physical rather than mechanical.
 */
export const softEase = [0.16, 1, 0.3, 1] as const

type RevealProps = React.ComponentProps<typeof motion.div> & {
  delay?: number
  y?: number
  blur?: boolean
}

/**
 * Fades, lifts and focuses its children when they scroll into view.
 * `once: true` — elements that re-animate every time they re-enter the
 * viewport are exhausting to scroll past.
 */
export function Reveal({ children, className, delay = 0, y = 28, blur = true, ...props }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y, filter: blur ? "blur(10px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease: softEase }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  ...props
}: React.ComponentProps<typeof motion.div> & { stagger?: number; delay?: number }) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
  y = 24,
  ...props
}: React.ComponentProps<typeof motion.div> & { y?: number }) {
  return (
    <motion.div
      className={cn(className)}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(8px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.75, ease: softEase },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
