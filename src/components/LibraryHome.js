import { useEffect, useState } from 'react'
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'


function LibraryHome(props){
	const navigate = useNavigate()
	const [title,setTitle] = useState('')
	const [author,setAuthor] = useState('')
	let vv = []
	const add=(e)=>{
		e.preventDefault()
		navigate('/library-home')

	}

	useEffect(()=>{
		// console.log('Update: ',props.canUpdate)
		props.setCanUpdate(true)

	},[])

	
	useEffect(()=>{
		// console.log(props.booksList);
		vv = props.booksList
		// console.log(props.canUpdate);
		props.updateData(vv)
		if(props.canUpdate===true){
		}


	},[props.booksList])

	const books=(e)=>{
		e.preventDefault()
		navigate('/books')
	}
	const about=(e)=>{
		e.preventDefault()
		navigate('/about')

	}

	const handleChanges=(e)=>{
		if(e.target.name==="title"){
			setTitle(e.target.value)
		}
		else{
			setAuthor(e.target.value)
		}
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
		let b = []
		b.push({author:author,title:title})
		props.setBooks(props.booksList.concat(b))
		// console.log(props.booksList);
		navigate('/books')
	}


	return(
		<div>
			<header>
				<li id="home">
					<img src={require("./image/open-book (2).png")} alt="" className="icon-main"/>
					<a href="" id="main-title" onClick={add}>G-Library</a>
				</li>
				<nav>
					<ol className="nav-btns">
						<div className="other-btn">
							<li>
								<a href="" className="nav-btn" id="log" onClick={add}>Add</a>
							</li>
							<li>
								<a href="" className="nav-btn" id="log"onClick={books}>Books</a>
							</li>
							<li>
								<a href="" className="nav-btn" id="log"onClick={about}>About</a>
							</li>
							
						</div>
					</ol>
				</nav>
			</header>
			<section className="add-book">
				<div className="user-form-log">
					<h2 className="form-title">Add New Book</h2>
					<form action="">
						<div className="block-cont">
							<label htmlFor="title" className="form-label">Title</label>
							<input className="form-input" type="text" id="title" name="title" value={title} onChange={handleChanges} required/>
						</div>
						<div className="block-cont">
							<label htmlFor="author" className="form-label">Author</label>
							<input className="form-input" type="text" id="title" name="author" value={author} onChange={handleChanges} required/>
						</div>
			
			
						<button type="submit" className="submit-btn" onClick={handleSubmit}>Add</button>
					</form>
	
				</div>
			</section>
		</div>
	)
}

export default LibraryHome