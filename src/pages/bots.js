import Head from "next/head";

import Layout from "../components/layout/layout";
import BotListCard from "../components/botlist/botlistcard";

import Logo from "../public/images/logo.png";

export default function Home() {
    return (
        <>
            <Head>
                <title>Discord List | Eine Discord Bot, Server, Template Liste von Kilian Hauber</title>
            </Head>

            <Layout>

                <div className="py-12 xl:px-40 lg:px-24 md:px-16 px-10">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        <BotListCard title="Alternative.me" text="7" link="https://alternative.me/discord/bots" />
                        <BotListCard title="BladeList" text="7" link="https://bladelist.gg" />
                        <BotListCard title="BList.xyz" text="6" link="https://blist.xyz" />
                        <BotListCard title="Botcord" text="6" link="https://botcord.org" />
                        <BotListCard title="BotList.me" text="5" link="https://botlist.me" />
                        <BotListCard title="DiscordLabs" text="6" link="https://bots.discordlabs.org" />
                        <BotListCard title="BotsOnDiscord" text="8" link="https://bots.ondiscord.xyz" />
                        <BotListCard title="Discord-Botlist.eu" text="8" link="https://discord-botlist.eu" />
                        <BotListCard title="Discord Boats" text="8" link="https://discord.boats" />
                        <BotListCard title="Discord Bots.gg" text="8" link="https://discord.bots.gg" />
                        <BotListCard title="Discord.me" text="6" link="https://discord.me/bots" />
                        <BotListCard title="Discord Rovelstars" text="5" link="https://discord.rovelstars.com" />
                        <BotListCard title="DiscordBotlist" text="7" link="https://discordbotlist.com" />
                        <BotListCard title="DiscordBots.co" text="5" link="https://discordbots.co" />
                        <BotListCard title="Discordlist Space" text="6" link="https://discordlist.space/bots" />
                        <BotListCard title="Discordlistology" text="4" link="https://discordlistology.com" />
                        <BotListCard title="Discords.com" text="9" link="https://discords.com/bots" />
                        <BotListCard title="Discord Services" text="6" link="https://discordservices.net" />
                        <BotListCard title="DiscordZ" text="6" link="https://discordz.xyz" />
                        <BotListCard title="Disforge" text="6" link="https://disforge.com/bots" />
                        <BotListCard title="Fateslist" text="5" link="https://fateslist.xyz/" />
                        <BotListCard title="Infinity Botlist" text="6" link="https://infinitybotlist.com/" />
                        <BotListCard title="Keksstudios Botlist" text="5" link="https://keksstudios.dev/discordrobots/" />
                        <BotListCard title="Listcord" text="8" link="https://listcord.net/bots" />
                        <BotListCard title="Paradisebots" text="6" link="https://paradisebots.net/" />
                        <BotListCard title="Radarbotdirectory" text="4" link="https://radarbotdirectory.xyz/" />
                        <BotListCard title="Stellarbotlist" text="5" link="https://stellarbotlist.com/" />
                        <BotListCard title="There Is A Bot For That" text="6" link="https://thereisabotforthat.com/" />
                        <BotListCard title="Top.gg" text="9" link="https://top.gg/de" />
                        <BotListCard title="Topcord" text="7" link="https://topcord.xyz/" />
                        <BotListCard title="VCodes.xyz" text="6" link="https://vcodes.xyz" />
                        <BotListCard title="Voidbots" text="6" link="https://voidbots.net/" />
                        <BotListCard title="Wonderbotlist" text="6" link="https://wonderbotlist.com/en/" />
                        <BotListCard title="MotionDevelopment" text="5" link="https://www.motiondevelopment.top/bot" />
                        <BotListCard title="Yabl.xyz" text="5" link="https://yabl.xyz/" />
                    </div>
                </div>

            </Layout>
        </>
    )
}
