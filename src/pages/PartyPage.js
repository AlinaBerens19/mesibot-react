import { useEffect, useState } from 'react'
import MDBContainer from 'react-bootstrap/Container'
import MDBRow from 'react-bootstrap/Row'
import MDBCol from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { useParams } from 'react-router-dom'

const PartyPage = () => {

    const { id } = useParams()
    const [party, setParty] = useState("")

    useEffect(() => {
        getParty();
        console.log('ID ===> ', id)
    }, [id])


    const getParty = async () => {
        try {
            let response = await fetch(`/api/parties/` + id + '/')
            let data = await response.json()
            console.log('DATA ===> ', data)
            setParty(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteParty = async () => {
        try {
            let response = await fetch(`/api/parties/${id}`, {
                method: 'DELETE'
            })
            let data = await response.json()
            console.log('DATA ===> ', data)
            setParty(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const updateParty = async () => {
        try {
            let response = await fetch(`/api/parties/${id}`, {
                method: 'PUT'
            })
            let data = await response.json()
            console.log('DATA ===> ', data)
            setParty(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const createParty = async () => {
        try {
            let response = await fetch(`/api/parties/${id}`, {
                method: 'POST'
            })
            let data = await response.json()
            console.log('DATA ===> ', data)
            setParty(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    
    return (
        <main>
        <MDBContainer className="px-3 PartyPage">
            <MDBCol>
            <MDBRow className="gx-4 justify-content-center">

                <MDBCol xs={12} md={6} lg={5}>
                <MDBRow className='justify-content-start mt-5 button-party-detail'>
                    <Image fluid="true" className="image-single-party" src={party.image} />
                    <h3 className='header-party'>{party.name}</h3>
                    <p><b>We are waiting for you: </b>{party.date} {party.time}</p>
                    <p>{party.description}</p>
                    <p><b>Location: </b>{party.location}</p>
                    <button 
                    className="btn btn-info btn-lg btn-block mt-3"
                    >
                    Buy Ticket
                    </button>
                </MDBRow>
                </MDBCol>

            </MDBRow>
            </MDBCol>
        </MDBContainer>
        </main>
    )
}

export default PartyPage
