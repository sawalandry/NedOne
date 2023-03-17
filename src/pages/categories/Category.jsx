import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categoryData }) => {
  return (
    <div>
        <div className="row">
            <div className="col-12">
                <div className="d-flex align-items-center justify-content-between bg-light py-2 px-4 mb-3">
                <h3 className="m-0">Technologies</h3>
                <Link className="text-secondary font-weight-medium text-decoration-none" to='/'>
                    View All...
                </Link>
                </div>
            </div>
            {
                categoryData.map((item, index) => (
                <div className="col-lg-6" key={index}>
                    <div className="position-relative mb-3">
                    <img src={item.imgUrl} alt="/" className="img-fluid w-100" style={{objectFit: 'cover'}} />
                    <div className="overlay position-relative bg-light">
                        <div className="mb-2" style={{fontSize: '14px'}}>
                        <Link to='/'>{item.name}</Link>
                        <span className="px-1">/</span>
                        <span>{item.date}</span>
                        </div>
                        <Link className="h4" to='/'>{item.title}</Link>
                        <p className="m-0">{item.para}</p>
                    </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Category
