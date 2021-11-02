import React, { Component } from 'react'
import axios from 'axios';
import '../styling/note.css'

export class NoteList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            noteData: []
        }
    }
    
    fetchNoteData = () => {
        var encodedURI = window.encodeURI(this.props.uri);
        return axios.get(encodedURI).then(response => {
          this.setState(() => {
            return {
              noteData: response.data
            };
          });
        });
      };

    renderViewPage(id){
        var noteUrl = "http://localhost:3000/view/" + id
        window.location.href=noteUrl
    }

    deleteNote(id){
        var noteUrl = "/notes/delete-note/" + id
        axios.delete(noteUrl)
        this.reloadPage()
    }

    componentDidMount() {
        this.fetchNoteData();
    }

    reloadPage(){
        window.location.href="http://localhost:3000/"
    }
    
    render() {
        const notes = this.state.noteData.map(note =>
            (<div key={note.NoteId}>
                <div className='row note'>
                    <div className='col text-left title'>{note.NoteTitle}</div>
                    <div className='col text-right'>
                        <button className='btn btn-info btn-sm' onClick={() => this.renderViewPage(note.NoteId)}>View Note</button>
                        <button className='btn btn-danger btn-sm' onClick={() => this.deleteNote(note.NoteId)}>Delete Note</button>
                    </div>
                </div>
            </div>)
        )
        return (
            <div className='container'>
                {notes}
            </div>
        )
    }
}

export default NoteList
