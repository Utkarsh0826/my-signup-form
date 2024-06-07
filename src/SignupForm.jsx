// Import necessary libraries and hooks
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Define a schema using Zod
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  accountType: z.enum(['INVESTOR', 'RESTAURANT'], 'Account type is required'),
});

const SignupForm = () => {
  // Initialize the form with useForm hook and Zod resolver
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data);
    // You can add your form submission logic here
  };

  return (
    // Form container with Tailwind CSS classes
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      
      {/* Name field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Email field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Password field */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
        {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}
      </div>

      {/* Account Type field */}
      <div className="mb-4">
        <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">Account Type</label>
        <select
          id="accountType"
          {...register('accountType')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        >
          <option value="">Select account type</option>
          <option value="INVESTOR">INVESTOR</option>
          <option value="RESTAURANT">RESTAURANT</option>
        </select>
        {errors.accountType && <p className="text-red-600 text-sm mt-1">{errors.accountType.message}</p>}
      </div>

      {/* Submit button */}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;


