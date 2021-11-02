import React, { Component } from 'react'
import "../styling/Navbar.css"

export class Heading extends Component {
    AddNote(){
        window.location.href="http://localhost:3000/add"
    }
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container">
                    <a class="navbar-brand" href="http://localhost:3000/">My Notes</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button type='button' className='btn btn-dark' onClick={() => this.AddNote()}>Add Note</button>
                    </form>
                </div>
            </div>
        </nav>
        )
    }
}

