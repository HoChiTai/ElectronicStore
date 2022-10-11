import React, { useState } from 'react';
import { Row, Col} from 'react-bootstrap';

const LoginScreen = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [tgPassword, setTgPassword] = useState(true);
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [regEmail, setRegEmail] = useState();
    const [regPassword, setRegPassword] = useState();
    const [reRegPassword, setReRegPassword] = useState();
    const [tgRegPassword, setTgRegPassword] = useState(true);
    const [tgReRegPassword, setTgReRegPassword] = useState(true);
    const [phone, setPhone] = useState();

    return (
        <div className="overlay-form">
            <div className="login-form">
                <Row>
                    <Col xs={6}>
                        <div className="login">
                            <div className="heading">
                                Login
                            </div>
                            <div className="sub-heading">
                                If You Are Already a Member, Easily Log In
                            </div>
                            <div className="txt-field">
                                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
                                <label className={email ? "active" : ""}>Email</label>
                            </div>
                            <div className="txt-field">
                                <input type={tgPassword ? "password" : "text"} onChange={(e) => setPassword(e.target.value)}/>
                                <label className={password ? "active" : ""}>Password</label>
                                <div className='icon' onClick={() => setTgPassword(!tgPassword)}>
                                    {
                                        tgPassword ? <i class="fa-regular fa-eye"></i> 
                                        : <i class="fa-regular fa-eye-slash"></i>
                                    }  
                                </div>
                            </div>
                            <button className="btn-login">Login</button>
                            <div className="bar-or">
                                <p>OR</p>
                            </div>
                            <button className="btn-login-gg">
                                <img src="./images/login/google-logo.png" alt=""/>
                                <p>Login with Google</p>
                            </button>
                            <div className="hint">
                                <div className="heading">
                                    If You Don't Have An Account, Create
                                </div>
                                <button className="btn-transfer" onClick={() => setIsLogin(!isLogin)}>
                                    Register
                                </button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={6}>
                        <div className="register">
                            <div className="heading">
                                Register
                            </div>
                            <div className="hint">
                                <div className="heading">
                                    If You Have An Account, Login
                                </div>
                                <button className="btn-transfer" onClick={() => setIsLogin(!isLogin)}>
                                    Login
                                </button>
                            </div>
                            <div className="txt-field">
                                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                                <label className={firstName ? "active" : ""}>First name</label>
                            </div>
                            <div className="txt-field">
                                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                                <label className={lastName ? "active" : ""}>Last name</label>
                            </div>
                            <div className="txt-field">
                                <input type="text" onChange={(e) => setRegEmail(e.target.value)}/>
                                <label className={regEmail ? "active" : ""}>Email</label>
                            </div>
                            <div className="txt-field">
                                <input type={tgRegPassword ? "password" : "text"} 
                                        onChange={(e) => setRegPassword(e.target.value)}
                                />
                                <label className={regPassword ? "active" : ""}>Password</label>
                                <div className='icon' onClick={() => setTgRegPassword(!tgRegPassword)}>
                                    {
                                        tgRegPassword ? <i class="fa-regular fa-eye"></i> 
                                        : <i class="fa-regular fa-eye-slash"></i>
                                    }  
                                </div>
                            </div>
                            <div className="txt-field">
                                <input type={tgReRegPassword ? "password" : "text"}  
                                    onChange={(e) => setReRegPassword(e.target.value)}
                                />
                                <label className={reRegPassword ? "active" : ""}>Repeat Password</label>
                                <div className='icon' onClick={() => setTgReRegPassword(!tgReRegPassword)}>
                                    {
                                        tgReRegPassword ? <i class="fa-regular fa-eye"></i> 
                                        : <i class="fa-regular fa-eye-slash"></i>
                                    }  
                                </div>
                            </div>
                            <div className="txt-field">
                                <input type="text" onChange={(e) => setPhone(e.target.value)}/>
                                <label className={phone ? "active" : ""}>Phone</label>
                            </div>
                            <button className="btn-register">Register</button>
                        </div>
                    </Col>
                </Row>
                <div className="overlay-img" style={ isLogin ? {} : {transform: "translateX(-100%) translateX(-40px)"}}>
                    <div className="login-img" style={{backgroundImage: `url('./images/login/login-img.png')`}}></div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen