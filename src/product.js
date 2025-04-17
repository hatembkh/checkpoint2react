import {name} from './Pname.js';
import price from './Pprice.js';
import description from './Pdescription.js';
import {imageURL} from './Pimage.js';
const product = {
    name: name(),
    price: price(),
    description: description(),
    imageURL: imageURL(),
}
export default product;