import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import User from "./User";
import Admin from "./Admin";

function App() {
    return <>{false ? <User /> : <Admin />}</>;
}

export default App;
