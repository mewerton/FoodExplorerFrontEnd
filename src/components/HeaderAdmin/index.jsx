import { Container, ButtonReq } from "./styles";
import Logo from '../../assets/logoblue.svg'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Search } from '../Search'
import { ButtonText } from "../ButtonText";
import { ButtonRequest } from "../ButtonRequest";
import { Link } from 'react-router-dom'

export function HeaderAdmin(){
    return(
    <Container>
        
        <div className="page">

    <div className="logo">
        <Link to="/">
            <img src={Logo} alt="Logo"/>
            <span>food explorer</span>
        </Link>
    </div>

    <div className="conponents">

        <Search placeholder="Buscar pratos" icon={FiSearch}/>
   
        <ButtonText name="Administrador"/>
        
    
        <ButtonReq to="/new">
            <ButtonRequest name="Adicionar prato"/>
        </ButtonReq>
        
        <ButtonText icon={FiLogOut} />
    </div>
        </div>



   
       
    </Container>

    )
}