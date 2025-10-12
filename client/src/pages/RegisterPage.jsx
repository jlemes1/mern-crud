import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth.js';

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const res = await registerRequest(values);
    console.log(res);
  });

  return (
    <div className='max-w-md p-10 rounded-md m-4 bg-zinc-800'>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          {...register('username', { required: true })}
          className='w-full bg-zinc-600 text-white rounded-md p-2 my-2'
          placeholder='Username'
        />
        <input
          type='email'
          {...register('email', { required: true })}
          className='w-full bg-zinc-600 text-white rounded-md p-2 my-2'
          placeholder='Email'
        />
        <input
          type='password'
          {...register('password', { required: true })}
          className='w-full bg-zinc-600 text-white rounded-md p-2 my-2'
          placeholder='Password'
        />
        <button type='submit' className='bg-sky-500 rounded-md p-2 my-2'>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
