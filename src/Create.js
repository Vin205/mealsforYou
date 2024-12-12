import React from 'react'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
function Create  () {
  return (
    <div  style={{ backgroundImage: 'url("./images/s6.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="my-5"
        id="poll" 
        >
          
        <div class="pb-5"></div>
          <div className="container">
            <div className="col">
            <h2  align='center'style={{ color: 'white', alignContent:'center'}}>Food Services</h2>
            </div>
            <div class="pb-5"></div>
            <div>
              <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius: '5px', borderColor: 'black', backgroundColor: 'white', }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='./images/s1.jpg' alt='...' fluid style={{ height: '100%', width: 'auto' }} />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <div class="card-header" style={{ backgroundColor: 'lightgreen' }}>
                        <MDBCardTitle className='card-title' align='center' style={{ fontWeight: 'bold' }}>Food Empire</MDBCardTitle>
                      </div>
                      <div class="py-5">
                        <MDBCardText className='card-text' style={{ color: 'black' }}>
                        <p>Address :Plot 12, Serial 282/1/5, Mumbai Agra Highway, Near K.K Wagh College, Panchavati, Nashik</p>
                        <p> Mobile No : 8457467321</p>
                        <p> Time : 10:30am-10pm </p>
                        </MDBCardText>
                      </div>
                      
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>

            </div>
          </div>
          <div className="container">
            
        
            <div>
              <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius: '5px', borderColor: 'black', backgroundColor: 'white', }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='./images/s2.jpg' alt='...' fluid style={{ height: '100%', width: 'auto' }} />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <div class="card-header" style={{ backgroundColor: 'lavender' }}>
                        <MDBCardTitle className='card-title' align='center' style={{ fontWeight: 'bold' }}>Chai Bus Cafe</MDBCardTitle>
                      </div>
                      <div class="py-5">
                        <MDBCardText className='card-text' style={{ color: 'black' }}>
                        <p>Address :Plot 14, Serial 282/1/5, Mumbai Agra Highway, Near K.K Wagh College, Panchavati, Nashik</p>
                        <p>Mobile No : 9850751616 </p>
                        <p>Time : 10:30am-10pm </p>
                        </MDBCardText>
                      </div>
                      
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>

            </div>
            <div>
              <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius: '5px', borderColor: 'black', backgroundColor: 'white', }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='./images/s3.png' alt='...' fluid style={{ height: '100%', width: 'auto' }} />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <div class="card-header" style={{ backgroundColor: 'lightyellow' }}>
                        <MDBCardTitle className='card-title' align='center' style={{ fontWeight: 'bold' }}>Friendship</MDBCardTitle>
                      </div>
                      <div class="py-5">
                        <MDBCardText className='card-text' style={{ color: 'black' }}>
                        <p> Address :G20,21,22 Sagar Garden Beside K K Wagh Engineering College, beside Bhavani Marbels, Nashik, Maharashtra 422207</p>
                        <p>Mobile No :7767824432</p>
                        <p>Time :10:30am-10pm </p>
                        </MDBCardText>
                      </div>
                      
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>

            </div>
            <div>
              <MDBCard style={{ maxWidth: '700px', margin: 'auto', marginBottom: '200px', borderRadius: '5px', borderColor: 'black', backgroundColor: 'white', }}>
                <MDBRow className='g-0'>
                  <MDBCol md='4'>
                    <MDBCardImage src='./images/s4.jpg' alt='...' fluid style={{ height: '100%', width: 'auto' }} />
                  </MDBCol>
                  <MDBCol md='8'>
                    <MDBCardBody>
                      <div class="card-header" style={{ backgroundColor: 'pink' }}>
                        <MDBCardTitle className='card-title' align='center' style={{ fontWeight: 'bold' }}>Khau Galli</MDBCardTitle>
                      </div>
                      <div class="py-5">
                        <MDBCardText className='card-text' style={{ color: 'black' }}>
                        <p>Address : S.No. 281 / A, Plot No. 02, Mumbai - Agra Rd, near K K Wagh Engineering College, Panchavati, Nashik, Maharashtra 422003</p>
                        <p>Mobile No :8558823451</p>
                        <p>Time :10:30am-10pm </p>
                        </MDBCardText>
                      </div>
                      
                    </MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>

            </div>
          </div>
          
      
    </div>
    <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
      <p>&copy; Edu@enyanjyoti. All rights reserved.</p>
    </footer>
    </div>
  )
}

export default Create