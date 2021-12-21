import Link from "next/link"

import FooterInternItem from "./footer/internitem"
import FooterExternItem from "./footer/externitem"

export default function Footer() {
    return (
        <>
            <div className="bg-mainblue py-8 lg:px-64 md:px-32 px-10">
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
                    <div className="col-span-1 py-2">
                        <p className="text-discordblue font-delagothicone pb-1">Lists</p>
                        <FooterInternItem name="Bots" link="/bots" />
                        <FooterInternItem name="Servers" link="/servers" />
                        <FooterInternItem name="Templates" link="/templates" />
                    </div>
                    <div className="col-span-1 py-2">
                        <p className="text-discordblue font-delagothicone pb-1">Socialmedia</p>
                        <FooterExternItem name="Instagram" link="https://www.instagram.com/kilihbr" />
                        <FooterExternItem name="Twitter" link="https://twitter.com/kilihbr" />
                        <FooterExternItem name="YouTube" link="https://www.youtube.com/channel/UCE5QE0qo5wOlntpckT4kDnQ" />
                        <FooterExternItem name="Discord" link="https://dsc.gg/herukan" />
                    </div>
                    <div className="col-span-2 py-2">
                        <p className="font-delagothicone text-discordblue text-xl"><Link href="https://kilihbr.github.io"><a>Kilian Hauber</a></Link></p>
                        <p className="text-sm text-gray-400 pt-2">Copyright © 2021 <Link href="https://kilihbr.github.io"><a>Kilian Hauber</a></Link>. Alle Rechte vorbehalten.</p>
                        <p className="text-sm text-gray-400 pt-2">
                            <svg className="inline-block h-6 pr-2" id="emoji" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
                                <g id="color">
                                    <rect x="5" y="17" width="62" height="38" fill="#f1b31c" />
                                    <rect x="5" y="30" width="62" height="12" fill="#d22f27" />
                                    <rect x="5" y="17" width="62" height="13" />
                                </g>
                                <g id="line">
                                    <rect x="5" y="17" width="62" height="38" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </g>
                            </svg>
                            <span className="inline-block">Made in Germany</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}