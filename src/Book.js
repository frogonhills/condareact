import React, { Component } from 'react'

export default class Book extends Component {

    handleClick(){
        console.log("you clicked me")
    }
    render() {

        
        const {img, title , author ,id} = this.props.info;
        return (
            <article className="book">
                <img src={img} width='150' alt="book" />
                <div>

                    <h3>{id}</h3>
                    <h3>Title: {title}</h3>
                    <h3>Author:{author} </h3>
                    <button type="button" onClick={this.handleClick} >add count</button>
                

                </div>
                
                
            </article>
        )
    }
}
