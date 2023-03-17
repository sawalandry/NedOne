import React from 'react'

const CommentForm = () => {
  return (
    <div>
        <div className="bg-light mb-3" style={{padding: '30px'}}>
            <h3 className="mb-4">Leave a commennt</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className='form-control' placeholder='Claude Dee' id='name'  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" className='form-control' placeholder='name@gmail.com' id='email'  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website *</label>
                    <input type="url" placeholder='https://www.myap.com' className='form-control' id='website'  required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" placeholder='leave your message here..' cols="30" rows="5" className='form-control' required></textarea>
                </div>
                <div className="form-group">
                    <input type="submit" className='btn btn-primary font-weight-semi-bold py-2 px-3' value='Leave a comment' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default CommentForm
