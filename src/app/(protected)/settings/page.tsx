"use client"

import { signOut } from "next-auth/react"
import { useCurrentUser } from "@/hooks/use-current-user"

export default function SettingsPage() {
    const user = useCurrentUser()
    return (
        <div className="h-[100vh] flex flex-col justify-center gap-2 items-center">
            <div className="w-[300px] shadow-lg border p-2 rounded-md flex justify-between items-center"> 
                <div>{user?.name}</div> 
                
                <button
                    onClick={()=>signOut()}
                    className="bg-black text-white px-2 py-1 font-semibold rounded">
                    Sign Out
                </button>
            </div>
        </div>
    )
}