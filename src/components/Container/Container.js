import React from'react'
import './container.css'

const Container = (props) =>{ 

    return (
        <div className='container '>
                <div className='containerCard'>
                {props.movies.map((item, index) =>{
                    return(
                        <div className='cardMovie'>
                            <div className='cardImg'>
                                <img src={`/images/${item.id}.jpg`} alt={`img de film ${item.title}`} />
                            </div>
                            <header className='headerCard'>
                                <h5 key={index} onClick={() => props.modifierState()}> {item.title}</h5>
                                <div className='hedenDiv'>Catégorie : {item.category}</div>
                                <div className='cardFooter ' >
                                    <span onClick={() => props.deleteMovie(item)} className='spanIcon pt-1'>
                                        <i className="fa fa-trash" aria-hidden="true"></i>
                                    </span>
                                    {/* <div key={item.id}>
                                        <span className='m-1' >{props.likes && props.id === item.id ? props.likes : item.likes}
                                            <i onClick={() =>props.toggleLikesFunction(item.likes, item.id)} 
                                                className={`m-1 ${props.class && props.id === item.id ? props.class : "fa fa-thumbs-o-up"}`}
                                                aria-hidden="true" >
                                            </i>
                                        </span>
                                        <span>{props.dislikes && props.id === item.id ? props.dislikes : item.dislikes}
                                            <i onClick={() =>props.toggleDislikesFunction(item.dislikes,item.id)} 
                                                className= {`m-1 ${props.classDislike && props.id === item.id ? props.classDislike : "fa fa-thumbs-o-down"}`}
                                                aria-hidden="true">
                                            </i>
                                        </span> */}
                                    {/* </div> */}


{/* ####################test de like */}

                                    <div key={item.id}>
                                        <span className='m-1' >{props.likes && props.id === item.id ? props.likes : item.likes}
                                            <i onClick={() =>props.onLike(item.id, item.likes, item.dislikes)} 
                                                className={`m-1 ${props.classLike && props.id === item.id ? props.classLike : "fa fa-thumbs-o-up"}`}
                                               >
                                            </i>
                                        </span>
                                        <span>{props.dislikes && props.id === item.id ? props.dislikes : item.dislikes}
                                            <i onClick={() =>props.onDislike(item.id, item.likes, item.dislikes)} 
                                                className= {`m-1 ${props.classDislike && props.id === item.id ? props.classDislike : "fa fa-thumbs-o-down"}`}
                                                >
                                            </i>
                                        </span>
                                    </div>



                                    {/* #########################################" fin de test" */}
                                </div>
                            </header>
                        </div>
                    )})}
            </div>
        </div>
    )
}   

 
export default Container