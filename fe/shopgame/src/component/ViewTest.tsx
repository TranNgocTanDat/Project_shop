import React from 'react'
import { ProductItem, productItems } from './Pdata'
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';

async function getProduct(id: number): Promise<ProductItem | undefined> {
    return productItems.find((product) => product.id === id);
    
}   

export async function loadProduct({ params }: LoaderFunctionArgs): Promise<ProductItem | null> {
    try {
        const productId = Number(params.id);
        console.log('Params:', params);
        if (isNaN(productId)) {
            throw new Error("Invalid product ID");
        }
        const product = await getProduct(productId);
        console.log(product);
        return product ?? null;  // Trả về null nếu sản phẩm không tồn tại
    } catch (error) {
        console.error("Error loading product:", error);
        return null;  // Trả về null nếu có lỗi
    }
}

const ViewTest: React.FC = () => {
    const product = useLoaderData() as ProductItem | null;
    console.log('Product in ViewTest:', useLoaderData() as ProductItem | null);

    return (
        
        <div>
            {product ? (
                <div key={product.id}>
                    <div>hello</div>
                    <div>ID: {product.id}</div>
                    <div>Discount: {product.discount}</div>
                    <div>Cover: {product.cover}</div>
                </div>
            ) : (
                <div >No product found </div>
            )}
        </div>
    );
};  

export default ViewTest
