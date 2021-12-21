import Link from "next/link"

import FooterInternItem from "./footer/internitem"
import FooterExternItem from "./footer/externitem"

export default function Footer() {
    return (
        <>
            <div className="bg-mainblue py-8 lg:px-64 md:px-32 px-10">
                <div className="grid lg:grid-cols-4 grid-cols-2">
                    <div className="col-span-1 py-2">
                        <p className="text-herugreen pb-1">Produkt</p>
                        <FooterExternItem name="Invite" link="https://dsc.gg/herukanbot" />
                        <FooterInternItem name="Preise" link="/pricing" />
                        <FooterExternItem name="Status" link="https://herukan.instatus.com" />
                    </div>
                    <div className="col-span-1 py-2">
                        <p className="text-herugreen pb-1">Informationen</p>
                        <FooterInternItem name="Über uns" link="/about" />
                        <FooterExternItem name="Support" link="https://dsc.gg/herukan" />
                        <FooterInternItem name="Developer API" link="/developers" />
                        <FooterInternItem name="Commands" link="/commands" />
                    </div>
                    <div className="col-span-1 py-2">
                        <p className="text-herugreen pb-1">Socialmedia</p>
                        <FooterExternItem name="Twitter" link="https://twitter.com/herukan" />
                        <FooterExternItem name="Instagram" link="https://www.instagram.com/herukanbot" />
                        <FooterExternItem name="YouTube" link="https://www.instagram.com/herukanbot" />
                        <FooterExternItem name="Discord" link="https://dsc.gg/herukan" />
                        <FooterInternItem name="Botlists" link="/botlists" />
                    </div>
                    <div className="col-span-1 py-2">
                        <p className="text-herugreen pb-1">Rechtliches</p>
                        <FooterExternItem name="Impressum" link="https://zyonicsoftware.com/impressum" />
                        <FooterExternItem name="Datenschutz" link="https://zyonicsoftware.com/datenschutz" />
                        <FooterExternItem name="Kontakt" link="https://zyonicsoftware.com/kontakt" />
                    </div>
                </div>
                <div className="pt-10">
                    <p className="font-delagothicone text-herugreen text-xl"><Link href="/"><a>Herukan.xyz</a></Link></p>
                    <p className="text-xs text-gray-400 pt-2">Copyright © 2021 <Link href="/"><a>Herukan</a></Link>, <a target="_blank" href="https://zyonicsoftware.com">Zyonic Software</a>. Alle Rechte vorbehalten.</p>
                    <p className="text-xs text-gray-400 pt-2">
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
        </>
    )
}