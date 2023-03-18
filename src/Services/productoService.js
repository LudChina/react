import firebase from "../Config/firebase";

export async function getAll(buscar){
    //return fetch ("https://api.mercadolibre.com/sites/MLA/search?q=jackiesmith")
    //.then (res=> res.json())
    //return instance.get("sites/MLA/search?q=jackiesmith")
    const querySnapshot = await firebase
          .firestore()
          .collection("productos")
          .get();
    return querySnapshot.docs
}

export async function getById(id){
        //return fetch(`https://api.mercadolibre.com/items/${id}`)
        //.then ( (res) => res.json())
        return await firebase.firestore().doc(`productos/${id}`).get()
}

export function getDescription(id){
    return fetch(`https://api.mercadolibre.com/items/${id}/description`)
    .then ( (res) => res.json())
}

export async function create(data){
    return await firebase
        .firestore()
        .collection("productos")
        .add(data);
}
export async function update(id,data){
    return await firebase.firestore().doc(`productos/${id}`)
    .set(data)
}
export async function remove(id){
    return await firebase.firestore().doc(`productos/${id}`).delete()
}