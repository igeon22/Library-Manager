import NavBar from "./NavBar"


function About(props){
	return(
		<div>
			<NavBar></NavBar>
			<div className="about-container">
				<section className="about">
					<h2 className="home-title en">About</h2>
					<p className="end">This website was created by Igeon22. You can check his Github  here:  <a target={'blank'} href="https://github.com/igeon22/">Igeon22</a></p>
					<p className="end">Thanks for your visit (:</p>
				</section>
			</div>
		</div>
	)
}

export default About