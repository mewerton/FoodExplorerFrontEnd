import { Container, Links, Main } from './styles'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { HeaderAdmin} from '../../components/HeaderAdmin'
import { CardAdmin } from '../../components/CardAdmin'
import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'

import { api } from '../../services/api'
import { useEffect, useState } from 'react'

export function HomeAdmin(){

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts(){
      const response = await api.get(
        `/products/?title&ingredients`
      )
      setProducts(response.data)
    }
    fetchProducts()
  },[])

  return(
    <Container>
      <HeaderAdmin/>
      <Banner/>
      <Main>  
        <div className="Cards">
          <Section name="Pratos principais">
              <Links>        
                {
                  products.map(product =>(
                   <li key={product.id}><CardAdmin data={product} /></li> 
                  ))
                }
              </Links>
          </Section>
        </div>

        <div className="Cards">
          <Section name="Sobremesas">
              <Links>        
                {
                  products.map(product =>(
                   <li key={product.id}><CardAdmin data={product} /></li> 
                  ))
                }
              </Links>
          </Section>
        </div>
        <div className="Cards">
          <Section name="Bedidas">
          <Links>        
                {
                  products.map(product =>(
                   <li key={product.id}><CardAdmin data={product} /></li> 
                  ))
                }
              </Links>
          </Section>
        </div>
      

      </Main>
      <Footer/>
    </Container>
  )
}