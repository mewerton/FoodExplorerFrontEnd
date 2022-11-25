import { Container, Form } from './styles'
import Logo from '../../assets/logoblue.svg'
import { Input } from '../../components/Input'
import {FiMail} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'




export function SignIn(){
    return(
        <Container>
            <div className="logo">
                <img src={Logo} alt="Logo"/>
                <span>food explorer</span>
            </div>
            
            <Form>
                <h1>Faça login</h1>
                <span>Seu nome</span>
                <Input
                    placeholder="Exemplo: Maria da Silva"
                    type="text"
                    icon={BsPerson}
                />
                <span>E-mail</span>
                <Input
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    icon={FiMail}
                />
                <span>Senha</span>
                <Input
                    placeholder="No mínimo 6 caracteres"
                    type="text"
                    icon={RiLockPasswordLine}
                />
                
             
            </Form>
        </Container>
    )
}