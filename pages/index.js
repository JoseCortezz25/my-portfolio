import Head from 'next/head'
import { Presentation } from '../components/Presentation/Presentation'
import { Projects } from '../components/Projects/Projects'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header';

export default function Home() {

  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="Main">
        <Header />
        <Presentation />
        <Projects />
      </main>

      <Footer/>
    </div>
  )
}
