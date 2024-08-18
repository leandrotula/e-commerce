import {collection, getDocs} from "firebase/firestore";
import {db} from '../configuration/firebase.js';

const fetchCartItems = async () => {
    const data = await getDocs(collection(db, "cart_items"));
    return data.docs.map((doc) => {
        const docData = doc.data();
        return {
            id: doc.id,
            name: docData.name,
            image: docData.image,
            price: docData.price,
            quantity: docData.quantity
        }
    });
}

export default fetchCartItems;

