import { useState } from "react";
import {Container, Form, Button} from "react-bootstrap";
import instance from "../../instance";

export function RegisterCategory() {
    const [forms, setForms] = useState({})
    const [isSent, setSent] = useState(undefined)

    function handleSubmit(e) {
        e.preventDefault()
        
        instance.post("categories", forms).then(() => {
            setSent(true)
        }).catch((e) => {
            setSent({
                error: true,
                msg: "Não foi possível salvar no momento."
            })
        })
    }

    return (
    <>
        <Container className="box">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome da Categoria</Form.Label>
                    <Form.Control onChange={(e) => {
                        setForms(prevState => ({
                            ...prevState,
                            name: e.target.value
                         }));
                    }} required type="text" placeholder="Entre com a categoria" />
                </Form.Group>

                <Button variant="danger" type="submit">Salvar</Button>
                {isSent === true && 
                    <Form.Text>Enviado com sucesso!</Form.Text>
                }
                
            </Form>
        </Container>
    </>

)}