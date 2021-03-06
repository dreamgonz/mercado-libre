import React, {Component} from 'react';
import {Button,Row,Col,Form,InputGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../assets/Logo_ML.png';

class Buscador extends Component {
  
  render(){
    return (
      <Row>
        <Col lg="1" className="Buscador_header" >
        </Col>
        <Col lg="1" className="Buscador_header" >
          <img src={logo} alt="Logo"></img>
        </Col>
        <Col lg="9" className="Buscador_header">
        <Form>
          <InputGroup controlId="searchForm" className="mb-3">
            <Form.Control type="text" placeholder="Nunca dejes de buscar" className="Buscador_input" />
            <InputGroup.Append>
              <Button variant="light"><FontAwesomeIcon icon="search" /></Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
        </Col>
        <Col lg="1" className="Buscador_header">
        </Col>
      </Row> 
        
    )
  }
}

export default Buscador;