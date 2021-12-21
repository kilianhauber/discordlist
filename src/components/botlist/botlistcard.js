import Link from "next/link"
import Image from "next/image"

export default function BotListCard(props) {

    return (
        <>
            <div className="col-span-1 py-2">
                <div className="bg-dclight hover:shadow-xl hover:border-discordblue hover:border rounded-2xl py-2 px-4 text-center" data-aos="zoom-in-up" data-aos-delay="150">
                    <h3 className="font-delagothicone text-xl py-2">{props.title}</h3>
                    <p className="text-gray-400 py-2 font-semibold">{props.text}/10</p>
                    <button className="bg-discordblue rounded-xl py-2 px-6 my-2 hover:shadow-discordblue hover:shadow-xs">
                        <a target="_blank" rel="noreferrer" href={props.link}>
                            <p className="inline-flex">Website</p>
                            <svg className="inline-flex fill-gray-200 h-5 pb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
                            </svg>
                        </a>
                    </button>
                </div>
            </div>
        </>
    )
}