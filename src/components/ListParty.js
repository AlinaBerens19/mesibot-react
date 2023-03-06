import React from 'react'
import Image from 'react-bootstrap/Image'
import MDBRow from 'react-bootstrap/Row'
import MDBCol from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'

const ListParty = ({ party }) => {
  return (
    <>
    <MDBCol xs={12} md={6} lg={3} className="mb-5">
        <MDBRow className='justify-content-start'>
          <MDBCol>
          <div className="image-container">
            <Image 
              fluid 
              className="image-party rounded-lg"
              src={party.image} 
              alt={party.name}
              rounded
            />
          </div>
            <h3>{ party.name }</h3>
            <p className='text-truncate party-par'>{ party.description }</p>
            <Link to={`/parties/${party.id}`} className="btn btn-info btn-lg btn-block btn-gradient-blue-purple">Let's party!</Link>
          </MDBCol>
        </MDBRow>
    </MDBCol>
    </>
  )
}

export default ListParty