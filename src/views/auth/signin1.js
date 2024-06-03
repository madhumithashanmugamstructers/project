// import React from 'react';
// import '../../assets/css/logpage/signin.css';
// import companyLogo from '../../assets/images/auth/company-logo.jpg';
// import { useSelector, useDispatch } from 'react-redux';
// import { togglePasswordVisibility } from '../../store/hidepassword';
// import { Link } from 'react-router-dom';

// const SignIn = () => {
    // const dispatch = useDispatch();
    // const passwordVisible = useSelector((state) => state.passwordVisible);

    // const handleToggleVisibility = () => {
    //     dispatch(togglePasswordVisibility());
    // };

//     return (
//         <div className='container'>
//             <section className='img-logo-section-left'>
//                 <img className='img-company-logo' src={companyLogo} alt="Company Logo" />
//             </section>
//             <section className='right-section'>
//                 <div className='square-right'>
//                     <div className='square'>
//                         <h1 className='heading'>Welcome Again!</h1>
//                         <p className='text'>To be connected with us please provide your login info.</p>
                        // <div className="input-email">
                        //     <input type="email" className="form-control" placeholder="Email address*" />
                        // </div>
                        // <div className="password-input-container">
                        //     <input
                        //         type={passwordVisible ? 'text' : 'password'}
                        //         className="password-input"
                        //         placeholder="Password*"
                        //     />
                        //     <button
                        //         type="button"
                        //         className="toggle-visibility"
                        //         onClick={handleToggleVisibility}
                        //     >
                        //         {passwordVisible ? '🔒' : '👁️'}
                        //     </button>
                        // </div>
//                         <div className='container-for-login-signin'>
//                             <section className='sign-in-section'>
//                                 <div>
//                                     <button className='button-for-signin'>Sign in</button>
//                                 </div>
//                             </section>
//                             <section className='forgot-password-button-section'>
//                                 <div>
//                                     <button className='forgot-password-button'>Forgot password</button>
//                                 </div>
//                             </section>
//                         </div>
//                         <div>
//                             <p className='no-account-p-tag'>
//                                 Don't have an account?
//                                 <Link to="/signup" className="f-w-400"> Sign Up</Link>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default SignIn;

// src/components/SignIn.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/authslice';
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/images/auth/company-logo.jpg';
import '../../assets/css/logpage/signin.css';
import { togglePasswordVisibility } from '../../store/hidepassword';


const SignIn = () => {
    const passwordVisible = useSelector((state) => state.passwordVisible);

    const { loading, error } = useSelector((state) => state.auth) || {};
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', credentials); // Log formData

        dispatch(signIn(credentials));
    };
    const handleToggleVisibility = () => {
        dispatch(togglePasswordVisibility());
    };

    return (
        <div className='container'>
            <section className='img-logo-section-left'>
                <img className='img-company-logo' src={companyLogo} alt="Company Logo" />
            </section>
            <section className='right-section'>
                <div className='square-right'>
                    <div className='square'>
                        <h1 className='heading'>Welcome Again!</h1>
                        <p className='text'>To be connected with us please provide your login info.</p>
                        <form onSubmit={handleSubmit}>
                        <div className="input-email">
                            <input type="email" 
                            name='email'
                            className="form-control" 
                            placeholder="Email address*"
                            value={credentials.email}
                            onChange={handleChange} />
                        </div>
                        <div className="password-input-container">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                name='password'
                                className="form-control"
                                placeholder="Password*"
                                value={credentials.password}
                                onChange={handleChange}
                            />
                            
                            <button
                                type="button"
                                className="toggle-visibility"
                                onClick={handleToggleVisibility}
                            >
                                {passwordVisible ? '🔒' : '👁️'}
                            </button>
                        </div>
                            {/* <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Email address*"
                                value={credentials.email}
                                onChange={handleChange}
                            />
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password*"
                                value={credentials.password}
                                onChange={handleChange}
                            /> */}
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                            <section className='sign-in-section'>
                            <button type="submit" className='button-for-signin'>
                                {loading ? 'Loading...' : 'Sign in'}
                            </button>
                            </section>
                            <section className='forgot-password-button-section'>
                                 <div>
                                     <button className='forgot-password-button'>Forgot password</button>
                                 </div>
                             </section>
                        </form>
                        <p className='no-account-p-tag'>
                            Don't have an account?
                            <Link to="/signup" className="f-w-400"> Sign Up</Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SignIn;
