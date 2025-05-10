import {name} from './Name.js';
import price from './Price.js';
import description from './Description.js';
import {imageURL} from './Image.js';
const product = {
    name: name(),
    price: price(),
    description: description(),
    imageURL: imageURL(),
}
export default product;