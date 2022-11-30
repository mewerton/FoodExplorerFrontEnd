import { Container } from "./styles";
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'

export function New(){
    return(
        <Container>
            <Header/>
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
            <Input placeholder="Ex.: Salada Ceasar"/>
            
            
        </Container>
    )
}