import { BrowserRouter, Route, Routes } from "react-router-dom";
import Working from "../pages/Working";
import Home from "../pages/Home";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/working" element={<Working />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;