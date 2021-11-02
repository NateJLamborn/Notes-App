import axios from 'axios'
import React, { Component } from 'react'
import "../styling/ViewNote.css"

export class ViewNote extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             NoteId: "",
             NoteTitle: "",
             NoteBody: ""
        }
    }
    fetchNoteData(){
        var noteUrl = "/notes/" + this.props.match.params.id
        axios.get(noteUrl).then(response =>{
            this.setState(() =>{
                return {
                    NoteId: response.data.NoteId,
                    NoteTitle: response.data.NoteTitle,
                    NoteBody: response.data.NoteBody
                }
            })
        })
    }

    renderEditPage(id){
        var noteUrl = "http://localhost:3000/edit/" + id
        window.location.href=noteUrl
    }

    returnHome(){
        window.location.href="http://localhost:3000/"
    }

    componentDidMount(){
        this.fetchNoteData()
    }

    render() {
        return (
            <div className='container text-center'>
                <div className='row'>
                    <h1>{this.state.NoteTitle}</h1>
                </div>
                <div className='row'>
                    <div>{this.state.NoteBody}</div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button className='btn btn-info view' onClick={() => this.renderEditPage(this.state.NoteId)}>Edit this Note</button>
                        <button className='btn btn-danger view' onClick={this.returnHome}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewNote
