import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import RegForm from "@/components/form"


export default function LoginPage() {
  return (
    <div className="absolute h-full w-full grid justify-center items-center">
      <div className="relative h-min w-auto">
      <Card className="shadow-lg bg-gray-100 dark:bg-transparent">
      <CardHeader>
        <CardTitle className="text-red-500 text-3xl"> Login</CardTitle>
        <CardDescription>Please enter email and Password</CardDescription>
      </CardHeader>
      <CardContent>
        <RegForm type="login"/>
      </CardContent>
      <CardFooter>
        
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}
