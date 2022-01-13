import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Reviews from "./Components/Reviews";
import ReviewCard from "./Components/ReviewCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/reviews/:review_id" element={<ReviewCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
