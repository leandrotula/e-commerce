import {collection, getDocs, addDoc, doc, setDoc} from "firebase/firestore";
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

export const persistPurchaseOrder =  (order) => {
    const purchaseCollection = collection(db, "purchase_order");
    return addDoc(purchaseCollection, {
        itemId: order.itemId,
        totalPrice: order.totalPrice,
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

export default getAllItems;

