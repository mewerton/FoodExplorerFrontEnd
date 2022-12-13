import { useState } from "react"
import { Container, ButtonAdd } from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'
import imgTest from '../../assets/imgTeste.png'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'
import { Button } from "../Button"
import { Link } from "react-router-dom"

import { useNavigate } from 'react-router-dom';
import { api } from "../../services/api"
import { useAuth } from "../../hooks/auth"

export function Card({ data }){

    const { user } = useAuth()
    const navigate = useNavigate()

    //erro está acontecendo ao tentar buscar informações do banco
    //const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`
    

    const [total, setTotal] = useState(1)
    
    function addItem(){
        setTotal(prevState => prevState + 1)
    }
    function subItem(){

        if(total >= 2){
            setTotal(prevState => prevState - 1)
        }
    }


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
           
                <button onClick={subItem}><img src={sub}/> </button>
                <span>{total}</span>
                <button onClick={addItem}><img src={add}/> </button>
                
                <ButtonAdd>
                    <Button name="Incluir"/>
                </ButtonAdd>   
           </div>

        </div>
        
            

        </Container>
        
    )
}