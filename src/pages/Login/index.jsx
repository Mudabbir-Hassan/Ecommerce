import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UserAuthContext from "../../context/user/UserAuthContext";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

export default function Login() {
  const { isloggedin, setIsLoggedIn } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate('/');
    
  };

  const validationSchema = Yup.object({
    email: Yup.string()
         .email('Invalid email')
         .required('Email is required'),

    password: Yup.string()
         .min(6, 'Password must be at least 6 characters')
         .required('Password is required'),
  });

  return (
    <div className='flex flex-col items-center justify-center h-screen' style={{
      backgroundImage: 'linear-gradient(to right, black, blue)',
    }}>
      <h1 className='text-4xl mb-6 text-white'>Welcome back</h1>
      <Formik
        initialValues={{
          email: "",
          password: ""
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          handleLogin(); 
        }}
      >
        {({ errors, touched }) => (
          <Form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                Email
              </label>
              <Field
                name='email'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='email'
                type='text'
                placeholder='email'
              />
              {errors.email && touched.email ? (
                <div className='text-red-500 text-xs mt-1'>{errors.email}</div>
              ) : null}
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <Field
                name='password'
                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='**********'
              />
              {errors.password && touched.password ? (
                <div className='text-red-500 text-xs mt-1'>{errors.password}</div>
              ) : null}
            </div>
            <div className='flex items-center justify-between'>
              <button
                className='bg-blue-500 hover:bg-yellow hover:text-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                type='submit'
              >
                Log In
              </button>
              <Link
                to='/sign-up'
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-900 cursor-pointer'
              >
                Sign up?
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
