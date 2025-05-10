import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {name} from './Name.js';
// import {imageURL} from './Pimage.js';
import description from './Description.js';
import price from './Price.js';
import { tshirtURL } from './Image.js';

function card() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src = {tshirtURL()} style={{width:"200px"}} />
      <Card.Body>
        
        <Card.Title>{name()}</Card.Title>
            <p> {price()}</p>
        <Card.Text>
            {description()}
        </Card.Text>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}
// function cards() {
//     // let index=4
//     // <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>

//     let cards =  card().map((el, index) => (
//         <div key={index} style={{margin:"10px"}}>
//           {card()}
//         </div>
//       ))
    
//   return (
//     <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
//         {cards}
//     </div>
//   );
// }

export default card;