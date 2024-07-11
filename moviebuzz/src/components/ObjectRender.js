import React from 'react';

const ObjectRender = () => {
    const product = {
        pid:2895,
        pname:"Realme",
        price:65000
    }
    return (
        <div>
            {
            Object.key(product).map((key,value) => <li> {product[key]}</li>)
            } 
        </div>
    )
}

export default ObjectRender;