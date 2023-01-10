import { Container, ButtonReq } from "./styles";
import Logo from '../../assets/logoblue.svg'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Search } from '../Search'
import { ButtonText } from "../ButtonText";
import { ButtonRequest } from "../ButtonRequest";
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from "../../hooks/auth";


export function Header({ setSearch }){
     
    const { signOut } = useAuth()
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/")
        signOut()
    }

    function handleFavorites(){
        alert("Este recurso estará disponível em breve!")
    }

    function handleMyRequests(){
        alert("Este recurso estará disponível em breve!")
    }

    return(
    <Container>
        
    <div className="logo">
        <Link to="/">
            <img src={Logo} alt="Logo"/>
            <span>food explorer</span>
        </Link>
    </div>
    <ButtonText onClick={handleFavorites} name="Meus favoritos"/>
    
    <Search 
        placeholder="Busque pelas opções de pratos" 
        icon={FiSearch}
        onChange={e => setSearch(e.target.value)}
        />
    
    <ButtonReq>
        <ButtonRequest onClick={handleMyRequests} name="Meu pedido (0)"/>
    </ButtonReq>
    
    <ButtonText icon={FiLogOut} onClick={handleSignOut}/>
   
    </Container>

    )
}