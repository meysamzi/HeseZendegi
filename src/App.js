import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./Components/SideBar/SideBar";
import ProfileInfoPage from "./Components/ProfileInfo/Pages/ProfileInfoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <SideBar />
        <Routes>
          <Route path="/" element={<ProfileInfoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
