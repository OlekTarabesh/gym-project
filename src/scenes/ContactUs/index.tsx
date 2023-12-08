import { FC } from "react";
import { motion } from "framer-motion";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import ContactForm from "./ContactForm";
import ContactHeader from "./ContactHeader";

import { SelectedPage } from "../../shared/types";

type ContactUsPropsTypes = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs: FC<ContactUsPropsTypes> = ({ setSelectedPage }) => {
  const selectPage = () => {
    setSelectedPage(SelectedPage.ContactUs);
  };
  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div onViewportEnter={selectPage}>
        {/* Header  */}
        <ContactHeader />
        {/* Form And Image  */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <ContactForm />
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
