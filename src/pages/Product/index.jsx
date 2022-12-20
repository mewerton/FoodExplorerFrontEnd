
import { Header } from '../../components/Header'
import { Container, ButtonReq } from './styles'
import { Footer } from '../../components/Footer'
import { ButtonRequest } from '../../components/ButtonRequest'
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { api } from '../../services/api';


import ImgBack from '../../assets/back.svg'
import alface from '../../assets/alface.png'
import tomate from '../../assets/tomate.png'
import rabanete from '../../assets/rabanete.png'
import paonaan from '../../assets/paonaan.png'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'


export function Product(){

    const [data, setData] = useState("")
    const params = useParams()
    
    const avatarURL =  data && `${api.defaults.baseURL}/files/${data.avatar}`

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1);
      }

      useEffect(() => {
        async function fetchProduct() {
          const response = await api.get(`/products/${params.id}`);
          setData(response.data);
        }
    
        fetchProduct();
      }, []);


    //Função de adicionar e remover item precisa ser puxada do card cado lá já tenha preenchido.
    
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
            <Header/>
            <div className="productPage">
                <div className="product">
                    <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <Link onClick={handleBack}>voltar</Link>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={avatarURL} alt="prato" height="390" />
                        </div>
                        <div className="info">
                            <div className="name">
                                <span>{data.title}</span>
                            </div>
                            <div className="description">
                                <span>{data.description}</span>
                            </div>
                            <div className="ingredients">
                                <div className="ingredient">
                                    <img src={alface} height="59" width="59" alt="alface" />
                                    <span>alface</span>
                                </div>
                                <div className="ingredient">
                                    <img src={tomate} height="59" width="59" alt="tomate" />
                                    <span>tomate</span>
                                </div>
                                <div className="ingredient">
                                    <img src={rabanete} height="59" width="59" alt="rabanete" />
                                    <span>rabanete</span>
                                </div>
                                <div className="ingredient">
                                    <img src={paonaan} height="59" width="59" alt="pão naan" />
                                    <span>pão naan</span>
                                </div>
                                
                            </div>
                            <div className="request">
                                <div className="value">
                                    <span>R$</span>
                                    <span>{data.value}</span>
                                </div>
                                <div className="requestItem">
                                    <button onClick={subItem}><img src={sub}/> </button>
                                    <label>{total}</label>
                                    <button onClick={addItem}><img src={add}/> </button>
                                    <ButtonReq>
                                        <ButtonRequest name="incluir"/>
                                    </ButtonReq>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            
        </Container>
        
    )
}