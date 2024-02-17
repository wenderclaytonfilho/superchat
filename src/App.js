import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore'
import 'firebase/compat/auth'

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

  const[user] = useAuthState(auth);

  return (
    <div className="App">
      <header>

      </header>
      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button onClick={()=> auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom(){
  const messagesRef = firestore.collection('messages')
  const query = messagesRef.orderBy('createdAt').limit(25)

  const [messages] = useCollectionData(query,{idField: 'id'})

  return(
    <>
    <div>
      {messages && messages.map(msg=> <ChatMessage key={msg.id} message={msg}/>)}
    </div>

    <div>

    </div>
    </>
  )
}

function ChatMessage(props){

  const {text, uid } = props.message
  return <p>{text}</p>
}

export default App;
