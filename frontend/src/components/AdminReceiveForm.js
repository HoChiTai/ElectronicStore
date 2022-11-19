import React, { useState } from "react";
import { Row, Col, Table, Button, Form } from "react-bootstrap";

const AdminReceiveForm = () => {
    const products = [
        {
            id: 1,
            image: "/images/p5.jpg",
            name: "abc",
        },
        {
            id: 2,
            image: "/images/p4.jpg",
            name: "abcdđ",
        },
        {
            id: 3,
            image: "/images/p3.jpg",
            name: "abcqeq qưeqw",
        },
    ];

    const [receiveNotes, setReceiveNotes] = useState([]);

    console.log(receiveNotes);

    const handleUpdate = (i, data) => {
        const newState = receiveNotes.map((receiveNote, x) => {
            if (x === i) return { ...receiveNote, ...data };

            return receiveNote;
        });
        setReceiveNotes(newState);
    };

    const handleCreate = () => {
        // index trong ReceiveNote tương ứng với index trong products
        // dùng index để lấy mã sản phẩm
    };

    return (
        <div className="mt-4 px-4">
            <h3>Receive Note</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ width: "6%" }}>#</th>
                        <th style={{ width: "10%" }}>Image</th>
                        <th style={{ width: "60%" }}>Name</th>
                        <th style={{ width: "10%" }}>Quantity</th>
                        <th style={{ width: "10%" }}>Price</th>
                        <th style={{ width: "4%" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {receiveNotes.map((receiveNote, i) => (
                        <tr key={i}>
                            <td>{products[receiveNote.index].id}</td>
                            <td>
                                <img
                                    className="admin-product-item"
                                    src={products[receiveNote.index].image}
                                    alt=""
                                />
                            </td>
                            <td>
                                <Form.Select
                                    aria-label="Default select example"
                                    onChange={(e) =>
                                        handleUpdate(i, {
                                            index: e.target.value,
                                        })
                                    }>
                                    {products.map((product, index) => (
                                        <option
                                            key={product.id}
                                            value={index}
                                            required={
                                                product.id === receiveNote.id
                                            }>
                                            {product.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </td>
                            <td>
                                <Form.Control
                                    type="number"
                                    placeholder="Quantity"
                                    value={receiveNote.quantity}
                                    onChange={(e) =>
                                        handleUpdate(i, {
                                            quantity: e.target.value,
                                        })
                                    }
                                />
                            </td>
                            <td>
                                <Form.Control
                                    type="text"
                                    placeholder="Price"
                                    value={receiveNote.price}
                                    onChange={(e) =>
                                        handleUpdate(i, {
                                            price: e.target.value,
                                        })
                                    }
                                />
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    className="my-4 "
                                    onClick={() => {
                                        receiveNotes.splice(i, 1);
                                        setReceiveNotes([...receiveNotes]);
                                    }}>
                                    <i className="fa-solid fa-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className="w-100 d-flex justify-content-center">
                <Button
                    variant="primary"
                    className="my-4 "
                    onClick={() =>
                        setReceiveNotes([
                            ...receiveNotes,
                            {
                                id: receiveNotes.length + 1,
                                quantity: 1,
                                price: 1,
                                index: 0,
                            },
                        ])
                    }>
                    <i className="fa-solid fa-circle-plus"></i>
                </Button>
            </div>
            <Button variant="success" className="mb-4" onClick={handleCreate}>
                Create
            </Button>
        </div>
    );
};

export default AdminReceiveForm;
