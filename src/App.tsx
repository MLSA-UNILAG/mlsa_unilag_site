import "./App.css";
import Community from "./components/Community";
import Hero from "./components/Hero";
import Milestones from "./components/Milestones";
import { UpcomingEvents, JoinUs, FAQ, Footer } from "./components";
import Spotlight from "./components/Spotlight";

function App() {
  return (
    <div className="relative font-segoe bg-purple-50">
      <div className="px-[4vw] lg:px-20 3xl:px-[10vw] max-w-[1440px] mx-auto">
        <Hero />
        <Milestones />
        <Community />
        <Spotlight />
        <UpcomingEvents />
        <JoinUs />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
