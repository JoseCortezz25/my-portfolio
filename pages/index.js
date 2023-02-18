import { Presentation } from '../components/Presentation/Presentation'
import { Projects } from '../components/Projects/Projects'
import { Footer } from '../components/Footer/Footer'
import { Skill } from '../components/Skill/Skill';
import { Experience } from '../components/Experience/Experience';

export default function Home() {

  return (
    <div >
      <main className="Main">
        <Presentation />
        <Skill />
        <Projects />
        <Experience />
      </main>

    </div>
  )
}
