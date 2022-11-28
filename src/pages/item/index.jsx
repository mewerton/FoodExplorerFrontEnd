import { Container } from './styles'
import {Header} from '../../components/Header'

export function Item(){
    return(
        <Container>
            <Header/>
            <div className="item">
                <div className="image"></div>
                <div className="info">
                        <div className="name"></div>
                        <div className="description"></div>
                        <div className="ingredients">
                            <div className="composition"></div>
                        </div>
                        
                    


                </div>
            </div>
            

        </Container>

    )
}