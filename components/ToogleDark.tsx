"use client"

import React from 'react'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import { Button } from './ui/button'

export default function ToogleDark() {
  const {theme,  setTheme } = useTheme()
  return (
  <div className="absolute z-10 w-full mt-4  mr-8 grid justify-end">
    <Button variant={'outline'} size={'icon'} className='cursor-pointer' onClick={() => theme === 'light' ? setTheme('dark') : setTheme('light')}>
      {theme === 'light' ? <MoonIcon />  : <SunIcon/>}
    </Button>
  </div>    
  )
}
