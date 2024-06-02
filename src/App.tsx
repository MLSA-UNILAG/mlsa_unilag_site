import './App.css'
import Community from './components/Community'
import Header from './components/Header'
import Milestones from './components/Milestones'
import "./App.css";
import { Footer } from "./components";

function App() {
  return (
    <div className='relative px-[4vw] pt-[1rem] font-segoe bg-purple-50'>
      <Header />
      <Milestones />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
