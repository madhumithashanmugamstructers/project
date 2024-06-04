// import React, { useState } from 'react';
// import companyLogo from '../../assets/images/auth/company-logo.jpg';
// import { Link } from 'react-router-dom';
// import '../../assets/css/logpage/signup.css';

// const SignUp = () => {
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    // const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);
    // const [passwordsMatch, setPasswordsMatch] = useState(false);
    // const [passwordVisible, setPasswordVisible] = useState(false);
    // const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value);
//     };

//     const handleConfirmPasswordChange = (event) => {
//         const confirmPasswordValue = event.target.value;
//         setConfirmPassword(confirmPasswordValue);
//         setPasswordsMatch(confirmPasswordValue === password);
//         setShowPasswordMatchError(confirmPasswordValue !== password);
//     };

//     const handleTogglePasswordVisibility = () => {
//         setPasswordVisible(!passwordVisible);
//     };

//     const handleToggleConfirmPasswordVisibility = () => {
//         setConfirmPasswordVisible(!confirmPasswordVisible);
//     };

//     return (
//         <div className='container'>
//             <section className='img-logo-section-left'>
//                 <img className='img-company-logo' src={companyLogo} alt="Company Logo" />
//             </section>
//             <div className='signup-right'>
//                 <div className='square'>
//                     <h1 className='heading'>Create an Account</h1>
//                     <p className='text'>Please provide your details to sign up.</p>
//                     <div className='input-first-name'>
//                         <input type="text" className='form-control ' placeholder='First Name*' />
//                     </div>
//                     <div className='input last-name'>
//                         <input type="text" className='form-control' placeholder='Last Name*' />
//                     </div>
//                     <div className='input-phone-number'>
//                         <input type="" className='form-control' placeholder='Phone Number*' />
//                     </div>
//                     <div className="input-email">
//                         <input type="email" className="form-control" placeholder="Email address*" />
//                     </div>
//                     <div className="password-input-container">
//                         <input
//                             type={passwordVisible ? 'text' : 'password'}
//                             className="password-input"
//                             placeholder="Password*"
//                             value={password}
//                             onChange={handlePasswordChange}
//                         />
//                         <button
//                             type="button"
//                             className="toggle-visibility"
//                             onClick={handleTogglePasswordVisibility}>
//                             {passwordVisible ? '🔒' : '👁️'}
//                         </button>
//                     </div>
//                     <div className="password-input-container">
//                         <input
//                             type={confirmPasswordVisible ? 'text' : 'password'}
//                             className="confirm-password-form-control"
//                             placeholder="Confirm Password*"
//                             value={confirmPassword}
//                             onChange={handleConfirmPasswordChange}
//                         />
//                         <button
//                             type="button"
//                             className="toggle-visibility"
//                             onClick={handleToggleConfirmPasswordVisibility}>
//                             {confirmPasswordVisible ? '🔒' : '👁️'}
//                         </button>
//                         {showPasswordMatchError && <p style={{ color: 'red' }}>Passwords do not match!</p>}
//                     </div>
//                     {passwordsMatch && (
//                         <div className="popup">
//                             <p>Passwords match!</p>
//                         </div>
//                     )}
//                     <div className='container-for-login-signin'>
//                         <section className='sign-in-section'>
//                             <div>
//                                 <button className='button-for-signup'>Sign up</button>
//                             </div>
//                         </section>
//                         <section className='forgot-password-button-section'>
//                             <div className='signin-button'>
//                                 <p className='p-for-signin'>Already have an account?<Link to="/signin" className="f-w-400"> Sign In</Link></p>
//                             </div>
//                         </section>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

// src/components/SignUp.js
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signUp } from '../../store/authslice';
// import { Link } from 'react-router-dom';
// import companyLogo from '../../assets/images/auth/company-logo.jpg';
// import '../../assets/css/logpage/signup.css';

// const SignUp = () => {
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);
//     const [passwordsMatch, setPasswordsMatch] = useState(false);
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//     const dispatch = useDispatch();
//     const { loading, error } = useSelector((state) => state.auth) || {};
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form Data:', formData); // Log formData

//         if (formData.password !== formData.confirmPassword) {
//             alert('Passwords do not match!');
//             return;
//         }
//         dispatch(signUp(formData));
//     };

//     return (
    
//         <div className='container-signup'>
//             <section className='img-logo-section-left-signup'>
//                 <img className='img-company-logo-signup' src={companyLogo} alt="Company Logo" />
//             </section>
//             <div className='signup-inner-container-signup'>
//                 <div className='square-signup'>
//                     <h1 className='heading-signup'>Create an Account</h1>
//                     <p className='text=signup'>Please provide your details to sign up.</p>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="firstName"
//                             className='form-control-signup'
//                             placeholder='First Name*'
//                             value={formData.firstName}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="text"
//                             name="lastName"
//                             className='form-control-signup'
//                             placeholder='Last Name*'
//                             value={formData.lastName}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="text"
//                             name="phoneNumber"
//                             className='form-control-signup'
//                             placeholder='Phone Number*'
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             className='form-control-signup'
//                             placeholder='Email address*'
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="password"
//                             name="password"
//                             className="form-control-signup"
//                             placeholder="Password*"
//                             value={formData.password}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             className="form-control-signup"
//                             placeholder="Confirm Password*"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                         />
//                         {error && <p style={{ color: 'red' }}>{error}</p>}
//                         <button type="submit" className='button-for-signup'>
//                             {loading ? 'Loading...' : 'Sign up'}
//                         </button>
//                         <p className='signin'>
//                         Already have an account?
//                         <Link to="/signin" className=""> Sign In</Link>
//                     </p>
//                     </form>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;
///////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { signUp } from '../../store/authslice';
// import { Link } from 'react-router-dom';
// import companyLogo from '../../assets/images/auth/company-logo.jpg';
// import '../../assets/css/logpage/signup.css';

// const SignUp = () => {
//     const dispatch = useDispatch();
//     const { loading, error } = useSelector((state) => state.auth) || {};
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         phoneNumber: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//     });
//     const [passwordVisible, setPasswordVisible] = useState(false);
//     const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//     const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);
//     const [passwordsMatch, setPasswordsMatch] = useState(true);

//     useEffect(() => {
//         setPasswordsMatch(formData.password === formData.confirmPassword);
//     }, [formData.password, formData.confirmPassword]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (formData.password !== formData.confirmPassword) {
//             setShowPasswordMatchError(true);
//             return;
//         }
//         setShowPasswordMatchError(false);
//         dispatch(signUp(formData));
//     };

//     return (
//         <div className='container-signup'>
//             <section className='img-logo-section-left-signup'>
//                 <img className='img-company-logo-signup' src={companyLogo} alt="Company Logo" />
//             </section>
//             <div className='signup-inner-container-signup'>
//                 <div className='square-signup'>
//                     <h1 className='heading-signup'>Create an Account</h1>
//                     <p className='text-signup'>Please provide your details to sign up.</p>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="firstName"
//                             className='form-control-signup'
//                             placeholder='First Name*'
//                             value={formData.firstName}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="text"
//                             name="lastName"
//                             className='form-control-signup'
//                             placeholder='Last Name*'
//                             value={formData.lastName}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="text"
//                             name="phoneNumber"
//                             className='form-control-signup'
//                             placeholder='Phone Number*'
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             className='form-control-signup'
//                             placeholder='Email address*'
//                             value={formData.email}
//                             onChange={handleChange}
//                         />
//                         <div className="password-input-container">
//                             <input
//                                 type={passwordVisible ? "text" : "password"}
//                                 name="password"
//                                 className="form-control-signup"
//                                 placeholder="Password*"
//                                 value={formData.password}
//                                 onChange={handleChange}
//                             />
//                             <button
//                                 type="button"
//                                 className="toggle-visibility"
//                                 onClick={() => setPasswordVisible(!passwordVisible)}
//                             >
//                                 {passwordVisible ? "Hide" : "Show"}
//                             </button>
//                         </div>
//                         <div className="password-input-container">
//                             <input
//                                 type={confirmPasswordVisible ? "text" : "password"}
//                                 name="confirmPassword"
//                                 className="form-control-signup"
//                                 placeholder="Confirm Password*"
//                                 value={formData.confirmPassword}
//                                 onChange={handleChange}
//                             />
//                             <button
//                                 type="button"
//                                 className="toggle-visibility"
//                                 onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
//                             >
//                                 {confirmPasswordVisible ? "Hide" : "Show"}
//                             </button>
//                         </div>
//                         {showPasswordMatchError && (
//                             <p style={{ color: 'red' }}>Passwords do not match!</p>
//                         )}
//                         {error && <p style={{ color: 'red' }}>{error}</p>}
//                         <button type="submit" className='button-for-signup'>
//                             {loading ? 'Loading...' : 'Sign up'}
//                         </button>
//                         <p className='signin'>
//                             Already have an account?
//                             <Link to="/signin" className=""> Sign In</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../store/authslice';
import { Link } from 'react-router-dom';
import companyLogo from '../../assets/images/auth/company-logo.jpg';
import '../../assets/css/logpage/signup.css';

const SignUp = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth) || {};
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [showPasswordMatchError, setShowPasswordMatchError] = useState(false);

    useEffect(() => {
        setShowPasswordMatchError(formData.password !== formData.confirmPassword);
    }, [formData.password, formData.confirmPassword]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setShowPasswordMatchError(true);
            return;
        }
        setShowPasswordMatchError(false);
        dispatch(signUp(formData));
    };

    return (
        <div className='container-signup'>
            <section className='img-logo-section-left-signup'>
                <img className='img-company-logo-signup' src={companyLogo} alt="Company Logo" />
            </section>
            <div className='signup-inner-container-signup'>
                <div className='square-signup'>
                    <h1 className='heading-signup'>Create an Account</h1>
                    <p className='text-signup'>Please provide your details to sign up.</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="firstName"
                            className='form-control-signup'
                            placeholder='First Name*'
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="lastName"
                            className='form-control-signup'
                            placeholder='Last Name*'
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            className='form-control-signup'
                            placeholder='Phone Number*'
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            className='form-control-signup'
                            placeholder='Email address*'
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <div className="password-input-container">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                className="form-control-signup"
                                placeholder="Password*"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="toggle-visibility"
                                onClick={() => setPasswordVisible(!passwordVisible)}
                            >
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                        <div className="password-input-container">
                            <input
                                type={confirmPasswordVisible ? "text" : "password"}
                                name="confirmPassword"
                                className="form-control-signup"
                                placeholder="Confirm Password*"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className="toggle-visibility"
                                onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                            >
                                {confirmPasswordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                        {showPasswordMatchError && (
                            <p style={{ color: 'red' }}>Passwords do not match!</p>
                        )}
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <button type="submit" className='button-for-signup'>
                            {loading ? 'Loading...' : 'Sign up'}
                        </button>
                        <p className='signin'>
                            Already have an account?
                            <Link to="/signin" className=""> Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;

