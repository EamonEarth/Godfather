import React, { forwardRef, useRef } from "react";
import ContactForm from "./ContactForm";
import { cn } from "../../../lib/utils";

import { mergeRefs } from "react-merge-refs";
import { useOutsideClick } from "../../../hooks/use-outside-click";

interface ContactModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const ContactModal = forwardRef<HTMLDivElement, ContactModalProps>(
  ({ showModal, setShowModal }, ref) => {
    const clickClose = () => {
      setShowModal(!showModal);
    };

    const outsideClickRef = useOutsideClick(clickClose);

    return (
      <div
        ref={mergeRefs([ref, outsideClickRef])}
        className={cn(
          "lg:left-10 max-w-[95%]",
          showModal ? "relative " : "hidden"
        )}
      >
        <div className=" flex flex-col z-50 mt-16 lg:fixed lg:top-[0]">
          <h1 className="text-primary-foreground font-sans text-left font-bold text-lg md:relative uppercase spread-font-spacing lg:pb-5">
            Contact
          </h1>
          <div className="text-primary text-3xl modal-3d min-w-80">
            <ContactForm setShowModal={setShowModal} />
          </div>
        </div>
      </div>
    );
  }
);

ContactModal.displayName = "ContactModal";
export default ContactModal;
