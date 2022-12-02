import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Container, ButtonEdit, ButtonDelete } from './styles'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button'
import { Link } from "react-router-dom";

import ImgBack from '../../assets/back.svg'
import alface from '../../assets/alface.png'
import tomate from '../../assets/tomate.png'
import rabanete from '../../assets/rabanete.png'
import paonaan from '../../assets/paonaan.png'
import prato from '../../assets/SaladaRavanello.png'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'


export function ProductAdmin(){
    return(
        <Container>
            <HeaderAdmin/>
            <div className="productPage">
                <div className="product">
                    <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <Link to="/">voltar</Link>
                    </div>
                    <div className="item">
                        <div className="image">
                            <img src={prato} alt="prato" height="390" />
                        </div>
                        <div className="info">
                            <div className="name">
                                <span>Salada Ravanello</span>
                            </div>
                            <div className="description">
                                <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</span>
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
                                    <span>25,97</span>
                                </div>
                                <div className="requestItem">
                                    
                                    <ButtonEdit>
                                        <Link to="/edit/:id"><Button name="Editar prato"/></Link>
                                        
                                    </ButtonEdit>
                                    <ButtonDelete>

                                    <Link><Button name="Excluir prato"/></Link>
                                    </ButtonDelete>
                                    
                                    
                                    
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