import './App.css'
import Community from './components/Community'
import Header from './components/Header'
import Milestones from './components/Milestones'
import "./App.css";
import { Footer } from "./components";

function App() {
  return (

    <div className='relative font-segoe bg-purple-50'>
      <div className='px-[4vw] pt-[1rem]'>
        <Header />
        <Milestones />
        <Community />
      </div>
      <Footer />
    </div>

  );
}

export default App;
