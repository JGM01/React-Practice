import React, { useState } from "react";

class Product {
    constructor(
        private product_name: string,
        private product_price: number,
        private product_img_dir: string,
        private product_amt: number,
        ) {
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_img_dir = product_img_dir;
        this.product_amt = 0;
    }

    getName() {
        return (
            <div>
                {this.product_name}
            </div>
        );
    }

    getPrice(amt: number) {
        return (
            <>
                {this.product_price * amt}
            </>
        );
    }

    getImageDir(): string {
        return `${this.product_img_dir}`;
    }

    getAmt(): number {
        return this.product_amt;
    }
    setAmt(amt: number) {
        this.product_amt = amt;
    }

}

interface ProductPageProps {
    product: Product;
}

function ProductPage({product}: ProductPageProps) {

    const [orderAmt, setOrderAmt] = useState(0);

    return (
        <div className="product-page-container">
            <h1>I want {orderAmt} {product.getName()}</h1>
            <p> That will be </p>
            <p>{product.getPrice(orderAmt)}</p>
            <button onClick={() => setOrderAmt(orderAmt + 1)}>Increment</button>
            <button onClick={() => setOrderAmt(orderAmt - 1)}>Decrement</button>
        </div>
    );
}

export {ProductPage, Product};