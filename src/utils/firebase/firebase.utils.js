import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBJEZbY7OjamQJOOY76LvPky_t_yyJX9-8",
  authDomain: "practice-firebase-6f975.firebaseapp.com",
  projectId: "practice-firebase-6f975",
  storageBucket: "practice-firebase-6f975.appspot.com",
  messagingSenderId: "742928152416",
  appId: "1:742928152416:web:6c8cd9bf269fe56d2a1005"
};

const app = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid );

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()){
     const { displayName, email } = userAuth;
    try{
      setDoc(userDocRef, {
       displayName,
       email,
      })
    }catch(error){
      console.error('this userDocument is not empty');
    }

  }
}

export const userWithEmailAndPassword = async (email, password) => {
  if(!email || !password)
  return;

  const response = await createUserWithEmailAndPassword(auth, email, password)
  console.log(response)
}