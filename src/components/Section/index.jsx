import { useRef } from "react"
import { Container } from './styles'
import right from "../../assets/right.svg"

export function Section( {name, children} ){

    const carousel = useRef(null)

    const handleLeftClick = (e) =>{
        e.preventDefault()
        
        carousel.current.scrollLeft -= carousel.current.offsetWidth 
    }

    const handleRightClick = (e) =>{
        e.preventDefault()
        
        carousel.current.scrollLeft += carousel.current.offsetWidth 
    }

    return(
        <Container>
            
            <div className="section">
            <span>{name}</span>
            <div className="buttons">
{/*                 
                <button onClick={handleLeftClick}>    
                    <div className="left"><img src={right}/></div>
                </button>
                
                <button onClick={handleRightClick}>
                    <div className="right"><img src={right}/></div> 
                </button>  */}
                 <div className="left" onClick={handleLeftClick}><img src={right}/></div>
                 <div className="right" onClick={handleRightClick}><img src={right}/></div>

            </div>
            </div>
            <div className="carousel" ref={carousel}>
            {children}
            </div>
            
           
            
        </Container>
    )
}