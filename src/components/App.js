import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Leftside } from './Leftside'; 
import { Rightside } from './Rightside';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const [tableCell, setTableCell] = useState({
    backgroundImage: "image1.png",
    layout: '1',
    mainLabel: {
      text: "Queens Art Museum",
      fontColor: "#FF0000",
      fontSize: 14
    },
    secondaryLabel: {
      text: "Brooklyn",
      fontColor: "#00FF00",
      fontSize: 12
    }
  })

  console.log(tableCell)
  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Leftside tableCell={tableCell} setTableCell={setTableCell} />
          </Col>
          <Col xs={12} md={6}>
            <Rightside tableCell={tableCell}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
