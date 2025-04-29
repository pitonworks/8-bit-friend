import { cn } from "@/lib/utils"
import { Press_Start_2P } from "next/font/google"

const pressStart = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"],
})

const inputBaseStyles = cn(
  "w-full p-3 bg-[#1a1a1a] border-none text-[#f89621]",
  "placeholder:text-[#f89621]/50",
  pressStart.className
)

const labelStyles = cn(
  "block text-[#f89621] mb-3",
  pressStart.className
)

const InputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    {children}
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

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <InputWrapper>
    <input className={cn(inputBaseStyles, className)} {...props} />
  </InputWrapper>
)

export const Textarea = ({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <InputWrapper>
    <textarea className={cn(inputBaseStyles, className)} {...props} />
  </InputWrapper>
)

export const Select = ({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <InputWrapper>
    <div className="relative">
      <select className={cn(inputBaseStyles, "appearance-none pr-8", className)} {...props} />
      <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L5 5L9 1" stroke="#f89621" strokeWidth="2"/>
        </svg>
      </div>
    </div>
  </InputWrapper>
)

export const Label = ({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={cn(labelStyles, className)} {...props} />
)

export const Button = ({ 
  variant = "default",
  className, 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: "default" | "primary" 
}) => (
  <div className="relative inline-block">
    <button 
      className={cn(
        "relative px-6 py-2 border-none",
        "after:absolute after:inset-0 after:border-r-[3px] after:border-b-[3px] after:border-black/25",
        "before:absolute before:inset-0 before:border-l-[3px] before:border-t-[3px] before:border-white/25",
        pressStart.className,
        variant === "primary" 
          ? "bg-[#f89621] text-black hover:brightness-110 transition-all" 
          : "bg-[#1a1a1a] text-[#f89621]",
        className
      )} 
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