import useAuth from "../hooks/useAuth";


const SideBar = () => {

  const { logoutUser } = useAuth();  

  return (
    <>
      <nav
            id="sidebarMenu"
            className="col-sm-6 col-md-3 col-lg-2 d-md-block bg-light sidebar collapse mb-5"
          >
            <div className="position-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active text-dark" aria-current="page" href="/dashboard">
                    <span data-feather="dashboard"></span>
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/orders">
                    <span data-feather="orders"></span>
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/payment-methods">
                    <span data-feather="payment-methods"></span>
                    Payment Method
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-dark" href="/login" onClick={logoutUser}>
                    <span data-feather="logout"></span>
                    Log Out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
    </>
  )
}

export default SideBar
