import "./App.css";
import { JoinUs, FAQ, Footer } from "./components";

function App() {
  return (
    <div className="font-segoe flex flex-col bg-purple-50">
      <JoinUs />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
