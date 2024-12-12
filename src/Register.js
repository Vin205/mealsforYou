import { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const signUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // Add user data to Firestore
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                email: email,
                firstName: first,
                lastName: last
            });
            console.log('User registered successfully!');
            setRegistrationSuccess(true); // Update state to display success message

            // Redirect to the home page after a delay
            setTimeout(() => {
                window.location.href = '/'; // Redirect to the home page
            }, 1000); // Redirect after 2 seconds (adjust the delay as needed)
        } catch (error) {
            console.error('Error registering user:', error.message);
        }
    };

    return (
        <div className='form'>
            {registrationSuccess && (
                <div className="alert alert-success" role="alert">
                    User registered successfully!
                </div>
            )}
            <section className="text-center">
                <div className="p-5 bg-image" style={{
                    backgroundImage: 'url("./images/w.jpg")',
                    height: '300px'
                }}></div>

                <div className="container mx-4 mx-md-5" style={{ marginTop: '-100px' }}>
                    <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ background: 'black', backdropFilter: 'blur(30px)' }}>
                        <div className="card-body py-5 px-md-5">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-8">
                                    <h2 className="fw-bold mb-5" style={{ color: 'white' }}>Sign Up now</h2>
                                    <form onSubmit={signUp}>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="firstName" className="form-control" onChange={(e) => setFirst(e.target.value)} />
                                                    <label className="form-label" htmlFor="firstName" style={{ color: 'white' }}>Enter First name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="lastName" className="form-control" onChange={(e) => setLast(e.target.value)} />
                                                    <label className="form-label" htmlFor="lastName" style={{ color: 'white' }}>Enter Last Name </label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="email" style={{ color: 'white' }}>Email address</label>
                                            <input type="email" id="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password" style={{ color: 'white' }}>Password</label>
                                            <input type="password" id="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>

                                        <button className="btn btn-primary" type="submit">Sign Up</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-5"></div>
            <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
                <p>&copy; meal@planner. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Register;

