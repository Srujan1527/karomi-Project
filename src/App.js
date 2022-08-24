import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewProject from "./Components/NewProject";
import AllProjects from "./Components/AllProjects";
import Reports from "./Components/Reports";
import Search from './Components/Search'
// import Dashboard from './Components/Dashboard'
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-projects" element={<NewProject />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </Router>
  );
}

export default App;
