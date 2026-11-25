import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./componants/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Router>
  );
}

export default App;