import React from 'react'
import {Route, Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import CurrentlyReadingBook from "./Containers/Book/CurrentlyReadingBook";
import ListAllBook from "./Containers/Book/ListAllBook";
import ReadBook from "./Containers/Book/ReadBook";
import SearchBook from "./Containers/Book/SearchBook";

import './App.css'

class BooksApp extends React.Component {
	state = {
		wantToRead: [],
		currentlyReading: [],
		read: [],
		none: []
	}
	
	componentDidMount() {
		BooksAPI.getAll().then((wantToRead) => (
			this.setState((currentState) => ({
				wantToRead
			}))
		));
	}
	
	changeBookShelve = (whichShelve, previousShelve, book) => {
		this.setState((currentState) => ({
			[previousShelve]: currentState[previousShelve].filter(b => b.id != book.id),
			[whichShelve]: currentState[whichShelve].concat(book)
		}))
		
	}
	
	render() {
		return (
			<div className="app">
				
				<Route path={"/add"} component={SearchBook}>
				</Route>
				
				<Route exact path={"/"} render={() => (
					<div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
								<CurrentlyReadingBook onSelect={this.changeBookShelve} books={this.state.currentlyReading}/>
								<ListAllBook
									onSelect={this.changeBookShelve}
									books={this.state.wantToRead}
								/>
								<ReadBook onSelect={this.changeBookShelve} books={this.state.read}/>
							</div>
						</div>
						<div className="open-search">
							<Link to={'/add'}>Add a Book</Link>
						</div>
					</div>
				)}>
				
				</Route>
			
			</div>
		)
	}
}

export default BooksApp
