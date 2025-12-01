import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectDuration from "./CalendarList/SelectDuration";
import RasiList from "./CalendarList/Rasipalan";
import ViewRasiForm from "./CalendarList/RasiDetails";
import Banner from "./CalendarList/Banner";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectDuration />} />
        <Route path="/rasi-list" element={<RasiList />} />
        <Route path="/rasi-details" element={<ViewRasiForm/>} />
        <Route path="/banner" element={<Banner />} />
      </Routes>
    </BrowserRouter>
  );
}
