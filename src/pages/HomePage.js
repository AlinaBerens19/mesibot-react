import MDBContainer from 'react-bootstrap/Container'
import MDBRow from 'react-bootstrap/Row'
import MDBCol from 'react-bootstrap/Col'
import ListParty from '../components/ListParty'
import useData from '../hooks/useData'


const HomePage = () => {

  const { filteredParties } = useData();


  return (
    <main>
      <MDBContainer className="px-3 HomePage">
        <MDBCol className="mt-5">
          <MDBRow className="gx-4">

          {filteredParties.map((party, index) => (
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


