import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import FormInput from "../components/FormInput";

const LoginScreen = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [loginMessage, setLoginMessage] = useState("");

    const [values, setValues] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        regEmail: "",
        regPassword: "",
        reRegPassword: "",
        phone: "",
    });

    const loginInputs = [
        {
            id: 1,
            name: "email",
            type: "text",
            label: "Email",
            iconShow: false,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            label: "Password",
            iconShow: true,
        },
    ];

    const registerInputs = [
        {
            id: 3,
            name: "firstName",
            type: "text",
            label: "First name",
            iconShow: false,
            errorMessage:
                "First name should be 3-16 characters and shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]{3,16}$",
            required: true,
        },
        {
            id: 4,
            name: "lastName",
            type: "text",
            label: "Last name",
            iconShow: false,
            errorMessage:
                "Last name should be 3-16 characters and shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]{3,16}$",
            required: true,
        },
        {
            id: 5,
            name: "regEmail",
            type: "email",
            label: "Email",
            iconShow: false,
            errorMessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 6,
            name: "regPassword",
            type: "password",
            label: "Password",
            iconShow: true,
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 7,
            name: "reRegPassword",
            type: "password",
            label: "Confirm Password",
            iconShow: true,
            errorMessage: "Passwords don't match!",
            pattern: values.password,
            required: true,
        },
        {
            id: 8,
            name: "phone",
            type: "text",
            label: "Phone",
            iconShow: false,
            errorMessage:
                "Phone number should be 10 numbers and shouldn't include any special character!",
            pattern: "(0[3|5|7|8|9])+([0-9]{8})",
            required: true,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmitLogin = (e) => {
        e.preventDefault();
        setLoginMessage("Login failed, please check your email and password");
    };
    const handleSubmitRegister = (e) => {
        e.preventDefault();
    };

    return (
        <div className="overlay-form">
            <div className="login-form">
                {/* <Row> */}
                <div
                    className="form-tranfer-control"
                    style={isLogin ? {} : { transform: "translateX(-100%)" }}>
                    <Col xs={12}>
                        <form onSubmit={handleSubmitLogin}>
                            <div className="login">
                                <div className="heading">Login</div>
                                <div className="sub-heading">
                                    If You Are Already a Member, Easily Log In
                                </div>
                                <span>{loginMessage}</span>
                                {loginInputs.map((input) => (
                                    <FormInput
                                        key={input.id}
                                        {...input}
                                        value={values[input.name]}
                                        onChange={onChange}
                                    />
                                ))}
                                <button type="submit" className="btn-login">
                                    Login
                                </button>
                                <div className="bar-or">
                                    <p>OR</p>
                                </div>
                                <button className="btn-login-gg">
                                    <img
                                        src="./images/login/google-logo.png"
                                        alt=""
                                    />
                                    <p>Login with Google</p>
                                </button>
                                <div className="hint">
                                    <div className="heading">
                                        If You Don't Have An Account, Create
                                    </div>
                                    <div
                                        className="btn-transfer"
                                        onClick={() => setIsLogin(!isLogin)}>
                                        Register
                                    </div>
                                </div>
                            </div>
                        </form>
                    </Col>
                    <Col xs={12}>
                        <form onSubmit={handleSubmitRegister}>
                            <div className="register">
                                <div className="heading">Register</div>
                                <div className="hint">
                                    <div className="heading">
                                        If You Have An Account, Login
                                    </div>
                                    <div
                                        className="btn-transfer"
                                        onClick={() => setIsLogin(!isLogin)}>
                                        Login
                                    </div>
                                </div>
                                {registerInputs.map((input) => (
                                    <FormInput
                                        key={input.id}
                                        {...input}
                                        value={values[input.name]}
                                        onChange={onChange}
                                    />
                                ))}
                                <button className="btn-register">
                                    Register
                                </button>
                            </div>
                        </form>
                    </Col>
                </div>
                {/* </Row> */}
                {/* <div
          className="overlay-img"
          style={
            isLogin ? {} : { transform: "translateX(-100%) translateX(-40px)" }
          }>
          <div
            className="login-img"
            style={{
              backgroundImage: `url('./images/login/login-img.png')`,
            }}></div>
        </div> */}
            </div>
        </div>
    );
};

export default LoginScreen;
