import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/8bit/card"

export function ExampleCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>8-Bit Card</CardTitle>
        <CardDescription>A retro-styled card component</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card component features a classic 8-bit design with pixelated borders and retro colors.</p>
      </CardContent>
      <CardFooter>
        <p className="text-sm text-[#f89621]/80">Last updated: Today</p>
      </CardFooter>
    </Card>
  )
} 