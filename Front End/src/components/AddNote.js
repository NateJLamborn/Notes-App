import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AddNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             title: "",
             body: ""
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
      
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
    }

    
    render() {
        const { title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className='form-group'>
                        <input type="text" placeholder="Enter Title" name="title" value={title} onChange={this.changeHandler}></input>
                        <input type="textarea" placeholder="Enter Note Here" name="body" value={body} onChange={this.changeHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                    <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
                    <button type="button" onClick={this.testState}>test</button>
                </form>
            </div>
        )
    }
}
