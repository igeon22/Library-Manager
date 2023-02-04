import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route, useNavigate,HashRouter} from 'react-router-dom'
import { useState , useEffect } from 'react';
import Home from './components/Home';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import LibraryHome from './components/LibraryHome';
import Books from './components/Books';
import About from './components/About';
import {collection,addDoc, getDocs,doc,updateDoc} from 'firebase/firestore'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { app,database } from './firebaseConfig';




function App(props){
	// let auth = getAuth()
	const collectionRef = collection(database,'users')
	const [usersInfos,setUsersInfos] = useState({email:'',password:''})
	const [books,setBooks] = useState([{title:'Tom Sawyer',author:'Mark Twain'}])
	const [userId,setUserId] = useState(" ")
	const [di,setDi] = useState("")
	const [canNavigate,setCanNavigate] = useState(false)
	const [canUpdate,setCanUpdate] = useState(false)
	const [canUpdateBooks,setCanUpdateBooks] = useState(false)
	var id = 0
	 

	const getData=()=>{
		// console.log(usersInfos);
		getDocs(collectionRef)
		.then((response)=>{
			response.docs.map((item)=>{
				let dat = item.data()
				// console.log('DATA: ',dat.email,dat.password,dat.books)
				// console.log('UsersDATA: ',usersInfos.email,usersInfos.password)
				if(dat.email == usersInfos.email && dat.password == usersInfos.password){
					// console.log('We found it!');
					// console.log('íd: ',item.id)
					setUserId(item.id)
					// setDi(item.id)
					id = item.id
					setBooks(dat.books)
					// console.log(userId);
				}
				window.setTimeout(()=>{

					setCanNavigate(true)
				},1000)
			})

			// console.log(response.docs.map((item)=>{
			// 	return item.id
			// }))
		})
	}

	// useEffect(()=>{
	// 	console.log('changes');
	// 	console.log(userId)
	// },[userId])

	
	
	const updateData=(bcs)=>{
		// console.log('ID: ',userId);
		const docToUpdate = doc(database,'users',userId)
		// console.log(bcs);
		const data ={
			books:bcs,
			email:usersInfos.email,
			password:usersInfos.password

		}
		updateDoc(docToUpdate,data)
		// .then(docToUpdate=>{
		// 	console.log("Document was updated!");
		// })
		// .catch(err=>{
		// 	console.log('theres problem here');
		// 	console.log(err);
		// })
	}

	

	return(
		<HashRouter>
			<Routes>
				<Route path='/' element={<Home></Home>}></Route>
				<Route path='/log-in' element={<LogIn usersInfos={usersInfos} canNavigate={canNavigate} setUsersInfos={setUsersInfos} getData={getData}></LogIn>}></Route>
				<Route path='/sign-up' element={<SignUp booksList={books}></SignUp>}></Route>
				<Route path='/library-home' element={<LibraryHome canUpdate={canUpdate} setCanUpdate={setCanUpdate} updateData={updateData} getData={getData} booksList={books} setBooks={setBooks} usersInfos={usersInfos} setUsersInfos={setUsersInfos}></LibraryHome>}></Route>
				<Route path='/books' element={<Books canUpdateBooks={canUpdateBooks} setCanUpdateBooks={setCanUpdateBooks} booksList={books} updateData={updateData} setBooks={setBooks}></Books>}></Route>
				<Route path='/about' element={<About></About>}></Route>
			</Routes>
		</HashRouter>
	)
}

export default App