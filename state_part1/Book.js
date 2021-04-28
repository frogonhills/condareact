import React, { Component } from 'react'

export default class Book extends Component {
    render() {

        console.log(this.props)
        const {book , author ,id} = this.props.info;
        return (
            <article>
                <h3>{id}</h3>
                <h3>Book: {book}</h3>
                <h3>Author:{author} </h3>
                
            </article>
        )
    }
}
