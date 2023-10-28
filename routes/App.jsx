import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/pages/Home';
import Restaurants from '../components/containers/Restaurants';
function App() {
    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/restaurants/:id' element={<Restaurants />} />
        </Routes>
        </>
    );
};

export default App;