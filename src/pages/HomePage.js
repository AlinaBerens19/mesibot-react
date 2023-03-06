import { useEffect } from 'react'
import MDBContainer from 'react-bootstrap/Container'
import MDBRow from 'react-bootstrap/Row'
import MDBCol from 'react-bootstrap/Col'
import ListParty from '../components/ListParty'


const HomePage = ({parties, setParties}) => {

  useEffect(() => {
    getParties()
  }, [])

  
  const getParties = async () => {
    try {
      let response = await fetch('/api/parties/')
      let data = await response.json()
      console.log('DATA ===> ', data)
      setParties(data)
    } catch (error) {
      console.log(error.message)
    }}



  return (
    <main>
      <MDBContainer className="px-3 HomePage">
        <MDBCol className="mt-5">
          <MDBRow className="gx-4">

          {parties.map((party, index) => (
            <ListParty 
              party={party}
              key={index}
            />
          ))}

          </MDBRow>
        </MDBCol>
      </MDBContainer>
    </main>
  )
}

export default HomePage


