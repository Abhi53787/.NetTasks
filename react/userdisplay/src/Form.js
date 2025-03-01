import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Forms = ({ onUserAdded }) => {
    const validation = Yup.object({
        name: Yup.string().required("Please enter a name"),
        email: Yup.string().email("Invalid email").required("Please enter an email"),
        gender: Yup.string().required("Please select a gender"),
    });

    return (
        <Formik
            initialValues={{ name: "", email: "", gender: "" }}
            validationSchema={validation}  
            onSubmit={(values, { resetForm }) => {
                axios.post("http://localhost:5000/users", values)
                    .then(response => {
                        onUserAdded(response.data);
                        resetForm(); 
                    })
                    .catch(error => {
                        console.error("Error adding user:", error);
                    });
            }}
        >
            {({ isSubmitting }) => (
                <Form className="container mt-4 p-4 border rounded shadow">
                    <h3 className="mb-3 text-center">Add User</h3>

                    <div className="mb-3">
                        <label className="form-label">Name:</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email:</label>
                        <Field type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender:</label>
                        <Field as="select" name="gender" className="form-select">
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                        <ErrorMessage name="gender" component="div" className="text-danger" />
                    </div>

                    <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
                        Add User
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default Forms;
