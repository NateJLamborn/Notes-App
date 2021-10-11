import React from 'react'
import { Link } from 'react-router-dom'
import {
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap'

export const NoteList = () => {
    return (
        <ListGroup>
            <ListGroupItem className="d-flex">
            <p>Note One</p>
            <div className="ml-auto">
                <Link className='btn btn-warning mr-1' to='/edit/1'>Edit</Link>
                <Button color='danger'>Delete</Button>
            </div>
            </ListGroupItem>
        </ListGroup>
    )
}
