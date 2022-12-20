import { useState } from "react"
import { Container, ButtonAdd } from "./styles"
import { MdFavoriteBorder } from 'react-icons/md'
import imgTest from '../../assets/imgTeste.png'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'
import { Button } from "../Button"
import { Link } from "react-router-dom"

import { api } from "../../services/api"
import { useNavigate } from 'react-router-dom';


export function Card({ data, ...rest }){

    const avatarURL = `${api.defaults.baseURL}/files/${data.avatar}`
    
    const [total, setTotal] = useState(1)

    const navigate = useNavigate();

    function handleProducts(id) {
        navigate(`/products/${id}`);
    }
    
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
           <button onClick={() => handleProducts(data.id)}><img src={avatarURL}/></button>
           </div>
           <div className="name"><button onClick={() => handleProducts(data.id)}>{data.title}</button></div>
           <div className="info">{data.description}</div>
           <div className="price">
                <span>R$</span>
                <span>{data.value}</span>
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