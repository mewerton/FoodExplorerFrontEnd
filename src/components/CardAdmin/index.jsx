import { Container, ButtonEdit, ButtonDelete } from "./styles"
import { Button } from "../Button"
import { Link } from "react-router-dom"
import { api } from "../../services/api"

export function CardAdmin({ data, ...rest }){
    
    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`

    return(
        <Container>
        <div className="fav"></div>
        <div className="item">
           <div className="image">
          <Link to="/product/:id"><img src={avatarURL}/></Link>     
           </div>
           
           <div className="name"><Link to="/product/:id">{data.title}</Link>  </div> 
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