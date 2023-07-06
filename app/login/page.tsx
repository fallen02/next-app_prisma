import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"


export default function LoginPage() {
  return (
   
    <div className="absolute h-full w-full grid justify-center items-center">
      <div className="relative h-min w-auto">
      <Card className="shadow-lg bg-gray-100 dark:bg-transparent">
      <CardHeader>
        <CardTitle className="text-red-500 text-3xl"> Login</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Input type="email" placeholder="Enter email..." className=""/>
        <Input type="password" placeholder="Enter password..." className="mt-4"/>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
        <Button variant={"outline"}>Sign Up</Button>
        <Button variant={"outline"}>Login</Button>
        </div>
      </CardFooter>
    </Card>
    </div>
    </div>
  )
}
