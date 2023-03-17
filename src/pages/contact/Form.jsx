import React from 'react'

const Form = () => {
  return (
    <>
        <div className="col-md-7">
            <div className="contact-form bg-light mb-3" style={{padding: '30px'}}>
                <div id="success"></div>
                <form action="" name='sentMessage' id='contactForm' noValidate='novalidate'>
                    <div className="form-row">
                        <div className="col-md-6">
                            <div className="control-group">
                                <input type="text" id='name' placeholder='Enter Your Full Name' data-validation-required-message='Please enter your name' className="form-control p-4" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="control-group">
                                <input type="email" id='email' placeholder='Enter Your Email' data-validation-required-message='Please enter your email' className="form-control p-4" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="control-group">
                        <input type="text" id='subject' placeholder='Subject' data-validation-required-message='Please enter your email' required className="form-control p-4" />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="control-group">
                        <textarea className='form-control' id="message" placeholder='leave  a message' data-validation-required-message="Please enter your message" required rows="4"></textarea>
                        <p className="help-block text-danger"></p>
                    </div>
                    <div>
                        <button className="btn btn-primary font-weight-semi-bold px-4"  style={{height: '50px'}} type='submit' id='sendMessageButton'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Form
