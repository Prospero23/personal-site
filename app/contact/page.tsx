"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import Image from "next/image";
interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const sendValues = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await emailjs.send(
        "service_l0x9ygh",
        "template_rh2vcj7",
        sendValues,
        "Kl4Y4LLfBRmRE2afA",
      );
      router.push("/contact/confirm");
    } catch (err: any) {
      console.log("Error", err);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-white rounded-md border-white border-2 p-8 px-24"
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
          {errors.name != null && <span>This field is required</span>}
        </div>
        <div className="my-4">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="contact"
            {...register("email", { required: true })}
            className="text-black"
          />
          {errors.email != null && <span>This field is required</span>}
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
        {errors.message != null && <span>This field is required</span>}

        <button className="text-white block hover:text-pink-400">Submit</button>
      </form>
      <a href="https://github.com/Prospero23" className="mt-4">
        <Image
          alt="github logo"
          src="/github-mark-white.png"
          width={50}
          height={50}
        ></Image>
      </a>
    </main>
  );
}

// have links to instagram, github, bandcamp??, send stuff to email
