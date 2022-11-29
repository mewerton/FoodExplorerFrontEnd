import { Header } from '../../components/Header'
import { Container } from './styles'
import ImgBack from '../../assets/back.svg'
import alface from '../../assets/alface.png'
import prato from '../../assets/imgTeste.png'
import sub from '../../assets/sub.svg'
import add from '../../assets/add.svg'
import { ButtonRequest } from '../../components/ButtonRequest'
import { Footer } from '../../components/Footer'

export function Product(){
    return(
        <Container>
            <Header/>
           
            <div className="pageProduct">
                <div className="back">
                    <img src={ImgBack} alt="Voltar" />
                    <span>voltar</span>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={prato} alt="prato" />
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
                                <img src={alface} alt="alface" />
                                <span>tomate</span>
                            </div>
                        </div>
                        <div className="value">
                            <span>R$</span>
                            <span>25,97</span>
                            
                            <button><img src={sub}/> </button>
                            <span>01</span>
                            <button><img src={add}/> </button>
                            <ButtonRequest name="incluir"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            
        </Container>
        
    )
}