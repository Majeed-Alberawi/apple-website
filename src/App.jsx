import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Hightlights from "./components/Hightlights"
import Model from "./components/Model"
import Features from "./components/Features"

import * as Sentry from '@sentry/react'
import HowItWorks from "./components/HowItWorks"

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Hightlights />
      <Model />
      <Features />
      <HowItWorks />
    </main>
  )
}

export default Sentry.withProfiler(App);
