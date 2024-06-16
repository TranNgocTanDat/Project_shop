import React from 'react'
import { ProductItem, productItems } from './Pdata'
import { useLoaderData } from 'react-router-dom';

async function getProduct(id: number): Promise<ProductItem | undefined> {
    return productItems.find((product) => product.id === id);
}   

export async function loadProduct({ params }: { params: { id: number } }): Promise<ProductItem | undefined> {
    const product = await getProduct(params.id);
    console.log(product);
    return product;
}

const ViewTest: React.FC = () => {
    const product = useLoaderData() as ProductItem | undefined;

    return (
        <div>
            {product ? (
                <div >
                    <div>hello</div>
                    <div>ID: {product.id}</div>
                    <div>Discount: {product.discount}</div>
                    <div>Cover: {product.cover}</div>
                </div>
            ) : (
                <div>No product found</div>
            )}
        </div>
    );
};  

export default ViewTest
