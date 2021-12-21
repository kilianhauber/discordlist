export default function FooterExternItem(props) {
    return (
        <>
            <div className="p-1 text-sm">
                <a className="hover:text-white" target="_blank" href={props.link}>{props.name}</a>
            </div>
        </>
    )
}