import React from 'react'
import '../styles/pagination.css'

const Pagination = (props) =>{

    return(
        <nav aria-label="Page navigation example ">
            <ul className="pagination justify-content-center w-50 m-auto">
                <li className="page-item m-3 buttumPagination">
                    <span className="page-link" tabindex="-1" 
                        onClick={() => props.changePage('Previous')}>Previous</span>
                </li>
                <li className="page-item m-3 buttumPagination">
                    <span className="page-link" onClick={() => props.changePage('Next')}>Next</span>
                </li>
                <li className="page-item m-3">
                    <select className="form-select  " aria-label="Default select example" 
                        onChange={(e) =>props.selectNumberMovies(e.target.value)}>
                        <option selected>sélectionner</option>
                        <option value="4"> 4 films</option>
                        <option value="8"> 8 films</option>
                        <option value="12"> 12 films</option>
                    </select>
                </li>
            </ul>
        </nav>
    )
}
export default Pagination