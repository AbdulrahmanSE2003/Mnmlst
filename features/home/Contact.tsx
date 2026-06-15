import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className={`my-16 p-7 sm:p-16`}>
      <div
        className={`container mx-auto flex max-sm:flex-col justify-between items-center gap-12`}
      >
        {/* Left Col (Intro) */}
        <div className={`self-start flex flex-col gap-3 justify-between`}>
          <h5
            className={`capitalize font-plus-jakarta-sans text-4xl sm:text-6xl leading-snug tracking-wide font-bold`}
          >
            Got a project
            <br /> in mind?
          </h5>
          <p className={`text-md font-medium`}>
            Have a project or need help?{" "}
            <span className={`text-muted-foreground`}>
              Drop me a message — I&apos;ll respond soon
            </span>
          </p>
        </div>

        {/* Right Col (Form) */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
