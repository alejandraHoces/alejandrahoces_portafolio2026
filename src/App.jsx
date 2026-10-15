import Hero from './components/Hero'
import Brands from './components/Brands'
import Services from './components/Services'
import DeferredSection, { lazySection } from './components/DeferredSection'
import useScrollReveal from './hooks/useScrollReveal'
import useHashNavigation from './hooks/useHashNavigation'

/* Secciones debajo del pliegue: un chunk por sección, pedido solo al acercarse al viewport */
const About = lazySection(() => import('./components/About'))
const Projects = lazySection(() => import('./components/Projects'))
const Experience = lazySection(() => import('./components/Experience'))
const Contact = lazySection(() => import('./components/Contact'))

export default function App() {
  useScrollReveal()
  useHashNavigation()

  return (
    <div className="ah">
      <Hero />
      <main>
        <Brands />
        <DeferredSection section={About} minHeight={720} />
        <Services />
        <DeferredSection section={Projects} minHeight={1600} />
        <DeferredSection section={Experience} minHeight={720} />
      </main>
      <DeferredSection section={Contact} minHeight={560} />
    </div>
  )
}
