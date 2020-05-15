import React, {Component} from 'react';

class ListAllBook extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Want to Read</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books.map((book) => (
								<li key={book.id}>
									<div className="book">
										<div className="book-top">
											<div className="book-cover" style={{
												width: 128,
												height: 192,
												backgroundImage: `url(${book.imageLinks.smallThumbnail}})`
											}}>
											</div>
											<div className="book-shelf-changer">
												<select onChange={(e) => (this.props.onSelect(e.target.value, 'wantToRead', book))}>
													<option value="move" disabled>Move to...</option>
													<option value="wantToRead">Want to Read</option>
													<option value="currentlyReading">Currently Reading</option>
													<option value="read">Read</option>
													<option value="none">None</option>
												</select>
											</div>
										</div>
										<div className="book-title">{book.title}</div>
										<div className="book-authors">{book.authors}</div>
									</div>
								</li>
							))
						}
					</ol>
				</div>
			</div>
		);
	}
}

export default ListAllBook;