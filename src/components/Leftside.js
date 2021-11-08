
import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import './Leftside.css';

export const Leftside = (props) => {

  const {tableCell, setTableCell} = props

  function setFileChange(data) {
    let file = data.files[0];

    const reader = new FileReader();
    reader.onload = function( e ) {
        const uril = e.target.result;

        tableCell.backgroundImage = uril;
        setTableCell({...tableCell, tableCell})
    }

    if (file == null) {
      tableCell.backgroundImage = "";    
      setTableCell({...tableCell, tableCell})
    } else {
      reader.readAsDataURL(file);
    }
  }

  function setFormValue(changes) {
    for(let key in changes)
    {
      switch (key) {
        case 'backgroundImage':
          setFileChange(changes[key])
          return;
        case 'layout':
          tableCell.layout = changes[key]
          break;
        case 'mainLabelText':
          tableCell.mainLabel.text = changes[key]
          break;
        case 'mainLabelFontSize':
          tableCell.mainLabel.fontSize = changes[key]
          break;
        case 'mainLabelFontColor':
          tableCell.mainLabel.fontColor = changes[key]
          break;
        case 'secondaryLabelText':
          tableCell.secondaryLabel.text = changes[key]
          break;
        case 'secondaryLabelFontSize':
          tableCell.secondaryLabel.fontSize = changes[key]
          break;
        case 'secondaryLabelFontColor':
          tableCell.secondaryLabel.fontColor = changes[key]
          break;
      }

      setTableCell({...tableCell, tableCell})
      console.log(tableCell)
    }
  }

  return (
    <div className="setting">
      <Form id="setting-form">
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="4">
            Background Image
          </Form.Label>
          <Col sm="8">
            <Form.Control type="file" onChange={e => setFormValue({backgroundImage: e.target})} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Layout
          </Form.Label>
          <Col sm="8">
          <Form.Select onChange={e => setFormValue({layout: e.target.value})}>
            <option value="1">1 line</option>
            <option value="2">2 line</option>
          </Form.Select>
          </Col>
        </Form.Group>
        <br />

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Main Label
          </Form.Label>
          <Col sm="8">
            <Form.Control type="text" placeholder="main label" defaultValue={tableCell.mainLabel.text} onChange={(e) => setFormValue({mainLabelText: e.target.value})} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Font Size
          </Form.Label>
          <Col sm="8">
            <Form.Control type="number" placeholder="Password" defaultValue={tableCell.mainLabel.fontSize} onChange={(e) => setFormValue({mainLabelFontSize: e.target.value})} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Text Color
          </Form.Label>
          <Col sm="8">
            <Form.Control type="color" defaultValue={tableCell.mainLabel.fontColor} title="Choose color" onChange={(e) => setFormValue({mainLabelFontColor: e.target.value}) } />
          </Col>
        </Form.Group>
        <br />

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Secondary Label
          </Form.Label>
          <Col sm="8">
            <Form.Control type="text" placeholder="secondary label" defaultValue={tableCell.secondaryLabel.text} onChange={(e) => setFormValue({secondaryLabelText: e.target.value})} />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Font Size
          </Form.Label>
          <Col sm="8">
            <Form.Control type="number" placeholder="Password" defaultValue={tableCell.secondaryLabel.fontSize} onChange={(e) => setFormValue({secondaryLabelFontSize: e.target.value})} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="4">
            Text Color
          </Form.Label>
          <Col sm="8">
            <Form.Control type="color" defaultValue={tableCell.secondaryLabel.fontColor} title="Choose color" onChange={(e) => setFormValue({secondaryLabelFontColor: e.target.value}) } />
          </Col>
        </Form.Group>
      </Form>

    </div>
  );
}
