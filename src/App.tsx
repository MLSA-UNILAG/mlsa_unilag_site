import "./App.css";
import { Footer } from "./components";

function App() {
  return (
    <div className="text-[5rem] font-segoe flex flex-col">
      <span className="font-extralight">Testing font weight</span>
      <span className="font-light">Testing font weight</span>
      <span className="font-normal">Testing font weight</span>
      <span className="font-medium">Testing font weight</span>
      <span className="font-semibold">Testing font weight</span>
      <span className="font-bold">Testing font weight</span>
      <Footer />
    </div>
  );
}

export default App;
