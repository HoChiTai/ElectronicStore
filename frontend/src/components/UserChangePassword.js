import React, { useState } from "react";
import FormInput from "../components/FormInput";

const UserChangePassword = () => {
    const [values, setValues] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "currentPassword",
            type: "password",
            label: "Current password",
            iconShow: true,
            required: true,
        },
        {
            id: 2,
            name: "newPassword",
            type: "password",
            label: "New password",
            iconShow: true,
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 3,
            name: "confirmNewPassword",
            type: "password",
            label: "Confirm new password",
            iconShow: true,
            errorMessage: "Passwords don't match!",
            pattern: values.newPassword,
            required: true,
        },
    ];

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleChange = (e) => {
        e.preventDefault();
    };

    return (
        <form className="user-change-password" onSubmit={handleChange}>
            {inputs.map((input) => (
                <div className="user-change-password__item" key={input.id}>
                    <h6>{input.label}</h6>
                    <FormInput
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                    {input.id === 1 && <a href="#">Forgot Password</a>}
                </div>
            ))}
            <button className="user-change-password__btn">Change</button>
        </form>
    );
};

export default UserChangePassword;
