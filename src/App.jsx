import Navbar from "./components/navbar/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultError from "./components/default/DefaultError.jsx";
import Electrodomestic from "./components/items/electrodomestics/Electrodomestic.jsx";
import Vehicles from "./components/items/vehicles/Vehicles.jsx";
import CartDetail from "./components/items/vehicles/CardDetail.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Navbar/>}/>
                    <Route exact path="/autos" element={<Vehicles/>}/>
                    <Route exact path="/contacto" element={<Contact />}/>
                    <Route path="/autos/:id" element={<CartDetail/>}/>
                    <Route exact path="/electrodomesticos" element={<Electrodomestic/>}/>
                    <Route path="/*" element={<DefaultError/>}></Route>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;

