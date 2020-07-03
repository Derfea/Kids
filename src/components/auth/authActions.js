import { auth } from "../../config/fbConfig";

export const signIn = (credentials) => {
    return(dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(
    credentials.email,
    credentials.password
    )
    .then(() => {
    dispatch({type: 'LOGIN_SUCCESS'})
    })
    .catch((err) => {
    dispatch({ type: 'LOGIN_ERROR', err});
    });
    }
    }

    export function signInWithGoogle() {
        const provider = new auth.GoogleAuthProvider();
        return auth().signInWithPopup(provider);
      }
      
      export function signInWithGitHub() {
        const provider = new auth.GithubAuthProvider();
        return auth().signInWithPopup(provider);
      }

export const signUpAsAdult = (newUser) => {
    
    return (dispatch, getState, {getFirebase}) => {
    const fb = getFirebase();
    const fbStore = getFirebase().firestore();
    fb.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
    ).then((resp) => {
    return fbStore.collection('users').doc(resp.user.uid).set({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    contact: newUser.contact,
    address: newUser.address,
    city: newUser.city,
    postcode: newUser.postcode
    })
    }).then(() => {
    dispatch({ type: 'SIGNUP_SUCCESS' })
    }).then(() => {
        return this.props.firebase.doSendEmailVerification();
      }).catch((err) => {
    dispatch({ type: 'SIGNUP_ERROR', err })
    })
    }
  }

  export const signUpAsKid = (newUser) => {
    
    return (dispatch, getState, {getFirebase}) => {
    const fb = getFirebase();
    const fbStore = getFirebase().firestore();
    fb.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
    ).then((resp) => {
    return fbStore.collection('users').doc(resp.user.uid).set({
    firstName: newUser.firstName,
    lastName: newUser.lastName,
    contact: newUser.contact,
    address: newUser.address,
    city: newUser.city,
    postcode: newUser.postcode
    })
    }).then(() => {
    dispatch({ type: 'SIGNUP_SUCCESS' })
    }).then(() => {
        return this.props.firebase.doSendEmailVerification();
      }).catch((err) => {
    dispatch({ type: 'SIGNUP_ERROR', err })
    })
    }
  }