"use client";
import { create } from "../../../actions/create-message";
import { Button } from "../../../components/ui/button";
import useMousePosition from "../../../hooks/useMousePosition";
import { SendHorizonal, Trash2 } from "lucide-react";
import React, { FormEvent, useEffect, useState } from "react";
import { toast } from "sonner";
// import SuccessPopup from "./SuccessPopup";

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const result = await create(formData);
      console.log(result);

      toast.success("Thanks for getting in touch!");
      setFormData({ name: "", email: "", subject: "", message: "" });

      const fields = ["name", "email", "subject", "message"];
      fields.map((field) => localStorage.removeItem(`contactForm${field}`));

      setTimeout(() => {
        setShowModal(false);
      }, 1000);
    } catch (error: any) {
      toast.error("Email invalid", error);
    }
  };

  const handleClear = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    const fields = ["name", "email", "subject", "message"];
    fields.map((field) => localStorage.removeItem(`contactForm${field}`));
    setShowModal(false);
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
            style={
              {
                /* box-shadow: -3px 3px  rgba(209, 209, 239, 0.8); */
              }
            }
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
            style={
              {
                /* box-shadow: -3px 3px  rgba(209, 209, 239, 0.8); */
              }
            }
          />
        </div>
        <div className="grid grid-cols-[auto_1fr] gap-2 items-center">
          <textarea
            name="message"
            className="border rounded-md p-2 pb-24 pl-3 col-span-2 placeholder:text-sm text-base bg-primary form3D resize-none"
            placeholder="Your words"
            onChange={handleChange}
            value={formData.message}
            style={
              {
                /* box-shadow: -3px 3px  rgba(209, 209, 239, 0.8); */
              }
            }
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
