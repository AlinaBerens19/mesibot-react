import React, { useState } from "react";

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleSaveButtonClick = () => {
    setEditMode(false);
  };

  return (
    <main>
    <div className="container my-5">
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <h1 className="text-white mb-4">Profile</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">
                Name
              </label>
              {editMode ? (
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="form-control-plaintext">{user.name}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">
                Email address
              </label>
              {editMode ? (
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="form-control-plaintext">{user.email}</p>
              )}
            </div>

            <div className="mb-3">
              <label htmlFor="bio" className="form-label text-white">
                Bio
              </label>
              {editMode ? (
                <textarea
                  className="form-control"
                  id="bio"
                  name="bio"
                  value={user.bio}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="form-control-plaintext">{user.bio}</p>
              )}
            </div>

            {editMode ? (
              <button
                type="submit"
                className="btn btn-primary me-2"
                onClick={handleSaveButtonClick}
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={handleEditButtonClick}
              >
                Edit
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
    </main>
  );
};

export default ProfilePage;