import React, { Component } from 'react'

export default class Book extends Component {



    constructor(props){
        super(props);
        // this.handleClick = this.handleClick.bind(this);
        this.state = {
            count:1
        }
    }



    

    // addCount=()=>{
    //     console.log("you clicked add")
    //     this.setState({count: this.state.count +1 })
        
    // }
    lowerCount=()=>{
        console.log("you clicked lower")
        this.setState({count: this.state.count -1 })
        
    }
    resetCount=()=>{
        console.log("you clicked reset")
        this.setState({count:0})
        
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
                    <h3>count: {this.state.count}</h3>
                    <button type="button" onClick={()=>this.setState({count: this.state.count +1 })} >add count</button>
                    <button type="button" onClick={this.lowerCount} >lower count</button>
                    <button type="button" onClick={this.resetCount} >reset count</button>
                

                </div>
                
                
            </article>
        )
    }
}
