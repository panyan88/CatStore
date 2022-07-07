import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const CatComponent = () => {
    const products = useSelector((state) => state.allProducts.products)
    const renderList = products.map((product) => {
        const {id, title, url, price, category} = product;
        return(
            <div className='four column wide' style={{width:'auto'}} key={id}>
                <Link to={`product/${id}`}>
                <div className='ui link cards'>
                    <div className='card'>
                        <div className='image' style={{marginBottom:'10px', marginLeft:'10px'}}>
                            <img src={url} alt={title} />
                        </div>
                    </div>
                </div>
                </Link>
            </div>
        )
    })
    return (
        <>
        <div className='col-12' style={{display:'flex', flexWrap:'wrap'}}>
        {renderList}
        </div>
        <button type="button" style={{marginTop:'20px'}}>Load More</button>
        </>
    )
}

export  default CatComponent;