import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />

            <Route path="all-items" element={<h1>All items</h1>} />
            <Route path="stage-details" element={<h1>stage details</h1>} />
            <Route path="live" element={<h1>Live</h1>} />
            <Route path="result" element={<h1>Result</h1>} />
            <Route path="*" element={<h1>SORRY MAN !</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
