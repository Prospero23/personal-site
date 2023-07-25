"use client";

import { object } from "prop-types";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <main className="flex justify-center w-screen h-screen bg-pink-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="m-auto text-white rounded-md border-white border-2 p-8"
      >
        {/* register your input into the hook by invoking the "register" function */}
        <div className="my-4">
          <input
            defaultValue="test"
            id="contact"
            {...register("example")}
            className="text-black"
          />
        </div>
        <div className="my-4">
          <input
            defaultValue="test"
            id="contact"
            {...register("example")}
            className="text-black"
          />
        </div>
        {/* include validation with required or other standard HTML validation rules */}
        <div>
          <textarea
            id="message"
            {...register("exampleRequired", { required: true })}
            className="text-black"
          ></textarea>
        </div>
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <button className="text-white">SUP</button>
      </form>
    </main>
  );
}

//have links to instagram, github, bandcamp??, send stuff to email
