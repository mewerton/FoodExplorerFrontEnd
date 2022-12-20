import { Container, Form } from "./styles";
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { Textarea } from '../../components/Textarea'
import { Input } from '../../components/Input'
import { FiUpload } from 'react-icons/fi'
import { NewItem } from '../../components/NewItem'
import { Link } from "react-router-dom";

import { useState } from "react";
import { api } from "../../services/api";

import { useNavigate } from "react-router-dom";

import ImgBack from '../../assets/back.svg'

export function New(){

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [value, setValue] = useState(0)

    const [category, setCategory] = useState("");
    const [avatarFile, setAvatarFile] = useState("");

    const [ingredients, setIngredients] = useState([])
    const [newIngredients, setNewIngredients] = useState("")

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1);
      }

    function handleAddIngredients(){
        setIngredients(prevState => [...prevState, newIngredients])
        setNewIngredients("")
       
    }

    function handleRemoveIngredients(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleNewProduct(){

        if(!title){
            return alert("Você precisa informar o nome do produto.")
        }
        if(!category){
            return alert("Você precisa informar uma categoria.")
        }
        if(!value){
            return alert("Você precisa informar o valor do produto.")
        }
        
        if(newIngredients){
            return alert("você deixou um ingrediente no campo sem adicionar, clique no + para adicionar ou deixe o campo vazio.")
        }

        await api.post("/products",{
            title,
            category,
            ingredients,
            description,
            value
        })
        alert("Produto adicionado com sucesso!")
        navigate("/")
    }


    return(
        <Container>
            <HeaderAdmin />
            <main>
                <div className="main">
                <div className="back">
                        <img src={ImgBack} alt="Voltar" />
                        <Link onClick={handleBack}>voltar</Link>
                </div>
                <Form>
                    <h1>Adicionar prato</h1>
                    <div className="nameImage">
                        <div className="image">
                            <span>Imagem do prato</span>
                            <button><FiUpload size={24}/>Selecione imagem</button>
                        </div>
                        <div className="name">
                            <span>Nome</span>
                            <div className="input">
                                <Input
                                    placeholder="Ex.: Salada Ceasar"
                                    onChange={ e => setTitle(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="category">
                            <span>Categoria</span>
                            <div className="input">
                                <Input
                                    placeholder="Ex.: Pratos"
                                    onChange={ e => setCategory(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ingredientsPrice">
                        <div className="ingredients">
                            <span>Ingredientes</span>
                            <div className="item">
                                {
                                    ingredients.map((ingredient, index) => (
                                    
                                    <NewItem 
                                        key={String(index)}
                                        value={ingredient}
                                        onClick={()=> handleRemoveIngredients(ingredient)}
                                    />
                                    ))
                                }
                                <NewItem 
                                    isNew 
                                    placeholder="Adicionar"
                                    onChange={e => setNewIngredients(e.target.value)}
                                    value={newIngredients}
                                    onClick={handleAddIngredients}
                                />
                            </div>
                            
                        </div>
                        <div className="price">
                            <span>Preço</span>
                            <div className="input">
                                <Input
                                    type="ranger" min="0"
                                    placeholder="R$ 00,00"
                                    onChange={ e => setValue(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <span>Descrição</span>
                        <div className="textarea">
                            <Textarea 
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                                onChange={ e => setDescription(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="add">
                        <button onClick={handleNewProduct}> <p>Adicionar prato</p>  </button>
                    </div>

                </Form>
                </div>
            </main>
            <Footer/>
            
        </Container>
    )
}