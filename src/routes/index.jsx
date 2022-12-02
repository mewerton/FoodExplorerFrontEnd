import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes(){
    return(
        <BrowserRouter>
            <AdminRoutes/>
        </BrowserRouter>
    )
}

