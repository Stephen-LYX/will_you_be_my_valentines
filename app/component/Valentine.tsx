"use client"

import Image from "next/image"
import { useState } from "react"
import heartwink from "@/app/images/heartwink.png"
import { Pacifico, Fredoka } from 'next/font/google'
import { useRouter } from "next/navigation"
import { MainBouncingEmoji } from "./MainBouncingEmoji"
import { Main } from "next/document"

const pacifico = Pacifico({ 
  weight: '400',
  subsets: ['latin'] 
})

const fredoka = Fredoka({
  weight: ['600'],
  subsets: ['latin']
})

export default function Valentine() {
    const router = useRouter()
    const [ noPos, setNoPos ] = useState({top: "78%", left: "75%"})

    const moveNoButton  = () => {
        const randomTop = Math.random() * 80 + 10 //10% - 90%
        const randomLeft = Math.random() * 80 + 10 

        setNoPos({
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
        })
    }

    const redirectYes = () => {
        router.push("/ClickYes")
    }

    return (
        <div className="flex justify-center items-center min-h-screen w-full bg-pink-300">
            <div className="relative">
                
                <MainBouncingEmoji />

                <h1 className={`${pacifico.className} absolute top-1/10 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-4xl font-bold w-full`}>
                    🌹 Will You Be My Valentines 🌹
                </h1>

                <Image
                    src={heartwink}
                    alt="Picture of a bt21 character holding a heart and winking"
                    width={1000}
                    height={500}
                />
                
                <button onClick={redirectYes} className={`${fredoka.className} border-2 rounded-lg cursor-pointer text-4xl absolute translate-x-25 -translate-y-30 px-10 py-5 bg-pink-500 text-white transition-transform duration-200 ease-in-out hover:scale-110`}>
                    YES
                </button>

                <button onMouseEnter={moveNoButton} onClick={moveNoButton} className={`${fredoka.className} border rounded-lg absolute cursor-pointer text-4xl px-12 py-5 bg-white text-pink-300`} style={{ top: noPos.top, left: noPos.left }}>
                    No
                </button>
            </div>
        </div>
    )
}