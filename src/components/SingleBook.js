import { useEffect } from 'react'
import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'


function SingleBook(props){
	const navigate = useNavigate()
	let vv = []
	let canUpdate = false


	useEffect(()=>{
		// console.log(props.booksList);
		vv = props.booksList
		window.onload=()=>{props.setCanUpdateBooks(true)}
		props.updateData(vv)
		if(props.canUpdateBooks===true){
		}


	},[props.booksList])
	const deleteBook = (e)=>{
		props.booksList.map((item,index)=>{
			if(item.title===props.title && item.author===props.author){
				// console.log('We found it at: ',index);
				props.setBooks(props.booksList.filter(it=>it!==item))
				navigate('/books')
				
			}
		})
	}
	return(
			<div className="book-block" >
				<div className="btn-cont">
					<button className="del-btn" onClick={deleteBook}>X</button>
				</div>
				<h3 className="book-title">Title: {props.title}</h3>
				<p>Author: {props.author}</p>
			</div>

	)
}

export default SingleBook