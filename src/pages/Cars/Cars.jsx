import { useEffect, useState } from "react";
import {Container} from "react-bootstrap";

import { Car } from "../../components/Car";
import instance from "../../instance";

export function Cars() {
    const [cars, setCars] = useState(undefined)
    
    useEffect(() => {
        instance.get("cars").then((response) => {
            setCars(response.data)
        }).catch((e)=>{
            alert("Algo deu errado")
        })
    }, [cars])

    return (
    <>
        <Container className="box">
            {
                typeof cars === 'object' &&
                cars.map((car) => {
                    return <Car data={car} />
                })
            }
        </Container>
       
    </>

)}