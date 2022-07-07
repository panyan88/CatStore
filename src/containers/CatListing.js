import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import CatComponent from './CatComponent';
import {setProducts} from '../redux/actions/productActions'
import {setCategories} from '../redux/actions/productActions'

const CatListing = () => {
    const products = useSelector((state) => state)
    const categories = useSelector((state) => state.categories)
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
            .get('https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1')
            .catch((err)=>{
                console.log('Err',err)
            })
        dispatch(setProducts(response.data))
    }

    const fetchCategories = async () => {
        const response = await axios
            .get('https://api.thecatapi.com/v1/categories ')
            .catch((err)=>{
                console.log('Err',err)
            })
        dispatch(setCategories(response.data))
    }

    useEffect(()=> {
        fetchProducts();
        fetchCategories();
    },[])

    console.log('Categories: ', products)
    return (
        <div className='ui grid container col-10' style={{display: 'flex', marginTop: '50px'}}>
            <CatComponent />
        </div>
    )
}

export default CatListing;