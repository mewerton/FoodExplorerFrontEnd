import { Container, Links, Main } from './styles'
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
        <Links>
              {
              <Section name="Pratos principais">
                {products.filter(products => products.category == "Pratos").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
            </Links>
        </div>

          <div className="Cards">
          <Links>
              {
              <Section name="Sobremesas">
                {products.filter(products => products.category == "Sobremesas").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
            </Links>
          </div>

          <div className="Cards">
            <Links>
              {
              <Section name="Bebidas">
                {products.filter(products => products.category == "Bebidas").map((item, index) => (
                    <CardAdmin key={String(index)} data={item}/>
                ))
                }
              </Section>}
            </Links>
          </div>
      

      </Main>
      <Footer/>
    </Container>
  )
}


              {/* <Links>        
                {
                  products.map(product =>(
                   <li key={product.id}><CardAdmin data={product} /></li> 
                  ))
                }
              </Links> */}