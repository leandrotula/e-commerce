import Navbar from "./components/navbar/Navbar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DefaultError from "./components/default/DefaultError.jsx";
import Vehicles from "./components/items/vehicles/Vehicles.jsx";
import CartDetail from "./components/items/vehicles/CardDetail.jsx";
import PurchaseDetail from "./components/purchase/PurchaseDetail.jsx";
import {ItemProvider} from "./context/ItemProvider";

function App() {
    return (

        <BrowserRouter>
            <ItemProvider>
            <Navbar/>
                <Routes>
                    <Route exact path="/autos" element={<Vehicles/>}/>
                    <Route exact path="/compra" element={<PurchaseDetail/>}/>
                    <Route path="/autos/:id" element={<CartDetail/>}/>
                    <Route path="/*" element={<DefaultError/>}></Route>
                </Routes>
            </ItemProvider>
        </BrowserRouter>
    );
}

export default App;

