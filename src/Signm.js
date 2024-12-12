import React , { useState }from 'react'



function Signm () {
    const [details, setDetails] = useState({
        fName: '',
        email: '',
        password: '',
        lName: '',
    });

    const PostData = async (e) => {
        e.preventDefault();

        const { fName, email, password, lName } = details;

        // Check if any of the fields are empty
        if (!fName || !email || !password|| lName) {
            alert("Please fill in all fields");
            return;
        }

        const res = await fetch("https://vini-d981a-default-rtdb.firebaseio.com/logform.json", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fName,
                email,
                password,
                lName,
            })
        });

        // You can add further handling of the response here if needed
    }

    return (
        <div className='form'>
   
        <section className="text-center">
           <div className="p-5 bg-image" style={{
            backgroundImage: 'url("./images/q.jpeg")',
             height: '300px'
           }}></div>
     
           <div className="container mx-4 mx-md-5" style={{ marginTop: '-100px' }}>
             <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ background:'black', backdropFilter: 'blur(30px)' }}>
               <div className="card-body py-5 px-md-5">
                 <div className="row d-flex justify-content-center">
                   <div className="col-lg-8">
                     <h2 className="fw-bold mb-5" style={{color :'white' }}>Sign Up now</h2>
                     <form>
                      
                     <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control"   onChange={(e) => setDetails({ ...details, fName: e.target.value })} />
                        <label className="form-label" htmlFor="form3Example1"style={{color :'white' }}>Enter First name</label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" onChange={(e) => setDetails({ ...details, lName:  e.target.value })} />
                        <label className="form-label" htmlFor="form3Example2"style={{color :'white' }}>Enter Last Name </label>
                      </div>
                    </div>
                  </div>
     
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3"style={{color :'white' }}>Email address</label>
                    <input type="email" id="form3Example3" className="form-control" onChange={(e) => setDetails({ ...details, email: e.target.value })}/>
                    
                  </div>

                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example4" style={{color :'white' }}>Password</label>
                    <input type="password" id="form3Example4" className="form-control"  onChange={(e) => setDetails({ ...details, password: e.target.value })} />
                    
                  </div>
     
                       
     
                       
     
                       <button className="btn btn-primary" onClick={PostData}>Sign Up</button>
     
                      
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </section>
         <div class="py-5"></div>
         <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
           <p>&copy; meal@planner. All rights reserved.</p>
         </footer>
     </div>
    );
}

export default Signm