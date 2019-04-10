import React, {Component} from 'react';
import {Button,Row,Col,Form,InputGroup, Breadcrumb,Container} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Detalle extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div className="Detalle">
        <Row>
          <Col md={{offset: 1 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Electronica, Audio y Video</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Ipad</Breadcrumb.Item>
              <Breadcrumb.Item active>32 GB</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col md={{offset: 1, span:7 }}>
            <img src="http://mla-s1-p.mlstatic.com/856137-MLA29512427852_022019-O.jpg"></img>
          </Col>
          <Col md="3">
              <p className="subtituloHeader">Nuevo - 234 Vendidos</p>
              <p className="tituloHeader">Titulo del Producto</p>
              <p className="precioHeader">$ 1.980</p>
              <p className="botonHeader"><Button variant="primary" size="lg" block>Comprar</Button></p>
              
          </Col>
        </Row>
        <Row>
          <Col md={{offset: 1, span:7 }}>
            <p className="tituloDesc">Titulo del Producto</p>
          </Col>
        </Row>  
        
      </div>
    )
  }
}
Detalle.propTypes = {
}

export default Detalle;