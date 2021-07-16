import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';
import Chart from '../../chart/Chart'
import { productData } from '../../../dummyData'
import productImg from './image-2.jpg'
import { Publish } from '@material-ui/icons';


export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="addProductBtn">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales"  title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={productImg} className="productImg" alt="" />
                        <div className="productName">Apple Airpods</div>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id : </span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales : </span>
                            <span className="productInfoValue">4123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active : </span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock : </span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form action="" className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" placeholder="Apple AirPod" />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={productImg} className="productUploadImg" alt="" />
                            <label for="file">
                                <Publish />
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                        <button className="productBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
