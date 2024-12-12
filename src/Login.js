import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const signIn = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully!', userCredential.user);

            // Display a success message
            alert('Login successful!');

            // Redirect to the home page
            navigate('/hom'); // Replace '/home' with the actual route for your home page
        } catch (error) {
            console.error('Error logging in:', error.message);
            setLoginError('Invalid email or password. Please try again.');
        }
    };

    return (
        <div className='form'>
            <form onSubmit={signIn}>
                <section className="text-center">
                    <div className="p-5 bg-image" style={{
                        backgroundImage: 'url("./images/r.jpg")',
                        height: '300px'
                    }}></div>

                    <div className="container mx-4 mx-md-5" style={{ marginTop: '-100px' }}>
                        <div className="card mx-4 mx-md-5 shadow-5-strong" style={{ background: 'black', backdropFilter: 'blur(30px)' }}>
                            <div className="card-body py-5 px-md-5">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="fw-bold mb-5" style={{ color: 'white' }}>Sign in now</h2>
                                        <form>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example3" style={{ color: 'white' }}>Email address</label>
                                                <input
                                                    type="email"
                                                    id="form3Example3"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form3Example4" style={{ color: 'white' }}>Password</label>
                                                <input
                                                    type="password"
                                                    id="form3Example4"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                            </div>

                                            {loginError && (
                                                <div className="alert alert-danger" role="alert">
                                                    {loginError}
                                                </div>
                                            )}

                                            <button className="btn btn-primary" type="submit">
                                                Sign in
                                            </button>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
            <div className="py-5"></div>
            <footer style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
                <p>&copy; meal@planner. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Login;
