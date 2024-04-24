"use client";
import { sendEmail } from "@/lib/utils";
import { Button } from "../../../components/ui/button";
import { SendHorizonal, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ContactFormProps {
  setShowModal: (value: boolean) => void;
}

const ContactForm = ({ setShowModal }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    localStorage.setItem(`contactForm${name}`, value);
  };

  useEffect(() => {
    const fields = ["name", "email", "subject", "message"];
    const storedFormData = fields.reduce(
      (acc: { [key: string]: string }, field) => {
        const storedValue = localStorage.getItem(`contactForm${field}`);
        if (storedValue) acc[field] = storedValue;
        return acc;
      },
      {}
    );

    setFormData((prevState) => ({ ...prevState, ...storedFormData }));
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    sendEmail(data);
    handleClear();
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    const fields = ["name", "email", "subject", "message"];
    fields.map((field) => localStorage.removeItem(`contactForm${field}`));
  };

  return (
    <div
      id="form-box"
      className="relative left-2 bottom-2  rounded-2xl shadow-2xl p-2.5 pr-3"
    >
      <form
        autoComplete="off"
        className="grid md:grid-cols-1[auto_1fr] gap-4 resize opacity-90 pt-2"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-[auto_1fr] gap-2 items-center  md:w-auto  ">
          <input
            id="name"
            name="name"
            className="border rounded-md p-2 pl-3 col-span-2 placeholder:text-sm text-base bg-primary form3D"
            type="text"
            placeholder="name"
            onChange={handleChange}
            value={formData.name}
          />

          <input
            name="email"
            className="border rounded-md p-2 pl-3 col-span-2 placeholder:text-sm text-base bg-primary form3D"
            type="text"
            placeholder="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center ">
          <input
            name="subject"
            className="border rounded-md p-2 pl-3 col-span-2 placeholder:text-sm text-base bg-primary form3D"
            type="text"
            placeholder="So what's this all about then..."
            onChange={handleChange}
            value={formData.subject}
          />
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <textarea
            name="message"
            className="border rounded-md p-2 pb-24 pl-3 col-span-2 placeholder:text-sm text-base bg-primary form3D resize-none"
            placeholder="Your words"
            onChange={handleChange}
            value={formData.message}
          ></textarea>
        </div>

        <Button className="border border-white form3D" type="submit">
          <SendHorizonal className="w-4 h-4 flex justify-right text-secondary/90 fly-right" />
        </Button>
        {formData && (
          <Button
            className="border border-white form3D"
            type="reset"
            onClick={handleClear}
          >
            <Trash2 className="w-4 h-4 flex justify-right text-secondary/90 " />
          </Button>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
