import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const ProfileCard = ({editable}) => {
  const { user, updateUserInfo } = useContext(AuthContext);
  const [updatedUser, setUpdatedUser] = useState(user);
  const [editing, setEditing] = useState(editable);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateUserInfo(updatedUser);
    setEditing(false);
    // save the updated user data to local storage
    sessionStorage.setItem('user', JSON.stringify(updatedUser));
  };

  useEffect(() => {
    // load user data from local storage when the component mounts
    const savedUser = sessionStorage.getItem('user');
    if (savedUser) {
      setUpdatedUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <>

    <div className="d-flex justify-content-end mb-3">
        {editing ? (
        <button className="btn btn-outline-success me-2" onClick={handleSave}>
            Save
        </button>
        ) : (
            <FontAwesomeIcon icon={faPen} className="ms-3" onClick={handleEdit} />
        )}
    </div>

    <div className="flex flex-col justify-content-center">
      <img
        src={updatedUser.url}
        alt="Profile"
        className="rounded-circle shadow-4-strong mx-auto d-block profile-picture"
      />
      <div className="text-center mt-3">
        <h3 className="text-dark">{updatedUser.username}</h3>
        <p className="text-muted">
          <i className="fas fa-map-marker-alt"></i>{' '}
          <span name="first_name">{updatedUser.first_name}</span> <span name="last_name">{updatedUser.last_name}</span>
        </p>
      </div>
      <div className="m-5">
        <div className="flex flex-col">

        <div className="row text-start pb-2">
            <h5 className="text-dark">First Name:</h5>
            {editing ? (
              <input
                type="text"
                className="form-control"
                name="first_name"
                value={updatedUser.first_name}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-muted">{updatedUser.first_name}</p>
            )}
          </div> 

          <div className="row text-start pb-2">
            <h5 className="text-dark">Last Name:</h5>
            {editing ? (
              <input
                type="text"
                className="form-control"
                name="last_name"
                value={updatedUser.last_name}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-muted">{updatedUser.last_name}</p>
            )}
          </div>   

          <div className="row text-start pb-2">
            <h5 className="text-dark">Email:</h5>
            {editing ? (
              <input
                type="email"
                className="form-control"
                name="email"
                value={updatedUser.email}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-muted">{updatedUser.email}</p>
            )}
          </div>

          <div className="row text-start pb-2">
            <h5 className="text-dark">Phone:</h5>
            {editing ? (
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={updatedUser.phone}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-muted">{updatedUser.phone}</p>
            )}
          </div>

          <div className="row text-start pb-2">
            <h5 className="text-dark">Username:</h5>
            {editing ? (
              <input
                type="text"
                className="form-control"
                name="username"
                value={updatedUser.username}
                onChange={handleInputChange}
              />
            ) : (
              <p className="text-muted">
                {updatedUser.username || 'No Username'}
              </p>
            )}
          </div>

          <div className="row mb-5 pt-2">
            {editing ? (
              <button
                type="button"
                className="btn btn-outline-dark btn-lg btn-block edit-profile-button ms-1 mb-2 me-2"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-dark btn-lg btn-block edit-profile-button ms-1 mb-2 me-2"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileCard;