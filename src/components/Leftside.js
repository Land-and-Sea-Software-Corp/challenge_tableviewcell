
import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import './Leftside.css';

export const Leftside = (props) => {

  const {imageUrl, setImageUrl, textColor, setTextColor, fontSize, setFontSize, layout, setLayout, firstLabel, setFirstLabel, setSecondLabel, secondLabel} = props

  function onFileChange(data) {
    let file = data.files[0]
    console.log(file)
    setImageUrl(file.name)
  }


  function changeSetting() {

    console.log(textColor, fontSize, imageUrl, layout)

  }


  return (
    <div className="setting">
      <Form id="setting-form">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="4">
            Background Image
          </Form.Label>
          <Col sm="8">
            <Form.Control type="file" onChange={e => onFileChange(e.target)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Layout
          </Form.Label>
          <Col sm="8">
          <Form.Select onChange={e => setLayout(e.target.value)}>
            <option value="1">1 line</option>
            <option value="2">2 line</option>
          </Form.Select>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Label String
          </Form.Label>
          <Col sm="8">
            <Form.Control type="text" placeholder="Label 1" defaultValue={firstLabel} onChange={(e) => setFirstLabel(e.target.value)} />
          </Col>
          <Col sm="4" />
          <Col sm="8" style={{marginTop:'10px'}}>
            <Form.Control type="text" placeholder="Label 2" defaultValue={secondLabel} onChange={(e) => setSecondLabel(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Font Size
          </Form.Label>
          <Col sm="8">
            <Form.Control type="number" placeholder="Password" defaultValue={fontSize} onChange={(e) => setFontSize(e.target.value)} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Text Color
          </Form.Label>
          <Col sm="8">
            <Form.Control type="color" defaultValue="#563d7c" title="Choose color" onChange={(e) => setTextColor(e.target.value) } />
          </Col>
        </Form.Group>
      </Form>

    </div>
  );
}
