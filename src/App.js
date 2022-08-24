import { lazy, Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const Home = lazy(() => import("./components/Home"));
// const Launchpad = lazy(() => import("./components/Launchpad"));
// const NotFound = lazy(() => import("./components/NotFound"));

import Home from "./components/Home";
import Launchpad from "./components/Launchpad";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      {/* <Suspense fallback={<p>Loading</p>}></Suspense> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/launchpads/:id" element={<Launchpad />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
