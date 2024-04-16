"use client"

import { useEffect } from "react"
import { animatePageIn } from "./utils/Animation"


export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn()
  }, [])
  
  return <div className="">
    <div id="banner-1" className="min-h-screen bg-zinc-700 w-1/4 fixed  z-10 top-0 left-0"/>
    <div id="banner-2" className="min-h-screen bg-zinc-700 w-1/4 fixed  z-10 top-0 left-1/4"/>
    <div id="banner-3" className="min-h-screen bg-zinc-700 w-1/4  fixed z-10 top-0 left-2/4"/>
    <div id="banner-4" className="min-h-screen bg-zinc-700 w-1/4 fixed z-10 top-0 left-3/4"/>
   {children}
  </div>
}