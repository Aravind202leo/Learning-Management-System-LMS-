import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const list = ({title,des,img}) => {
  return (
   <>
    <Card style={{ width: '240px' }}>
    <Card.Img variant="top" src={img}/>
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
       {des}
      </Card.Text>
      <Button variant="outline-dark">Start Learning </Button>
    </Card.Body>
  </Card>
  </>

  )
}

export default list