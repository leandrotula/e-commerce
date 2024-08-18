import {collection, getDocs} from "firebase/firestore";
import {db} from '../configuration/firebase.js';

const fetchCartItems = async () => {
    const data = await getDocs(collection(db, "cart_items"));
    return data.docs.map((doc) => {
        const docData = doc.data();
        return {
            id: doc.id, // this is the document ID
            name: docData.name, // accessing `name` field
            image: docData.image, // accessing `image` field
            price: docData.price, // accessing `price` field
            quantity: docData.quantity // accessing `quantity field`
        }
    });
}

export default fetchCartItems;

