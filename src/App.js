import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBarMain from "./Components/SideBar/SideBarMain";
import ProfileInfoPage from "./Components/ProfileInfo/Pages/ProfileInfoPage";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <SideBarMain />
        <Routes>
          <Route path="/" element={<ProfileInfoPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
