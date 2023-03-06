import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CustomForm from '../components/CustomForm';
import { useState } from 'react';



const CreateParty = () => {

  const [partyName, setPartyName] = React.useState('')
  const [partyDate, setPartyDate] = React.useState('')
  const [partyTime, setPartyTime] = React.useState('')
  const [partyDescription, setPartyDescription] = React.useState('')
  const [partyLocation, setPartyLocation] = React.useState('')
  const [partyImage, setPartyImage] = React.useState(null)


  let createParty = async (newParty) => {
    await fetch("/api/parties/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newParty),
    });
    
  }

  let handleSubmit = async (e) => {
    e.preventDefault();

    const formData  = new FormData();
    formData.append('name', partyName)
    formData.append('date', partyDate)
    formData.append('time', partyTime)
    formData.append('description', partyDescription)
    formData.append('location', partyLocation)
    formData.append('image', partyImage)

    console.log('FORM DATA ==> ', formData)
    console.log('PARTY IMAGE ==> ', partyImage)

    try {
      await fetch("/api/parties/", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.log(error.message)
    }
    
    setPartyName('')
    setPartyDate('')
    setPartyTime('')
    setPartyDescription('')
    setPartyLocation('')
    setPartyImage(null)
    
  }


  return (
    <main>
      <CustomForm 
        partyName={partyName}
        setPartyName={setPartyName}
        partyDate={partyDate}
        setPartyDate={setPartyDate}
        partyTime={partyTime}
        setPartyTime={setPartyTime}
        partyDescription={partyDescription}
        setPartyDescription={setPartyDescription}
        partyLocation={partyLocation}
        setPartyLocation={setPartyLocation}
        setPartyImage={setPartyImage}
        handleSubmit={handleSubmit}
      />
      
      
    </main>
  )
}


export default CreateParty
