import { useForm } from 'react-hook-form';
import { useAuth } from '../context/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated, navigate]);

  const onSubmit = handleSubmit(async (values) => {
    signUp(values);
  });

  return (
    <div className='max-w-md p-10 rounded-md m-4 bg-zinc-800'>
      {registerErrors.map((error, i) => (
        <div key={i} className='bg-red-500 text-white p-2'>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type='text'
          {...register('username', { required: true })}
          className='w-full bg-zinc-600 text-white rounded-md p-2 my-2'
          placeholder='Username'
        />
        {errors.username && (
          <p className='text-red-500'>Username is required</p>
        )}
        <input
          type='email'
          {...register('email', { required: true })}
          className='w-full bg-zinc-600 text-white rounded-md p-2 my-2'
          placeholder='Email'
        />
        {errors.email && <p className='text-red-500'>Email is required</p>}
        <input
          type='password'
          {...register('password', { required: true })}
          className='w-full bg-zinc-600 text-white rounded-md p-2 my-2'
          placeholder='Password'
        />
        {errors.password && (
          <p className='text-red-500'>Password is required</p>
        )}
        <button
          type='submit'
          className='bg-sky-500 rounded-md p-2 my-2 cursor-pointer'
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
