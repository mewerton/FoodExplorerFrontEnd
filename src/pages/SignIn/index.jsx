import { Container, Form } from './styles'
import { Input } from '../../components/Input'
import {FiMail} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'
import {RiLockPasswordLine} from 'react-icons/ri'
import { Button } from '../../components/Button'
import LogoGG from '../../assets/logoblueGG.svg'




export function SignIn(){
    return(
        <Container>
            <div className="pageSignIn">

            <div className="logo">
                <img src={LogoGG} alt="Logo" />
                <span>food explorer</span>
            </div>

            <Form>
                <div className="login">
                    <h1>Faça login</h1>
                    <div className="email">
                    <span>E-mail</span>
                    <Input
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        type="text"
                        icon={FiMail}
                    />
                    </div>
                    <div className="password">
                    <span>Senha</span>
                    <Input
                        placeholder="No mínimo 6 caracteres"
                        type="password"
                        icon={RiLockPasswordLine}
                    />
                    </div>
                    <Button name="Entrar"/>
                    <div className="create">
                        <a href="#">Criar uma conta</a>
                    </div> 
                </div>

            </Form>
            </div>
        </Container>
    )
}