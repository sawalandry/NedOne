import React from 'react'
import Form from './Form'

const Contact = () => {
  return (
    <div>
      <div className="container-fluid py-3">
        <div className="container">
          <div className="bg-light py-2 px4 mb-3">
            <h3 className="m-2">Contact Us For Any Queries</h3>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="bg-light mb-3" style={{padding: '30px'}}>
                <h6 className="font-weight-semi-bold">Get in Touch</h6>
                <p>Labore ipsum ipsum rebum erat amet nonumy, nonumy erat justo sit dolor ipsum sed, kasd lorem sit et duo dolore justo lorem stet labore, diam dolor et diam dolor eos magna, at vero lorem elitr.</p>
                <div className="d-flex align-items-center mb-3">
                  <i className="ri-map-fill text-primary mr-3"></i>
                  <div className="d-flex flex-column">
                    <h6 className="font-weight-bold">Our Office</h6>
                    <p className="m-0">Nabulagala, Kampala</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="ri-message-fill text-primary mr-3"></i>
                  <div className="d-flex flex-column">
                    <h6 className="font-weight-bold">Send a Message</h6>
                    <p className="m-0">myportbusiness022@gmail.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="ri-phone-fill text-primary mr-3"></i>
                  <div className="d-flex flex-column">
                    <h6 className="font-weight-bold">Just Call</h6>
                    <p className="m-0">+256 776050007</p>
                  </div>
                </div>
              </div>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
