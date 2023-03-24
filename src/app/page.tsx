import Image from 'next/image'
import { Inter, Red_Hat_Text } from 'next/font/google'
import styles from './page.module.css'
import Hero from './Components/Widgets/Hero'
import Coretracks from './Components/Widgets/Coretracks'
import SpecializedTracks from './Components/Widgets/SpecializedTracks'
import Outcome from './Components/Widgets/Outcome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <main>
    <Hero/>
    <Coretracks/>
    <SpecializedTracks/>
    <Outcome/>
   </main>
  )
}
