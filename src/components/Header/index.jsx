import { Container, ButtonReq } from "./styles";
import Logo from '../../assets/logoblue.svg'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Search } from '../Search'
import { ButtonText } from "../ButtonText";
import { ButtonRequest } from "../ButtonRequest";
import { Link } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";


export function Header(){
     
    const { signOut } = useAuth()

    return(
    <Container>
        
    <div className="logo">
        <Link to="/">
            <img src={Logo} alt="Logo"/>
            <span>food explorer</span>
        </Link>
    </div>
    <ButtonText name="Meus favoritos"/>
    
    <Search 
        placeholder="Busque pelas opções de pratos" 
        icon={FiSearch}
        onChange={() => setSearch(e.target.value)}
        />
    
    <ButtonReq>
        <ButtonRequest name="Meu pedido (0)"/>
    </ButtonReq>
    
    <ButtonText icon={FiLogOut} onClick={signOut}/>
   
    </Container>

    )
}