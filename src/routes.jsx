import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header';
import Home from './pages/Home/home';

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;