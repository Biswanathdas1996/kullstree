import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const [selectedFile, setSelectedFile] = useState();

  let history = useNavigate();

  useEffect(() => {
    if (!selectedFile) {
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);

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
          attributes: [
            {
              trait_type: "",
              value: "",
            },
          ],
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("values=======>", values);

          setSubmitting(false);
        }}
      >
        {({ touched, errors, isSubmitting, values }) => (
          <Form>
            <div className="form-group">
              <span className="input-group-btn">
                <div style={{ marginLeft: 10, marginTop: 10 }}>
                  <p>Take picture of Aadhaar Card</p>
                  <input type="file" onChange={onFileChange} />
                </div>

                {/* {selectedFile && (
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
                )} */}
              </span>
            </div>

            {selectedFile && (
              <>
                <div
                  className="form-group"
                  style={{ marginLeft: 10, marginTop: 10 }}
                >
                  <b>Aadhaar number</b>
                  <Field
                    type="text"
                    value="5689-7705-3197"
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
                  <b>Name</b>
                  <Field
                    type="text"
                    value="Biswanath Das"
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
                  <b>Fathers Name</b>
                  <Field
                    type="text"
                    value="Shuvendu sekhar Das"
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
                  <b>Address 1</b>
                  <Field
                    type="text"
                    value="Nachinda, Marishda"
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
                  <b>State</b>
                  <Field
                    type="text"
                    value="West Bengal"
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
                  <b>Pin code</b>
                  <Field
                    type="text"
                    value="721444"
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
                  <b>Contact No (As per Aadhaar )</b>
                  <Field
                    type="text"
                    value="8001691299"
                    autoComplete="flase"
                    placeholder="Enter city/village name"
                    className={`form-control text-muted `}
                    style={{ marginRight: 10, padding: 9 }}
                  />
                </div>
              </>
            )}

            <div style={{ marginLeft: 10, marginTop: 10 }}>
              <p>Take selfie</p>
              <input type="file" />
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
