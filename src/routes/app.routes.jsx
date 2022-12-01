import { Routes, Route  } from "react-router-dom"; 

import { Home } from '../pages/Home'
import { Product } from '../pages/Product'
import { New } from '../pages/New'
import { Edit } from '../pages/Edit'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/Edit/:id" element={<Edit />}/>
            <Route path="/product/:id" element={<Product />}/>

        </Routes>
    )

}