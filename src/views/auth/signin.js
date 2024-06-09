import React, { useContext, useState } from 'react';
// import axios from 'axios';
import '../../assets/css/logpage/signin.css';
import companyLogo from '../../assets/images/auth/company-logo.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { togglePasswordVisibility } from '../../store/hidepassword';
import JWTContext from '../../context/jwtcontext';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const dispatch = useDispatch();
    const passwordVisible = useSelector((state) => state.passwordVisible);
    const auth=useContext( JWTContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);

    const handleToggleVisibility = () => {
        dispatch(togglePasswordVisibility());
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        auth.login(email, password )
    }    //test

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post('', {
    //             email,
    //             password,
    //         });
    //         console.log(response.data);
    //         localStorage.setItem('credentials',response.access_token)

    //     headers:{
    //         "authorization": 'Bearer'
    //     }

    //     } catch (error) {
    //         setError('Invalid email or password');
    //         console.error(error);
    //     }
    // };

    //Destructuring Assignment

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await axios.post('http://192.168.1.103:8000/signin', { 
    //             email, 
    //             password,
    //         });
    //         console.log(response.data)
    //         const { access_token } = response.data;
    //         localStorage.setItem('credentials',access_token
    //         );
    //         console.log('Login successful');
    //         setError(null)
    //     } catch (error) {
    //         setError('Invalid email or password');
    //         console.error(error);
    //     }
    // };



    return (
        <div className='container-signin'>
            <section className='img-logo-section-left-signin'>
                <img className='img-company-logo-signin' src={companyLogo} alt="Company Logo" />
            </section>
            <section className='right-section-signin'>
                <div className='square-right-signin'>
                    <div className='square-signin'>
                        <h1 className='heading-signin'>Welcome Again!</h1>
                        <p className='text-signin'>To be connected with us please provide your login info.</p>
                        <form >
                            <div className="input-email-signin">
                                <input
                                    type="email"
                                    className="form-control-signin"
                                    placeholder="Email address*"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="password-input-container-signin">
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    className="password-input-signin"
                                    placeholder="Password*"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-visibility-signin"
                                    onClick={handleToggleVisibility}
                                >
                                    {passwordVisible ? '🔒' : '👁️'}
                                </button>
                            </div>
                            {/* {error && <p className="error-message">{error}</p>} */}
                            <div className='container-for-login-signin'>
                                <section className='sign-in-section'>
                                    <div>
                                        <button type="submit" onClick={handleSubmit} className='button-for-signin'>Sign in</button>
                                    </div>
                                </section>
                                <section className='forgot-password-button-section-signin'>
                                    <div>
                                        <button type="button" className='forgot-password-button-signin'>Forgot password</button>
                                    </div>
                                </section>
                            </div>
                        </form>
                        <div>
                            <p className='no-account-p-tag-signin'>
                                Don't have an account?
                                <Link to="/signup" className="f-w-400"> Sign Up</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
