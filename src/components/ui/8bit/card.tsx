import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import {
  Card as ShadcnCard,
  CardAction as ShadcnCardAction,
  CardContent as ShadcnCardContent,
  CardDescription as ShadcnCardDescription,
  CardFooter as ShadcnCardFooter,
  CardHeader as ShadcnCardHeader,
  CardTitle as ShadcnCardTitle,
} from "@/components/ui/card"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export const cardVariants = cva("", {
  variants: {
    font: {
      normal: "",
      retro: pressStart.className,
    },
  },
  defaultVariants: {
    font: "retro",
  },
})

export interface BitCardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={cn("relative", className)}>
    <div
      ref={ref}
      className={cn(
        "relative rounded-none border-none p-4 bg-black",
        pressStart.className
      )}
      {...props}
    />
    {/* Top border with corners */}
    <div className="absolute top-0 left-2 right-2 h-1 bg-[#f89621]" />
    <div className="absolute top-1 left-1 w-1 h-1 bg-[#f89621]" />
    <div className="absolute top-1 right-1 w-1 h-1 bg-[#f89621]" />
    <div className="absolute top-0 left-1 w-1 h-1 bg-[#f89621]" />
    <div className="absolute top-0 right-1 w-1 h-1 bg-[#f89621]" />

    {/* Bottom border with corners */}
    <div className="absolute bottom-0 left-2 right-2 h-1 bg-[#f89621]" />
    <div className="absolute bottom-1 left-1 w-1 h-1 bg-[#f89621]" />
    <div className="absolute bottom-1 right-1 w-1 h-1 bg-[#f89621]" />
    <div className="absolute bottom-0 left-1 w-1 h-1 bg-[#f89621]" />
    <div className="absolute bottom-0 right-1 w-1 h-1 bg-[#f89621]" />

    {/* Left border */}
    <div className="absolute top-2 bottom-2 left-0 w-1 bg-[#f89621]" />
    <div className="absolute top-1 left-0 w-1 h-1 bg-[#f89621]" />
    <div className="absolute bottom-1 left-0 w-1 h-1 bg-[#f89621]" />

    {/* Right border */}
    <div className="absolute top-2 bottom-2 right-0 w-1 bg-[#f89621]" />
    <div className="absolute top-1 right-0 w-1 h-1 bg-[#f89621]" />
    <div className="absolute bottom-1 right-0 w-1 h-1 bg-[#f89621]" />
  </div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("space-y-1", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl text-[#f89621]",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-[#f89621]/60", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("mt-4 space-y-4", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between mt-6", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
