import React from 'react'
import '../styles/header.css'

const Header = (props) =>{


  // console.log('this.state.searchValue', this.state.searchValue.toLowerCase())
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbarResponsive">
          <div className="container-fluid titletApp">
              <a className="navbar-brand" href="/">Movie App</a>
              <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 navSelect">
                  <li className="nav-item " >
                    <span className="nav-link " aria-current="page"  onClick={() => props.clickToFilter('populaire')}>Populaire</span>
                  </li>
                  <li className="nav-item" >
                    <span className="nav-link" onClick={() => props.clickToFilter('tous')} >Tous les films</span>
                  </li>
                  <li className="nav-item dropdown">
                    <select className="form-select selectCtegory" aria-label=".form-select-lg example" onChange={(e) =>props.clickToFilter(e.target.value)}>
                      <option selected>choisir par catégorie</option>
                      <option value="1">Comedy</option>
                      <option value="2">Drame</option>
                      <option value="3">Thriller</option>
                      <option value="4">Animation</option>
                    </select>
                  </li>
              </ul>
              <div className="d-flex searchInput">
                  <input className="form-control me-2" 
                    type="Search" placeholder="Search" 
                    value={props.searchValue}
                    onChange={props.handlechange}/>
              </div>
              </div>
          </div>
      </nav>
    )
}   

 
export default Header