import * as React from "react"
import { Press_Start_2P } from "next/font/google"
import { cn } from "@/lib/utils"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

export interface BitAlertProps
  extends React.ComponentProps<"div"> {
  font?: 'normal' | 'retro';
  variant?: 'default' | 'destructive';
}

function Alert({ children, ...props }: BitAlertProps) {
  const { variant = 'default', className, font, ...rest } = props

  return (
    <div className={cn("relative", className)}>
      <div
        {...rest}
        className={cn(
          "relative rounded-none border-none p-4",
          variant === 'default' ? 'bg-black text-[#f89621]' : 'bg-black text-red-500',
          font !== "normal" && pressStart.className,
          className
        )}
      >
        {children}
      </div>

      <div className="absolute -top-1 w-full h-1 bg-[#f89621]" />
      <div className="absolute -bottom-1 w-full h-1 bg-[#f89621]" />
      <div className="absolute top-0 left-0 w-1 h-1 bg-[#f89621]" />
      <div className="absolute top-0 right-0 w-1 h-1 bg-[#f89621]" />
      <div className="absolute bottom-0 left-0 w-1 h-1 bg-[#f89621]" />
      <div className="absolute bottom-0 right-0 w-1 h-1 bg-[#f89621]" />
      <div className="absolute top-1 -left-1 h-[calc(100%-8px)] w-1 bg-[#f89621]" />
      <div className="absolute top-1 -right-1 h-[calc(100%-8px)] w-1 bg-[#f89621]" />
    </div>
  )
}

function AlertTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("line-clamp-1 font-medium tracking-tight", className)}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "text-muted-foreground mt-1 text-sm [&_p]:leading-relaxed",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
