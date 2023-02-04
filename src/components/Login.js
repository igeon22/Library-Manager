import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { app,database} from '../firebaseConfig'
import {collection,addDoc, getDocs} from 'firebase/firestore'


function LogIn(props){
	const navigate = useNavigate()
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [text,setText] = useState('')
	let auth = getAuth()

	useEffect(()=>{
		if(props.canNavigate===true){
			navigate('/library-home')
		}

	},[props.canNavigate])
	
	
	const handleChanges=(e)=>{
		if(e.target.name=='email'){
			setEmail(e.target.value)
			props.setUsersInfos({email:e.target.value,password:password})

			
		}
		else{
			setPassword(e.target.value)
			props.setUsersInfos({email:email,password:e.target.value})

		}
	}
	

	const handleSubmit=(e)=>{
		e.preventDefault()
		// console.log("elephant")
		// console.log(email,'-',password);
		setText('Please wait a moment...')
		// props.setUsersInfos({email:email,password:password})
		// console.log(props.usersInfos);
		signInWithEmailAndPassword(auth,email,password)
		.then((response)=>{
			// props.usersInfos({email:email,password:password})	
			// console.log(response);
			setText('Logged successfully!')
			props.getData()
			
		})
		.catch((err)=>{
			// console.log(err)
			setText('Password or email is incorrect! Try Again...')
		})

	}
	return(
		<div className="form-container">
			<div className="user-form-log">
	
				<h2 className='form-title'>Login Form</h2>
				<form action="">
					<div className="block-cont">
						<label htmlFor="email" className="form-label">Email</label>
						<input className="form-input" type="email" name="email"  onChange={handleChanges} required/>
					</div>
					<div className="block-cont">
						<label htmlFor="password" className="form-label">Password</label>
						<input className="form-input" type="password" id="password" name="password"  onChange={handleChanges} required/>
					</div>

					<p className="alert-text">{text}</p>
					<div className="ot">
						<a className="alert-text link" href="/sign-up">No account? Sign-Up</a>

					</div>

					<button type="submit" className="submit-btn" onClick={handleSubmit}>Connect</button>
				</form>

			</div>

		</div>
	)
}

export  default LogIn