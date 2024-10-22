export default function FAQ() {
  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-3xl font-bold underline mb-4 p-2">FAQ</h1>
      <section className="mb-8">
        <h2 className="text-xl font-bold underline mb-2 p-2 hover:text-gray-600">General Questions</h2>
        <p className="text-lg text-gray-600 p-2">
          What is EduGuide? <br />
          EduGuide is an online education platform offering courses and
          resources for individuals seeking to improve their skills.
        </p>
        <p className="text-lg text-gray-600 p-2">
          What is the refund policy? <br /> We offer a 30-day money-back
          guarantee. Contact support for refunds or cancellations.
        </p>
      </section>

      <section className="mb-8 p-2">
        <h2 className="text-xl font-bold underline mb-2 p-2 hover:text-gray-600">
          Course-Related Questions
        </h2>
        <p className="text-lg text-gray-600 p-2">
          What is the course format? <br />
          Courses include video lessons, quizzes, assignments, and discussion
          forums.
        </p>
        <p className="text-lg text-gray-600 p-2">
          How long do I have access to course materials? <br />
          Lifetime access, unless specified otherwise.
        </p>
        <p className="text-lg text-gray-600 p-2">
          Can I take courses on my mobile device?
          <br /> Yes, our platform is optimized for mobile devices.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-bold underline mb-2 p-2 hover:text-gray-600">
          Technical Questions
        </h2>
        <p className="text-lg text-gray-600 p-2">
          What are the system requirements?
          <br /> A computer or mobile device with internet access, a modern
          browser, and a valid email address.
        </p>
      </section>
    </div>
  );
}
