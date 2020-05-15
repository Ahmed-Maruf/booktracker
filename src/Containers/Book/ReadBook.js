import React, {Component} from 'react';

class ReadBook extends Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">Read</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{
							this.props.books.map(book => (
								<li>
									<div className="book">
										<div className="book-top">
											<div className="book-cover" style={{
												width: 128,
												height: 193,
												backgroundImage: `url(${book.imageLinks.smallThumbnail}})`
											}}></div>
											<div className="book-shelf-changer">
												<select onChange={(e) => (this.props.onSelect(e.target.value, 'Read', book))}>
													<option value="move" disabled>Move to...</option>
													<option value="currentlyReading">Currently Reading</option>
													<option value="wantToRead">Want to Read</option>
													<option value="read">Read</option>
													<option value="none">None</option>
												</select>
											</div>
										</div>
										<div className="book-title">1776</div>
										<div className="book-authors">David McCullough</div>
									</div>
								</li>
							))
						}
					</ol>
				</div>
			</div>
		)
	}
}

export default ReadBook;