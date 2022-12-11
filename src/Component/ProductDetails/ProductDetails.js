import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData()
    console.log('data',data)

    return (
        <div>
            this is product details
            dsfsdafds
            fsdfsdafds
            s
            dfsadfdsaf

            dsdfsadfsd
        </div>
    );
};

export default ProductDetails;