import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => {
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('User Registered:', values);
        alert('Registration successful!');
      }}
    >
      {() => (
        <Form>
          <div>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              required
            />
            <ErrorMessage name="username" component="p" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              required
            />
            <ErrorMessage name="email" component="p" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              required
            />
            <ErrorMessage name="password" component="p" style={{ color: 'red' }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
