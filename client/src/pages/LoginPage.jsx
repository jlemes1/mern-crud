import { useForm } from 'react-hook-form';
import { useAuth } from '../context/useAuth';
import { Link } from 'react-router';

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signIn, errors: signInErrors } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signIn(data);
  });

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='max-w-md p-10 w-full rounded-md bg-zinc-800'>
        {signInErrors.map((error, i) => (
          <div key={i} className='bg-red-500 text-white text-center my-2 p-2 '>
            {error}
          </div>
        ))}
        <form onSubmit={onSubmit}>
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
            Login
          </button>
        </form>
        <p className='flex  justify-between'>
          Don't have an account?
          <Link className='text-sky-500' to='/register'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
