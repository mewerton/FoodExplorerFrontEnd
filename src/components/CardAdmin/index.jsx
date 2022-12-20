import { Container, ButtonEdit, ButtonDelete } from "./styles"
import { Button } from "../Button"
import { Link } from "react-router-dom"

import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom';

export function CardAdmin({ data, ...rest }){
    
    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`

    const navigate = useNavigate();

    function handleProducts(id) {
        navigate(`/products/${id}`);
    }

    return(
        <Container>
        <div className="fav"></div>
        <div className="item">
           <div className="image">
           <button onClick={() => handleProducts(data.id)}><img src={avatarURL}/></button>     
           </div>
           
           <div className="name"><button onClick={() => handleProducts(data.id)}>{data.title}</button></div> 
           <div className="info">{data.description}</div>
           <div className="price">
                <span>R$</span>
                <span>{data.value}</span>
           </div>
           <div className="request"> 
                <ButtonEdit>
                    <Link to="/edit/:id"><Button name="Editar"/></Link>        
                </ButtonEdit>  
                <ButtonDelete>
                    <Link><Button name="Excluir"/></Link> 
                </ButtonDelete>
           </div>
        </div>
    
        </Container>
        
    )
}