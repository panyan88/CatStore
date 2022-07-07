import React from 'react';
import {useSelector} from 'react-redux';

const Sidebar = () => {
    const categories = useSelector((state) => state.allProducts.categories)
    const renderList = categories.map((categories) => {
        const {id, name} = categories;
        return(
                <div className='four column wide' style={{width:'auto', marginBottom:'20px'}} key={id}>
                    <div>
                        <a href='#' style={{color:'#ffffff', textDecoration:'none'}} className='w3-bar-item w3-button'>{name}</a>
                    </div>
                </div>
        )
    })
    return (
        <div className='col-2' style={{backgroundColor:'#808080'}}>{renderList}</div>        
    )
}

export  default Sidebar;