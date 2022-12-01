import { Container, Links, Main } from './styles'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { HeaderAdmin} from '../../components/HeaderAdmin'
import { CardAdmin } from '../../components/CardAdmin'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

export function HomeAdmin(){
  return(
    <Container>
      <HeaderAdmin/>
      <Banner/>
      <Main>  
        <div className="Cards">
          <Section name="Pratos principais">
              <Links>        
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                
              </Links>
          </Section>
        </div>
        <div className="Cards">
          <Section name="Sobremesas">
              <Links>        
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
              </Links>
          </Section>
        </div>
        <div className="Cards">
          <Section name="Bedidas">
              <Links>        
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
                <li><CardAdmin/></li>
              </Links>
          </Section>
        </div>
      

      </Main>
      <Footer/>
    </Container>
  )
}