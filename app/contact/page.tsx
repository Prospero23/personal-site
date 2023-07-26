"use client";

import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({data}),
        headers: {
          'content-type': 'application/json',

        }
      })
    } catch(err:any){
      console.log('Error', err)
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <main className="flex justify-center w-screen h-screen bg-pink-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto text-white rounded-md border-white border-2 p-8 px-24"
      >
        <h1 className=" text-center">Contact Form</h1>
        {/* register your input into the hook by invoking the "register" function */}
        <div className="my-4">
          <label htmlFor="contact" className="block">
            Name
          </label>
          <input
            id="contact"
            {...register("name", { required: true })}
            className="text-black"
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="my-4">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            defaultValue="email"
            type="email"
            id="contact"
            {...register("email", { required: true })}
            className="text-black"
          />
          {errors.email && <span>This field is required</span>}
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <div>
          <label htmlFor="message" className="block">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className="text-black"
          ></textarea>
        </div>
        {/* errors will return when field validation fails  */}
        {errors.message && <span>This field is required</span>}

        <button className="text-white block">Submit</button>
      </form>
    </main>
  );
}


//have links to instagram, github, bandcamp??, send stuff to email
