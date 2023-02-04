import NavBar from "./NavBar"
import SingleBook from "./SingleBook";

function Books(props){
	
	return(
		<div>
			<NavBar></NavBar>
			<div className="books-container">
				<h2 className="home-title">Books</h2>
				<div>{props.booksList.map((book)=>{
					return(
						<SingleBook title={book.title} canUpdateBooks={props.canUpdateBooks} setCanUpdateBooks={props.setCanUpdateBooks}  updateData={props.updateData} author={book.author} key={Math.random()*10000} booksList={props.booksList} setBooks={props.setBooks}></SingleBook>
					)
				})}</div>
				{/* <div className="book-block">
					<div className="btn-cont">
						<button className="del-btn">X</button>
					</div>
					<h3 className="book-title">Title: Lettres de mon moulin</h3>
					<p>Author: Marcel Pagnol</p>
				</div> */}
			</div>

		</div>
	)
}

export default Books