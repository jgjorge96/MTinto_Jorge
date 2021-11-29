import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Item } from '../Item/Item'

export const ItemList = ({items}) => {
    return (
        <Container className="my-5">
            <h2 style={{textAlign:"center"}}>Productos</h2>
            <hr/>
            <Row>
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </Row>
        </Container>
    )
}
