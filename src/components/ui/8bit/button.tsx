import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "relative px-6 py-2 border-none",
          "after:absolute after:inset-0 after:border-r-[3px] after:border-b-[3px] after:border-black/25",
          "before:absolute before:inset-0 before:border-l-[3px] before:border-t-[3px] before:border-white/25",
          "bg-[#f89621] text-black hover:brightness-110 transition-all"
        ],
        outline: [
          "relative px-6 py-2 border-none",
          "after:absolute after:inset-0 after:border-r-[3px] after:border-b-[3px] after:border-black/25",
          "before:absolute before:inset-0 before:border-l-[3px] before:border-t-[3px] before:border-white/25",
          "bg-[#1a1a1a] text-[#f89621]"
        ],
      },
      size: {
        default: "h-10",
        sm: "h-8",
        lg: "h-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div className="relative inline-block">
        <button
          className={cn(buttonVariants({ variant, size, className }), pressStart.className)}
          ref={ref}
          {...props}
        />
        {/* Outer pixel border */}
        <div className="absolute -top-1 w-full h-1 bg-[#f89621]" />
        <div className="absolute -bottom-1 w-full h-1 bg-[#f89621]" />
        <div className="absolute top-0 left-0 w-1 h-1 bg-[#f89621]" />
        <div className="absolute top-0 right-0 w-1 h-1 bg-[#f89621]" />
        <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#f89621]" />
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#f89621]" />
        <div className="absolute top-1 -left-1 h-[calc(100%-8px)] w-1 bg-[#f89621]" />
        <div className="absolute top-1 -right-1 h-[calc(100%-8px)] w-1 bg-[#f89621]" />

        {/* Inner pixel shading */}
        <div className="absolute top-0 left-1 w-1 h-1 bg-white/25" />
        <div className="absolute top-1 left-0 w-1 h-1 bg-white/25" />
        <div className="absolute bottom-0 right-1 w-1 h-1 bg-black/25" />
        <div className="absolute bottom-1 right-0 w-1 h-1 bg-black/25" />
      </div>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants } 