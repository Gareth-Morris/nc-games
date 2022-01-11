import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Reviews from "./Components/Reviews";
import ReviewCard from "./Components/ReviewCard";
import Comments from "./Components/Comments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <Reviews />
        <ReviewCard />
        <Comments />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
