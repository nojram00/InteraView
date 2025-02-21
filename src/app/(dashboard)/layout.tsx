import React from "react"
import Link from "next/link"
import "@globals/nav-button.css"
import Hamburger from "@/components/hamburger"

export default function DashboardLayout({ children } : { children : Readonly<React.ReactNode> }) {
  return(
    <div className="flex flex-col min-h-screen w-full">
        <header className="bg-gray-800 w-auto flex flex-row gap-3 text-white p-4 shadow-md">
            <Hamburger />
            <h1>InteraView</h1>
        </header>
        <div className="flex-1 flex flex-row w-full max-w-screen-xl h-full">
          <aside className="w-1/4 bg-gray-300 shadow-md hidden md:flex flex-col">
            <nav className="p-4">
              <ul className="space-y-2 w-full text-xl">
                <li className="nav-button">
                  <Link className="hover:underline" href="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-button">
                  <Link className="hover:underline" href="/input">Input</Link>
                </li>
                <li className="nav-button">
                  <Link className="hover:underline" href="/students">Students</Link>
                </li>
                <li className="nav-button">
                  <Link className="hover:underline" href="/suggestion">Suggetions</Link>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 w-full">
            {children}
          </main>
        </div>
    </div>
  )
}