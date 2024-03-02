"use client"

import { useCurrentUser } from "@/hooks/use-current-user"
import Link from "next/link"

import { signOut } from "next-auth/react"

export const HomeButton = () => {
    const user = useCurrentUser()
    return (
        <div className="flex flex-col gap-3">
            {user ?
                (
                    <>
                     <Link
                        className="bg-black text-white px-3 py-1 rounded-sm font-semibold curosor-pointer"
                        href={"/settings"}>
                        Settings
                        </Link>

                        <button
                            className="bg-black text-white px-3 py-1 rounded-sm font-semibold curosor-pointer"
                            onClick={()=>signOut()}
                        >
                            Sign Out
                        </button>
                    </>
                )
                :
                (

                    <>
                        <Link
                            className="bg-black text-white px-3 py-1 rounded-sm font-semibold curosor-pointer"
                            href={"/signup"}>
                            Sign Up
                        </Link>
                        <Link
                            className="bg-black text-white px-3 py-1 rounded-sm font-semibold curosor-pointer"
                            href={"/api/auth/signin"}>
                            Sign In
                        </Link>
                    </>
                )
            }
        </div>
    )
}