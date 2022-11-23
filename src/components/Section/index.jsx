import { Container } from './styles'

export function Section( {name, children} ){
    return(
        <Container>
            <div className="section">
            <span>{name}</span>
            </div>
            {children}
        </Container>
    )
}