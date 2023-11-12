import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./page/Dashboard";
import Contact from "./page/Contact";
import Payroll from "./page/Payroll";
import Account from "./page/Account";
import Report from "./page/Report";
import Advisor from "./page/Advisor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" index element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/advisor" element={<Advisor />} />
          <Route path="/report" element={<Report />} />
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>

      <Sidebar />
    </BrowserRouter>
  );
}

export default App;
