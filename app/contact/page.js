'use client';

import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    emailjs.init('HQPp1WhavPJUtGM_S'); // Your public key
  }, []);

  const onSubmit = (data) => {
    setLoading(true);
    setStatus('');

    emailjs
      .send('service_4lmazps', 'template_a4rm7nk', data)
      .then(() => {
        setStatus('✅ Message sent!');
        reset(); // Clear form
      })
      .catch((err) => {
        console.error('EmailJS error:', err);
        setStatus('❌ Failed to send message.');
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className='flex h-[80vh] justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-4 p-10 rounded shadow w-full max-w-md">
        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          {...register('name', { required: 'Name is required' })}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

        {/* Email */}
        <input
          type="email"
          placeholder="Your Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: 'Invalid email format',
            },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

        {/* Contact Number */}
        <input
          type="tel"
          placeholder="Your Phone Number"
          maxLength={10}
          {...register('contact', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be exactly 10 digits',
            },
          })}
          className="w-full p-2 border rounded"
        />
        {errors.contact && <p className="text-red-500 text-sm">{errors.contact.message}</p>}

        {/* Message */}
        <textarea
          placeholder="Your Message"
          {...register('message', { required: 'Message is required' })}
          className="w-full p-2 border rounded h-32"
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bgcolor p-2 text-white rounded transition ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status && <p className="text-center text-sm mt-2">{status}</p>}
      </form>
    </div>
  );
}