import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import User from './User';
import Admin from './Admin';

function App() {
	return <>{true ? <User /> : <Admin />}</>;
}

export default App;
