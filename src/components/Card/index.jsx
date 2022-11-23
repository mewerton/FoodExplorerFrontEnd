import { Container, ButtonAdd } from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'
import { GrAdd, GrSubtract } from 'react-icons/gr'
import imgTest from '../../assets/imgTeste.png'
import { Button } from "../Button"

export function Card(){
    return(
        <Container>
        <div className="fav"><MdFavoriteBorder size={25}/></div>
        <div className="item">
           <div className="image">
                <img src={imgTest}/>
           </div>
           <div className="name">Nome do prato </div>
           <div className="info">Informações do prato</div>
           <div className="price">
                <span>R$</span>
                <span>79,90</span>
           </div>
           <div className="request"> 
                <GrSubtract/>
                <span>01</span>
                <GrAdd/>
                <ButtonAdd>
                    <Button name="Incluir"/>
                </ButtonAdd>   
           </div>

        </div>
        
            

        </Container>
        
    )
}