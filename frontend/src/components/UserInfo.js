import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import FormInput from "./FormInput";

const UserInfo = () => {
    const [avatar, setAvatar] = useState();

    const [values, setValues] = useState({
        firstName: "Tèo",
        lastName: "abc",
        email: "abc@123.com",
        phone: "090808108",
        image: "/images/p5.jpg",
    });

    const inputs = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
            name: "email",
            type: "email",
            label: "Email",
            iconShow: false,
            errorMessage: "It should be a valid email address!",
            required: true,
        },
        {
            id: 4,
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

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        };
    }, [avatar]);

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);

        setAvatar(file);

        e.target.value = null;
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
    };

    return (
        <div className="user-info">
            <Row>
                <Col xs={12}>
                    <div className="avatar">
                        <div
                            className="avatar__img"
                            style={{
                                backgroundImage: `url(${
                                    avatar && avatar.preview
                                }),url(${values.image})`,
                            }}>
                            <div
                                className="shadow-avatar"
                                style={{
                                    backgroundImage: `url(${
                                        avatar && avatar.preview
                                    }),url(${values.image})`,
                                }}></div>
                            <label htmlFor="update-avatar">
                                <i className="fa-solid fa-pen"></i>
                            </label>
                            <input
                                type="file"
                                id="update-avatar"
                                onChange={handlePreviewAvatar}
                            />
                        </div>
                        <div className="avatar__name">
                            <h3>Tèo</h3>
                            <h6>Rank Bạc</h6>
                        </div>
                    </div>
                </Col>
            </Row>
            <form className="user-info__form" onSubmit={handleUpdate}>
                <Row>
                    {inputs.map((input) => (
                        <Col xs={6} className="px-4" key={input.id}>
                            <FormInput
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        </Col>
                    ))}
                </Row>
                <button className="btn-update-form">Update</button>
            </form>
        </div>
    );
};

export default UserInfo;
