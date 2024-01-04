import React from 'react'
import { Link }from 'react-router-dom'
const NavBar = () => {
    return (
      <div>
        <nav className="navbar navbar-expand-lg"  style={{background: 'linear-gradient(yellow, pink, violet)'}}>        
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" style={{marginRight:"50px", padding:"17px"}}><b>NewsRoom</b></Link>
            <button className="navbar-toggler" style={{border:"solid 4px black"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" title='nav'>
            <span className="navbar-toggler-icon"><b>nav</b></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-4 mb-lg-0" style={{fontFamily:"Parry Hotter"}}>
                <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/"><b>Home</b></Link>
                </li>
                {/* <li className="nav-item"><a className="nav-link" to="/about"><b>About</b></a></li> */}
                <li className="nav-item"><Link className="nav-link" to="/business"><b>Business</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment"><b>Entertainment</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology"><b>technology</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health"><b>Health</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science"><b>Science</b></Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports"><b>Sports</b></Link></li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
  }

  export default NavBar
