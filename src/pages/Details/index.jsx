import { Container, Links } from './styles'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Banner } from '../../components/Banner'

export function Details(){
  return(
    <Container>
      <Header/>
      <Banner/>
      
      {/* <div className="Cards">
        <Section name="Pratos">
            <Links>        
              <li><Card/></li>
              <li><Card/></li>
              <li><Card/></li>
            </Links>
        </Section>
      </div>
      <div className="Cards">
        <Section name="Sobremesas">
            <Links>        
              <li><Card/></li>
              <li><Card/></li>
              <li><Card/></li>
            </Links>
        </Section>
      </div> */}

      {/* <Button name="Criar conta"/> */}
      
    </Container>
  )
}