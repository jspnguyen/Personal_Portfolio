import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Joseph&#39;s Potfolio</title>
        <meta name="description" content="Hey, I'm Joseph, a Computer Science student at UC Berkeley." />
        <link rel="icon" href="/fav.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    {/* <Contact /> */}
    </div>
  )
}
