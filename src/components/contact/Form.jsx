'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import { motion } from 'framer-motion';

// ...

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 }
};

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>Give me a toast</button>
    </div>
  );
}

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const sendEmail = async (params) => {
    const toastId = toast.loading('Sending your message, Please wait...');
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY
        }
      )
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully', { id: toastId });
        },
        (error) => {
          toast.error('Something went wrong', { id: toastId });
        }
      );
  };
  const onSubmit = (data) => {
    const typeParams = {
      to_name: 'Sabda Setiawan',
      from_name: data.name,
      replay_to: data.email,
      message: data.message
    };
    sendEmail(typeParams);
  };
  console.log(errors);

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className=" max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register('name', {
            required: 'Name is Required',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters'
            }
          })}
          className=" w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />

        {errors.name && (
          <p className=" inline-block text-accent self-start">
            {errors.name.message}
          </p>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register('email', {
            required: 'Email is Required',
            maxLength: 100
          })}
          className=" w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />

        {errors.email && (
          <p className=" inline-block text-accent self-start">
            {errors.email.message}
          </p>
        )}
        <motion.textarea
          variants={item}
          placeholder="message"
          {...register('message', {
            required: 'Message is Required',
            maxLength: {
              value: 256,
              message: 'Message must be at most 256 characters'
            },
            minLength: {
              value: 50,
              message: 'Message must be at least 50 characters'
            }
          })}
          className=" w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <p className=" inline-block text-accent self-start">
            {errors.message.message}
          </p>
        )}

        <motion.input
          variants={item}
          className=" px-10 py-4 rounded-md shadow-lg bg-backgroud border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm capitalize text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
          disabled={isSubmitting}
          value={'Send Message'}
          type="submit"
        />
      </motion.form>
    </>
  );
}
