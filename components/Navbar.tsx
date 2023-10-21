import Link from "next/link"
import React from "react"
import ThemeButton from "@/components/ThemeButton"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1 mx-2">
        <div>
          <Link href="/" className="mr-2">
            <b>HOME</b>
          </Link>

          <Link href="/home" className="">
            <b>Week view</b>
          </Link>
          {/* <Link href="/todo" className="mr-2">
            Todo lists
          </Link>
          <Link href="/fullcalendar" className="">
            Full calendar
          </Link> */}
        </div>

        <span className="">
          <ThemeButton />
        </span>
      </div>
    </div>
  )
}

export default Navbar
