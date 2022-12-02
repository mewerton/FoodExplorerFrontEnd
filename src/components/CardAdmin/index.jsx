import { Container, ButtonEdit, ButtonDelete } from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'
import { GrAdd, GrSubtract } from 'react-icons/gr'
import { RiAddBoxFill, RiFileReduceFill} from 'react-icons/ri'
import imgTest from '../../assets/imgTeste.png'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'
import { Button } from "../Button"
import { Link } from "react-router-dom"

export function CardAdmin(){
    return(
        <Container>
        <div className="fav"></div>
        <div className="item">
           <div className="image">
           <Link to="/product/:id"><img src={imgTest}/></Link>
                
           </div>
           
           <div className="name"><Link to="/product/:id">Nome do prato</Link>  </div>
           <div className="info">Informações do prato</div>
           <div className="price">
                <span>R$</span>
                <span>79,90</span>
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