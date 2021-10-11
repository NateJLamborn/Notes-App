import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Form, 
    FormGroup, 
    Input,
    Button
} from 'reactstrap'

export const EditNote = () => {
    return (
        <Form>
            <FormGroup>
                <Input type="text" placeholder="Enter Title"></Input>
                <Input type="textarea" placeholder="Enter Note Here"></Input>
            </FormGroup>
            <Button type="submit">Edit Note</Button>
            <Link to='/' className='btn btn-danger ml-2'>Cancel</Link>
        </Form>
    )
}
