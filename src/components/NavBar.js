import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'


function NavBar(props){
	const navigate = useNavigate()
	const add=(e)=>{
		e.preventDefault()
		navigate('/library-home')

	}
	const books=(e)=>{
		e.preventDefault()
		navigate('/books')
	}
	const about=(e)=>{
		e.preventDefault()
		navigate('/about')

	}
	return(
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
							<a href="" className="nav-btn" id="log" onClick={books}>Books</a>
						</li>
						<li>
							<a href="" className="nav-btn" id="log" onClick={about}>About</a>
						</li>
						
					</div>
				</ol>
			</nav>
		</header>
	)
}

export default NavBar