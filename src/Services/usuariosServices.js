import firebase from "../Config/firebase";

export async function getByUserId(userId){
    return await firebase.firestore().collection(`usuarios`)
    .where("userId","==",userId)
    .get()
}
