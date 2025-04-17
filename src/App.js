// import logo from './logo.svg';

import './App.css';
import product from './product.js';
// import card from './card.js';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {name,sname} from './Pname.js';
import { selfieURL} from './Pimage.js';
import description from './Pdescription.js';
import price from './Pprice.js';
import { tshirtURL } from './Pimage.js';
function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>Bukhruf Store</h1>
      <div className='profile'>
        <img src={selfieURL()} alt="selfie"/>
        <h2>Hello {sname()}</h2>
      </div>
    </header>
    <div className="cards" style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
    <div className="product">
    <img src={product.imageURL} alt={product.name} style={{width:"200px", }}/>
    <h1>{product.name}</h1>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
    <Button variant="secondary">Add To Cart</Button>
    <Button variant="success">Buy Now</Button>
    </div>
    {card()}
    
    </div>
    <h2>Hello {sname()}</h2>
    {/* {selfieURL()} */}
    <img src={selfieURL()} alt="selfie" style={{width:"100px", borderRadius:"100px"}}/>
    </div>
  );
  function card() {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={tshirtURL()} style={{width:"200px"}} />
        <Card.Body>
          
          <Card.Title>{name()}</Card.Title>
              {price()}
          <Card.Text>
              {description()}
          </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    );
  }

}

// export default App;
// import './App.css';
// import product from './product.js';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { name } from './Pname.js';
// import { selfieURL } from './Pimage.js';
// import description from './Pdescription.js';
// import price from './Pprice.js';
// import { tshirtURL } from './Pimage.js';
// // import anonymous from './OIP.jpg';
// // import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

// function App() {
//   const firstName = prompt("type your first name");
//   return (
//     <div className="App" style={styles.app}>
//       <header style={styles.header}>
//         <h1 style={styles.title}><i class="fa-thin fa-shop"></i>Bukhruf Store</h1>
//         <div style={styles.profile}>
//           <img src={firstName?selfieURL():<FontAwesomeIcon icon={faCircleUser} />} alt="selfie" style={styles.avatar} />
//           <h2 style={styles.greeting}>Hello {firstName||"There!"}</h2>
//         </div>
//       </header>
      
//       <div className="cards" style={styles.cardsContainer}>
//         {/* Product Card 1 */}
//         <div className="product" style={styles.productCard}>
//           <img 
//             src={product.imageURL} 
//             alt={product.name} 
//             style={styles.productImage}
//           />
//           <div style={styles.productContent}>
//             <h1 style={styles.productName}>{product.name}</h1>
//             <p style={styles.productDescription}>{product.description}</p>
//             <p style={styles.productPrice}> {product.price}</p>
//             <div style={styles.buttonGroup}>
//               <Button variant="secondary" style={styles.addToCartBtn}>Add To Cart</Button>
//               <Button variant="success" style={styles.buyNowBtn}>Buy Now</Button>
//             </div>
//           </div>
//         </div>
        
//         {/* Product Card 2 */}
//         {card()}
//       </div>
//     </div>
//   );

//   function card() {
//     return (
//       <Card style={styles.bootstrapCard}>
//         <Card.Img 
//           variant="top" 
//           src={tshirtURL()} 
//           style={styles.cardImage} 
//         />
//         <Card.Body style={styles.cardBody}>
//           <Card.Title style={styles.cardTitle}>{name()}</Card.Title>
//           <div style={styles.cardPrice}>{price()}</div>
//           <Card.Text style={styles.cardText}>
//             {description()}
//           </Card.Text>
//           <Button variant="primary" style={styles.cardButton}>Add to cart</Button>
//         </Card.Body>
//       </Card>
//     );
//   }
// }

// // Styling object
// const styles = {
//   app: {
//     backgroundColor: '#f8f9fa',
//     minHeight: '100vh',
//     padding: '20px',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//   },
//   header: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '40px',
//     paddingBottom: '20px',
//     borderBottom: '1px solid #e0e0e0'
//   },
//   title: {
//     color: '#2c3e50',
//     fontSize: '2.5rem',
//     margin: 0
//   },
//   profile: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '15px'
//   },
//   avatar: {
//     width: '60px',
//     height: '60px',
//     borderRadius: '50%',
//     objectFit: 'cover',
//     border: '3px solid #3498db'
//   },
//   greeting: {
//     color: '#34495e',
//     fontSize: '1.5rem',
//     margin: 0
//   },
//   cardsContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//     gap: '30px'
//   },
//   productCard: {
//     backgroundColor: 'white',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     overflow: 'hidden',
//     width: '320px',
//     transition: 'transform 0.3s ease',
//     ':hover': {
//       transform: 'translateY(-5px)'
//     }
//   },
//   productImage: {
//     width: '100%',
//     height: '220px',
//     objectFit: 'cover'
//   },
//   productContent: {
//     padding: '20px'
//   },
//   productName: {
//     fontSize: '1.5rem',
//     margin: '0 0 10px 0',
//     color: '#2c3e50'
//   },
//   productDescription: {
//     color: '#7f8c8d',
//     fontSize: '1rem',
//     marginBottom: '15px',
//     lineHeight: '1.5'
//   },
//   productPrice: {
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     color: '#e74c3c',
//     marginBottom: '20px'
//   },
//   buttonGroup: {
//     display: 'flex',
//     gap: '10px'
//   },
//   addToCartBtn: {
//     flex: 1,
//     backgroundColor: '#95a5a6',
//     border: 'none',
//     padding: '10px',
//     fontWeight: '600'
//   },
//   buyNowBtn: {
//     flex: 1,
//     padding: '10px',
//     fontWeight: '600'
//   },
//   bootstrapCard: {
//     width: '320px',
//     borderRadius: '10px',
//     overflow: 'hidden',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     transition: 'transform 0.3s ease',
//     ':hover': {
//       transform: 'translateY(-5px)'
//     }
//   },
//   cardImage: {
//     width: '100%',
//     height: '220px',
//     objectFit: 'cover'
//   },
//   cardBody: {
//     padding: '20px'
//   },
//   cardTitle: {
//     fontSize: '1.5rem',
//     color: '#2c3e50',
//     marginBottom: '10px'
//   },
//   cardPrice: {
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     color: '#e74c3c',
//     marginBottom: '15px'
//   },
//   cardText: {
//     color: '#7f8c8d',
//     fontSize: '1rem',
//     marginBottom: '20px',
//     lineHeight: '1.5'
//   },
//   cardButton: {
//     width: '100%',
//     padding: '10px',
//     fontWeight: '600'
//   }
// };

// export default App;