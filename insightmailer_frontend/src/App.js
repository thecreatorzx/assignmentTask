import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import EmailCampaign from "./pages/EmailCampaign";
import ScheduleManager from "./pages/ScheduleManager";
import Analytics from "./pages/Analytics";
import CampaignView from "./pages/CampaignView";
import StatusTracker from "./pages/StatusTracker";
import Settings from "./pages/Settings";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Nav />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer /> */}
    </div>
  );
}

export default App;
