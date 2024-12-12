import React from 'react';
import './Hom.css';
import { useNavigate } from 'react-router-dom';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function Hom() {
  const navigate = useNavigate();
  const [goToPoll, setGoToPoll] = React.useState(false);
  const [goToCreate, setGoToCreate] = React.useState(false);

  if (goToPoll) {
    return navigate('/poll');
  }

  if (goToCreate) {
    return navigate('/create');
  }

  return (
    <div style={{ backgroundImage: 'url("./images/s7.jpeg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <main>
        <section>
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/g1.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>A place where the best food is served </h5>
                  <p>All come together to have meals</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/g2.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Enjoy delicious dishes with your friends</h5>
                  <p>Best partners for the best meals</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/g3.png" className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Have a good day with great meal</h5>
                  <p> Enjoy meals for a fruitful day </p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        
        <section id="about-us">
          <div className="pb-5"></div>
          <div className="pb-5"></div>
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>How it works </h1>
                <div className="pb-5"></div>
                <h4 style={{ fontStyle: 'italic' }}>"Discover Our Culinary Journey: Crafting Delicious Delights with Passion and Precision."</h4>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
              <div className="pb-3"></div>
                <iframe width="560" height="315" src="./images/s.mp4" Border="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className="my-5" id="poll">
        <div className="pb-5"></div>
          <div className="container">
            <div className="col">
              <h1 align="center" style={{ color: 'black' }}>Start Your Day with Your Favorite Meal</h1>
            </div>
            <div className="pb-5"></div>
            <div>
              <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius: '5px', borderColor: 'black', backgroundColor: 'white', }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='./images/c.png' alt='...' fluid style={{ height: '100%', width: 'auto' }} />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <div className="card-header" style={{ backgroundColor: 'lightblue' }}>
                        <MDBCardTitle className='card-title' align='center' style={{ fontWeight: 'bold' }}>Vote for your Meal</MDBCardTitle>
                      </div>
                      <div className="py-5">
                        <MDBCardText className='card-text' style={{ color: 'black' }}>
                          Vote for your favorite meal so that you can enjoy your meal.
                        </MDBCardText>
                      </div>
                      <div className="py-2">
                        <button type="button" className="btn btn-primary" onClick={() => { setGoToPoll(true); }}>Vote Now</button>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>

              <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius: '5px', borderColor: 'black', backgroundColor: 'white', }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='./images/y.png' alt='...' fluid style={{ height: '100%', width: 'auto' }} />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <div className="card-header" style={{ backgroundColor: 'lightblue' }}>
                        <MDBCardTitle className='card-title' align='center' style={{ fontWeight: 'bold' }}>Nearby Food Services</MDBCardTitle>
                      </div>
                      <div className="py-5">
                        <MDBCardText className='card-text' style={{ color: 'black' }}>
                          Enjoy the food services nearby you.
                        </MDBCardText>
                      </div>
                      <div className="py-2">
                        <button type="button" className="btn btn-primary" onClick={() => { setGoToCreate(true); }}>Search Now</button>
                      </div>
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </div>
          </div>
        </section>

        <section id="contact-us">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col text-center">
                <h1>Contact Us</h1>
                <h5>Fill this form for any queries and please feel free to contact us at mealplan@gmail.com</h5>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6 text-center">
                <form>
                  <div className="form-group">
                    <label htmlFor="email" >Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Enter password" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Your Message:</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
                  </div>
                  <div className="pb-3"></div>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
    <div className="pb-5"></div>
    <div className="pb-5"></div>
      </main>

      <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <p>&copy; meal@planner. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Hom;
