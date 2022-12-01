import { Routes, Route  } from "react-router-dom"; 

import { Home } from '../pages/Home'
import { Product } from '../pages/Product'
import { New } from '../pages/New'
import { Edition } from '../pages/Edition'


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/new" element={<New />}/>
            <Route path="/edition/:id" element={<Edition />}/>
            <Route path="/product/:id" element={<Product />}/>

        </Routes>
    )

}