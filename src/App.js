import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Reviews from "./Components/Reviews";
import ReviewCard from "./Components/ReviewCard";
import { useState } from "react";
import { UserContext } from "./Contexts/User";

function App() {
  const [user, setUser] = useState({ username: "jessjelly" });

  return (
    <UserContext.Provider value={{ user }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <NavBar setUser={setUser} />
          <Routes>
            <Route path="/" element={<Reviews />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:review_id" element={<ReviewCard />} />
            <Route path="/categories/:category_name" element={<Reviews />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
