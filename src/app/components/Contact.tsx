"use client";
import React from "react";

import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";
import { BackgroundLines } from "./ui/background-lines";

import { FaPhone, FaEnvelope, FaGithub } from "react-icons/fa";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  function BackgroundLinesDemo() {
    return (
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Sanjana Airlines, <br /> Sajana Textiles.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Get the best advices from our experts, including expert artists,
          painters, marathon enthusiasts and RDX, totally free.
        </p>
      </BackgroundLines>
    );
  }

  return (
    <div className="bg-black min-h-screen" id="contact">
      {/* Main wrapper for the contact form and information */}
      <div className="container mx-auto p-6 pt-24">
        <div className="max-w-md md:max-w-6xl w-full rounded-2xl p-4 md:p-8 mt-8 shadow-input z-1 bg-black mx-auto">
          {/* Flexbox container for contact form and information */}
          <div className="flex flex-col md:flex-row">
            
            {/* Contact Form */}
            <div className="w-full md:w-1/2">
              <h2 className="font-sans text-xl text-neutral-200">
                Have an Inquiry? Send me an email!
              </h2>
              <p className="text-neutral-300 text-sm mt-4">
                Feel free to reach out with any questions or concerns. I will get back to you <br /> as soon as possible.
              </p>

                {/* Form Fields */}
              <form className="my-8" onSubmit={handleSubmit}>
                {/* First and Last Name fields side by side */}
                <div className="flex flex-col md:flex-row md:space-x-4">
                    <LabelInputContainer className="w-full mb-4">
                    <Label htmlFor="firstname">First name</Label>
                    <Input id="firstname" placeholder="Tyler" type="text" />
                    </LabelInputContainer>
                    <LabelInputContainer className="w-full">
                    <Label htmlFor="lastname">Last name</Label>
                    <Input id="lastname" placeholder="Durden" type="text" />
                    </LabelInputContainer>
                </div>
                <LabelInputContainer className="my-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" placeholder="your-email@gmail.com" type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-10">
                  <Label htmlFor="message">Message</Label>
                  <Input id="message" placeholder="Type your message here..." type="text" />
                </LabelInputContainer>
                <button
                className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Send Message &rarr;
                <BottomGradient />
              </button>
              <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
              </form>
            </div>

            {/* Contact Information */}


            <div className="w-full md:w-1/2 md:pl-8 lg:mt-32 lg:ml-56">
            <h2 className="text-xl font-sans mb-4 text-gray-200">Get in Touch</h2>
                <p className="mb-4 flex items-center">
                    <FaGithub className="mr-2" />
                    <a href="https://github.com/MarcoGiacoppo" className="hover:underline">
                    MarcoGiacoppo
                    </a>
                </p>
                <p className="mb-4 flex items-center">
                    <FaPhone className="mr-2" />
                    <a href="tel:+61483890399" className="hover:underline">
                        +61 483 890 399
                    </a>
                </p>
                <p className="mb-4 flex items-center">
                    <FaEnvelope className="mr-2" />
                    <a href="mailto:marcogiacoppo19@gmail.com" className="hover:underline">
                    marcogiacoppo19@gmail.com
                    </a>
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const Portfolio = () => {
    return (
      <section id="contact">
      </section>
    );
  };
  
  export default Portfolio;
