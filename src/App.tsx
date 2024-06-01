import './App.css'
import Community from './components/Community'
import Header from './components/Header'
import Hero from './components/Hero'
import Milestones from './components/Milestones'

function App() {

  return (
    <div className='relative mx-[4.5%] font-segoe'>
      <Header />
      <Hero />
      <Milestones />
      <Community />
    </div>
  )
}

export default App
