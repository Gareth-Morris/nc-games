import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Reviews from "./Components/Reviews";
import ReviewCard from "./Components/ReviewCard";
import LoginArea from "./Components/LoginArea";
import Error from "./Components/Error";
import { useState } from "react";
import { UserContext } from "./Contexts/User";

function App() {
  const [user, setUser] = useState("jessjelly");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <LoginArea />
          <Header />
          <Routes>
            <Route path="/" element={<Reviews />} />
            <Route path="/categories" element={<Reviews />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/reviews/:review_id" element={<ReviewCard />} />
            <Route path="/categories/:category_name" element={<Reviews />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
