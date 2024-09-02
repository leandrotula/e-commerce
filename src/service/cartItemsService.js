import {collection, getDocs, doc, setDoc, getDoc} from "firebase/firestore";
import {db} from '../configuration/firebase.js';

const getAllItems = async () => {
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

export const updateById = async (id, updatedData, merge = true) => {
    const docRef = doc(db, "purchase_orders", id);

    try {
        await setDoc(docRef, updatedData, {merge});
    } catch (error) {
        console.error("Error al actualizar el documento: ", error);
    }
}

export const getItemById = async (id) => {
    const docRef = doc(db, 'cart_items', id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const dataFound = docSnap.data();
        return {
            id: id,
            name: dataFound.name,
            image: dataFound.image,
            price: dataFound.price,
            quantity: dataFound.quantity
        }
    } else {
        throw new Error('No such document!');
    }
};

export default getAllItems;

