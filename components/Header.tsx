"use client"

import { Bars3Icon } from "@heroicons/react/16/solid"
import Link from "next/link"
import { useState } from "react"

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-cyan-700">
        <nav
            className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
            aria-label="Global"
        >
            <div className="flex lg:flex-1">
                <Link href="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">Booking.com</span>
                    <h1 className="text-white text-2xl font-bold">Booking.com</h1>
                </Link>
            </div>

            <div className="flex lg:hidden">
                <button type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="h-6 w-6"/>
                </button>
            </div>

        </nav>
    </header>
  )
}

export default Header
