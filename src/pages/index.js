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

        <div className="py-8 lg:px-64 md:px-32 px-10">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-6">
            <div className="col-span-1 py-2">
            <BotListCard title="Bots" text="fdg" link="/"/>
            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}
