import { Container, ButtonAdd } from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'
import imgTest from '../../assets/imgTeste.png'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'
import { Button } from "../Button"
import { Link } from "react-router-dom"

export function Card(){
    return(
        <Container>
        <div className="fav"><MdFavoriteBorder size={25}/></div>
        <div className="item">
           <div className="image">
           <Link to="/product/:id"><img src={imgTest}/></Link>
           </div>
           <div className="name"><Link to="/product/:id">Nome do prato</Link></div>
           <div className="info">Informações do prato</div>
           <div className="price">
                <span>R$</span>
                <span>79,90</span>
           </div>
           <div className="request"> 
           
                <button><img src={sub}/> </button>
                <span>01</span>
                <button><img src={add}/> </button>
                
                <ButtonAdd>
                    <Button name="Incluir"/>
                </ButtonAdd>   
           </div>

        </div>
        
            

        </Container>
        
    )
}