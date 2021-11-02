import React, { Component } from 'react'
import axios from "axios"
import '../styling/addNote.css'

export class AddNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             NoteTitle: "",
             NoteBody: ""
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
      
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post("/notes/new-note", this.state)
        .then(response =>{
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
        window.location.href="http://localhost:3000/"
    }

    returnHome(){
        window.location.href="http://localhost:3000/"
    }
    
    render() {
        const { NoteTitle, NoteBody } = this.state
        return (
            <div className='container text-center'>
                <div className='row'>
                    <h1>Add A Note</h1>
                </div>
                <form>
                    <div className='form-group'>
                        <div className='row'>
                            <div className='col'>
                                <input type="text" className="form-control-lg" placeholder="Enter Title" name="NoteTitle" value={NoteTitle} onChange={this.changeHandler}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <textarea type="textarea" className="textarea" placeholder="Enter Note Here" rows="10" cols="50" name="NoteBody" value={NoteBody} onChange={this.changeHandler}></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col text-center'>
                            <button type='button' onClick={this.submitHandler} className='btn btn-success ml-2'>Submit</button>
                            <button type="button" onClick={this.returnHome} className='btn btn-danger ml-2'>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
