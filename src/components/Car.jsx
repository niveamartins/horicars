
import {Card, ListGroup, ListGroupItem, Badge, Button} from 'react-bootstrap'

export function Car({data}) {
    return (
        <Card
            className="carCard"
            bg="Light"
            key={data.car_id}
            text="dark"
        >
            <Card.Header>
                {   data.isBought &&
                    <Badge pill bg="primary">
                        COMPRADO
                    </Badge>
                }

                {   !data.isBought &&
                    <Badge pill bg="dark">
                        PARA COMPRAR
                    </Badge>
                }

                {   data.categoryName.toUpperCase() === "COMUM" &&
                    <Badge pill bg="success">
                        COMUM
                    </Badge>
                }

                {   data.categoryName.toUpperCase() === "LENDÁRIO" &&
                    <Badge pill bg="danger">
                        LENDÁRIO
                    </Badge>
                }

                {   data.categoryName.toUpperCase() === "RARO" &&
                    <Badge pill bg="info">
                        RARO
                    </Badge>
                }
            </Card.Header>
            <Card.Body>
            <Card.Title>{data.name.toUpperCase()} </Card.Title>
            <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Fabricante:</strong> {data.producerName}</ListGroupItem>
                <ListGroupItem><strong>Ano:</strong> {Number(data.year)}</ListGroupItem>
                <ListGroupItem><strong>Valor:</strong> CR {Number(data.value)}</ListGroupItem>
            </ListGroup>
            </Card.Body>
            { !data.isBought && 
                <Card.Footer>
                    <Button variant="secondary">Marcar como comprado</Button>    
                </Card.Footer>}
        </Card>
     
    )
}