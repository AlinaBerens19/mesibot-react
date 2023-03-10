import { useEffect, useState } from 'react'
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
          <div className="container px-3 PartyPage">
            <div className="row justify-content-center">
    
              <div className="col-12 col-md-6 col-lg-5">
                <div className="row justify-content-start mt-5 button-party-detail">
                  <img src={party.image} alt={party.name} className="image-single-party img-fluid" />
                  <h3 className="header-party">{party.name}</h3>
                  <p><b>We are waiting for you: </b>{party.date} {party.time}</p>
                  <p>{party.description}</p>
                  <p><b>Location: </b>{party.location}</p>
                  <button className="btn btn-info btn-lg btn-block mt-3 mb-4">
                    Buy Ticket
                  </button>
                </div>
              </div>
    
            </div>
          </div>
        </main>
      );
    }
    
    export default PartyPage;
    
    
    
    
    
    