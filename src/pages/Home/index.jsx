import { Container, Links, Main } from './styles'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

export function Home(){
  return(
    <Container>
      <Header/>
      <Banner/>
      <Main>  
        <div className="Cards">
          <Section name="Pratos principais">
              <Links>        
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
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
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
              </Links>
          </Section>
        </div>
        <div className="Cards">
          <Section name="Bedidas">
              <Links>        
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
                <li><Card/></li>
              </Links>
          </Section>
        </div>
      

      </Main>
      <Footer/>
    </Container>
  )
}