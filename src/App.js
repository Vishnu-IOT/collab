import { BrowserRouter, Routes, Route } from "react-router-dom";
import SelectDuration from "./Pages/SelectDuration";
import RasiList from "./Pages/Rasipalan";
import ViewRasiForm from "./Pages/RasiDetails";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectDuration />} />
        <Route path="/rasi-list" element={<RasiList />} />
        <Route path="/rasi-details" element={<ViewRasiForm/>} />
      
      </Routes>
    </BrowserRouter>
  );
}
