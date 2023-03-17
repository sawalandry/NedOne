import React from 'react'

const FormSearch = () => {
  return (
    <div>
        <div className="input-group ml-auto" style={{width: '100%', maxWidth: '300px'}}>
            <input type="text" placeholder='Key Word' className="form-control" />
            <div className="input-group-append">
                <button className="input-group-text text-secondary">
                    <i className="ri-search-line"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default FormSearch
