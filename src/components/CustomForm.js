import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ImageUploading from 'react-images-uploading';

const CustomForm = ({partyName, setPartyName, partyDate, setPartyDate, partyTime, setPartyTime, partyDescription, setPartyDescription, partyLocation, setPartyLocation, setPartyImage, handleSubmit}) => {
  return (
    <>
    <Form onSubmit={handleSubmit}>
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
      <Form.Label>Description:</Form.Label>
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
      <Button type="submit mt-3 create-party-button">Submit form</Button>
      </Form>
    </>
  )
}

export default CustomForm
