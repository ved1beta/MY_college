/**
 * v0 by Vercel.
 * @see https://v0.dev/t/XTIwPYitiTz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import React from "react"
import { SelectTrigger, SelectValue, SelectContent, SelectItem, Select } from "@/components/ui/select"

export default function Component() {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="IIT Bombay Logo" className="h-10" />
            <div className="text-center">
              <h1 className="text-xl font-bold">भारतीय प्रौद्योगिकी संस्थान मुंबई</h1>
              <h2 className="text-lg">Indian Institute of Technology Bombay</h2>
            </div>
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="text-sm">Students</a>
            <a href="#" className="text-sm">Faculty & Staff</a>
            <a href="#" className="text-sm">Alumni</a>
            <a href="#" className="text-sm">Donate</a>
            <a href="#" className="text-sm">Vendors</a>
            <a href="#" className="text-sm">Old website</a>
          </nav>
          <div className="flex items-center space-x-4">
            <SearchIcon className="h-5 w-5" />
            <Select>
              <SelectTrigger id="language" aria-label="Language">
                <SelectValue placeholder="English" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">Hindi</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <nav className="bg-gray-100 py-2">
          <div className="container mx-auto flex justify-between">
            <a href="#" className="text-sm">About</a>
            <a href="#" className="text-sm">Divisions</a>
            <a href="#" className="text-sm">Academics</a>
            <a href="#" className="text-sm">Admissions</a>
            <a href="#" className="text-sm">Research & Industry</a>
            <a href="#" className="text-sm">Career</a>
            <a href="#" className="text-sm">Resources</a>
            <a href="#" className="text-sm">Contact Us</a>
          </div>
        </nav>
      </header>
      <main>
        <div className="relative">
          <img src="/placeholder.svg" alt="IIT Bombay" className="w-full h-[500px] object-cover" />
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <ChevronLeftIcon className="h-8 w-8 text-white" />
            <h2 className="text-4xl text-white font-bold">IIT Bombay</h2>
            <ChevronRightIcon className="h-8 w-8 text-white" />
          </div>
        </div>
        <section className="container mx-auto py-10">
          <h3 className="text-2xl font-bold mb-4">Announcements</h3>
        </section>
      </main>
    </div>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      
    </svg>
  )
}