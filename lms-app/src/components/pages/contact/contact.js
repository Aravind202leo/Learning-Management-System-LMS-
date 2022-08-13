import React from "react"; 
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './contact.css'; 
export default function ContactUs() {
  const contactConfig = {
    YOUR_EMAIL: 'reachus@cogniwide.com',
    YOUR_FONE: '+91 78290 72753',
    description:
      " Cogniwide Technologies Private Limited, 1 st Floor, SPD Plaza, 52, Jyoti Niwas College Rd,Koramangala Industrial Layout, Koramangala,Bengaluru - 560034,Karnataka, India.",
  };
  

  return (
   <div className="hey">
     <h1 className="display-4 mb-4 hello">We are here to help!</h1>
      <Container style={{backgroundColor: "#becad2"}}>
     
        <Row className="mb-5 mt-3">
          <Col lg="8">
           
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Give Your Feedback</h3>
            <address>
              <p>
              <strong>Email:</strong>{" "}{contactConfig.YOUR_EMAIL}
              </p>
             
              {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              ) : (
                ""
              )}
            </address>
            <p>
            <strong>Address:</strong>{contactConfig.description}</p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <Button className="btn " variant="outline-dark" type="submit"> 
                  Submit
                  </Button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      </div>
  );
}
