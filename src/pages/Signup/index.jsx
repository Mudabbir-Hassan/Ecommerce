import React, { useContext } from 'react';
import {Link , useNavigate } from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import UserAuthContext from "../../context/user/UserAuthContext";

const Signup = () => {
  const { setIsLoggedIn } = useContext(UserAuthContext);
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'), 
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string().matches(/^\d{10}$/, 'Invalid phone number'),
    password: Yup.string()
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'Password must contain at least one uppercase letter, one number, and be at least 8 characters long')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  return (
    <div className='flex flex-col items-center justify-center h-screen' style={{ backgroundImage: 'linear-gradient(to right, black, blue)' }}>
      <h1 className='text-4xl mb-6 text-white'>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNumber: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setIsLoggedIn(true);
          setSubmitting(false);
          navigate('/');
        }}
      >
        {({ isSubmitting }) => (
          <Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                Name
              </label>
              <Field
                name='name'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='text'
                placeholder='Full Name'
              />
              <ErrorMessage name='name' component='div' className='text-red-500 text-xs mt-1' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <Field
                name='email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='email'
                placeholder='Email Address'
              />
              <ErrorMessage name='email' component='div' className='text-red-500 text-xs mt-1' />
            </div>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='phoneNumber'>
                Phone Number
              </label>
              <Field
                name='phoneNumber'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='tel'
                placeholder='Phone Number'
              />
              <ErrorMessage name='phoneNumber' component='div' className='text-red-500 text-xs mt-1' />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <Field
                name='password'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='password'
                placeholder='**********'
              />
              <ErrorMessage name='password' component='div' className='text-red-500 text-xs mt-1' />
            </div>

            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='confirmPassword'>
                Confirm Password
              </label>
              <Field
                name='confirmPassword'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                type='password'
                placeholder='**********'
              />
              <ErrorMessage name='confirmPassword' component='div' className='text-red-500 text-xs mt-1' />
            </div>

            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-yellow hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
                disabled={isSubmitting}
              >
                Sign Up
              </button>
              <Link
                to='/log-in'
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 cursor-pointer ml-4'
              >
                Already have an account? Log In
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;
