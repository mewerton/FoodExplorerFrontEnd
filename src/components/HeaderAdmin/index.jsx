import { Container, ButtonReq } from "./styles";
import Logo from '../../assets/logoblue.svg'
import { FiSearch, FiLogOut } from 'react-icons/fi'
import { Search } from '../Search'
import { ButtonText } from "../ButtonText";
import { ButtonRequest } from "../ButtonRequest";

export function HeaderAdmin(){
    return(
    <Container>
    <div className="page">

    <div className="logo">
        <img src={Logo} alt="Logo"/>
        <span>food explorer</span>
    </div>

    <div className="header">
        
    <ButtonText name="Administrador"/>
     
    <ButtonReq>
        <ButtonRequest name="Adicionar pedido"/>
    </ButtonReq>
    
    <ButtonText icon={FiLogOut} />
    </div>
    </div>
   
    </Container>

    )
}