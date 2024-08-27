import './App.css'
import Community from './components/Community'
import Header from './components/Header'
import Milestones from './components/Milestones'
import "./App.css";
import { JoinUs, FAQ, Footer } from "./components";
import Spotlight from './components/Spotlight';

function App() {
  return (
    <div className='relative font-segoe bg-purple-50'>
      <div className='px-[4vw] pt-[1rem] 3xl:px-[10vw]'>
        <Header />
        {/* <Milestones /> */}
        {/* <Community /> */}
        <Spotlight />
        <JoinUs />
        <FAQ />
      </div>
      <Footer />
    </div>
  )
}

export default App;
