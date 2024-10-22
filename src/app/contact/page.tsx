export default function Contact() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-8 bg-purple-100 text-purple-900">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <section>
        <h2 className="text-3xl font-bold mb-4 text-purple-800">Get in Touch</h2>
        <p className="text-lg mb-8">Have a question or want to learn more about our services? </p>
      </section>
      <section>
        <h4 className="text-xl font-bold mb-2 text-purple-700">Address</h4>
        <p className="text-lg">ABC Road</p>
      </section>
      <section>
        <h4 className="text-xl font-bold mb-2 text-purple-700">Phone</h4>
        <p className="text-lg">0900 7860 1</p>
      </section>
      <section>
        <h4 className="text-xl font-bold mb-2 text-purple-700">Email</h4>
        <p className="text-lg">info@abc.com</p>
      </section>
    </div>
  );
}