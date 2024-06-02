import './App.css'
import Community from './components/Community'
import Header from './components/Header'
import Milestones from './components/Milestones'

function App() {

  return (
    <div className='relative px-[4vw] pt-[1rem] font-segoe bg-purple-50'>
      <Header />
      <Milestones />
      <Community />
    </div>
  )
}

export default App
