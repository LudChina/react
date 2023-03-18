import{Link} from "react-router-dom";
import {Card,Button,Col} from 'react-bootstrap';
import { useAuthContext } from "../Context/AuthContext";

const styles = {
    card: {
        marginBottom: '10px',
    },
    buttons: {
        marginRight: '10px',
        background: 'pink',
        border: 'pink',
        fontWeight: 'bold',
    },
}

function Producto({id, domain_id, title, description, thumbnail,price, compra}){
    const { login } = useAuthContext();
    return(
        <Col xs={12} sm={6} lg={4} xxl={3}>
        <Card style={styles.card}>
          <Card.Img variant="top" src={thumbnail} />
          <Card.Body>
          <Card.Title>{title}</Card.Title>
        <Card.Text>
            {description}
        </Card.Text>
        <Card.Text>
            ${price}
        </Card.Text>
        <Card.Text>
            {domain_id}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/producto/${id}`} style={styles.buttons}>Ver detalle</Button>
        <Button variant="primary" as={Link} to={`/producto/editar/${id}`} style={styles.buttons}>EDITAR</Button>
        <Button variant="primary" onClick={compra} style={styles.buttons}>COMPRAR</Button>
        </Card.Body>
        </Card>
        </Col>
    );
}

export default Producto;