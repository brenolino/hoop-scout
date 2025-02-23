"use client"

import Link from "next/link"
import { ShoppingBasketIcon as Basketball } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function NavbarLogged() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black">
      <Link href="/dashboard" className="flex items-center gap-2">
        <span className="text-2xl font-bold">HoopScout</span>
        <Basketball className="w-6 h-6" />
      </Link>

      <div className="flex items-center gap-6">
        <Link href="/new-data" className="hover:text-gray-600">
          New Data
        </Link>
        <Link href="/how-it-works" className="hover:text-gray-600">
          How it works?
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-1 hover:text-gray-600">
            Profile <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
            <DropdownMenuItem>
              <Link href="/profile/edit" className="w-full text-black">
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/" className="w-full text-black">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link href="/dashboards">
          <Button className="bg-black text-white hover:bg-black/90">Dashboards</Button>
        </Link>
      </div>
    </nav>
  )
}

