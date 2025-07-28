import Index from "../pages/index";

import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Index/>
    }
])
export default  router;