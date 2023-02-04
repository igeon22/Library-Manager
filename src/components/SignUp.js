import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { app,database} from '../firebaseConfig'
import {collection,addDoc} from 'firebase/firestore'





function SignUp(props){
	const [email,setEmail] = useState('')
	const navigate = useNavigate()
	const [password,setPassword] = useState('')
	const [text,setText] = useState('')
	let auth = getAuth()

	const handleChanges=(e)=>{
		if(e.target.name=='email'){
			setEmail(e.target.value)
		}
		else{
			setPassword(e.target.value)
		}
	}

	const handleSubmit=(e)=>{
		const collectionRef = collection(database,'users')
		e.preventDefault()
		setText('Please wait a moment...')
		createUserWithEmailAndPassword(auth,email,password)
		addDoc(collectionRef,{
			email:email,
			password:password,
			books:[]
		})
		
		.then((response)=>{
			console.log(response);
			setText('Account Created successfully!')
			navigate('/log-in')
		})
		.catch(()=>{
			
			setText('Password or email is incorrect!')
		})

	}

	return(
		<div className="form-container">
			<div className="user-form-log">
		
				<h2 className='form-title'>Sign-Up Form</h2>
				<form action="">
					<div className="block-cont">
						<label htmlFor="email" className="form-label">Email</label>
						<input className="form-input" id="email" type="email" name="email" onChange={handleChanges} required/>
					</div>
					<div className="block-cont">
						<label htmlFor="password" className="form-label">Password</label>
						<input className="form-input" type="password" id="password" name="password" onChange={handleChanges} required/>
					</div>

					<p className="alert-text">{text}</p>
					<div className="ot">
						<a className="alert-text link" href="/log-in">Already have an account? Sign-In</a>

					</div>
		
					<button className="submit-btn" onClick={handleSubmit}>Submit</button>
				</form>
		
			</div>

	</div>
	)
}

export  default SignUp