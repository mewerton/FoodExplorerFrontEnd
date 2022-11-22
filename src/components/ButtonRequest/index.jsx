import { Container } from './styles'
import Request from '../../assets/request.svg'

export function ButtonRequest({name, loading = false, icon: Icon, ...rest}){
    return(
        <Container 
        type="button"
        disabled={loading}
        {...rest}>
            <img src={Request} alt="Request" />
            { loading ? 'Carregando...' : name}
            {Icon && <Icon size={20} />}
        </Container>
    )
}

