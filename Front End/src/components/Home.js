import React from 'react'
import { Heading } from './Heading'
import { NoteList } from './NoteList'

export const Home = () => {
    return (
        <div>
            <Heading />
            <NoteList uri="http://localhost:3001/notes"/>
        </div>
    )
}
