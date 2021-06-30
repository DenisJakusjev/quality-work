import IRoute from "../interfaces/route";
import Contacts from "../pages/Contacts";
import Home from "../pages/Home";
import Offers from "../pages/Offers";

const routes: IRoute[] = [
    {
        path: "/",
        name: "Quality Work",
        component: Home,
        exact: true,
    },
    {
        path: "/offers",
        name: "Offers",
        component: Offers,
        exact: true,  
    },
    {
        path: "/contacts",
        name: "Contacts",
        component: Contacts,
        exact: true,  
    }

]

export default routes