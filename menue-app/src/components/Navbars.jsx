import React from 'react'
import { useState } from 'react';
import { Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navbars({filterBySearch}) {
  const [searchValue,setSearchValue]=useState('')
  return (
    
    <Row>
       <Navbar bg="dark" variant='dark' expand="lg">
      <Container >
        <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchValue}
              onChange={(e)=>setSearchValue(e.target.value)}
            />
            <Button onClick={()=>filterBySearch(searchValue)} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default Navbars