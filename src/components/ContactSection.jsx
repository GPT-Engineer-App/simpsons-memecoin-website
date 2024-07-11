const ContactSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-8 max-w-lg mx-auto">
          <div className="mb-4">
            <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" className="w-full px-4 py-2 border rounded-lg" rows="4"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;