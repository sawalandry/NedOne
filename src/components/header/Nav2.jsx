import React from 'react'
import { Link } from 'react-router-dom'
import FormSearch from '../form/FormSearch'

const Nav2 = ({ navData }) => {
  return (
    <>
        <div className="container-fluid p-0 mb-3">
            <div className="navbar navbar-expand-lg bg-light navbar-light py-2 py-lg-0 px-lg-5">
                <Link className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-5 text-uppercase">
                        <span className="text-primary">NeD</span>One
                    </h1>
                </Link>
                <button className="navbar-toggler" data-toggle='collapse' data-target='#navbarCollapse' type='button'>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id='navbarCollapse'>
                    <div className="navbar-nav mr-auto py-0">
                        {
                            navData.map((nav, index) => (
                                <Link className="nav-item nav-link" to={nav.url} key={index}>{nav.name}</Link>
                            ))
                        }
                        <div className="nav-item dropdown">
                            <Link to='/' className="nav-link dropdown-toggle" data-toggle='dropdown'>Tech</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                                <Link className='dropdwon-item'>1</Link>
                                <Link className='dropdwon-item'>2</Link>
                                <Link className='dropdwon-item'>3</Link>
                            </div>
                        </div>
                        <Link className='nav-item nav-link' to='/contact'>Contact</Link>
                    </div>
                    <FormSearch />
                </div>
            </div>
        </div>
    </>
  )
}

export default Nav2
