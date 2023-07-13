"use client"

import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { useForm } from 'react-hook-form'
import { Button } from './ui/button'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

export default function RegForm({type}: { type: 'login' | 'register'}) {
  const [loading, setLoading] = useState(false)



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

  function onSubmit(values: z.infer<typeof formScheme>){
    console.log("submitted", values);
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
        
        <Button variant={'outline'} type="submit" className='mt-6'>{type === 'login' ? 'Login' : 'Sign Up'}</Button>
        
        </form>
    </Form>
  )
}