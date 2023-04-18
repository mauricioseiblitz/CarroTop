import NavBar from "components/NavBar";
import Catalog from "pages/CATALOG";
import Home from "pages/HOME";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch />
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/products">
                <Catalog />
            </Route>
        </BrowserRouter>
    );
}

export default Routes;