import React, { Component } from 'react'
import Book from './Book';
export default class BookList extends Component {





    state = {


        books : [
            {
                id:1,
                book:"this is book one",
                author: " author one "
            },
            {
                id:2,
                book: "this is book two",
                author: " this is author two"
            }
            
        ]



    };






   
    render() {

        const books = this.state.books.map((item)=>item.book)
        // filter  
        // forEach 
        // map 
        // reduce 

        return (
            <section>

                <h3>this is our book list </h3>
                {/* <Book book={books[1]} /> */}
                {/* <Book book={this.books[1]} /> */}

                {this.state.books.map((item)=><Book key={item.id} info={item} /> )}

                
                
            </section>
        )
    }
}
