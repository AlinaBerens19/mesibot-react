import React from 'react'
import SideBar from '../components/SideBar'


const Orders = () => {
  return (
    <main>
      <div className="container-fluid main-dashboard">
        <div className="row dashboard-body">
          <SideBar />  

          <div className="col-sm-12 col-md-10 col-lg-8 bg-light profile-card mx-lg-5">
            <div className="position-sticky pt-3">
                <h1>Orders</h1>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}

export default Orders
