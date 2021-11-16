import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import instance from "../../instance";

export function RegisterCar() {
    const [forms, setForms] = useState({})

    const [categories, setCategories] = useState(undefined)
    const [producers, setProducers] = useState(undefined)
    const [isSent, setSent] = useState(undefined)

    useEffect(() => {
        if (categories === undefined) {
            instance.get("categories").then((response) => {
                setCategories(response.data.result)
            })
        }

        if (producers === undefined) {
            instance.get("producer").then((response) => {
                setProducers(response.data.result)
            })
        }
    })

    function handleSubmit(e) {
        e.preventDefault()
        
        instance.post("cars", forms).then(() => {
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
                        <Form.Label>Nome do Carro</Form.Label>
                        <Form.Control onChange={(e) => {
                            setForms(prevState => ({
                                ...prevState,
                                name: e.target.value
                            }));
                        }} required type="text" placeholder="Entre com o nome do carro" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicYear">
                        <Form.Label>Ano</Form.Label>
                        <Form.Control onChange={(e) => {
                            setForms(prevState => ({
                                ...prevState,
                                year: e.target.value
                            }));
                        }} required type="number"/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicValue">
                        <Form.Label>Valor</Form.Label>
                        <Form.Control onChange={(e) => {
                            setForms(prevState => ({
                                ...prevState,
                                value: e.target.value
                            }));
                        }} required type="number"/>
                    </Form.Group>

                    {
                        typeof producers === 'object' &&
                        <Form.Group className="mb-3" controlId="formBasicProducer">
                            <Form.Label>
                                Fabricante
                            </Form.Label>
                            <Form.Select onChange={(e) => {
                            setForms(prevState => ({
                                ...prevState,
                                producer: e.target.value
                            }));
                            }} className="me-sm-2">
                                <option disabled selected>Choose...</option>
                                {producers.map((producer) => {
                                   return <option value={producer.producer_id}>{producer.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    }

                    {
                        typeof categories === 'object' &&
                        <Form.Group className="mb-3" controlId="formBasicCategory">
                            <Form.Label>
                                Categoria
                            </Form.Label>
                            <Form.Select onChange={(e) => {
                            setForms(prevState => ({
                                ...prevState,
                                category: e.target.value
                            }));
                            }} className="me-sm-2">
                                <option value="0" disabled selected>Choose...</option>
                                {categories.map((category) => {
                                    return <option value={category.category_id}>{category.name}</option>
                                })}
                            </Form.Select>
                        </Form.Group>
                    }

                <Button variant="danger" type="submit">Salvar</Button>
                {isSent === true && 
                    <Form.Text>Enviado com sucesso!</Form.Text>
                }
                </Form>
            </Container>

        </>

    )
}