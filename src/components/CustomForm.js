import React from 'react'
import Form from 'react-bootstrap/Form';

const CustomForm = ({partyName, setPartyName, partyDate, setPartyDate, partyTime, setPartyTime, partyDescription, setPartyDescription, partyLocation, setPartyLocation, setPartyImage, handleSubmit}) => {
  return (
    <>
    <h2 className='mt-3'>Create Your Party</h2>
    <Form onSubmit={handleSubmit} className="my-3">
      <Form.Group className="mb-3">
        <Form.Label>Name:</Form.Label>
        <Form.Control
            required
            type="text"
            id='partyName'
            placeholder="Name your party"
            value={partyName}
            onChange={(e) => setPartyName(e.target.value)}
          />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Date:</Form.Label>
        <Form.Control
            required
            type="date"
            id='partyDate'
            placeholder="Choose a date"
            value={partyDate}
            onChange={(e) => setPartyDate(e.target.value)}
          />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Time:</Form.Label>
        <Form.Control
            required
            type="time"
            id='partyTime'
            placeholder="Choose a time"
            value={partyTime}
            onChange={(e) => setPartyTime(e.target.value)}
          />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Description:</Form.Label>
        <Form.Control
            required
            type="textarea"
            id='partyDescription'
            placeholder="Describe your party"
            value={partyDescription}
            onChange={(e) => setPartyDescription(e.target.value)}
          />
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label>Location:</Form.Label>
        <Form.Control
            required
            type="text"
            id='partyLocation'
            placeholder="Where is your party?"
            value={partyLocation}
            onChange={(e) => setPartyLocation(e.target.value)}
          />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image:</Form.Label>
        <Form.Control
            type="file"
            name='image'
            accept="image/jpeg,image/png,image/gif"
            placeholder="Upload an image"
            onChange={(e) => {
              setPartyImage(e.target.files[0]);
            }}
          />
      </Form.Group>
      <button type="button" className="btn btn-outline-dark mt-3" onClick={handleSubmit}>
       Submit form
      </button>
      </Form>
    </>
  )
}

export default CustomForm
