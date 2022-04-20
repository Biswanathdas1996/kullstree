import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ValidateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact: Yup.string().required("Contact number is required"),
});

const CorporateRegistration = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  let history = useNavigate();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div
      style={{
        background: "white",
      }}
    >
      <h4>Corporate Registration</h4>
      <Formik
        initialValues={{
          name: "",

          contact: "",

          attributes: [
            {
              trait_type: "",
              value: "",
            },
          ],
        }}
        validationSchema={ValidateSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values=======>", values);

          setSubmitting(false);
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
          <Form>
            <div
              className="form-group"
              style={{ marginLeft: 10, marginTop: 10 }}
            >
              <Field
                type="text"
                name="name"
                autoComplete="flase"
                placeholder="Enter company name"
                className={`form-control text-muted ${
                  touched.name && errors.name ? "is-invalid" : ""
                }`}
                style={{ marginRight: 10, padding: 9 }}
              />
            </div>

            <div
              className="form-group"
              style={{ marginLeft: 10, marginTop: 10 }}
            >
              <Field
                type="number"
                name="contact"
                autoComplete="flase"
                placeholder="Enter point of contact number"
                className={`form-control text-muted ${
                  touched.price && errors.price ? "is-invalid" : ""
                }`}
                style={{ marginRight: 10, padding: 9 }}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: 10, marginTop: 10 }}
            >
              <Field
                type="text"
                name="address"
                autoComplete="flase"
                placeholder="Enter address"
                className={`form-control text-muted `}
                style={{ marginRight: 10, padding: 9 }}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: 10, marginTop: 10 }}
            >
              <Field
                type="text"
                name="address"
                autoComplete="flase"
                placeholder="Enter city/village name"
                className={`form-control text-muted `}
                style={{ marginRight: 10, padding: 9 }}
              />
            </div>
            <div
              className="form-group"
              style={{ marginLeft: 10, marginTop: 10 }}
            >
              <Field
                type="text"
                name="address"
                autoComplete="flase"
                placeholder="Enter pin code"
                className={`form-control text-muted `}
                style={{ marginRight: 10, padding: 9 }}
              />
            </div>

            <div className="form-group">
              <span className="input-group-btn">
                <input
                  className="btn btn-default btn-primary"
                  type="button"
                  value={"Submit"}
                  onClick={() => history("/users")}
                />
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default CorporateRegistration;
