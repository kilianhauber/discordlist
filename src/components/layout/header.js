import Link from "next/link"

export default function Header() {
    return (
        <>
            <div className="bg-dclight">
                <div className="flex justify-center text-center">
                    <h1 className="text-discordblue font-delagothicone py-14">
                        <p className="p-3 text-5xl md:text-7xl">Discord List</p>
                        <p className="p-3 text-2xl md:text-4xl">
                            <Link href="/bots"><a className="hover:underline">Bots</a></Link>
                            , <Link href="/servers"><a className="hover:underline">Servers</a></Link>
                            , <Link href="/templates"><a className="hover:underline">Templates</a></Link>
                        </p>
                    </h1>
                </div>
            </div>
        </>
    )
}