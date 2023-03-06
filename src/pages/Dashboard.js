import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import SideBar from '../components/SideBar';
import useAuth from '../hooks/useAuth';


const Dashboard = () => {
  const { user } = useAuth();
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <main>
      <div className="container-fluid main-dashboard">
        <div className="row dashboard-body">
          <SideBar />

          <div className="col-sm-12 col-md-10 col-lg-8 bg-light profile-card mx-lg-5">
            <div className="position-sticky pt-3">
              <ProfileCard 
                user={user}
                editable={editing}
                onEdit={handleEdit}
                onSave={handleSave}
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default Dashboard;