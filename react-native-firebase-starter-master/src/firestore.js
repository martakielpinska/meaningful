import firebase from 'react-native-firebase'
class FirebaseService {
  constructor() {
    this.ref = firebase.firestore().collection('users')
  }
  
}
export const firebaseService = new FirebaseService()