import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function UseEff(props) {
  return (
    <div className='imgDiv'>
    <Card style={{ width: '18rem' }}>
    <Card.Img style={{ width: '18rem' ,height:'15rem'} } variant="top" src={props.url} />
    <Card.Body>
      <Card.Title>{props.title}  </Card.Title>
      <Card.Text>
        {props.desc}
      </Card.Text>
      <Button variant="primary" >Go somewhere</Button>
    </Card.Body>
    
  </Card>
  </div>
  )
}
