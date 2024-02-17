import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyDFGUurtDG_ins2ZqOkBiFo9wUoRfjF0u4",
  authDomain: "superchat-6176c.firebaseapp.com",
  projectId: "superchat-6176c",
  storageBucket: "superchat-6176c.appspot.com",
  messagingSenderId: "1068397673315",
  appId: "1:1068397673315:web:bf8cddf44bb71445fab156",
  measurementId: "G-LS7HXSLQNS"
})

const auth = firebase.auth()
const firestore = firebase.firestore()

function App() {

  

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom/> : <SignIn/>}
      </section>
    </div>
  );
}

export default App;
