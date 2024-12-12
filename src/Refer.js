import React from 'react'
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
function Refer () {
    const navigate = useNavigate();
  const [goToRegister, setGoToRegister] = React.useState(false);
  const [goToSignm, setGoToSignm] = React.useState(false);

  if (goToRegister) {
    return navigate('/register');
  }

  if (goToSignm) {
    return navigate('/signm');
  }
 
  return (
    <div>
        <main>

   
  <section class="my-5" >
       <div class="py-5">
        <div className="container">
     <div className="col">
     <h1 align="center" style={{color : 'white'}}>Register</h1>
     <div class="py-5">
     
       </div>
       
      
<div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#4527A0'}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e4.png' alt='...' fluid style={{ height: '100%',width :'auto'}} />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : 'lightblue'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontcolor :'white',fontWeight :'bold' }}>Register as Student</MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }}>
          Explore Career opportunities and make yourself ready for employment in various fields.
          Learn how to build your own startup and become a successful Entrepreneur
          </MDBCardText>
          </div>
          <div class="py-2">
          
          </div>
          <div>
          <button type="button" class="btn btn-primary" onClick={() =>{setGoToRegister(true);}}>Explore Now</button>
          </div>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>



 
</div>
<div>
  <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius : '5px',borderColor : 'black', backgroundColor :'#00838F'}}>
    <MDBRow className='g-0'>
      <MDBCol md='4'>
        <MDBCardImage src='./images/e5.png' alt='...' fluid style={{ height: '100%',width :'auto'}} />
      </MDBCol>
      <MDBCol md='8'>
        <MDBCardBody>
        <div class="card-header" style={{backgroundColor : 'lightblue'}}>
          <MDBCardTitle className='card-title' align='center' style={{fontcolor :'white',fontWeight :'bold' }}>Register as Mess</MDBCardTitle>
          </div>
          <div class="py-5">
          <MDBCardText className='card-text' style={{color :'white' }}>
            Complete information about loans, grants and scholarships. Simple procedure and steps to apply easily.
          </MDBCardText>
          </div>
          <div class="py-2">
          <button type="button" class="btn btn-primary" onClick={() =>{setGoToSignm(true);}}>Explore Now</button>
          </div>
        </MDBCardBody>
      </MDBCol>
    </MDBRow>
  </MDBCard>



 
</div>
 


   </div>
   </div>
   </div>
   </section>
   </main>
   <footer style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
      <p>&copy; Edu@enyanjyoti. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Refer