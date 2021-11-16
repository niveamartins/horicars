import { Button, Row, Container, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function Home() {
    const navigate = useNavigate()

    function navigateTo(link) {
        navigate(link)
    }

    return (
    <>
        <Container>
            <Row>
                <h1 className="title">HoriCars</h1>
            </Row>
            <Row>
                <h4 className="subtitle">O que você gostaria de fazer?</h4>
            </Row>
            <Stack gap={2}>
                <Button onClick={() => navigateTo('/carros')} variant="dark">Ver Carros</Button>
                <Button onClick={() => navigateTo('/registrar-carro')} variant="dark">Registrar Carro</Button>
                <Button onClick={() => navigateTo('/registrar-fabricante')} variant="dark">Registrar Fabricante</Button>
                <Button onClick={() => navigateTo('/registrar-categoria')} variant="dark">Registrar Categoria</Button>
            </Stack>
        </Container>
       
    </>

)}