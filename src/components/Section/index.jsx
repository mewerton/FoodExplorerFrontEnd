import { useRef } from "react"
import { Container } from './styles'
import left from "../../assets/left.svg"
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
                <button onClick={handleLeftClick}>
                    <img src={left}/>
                    <div className="left"></div>
                </button>
                
                <button onClick={handleRightClick}>
                <div className="right"></div> 
                    <img src={right}/>
                </button> 
            </div>
            </div>
            <div className="carousel" ref={carousel}>
            {children}
            </div>
            
           
            
        </Container>
    )
}