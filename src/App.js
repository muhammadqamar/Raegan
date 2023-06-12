import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./componnets/header/header";
import Footer from "./componnets/footer/footer";
import Home from "./pages/index";
import ServiceCards from "./utils/services/serviceCards";
import WorkFlow from "./utils/workFlow/workFlow";
import TeamCard from "./utils/team/teamCard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route path="/serviceCards" element={<ServiceCards />} />
          <Route path="/workFlow" element={<WorkFlow />} />
          <Route path="/teamCard" element={<TeamCard />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
