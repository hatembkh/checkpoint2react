import sneakerimageURL from './sneaker.jpeg';
import tshirtimageURL from './T-shirt.png';
import selfiURL from './selfie.jpg'
function imageURL(){
    let imageURL = sneakerimageURL;
    return(imageURL);
}
function selfieURL(){
    let selfieURL = selfiURL;
    return(selfieURL);
}
function tshirtURL(){
    let tshirtURL = tshirtimageURL;
    return(tshirtURL);
}

export {selfieURL}
export {imageURL};
export {tshirtURL}