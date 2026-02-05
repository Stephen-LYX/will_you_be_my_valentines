import Image from "next/image";
import celebration from "@/app/images/celebration.png"
import { Fredoka } from 'next/font/google'
import { BouncingEmoji } from "../component/BouncingEmoji";

const fredoka = Fredoka({
  weight: ['600'],
  subsets: ['latin']
})

export default function Yes() {

    return (
        <div className="flex justify-center items-center min-h-screen w-full">
            <div className="relative">

                <BouncingEmoji />
                
                <h1 className={`${fredoka.className} absolute right-1/2 top-1/4 text-center translate-x-1/2 text-4xl text-pink-700`}>
                    She said Yes! 
                </h1>

                <Image 
                    src={celebration}
                    alt="the user has clicked yes, this shows an image of BT21 characters celebrating"
                    className="max-w-screen max-h-screen"
                />

                <h1 className={`${fredoka.className} absolute right-1/2 bottom-1/6 text-center translate-x-1/2 text-4xl text-pink-700`}>
                    💚💚💚yieeeeeeeeepieeeeeeeeeee!!!💚💚💚
                </h1>
            </div>
        </div>
    )
}