"use client"

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'
import { ToastAction } from './ui/toast'
import { useToast } from './ui/use-toast'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'
import { ScaleLoader } from 'react-spinners'

export default function RegForm({type}: { type: 'login' | 'register'}) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  const formScheme = z.object({
    email: z.string().email({message: 'Enter a valid Email'}),
    password: z.string().min(8, { message: 'Minimun 8 charecters.' }).max(50)

  })

  const form = useForm<z.infer<typeof formScheme>>({
    resolver: zodResolver(formScheme),
    defaultValues: {
        email: "",
    }
  })

const onSubmit = (values: z.infer<typeof formScheme>) => {
  setLoading(true)
  fetch("/api/auth/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        email: values.email,
        password: values.password,
    }),
}).then( async (res) => {
    setLoading(false)
    if(res.status === 200){
        toast({
          title: "Successfully created Account!",
          description: "redirecting to login page.",
        })
        setTimeout(() => {
            router.push("/login")
        }, 2000)
    }else {
        const { error } = await res.json()
        toast({
          variant: "destructive",
          title: "Something Went Wrong",
          description: error,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        })
    }
  })
}
  
return (
  <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} >
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="Enter Email" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input placeholder="Enter Password" {...field} type='password'/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <Button 
        variant={'outline'} 
        type="submit"  
        className='mt-6'>
        {loading ? <ScaleLoader height={15} color="#36d7b7" /> : type === 'login' ? 'Login' : 'Sign Up'}
      </Button>
      </form>
  </Form>
)
}