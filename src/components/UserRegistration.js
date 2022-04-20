import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import * as Yup from "yup";
import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ValidateSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  contact: Yup.string().required("Contact number is required"),
});

const UserRegistration = () => {
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
      <h4>Business Correspondence Registration</h4>
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
                placeholder="Enter name"
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
                placeholder="Enter contact number"
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
                <div style={{ marginLeft: 10, marginTop: 10 }}>
                  <p>Upload Adhaar Card</p>
                  <input type="file" onChange={onFileChange} />
                </div>

                {selectedFile && (
                  <center>
                    <img
                      src={preview}
                      alt="img"
                      style={{
                        marginTop: 20,
                        height: 300,
                        width: "auto",
                      }}
                    />
                  </center>
                )}
              </span>
            </div>

            <div className="form-group" style={{ padding: 10 }}>
              <p>Educational Qualification</p>
              <FieldArray
                name="attributes"
                render={(arrayHelpers) => (
                  <div>
                    {values.attributes && values.attributes.length > 0 ? (
                      values.attributes.map((attribut, index) => (
                        <div
                          style={{
                            border: "1px solid #c7c9cc",
                            borderRadius: 5,
                            padding: 12,
                            marginTop: 15,
                          }}
                          key={index}
                        >
                          <button
                            type="button"
                            className="btn btn-default btn-danger"
                            onClick={() => arrayHelpers.remove(index)}
                            style={{
                              marginBottom: 10,
                              float: "right",
                            }}
                          >
                            Remove
                          </button>

                          <Field
                            name={`attributes.${index}.trait_type`}
                            autoComplete="flase"
                            placeholder="Exam name (10th /10+2 etc)"
                            className={`form-control text-muted `}
                            style={{
                              marginTop: 10,
                              padding: 9,
                            }}
                          />
                          <Field
                            name={`attributes.${index}.value`}
                            autoComplete="flase"
                            placeholder="Score (in %)"
                            className={`form-control text-muted`}
                            style={{
                              marginTop: 10,
                              padding: 9,
                            }}
                          />
                        </div>
                      ))
                    ) : (
                      <button
                        type="button"
                        className="btn btn-default btn-primary"
                        onClick={() => arrayHelpers.push("")}
                      >
                        {/* show this when user has removed all attributes from the list */}
                        Add attributes
                      </button>
                    )}
                    {values.attributes.length !== 0 && (
                      <button
                        type="button"
                        className="btn btn-default btn-success"
                        onClick={() =>
                          arrayHelpers.insert(values.attributes.length + 1, "")
                        }
                        style={{
                          marginTop: 10,
                        }}
                      >
                        + Add
                      </button>
                    )}
                  </div>
                )}
              />
            </div>
            <div className="form-group">
              <span className="input-group-btn">
                <input
                  className="btn btn-default btn-primary"
                  type="button"
                  onClick={() => history("/")}
                  value={"Submit"}
                />
              </span>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default UserRegistration;
