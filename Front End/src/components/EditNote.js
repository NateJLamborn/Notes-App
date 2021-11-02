import React, { Component } from 'react'
import axios from "axios"

export class EditNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             oldNoteTitle: "",
             oldNoteBody: "",
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
        let address = "/notes/edit-note/" + this.props.match.params.id
        axios.put((address), {NoteTitle: this.state.NoteTitle, NoteBody: this.state.NoteBody})
        window.location.href="http://localhost:3000/"
    }

    fetchOldNote() {
        var noteUrl = "/notes/" + this.props.match.params.id
        axios.get(noteUrl).then(response =>{
            this.setState(() =>{
                return {
                    oldNoteTitle: response.data.NoteTitle,
                    oldNoteBody: response.data.NoteBody
                }
            })
        })
    }

    returnHome(){
        window.location.href="http://localhost:3000/"
    }
    

    componentDidMount(){
        this.fetchOldNote()
    }
    
    render() {
        const { NoteTitle, NoteBody } = this.state
        return (
            <div className='container text-center'>
                <div className='row'>
                    <div className='col'><h1>New Note Content</h1></div>
                </div>
                <form >
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
                            <button onClick={this.submitHandler}className='btn btn-success ml-2'>Submit</button>
                            <button type="button"onClick={this.returnHome} className='btn btn-danger ml-2'>Cancel</button>
                        </div>
                    </div>
                </form>
                <div className='row'>
                    <div className='col'><h4>Previous Note Content</h4></div>
                </div>
                <div className='row'>
                    <div className='col'>{this.state.oldNoteTitle}</div>
                </div>
                <div className='row'>
                    <div className='col'>{this.state.oldNoteBody}</div>
                </div>
            </div>
        )
    }
}
