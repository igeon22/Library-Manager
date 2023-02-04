import {BrowserRouter as Router,Routes,Route,useNavigate} from 'react-router-dom'


function Home(props){
	const navigate = useNavigate()
	const login=()=>{
		navigate('/log-in')
	}
	const signUp=()=>{
		navigate('/sign-up')
	}
	return(
		<div>
			<header>
		
				<li id="home">
					<img src={require("./image/open-book (2).png")} alt="" className="icon-main"/>
					<a href="" id="main-title">G-Library</a>
				</li>
				<nav>
					<ol className="nav-btns">
						<li>
							<a href="" className="nav-btn" id="log" onClick={login}>Login</a>
						</li>
						<li>
							<a href="" className="nav-btn" id="sign" onClick={signUp}>Sign-up</a>
						</li>
					</ol>
				</nav>
			</header>
			<section className="home-page">
				<div className="sec-title">
					<img src={require("./image/book.png")} alt="" className="icon-second"/>
					<h2 className="home-title">Welcome on the best online Library Manager</h2>
					<img src={require("./image/book.png")} alt="" className="icon-second"/>
				</div>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
		
				<div className="sec-title">
					<img src={require("./image/book.png")} alt="" className="icon-second"/>
					<h2 className="home-title">Manage your books collection easily</h2>
					<img src={require("./image/book.png")} alt="" className="icon-second"/>
				</div>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
		
				<div className="sec-title">
					<img src={require("./image/book.png")} alt="" className="icon-second"/>
					<h2 className="home-title">Start now for free with a simple sign-Up</h2>
					<img src={require("./image/book.png")} alt="" className="icon-second"/>
				</div>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
				<p className="home-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tenetur obcaecati perspiciatis adipisci, voluptatem reiciendis sed voluptatibus facere sint. Minima aut nostrum inventore alias doloremque voluptatibus corrupti commodi quisquam rerum?</p>
				<p className="home-text">Click here to: <a className="link-start" href="sign-up">Start Now</a></p>

		</section>
		</div>
	)
}

export default Home