import { Container, ButtonReq } from "./styles";
import Logo from '../../assets/logoblue.svg'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Search } from '../Search'
import { ButtonText } from "../ButtonText";
import { ButtonRequest } from "../ButtonRequest";
import { Link } from 'react-router-dom'

export function Header(){
    return(
    <Container>
        
    <div className="logo">
        <Link to="/">
            <img src={Logo} alt="Logo"/>
            <span>food explorer</span>
        </Link>
    </div>
    <ButtonText name="Meus favoritos"/>
    
    <Search placeholder="Busque pelas opções de pratos" icon={FiSearch}/>
    
    <ButtonReq>
        <ButtonRequest name="Meu pedido (0)"/>
    </ButtonReq>
    
    <ButtonText icon={FiLogOut} />
   
    </Container>

    )
}