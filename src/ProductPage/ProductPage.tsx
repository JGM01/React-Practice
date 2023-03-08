import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from "react-bootstrap";
import './ProductPage.css';


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
        return this.product_name;
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
        <Container id='page'>
            <Row>
                <Col className='product-image'>
                    <img className="product-image" src={`/${product.getImageDir()}`} alt=""/>
                </Col>

                
                <Col className='product-customization'>
                    <h1>{`Customize your 9-inch ${product.getName()} - Space Gray`}</h1>
                    <ul className='tech-specs'>
                        <li>Apple M2 Pro with 12‑core CPU, 19‑core GPU, 16‑core Neural Engine</li>
                        <li>16GB unified memory</li>
                        <li>1TB SSD storage</li>
                        <li>96W USB-C Power Adapter</li>
                        <li>14-inch Liquid Retina XDR display</li>
                        <li>Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port</li>
                        <li>Backlit Magic Keyboard with Touch ID - US English</li>
                    </ul>

                    <Row className="customization-section">
                        <h3 className="customization-label"> System on a Chip</h3>
                        <Row className="button-section">
                           <CustomizationButton/>
                           <CustomizationButton/>
                           <CustomizationButton/>
                           <CustomizationButton/>
                           <CustomizationButton/>
                           <CustomizationButton/>
                           <CustomizationButton/>
                           <CustomizationButton/>
                           <CustomizationButton/>
                        </Row>
                    </Row>
                </Col>
            </Row>


            <Row className="bottom-info">
                <Col className="delivery-info" >
                    <Col className="in-store">
                        check
                    </Col>

                    <Col className="order-now">
                        check
                    </Col>
                </Col>

                <Col className="cost-info" >
                    ${orderAmt}
                </Col>
            </Row>
        </Container>
    );
}

function CustomizationButton() {
    return (
        <Button variant='outline-primary' className="customization-option">
            <Col className="customization">
                Apple M2 Pro with 12-core CPU, 19-core GPU, 16-core Neural Engine
            </Col>
            <Col className="customization-cost">
                $5
            </Col>
        </Button>
    );
}

export {ProductPage, Product};