import React, { useEffect, useState } from "react";
import { Row, Col, Button, FloatingLabel, Form } from "react-bootstrap";
import FormInput from "./FormInput";

const AdminProductForm = () => {
    const [avatar, setAvatar] = useState({ preview: "/images/p5.jpg" });
    const [description, setDescription] = useState("");

    const [values, setValues] = useState({
        image: avatar,
        name: "",
        price: "",
        screenSize: "",
        frontCamera: "",
        rearCamera: "",
        os: "",
        cpu: "",
        gpu: "",
        ram: "",
        rom: "",
        connectTech: "",
        batteryCapacity: "",
        date: "",
        cateID: "",
        brandID: "",
        description: description,
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            type: "text",
            label: "Name",
            iconShow: false,
            errorMessage: "Name shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 2,
            name: "price",
            type: "text",
            label: "Price",
            iconShow: false,
            errorMessage:
                "Price should be numbers and shouldn't include any special character!",
            pattern: "^[0-9]+$",
            required: true,
        },
        {
            id: 3,
            name: "screenSize",
            type: "text",
            label: "ScreenSize",
            iconShow: false,
            errorMessage: "ScreenSize shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 4,
            name: "frontCamera",
            type: "text",
            label: "FrontCamera",
            iconShow: false,
            errorMessage:
                "FrontCamera shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 5,
            name: "rearCamera",
            type: "text",
            label: "RearCamera",
            iconShow: false,
            errorMessage: "RearCamera shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 6,
            name: "os",
            type: "text",
            label: "OS",
            iconShow: false,
            errorMessage: "OS shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 7,
            name: "cpu",
            type: "text",
            label: "CPU",
            iconShow: false,
            errorMessage: "CPU shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 8,
            name: "gpu",
            type: "text",
            label: "GPU",
            iconShow: false,
            errorMessage: "GPU shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 9,
            name: "ram",
            type: "text",
            label: "RAM",
            iconShow: false,
            errorMessage:
                "RAM should be numbers and shouldn't include any special character!",
            pattern: "^[0-9]+$",
            required: true,
        },
        {
            id: 10,
            name: "rom",
            type: "text",
            label: "ROM",
            iconShow: false,
            errorMessage:
                "ROM should be numbers and shouldn't include any special character!",
            pattern: "^[0-9]+$",
            required: true,
        },
        {
            id: 11,
            name: "connectTech",
            type: "text",
            label: "ConnectTech",
            iconShow: false,
            errorMessage:
                "ConnectTech shouldn't include any special character!",
            pattern:
                "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$",
            required: true,
        },
        {
            id: 12,
            name: "batteryCapacity",
            type: "text",
            label: "BatteryCapacity",
            iconShow: false,
            errorMessage:
                "BatteryCapacity should be numbers and shouldn't include any special character!",
            pattern: "^[0-9]+$",
            required: true,
        },
        {
            id: 13,
            name: "date",
            type: "text",
            label: "Date",
            iconShow: false,
            errorMessage:
                "Date should be numbers and shouldn't include any special character!",
            pattern: "^[0-9]+$",
            required: true,
        },
        {
            id: 14,
            name: "cateID",
            type: "text",
            label: "CateID",
            iconShow: false,
            errorMessage:
                "CateID should be numbers and shouldn't include any special character!",
            pattern: "^[0-9]+$",
            required: true,
        },
        {
            id: 14,
            name: "brandID",
            type: "text",
            label: "BrandID",
            iconShow: false,
            errorMessage:
                "BrandID should be numbers and shouldn't include any special character!",
            pattern: "^[0-9]+$",
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

    const handleCreate = (e) => {
        e.preventDefault();
    };

    return (
        <div className="mt-4 px-4">
            <h3>Product Infomation</h3>
            <form>
                <div
                    className="product-img mt-4"
                    style={{
                        backgroundImage: `url(${avatar && avatar.preview})`,
                    }}>
                    <label htmlFor="change-avatar">
                        <i className="fa-solid fa-pen"></i>
                    </label>
                    <input
                        type="file"
                        id="change-avatar"
                        onChange={handlePreviewAvatar}
                    />
                </div>
                <Row className="mt-4">
                    {inputs.map((input) => (
                        <Col xs={4} className="px-4" key={input.id}>
                            <FormInput
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        </Col>
                    ))}
                </Row>
                <FloatingLabel
                    controlId="floatingTextarea2"
                    label="Description">
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "140px", marginTop: 10 }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </FloatingLabel>
                <Button variant="success" className="my-4 ">
                    Create
                </Button>
            </form>
        </div>
    );
};

export default AdminProductForm;
