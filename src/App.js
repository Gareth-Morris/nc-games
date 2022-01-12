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
        <Reviews />
        <ReviewCard />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories/:category_name" element={<Reviews />} />
          <Route path="/review/:review_id" element={<ReviewCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
