import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Leftside } from './Leftside'; 
import { Rightside } from './Rightside';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [imageUrl, setImageUrl] = useState("")
  const [textColor, setTextColor] = useState("#563d7c")
  const [fontSize, setFontSize] = useState(14)
  const [layout, setLayout] = useState(1)
  const [firstLabel, setFirstLabel] = useState("Queens Art Museum")
  const [secondLabel, setSecondLabel] = useState("Brooklyn")

  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <Leftside imageUrl={imageUrl} setImageUrl={setImageUrl} textColor={textColor} setTextColor={setTextColor}  fontSize={fontSize} setFontSize={setFontSize}
              layout={layout} setLayout={setLayout} firstLabel={firstLabel} setFirstLabel={setFirstLabel} setSecondLabel={setSecondLabel} secondLabel={secondLabel} />
          </Col>
          <Col xs={12} md={6}>
            <Rightside imageUrl={imageUrl} textColor={textColor} fontSize={fontSize} layout={layout} firstLabel={firstLabel} secondLabel={secondLabel}  />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
