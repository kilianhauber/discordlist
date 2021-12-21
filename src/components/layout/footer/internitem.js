import Link from "next/link"

export default function FooterInternItem(props) {
    return (
        <>
            <div className="p-1 text-sm">
                <Link href={props.link}>
                    <a className="hover:text-white">{props.name}</a>
                </Link>
            </div>
        </>
    )
}