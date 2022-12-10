import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

export function Routes(){

    const { user } = useAuth()


    return(
        <BrowserRouter>
            {user ? <AppRoutes/> : <AdminRoutes/>}
            {/* {response.data.user.admin = 1 ? <AdminRoutes/> : <AuthRoutes/>} / Preciso resolver esse acesso Admin e Auth, talves usar "presmissões"  */}

        </BrowserRouter>
    )
}

