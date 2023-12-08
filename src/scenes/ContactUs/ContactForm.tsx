import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

const ContactForm = ({}) => {
  const inputStyles =
    "mb-3 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <motion.div
      className="mt-10 basis-3/5 md:mt-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <form
        target="_blank"
        onSubmit={onSubmit}
        action="https://formsubmit.co/1d25a21957c206d43afd52978e0c66ca"
        method="POST"
      >
        <input
          type="text"
          placeholder="NAME"
          {...register("name", {
            required: true,
            maxLength: 100,
          })}
          className={inputStyles}
        />
        {errors.name && (
          <p className=" text-primary-500">
            {errors.name.type === "required" && "This field is required"}
            {errors.name.type === "maxLength" && "Max length is a 100 char."}
          </p>
        )}
        <input
          type="text"
          placeholder="EMAIL"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
          className={inputStyles}
        />
        {errors.name && (
          <p className=" text-primary-500">
            {errors.name.type === "required" && "This field is required"}
            {errors.name.type === "pattern" && "Invalid email address"}
          </p>
        )}
        <textarea
          rows={4}
          cols={50}
          placeholder="MESSAGE"
          {...register("message", {
            required: true,
            maxLength: 2000,
          })}
          className={inputStyles}
        />
        {errors.message && (
          <p className=" text-primary-500">
            {errors.message.type === "required" && "This field is required"}
            {errors.message.type === "maxLength" &&
              "Max length is a 2000 char."}
          </p>
        )}
        <button
          type="submit"
          className="trnsition mt-5 rounded-lg bg-secondary-500 px-20 py-3 duration-500 hover:text-white"
        >
          SUBMIT
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
