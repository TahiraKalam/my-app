export default function News() {
  return (
    <div className="p-4 lg:p-8 bg-blue-50">
      <h1 className="text-3xl font-bold mb-4 text-blue-900">News</h1>
      <section className="mb-8 border-2 border-blue-200 rounded-lg bg-150">

          <h2 className="text-2xl font-bold mb-2 text-blue-800 p-4">
            EduGuide Launches Brand-New Website!
          </h2>
          <p className="text-lg mb-4 text-blue-700 p-4">
            We're thrilled to announce the arrival of our shiny new website! Our
            team has worked tirelessly to create a user-friendly and intuitive
            platform that makes it easier for you to find the resources you
            need. Explore our new site and discover a world of learning at your
            fingertips!
          </p>
        
          <h2 className="text-2xl font-bold mb-2 text-blue-800 p-4">
            Expand Your Skills with Our New Courses!
          </h2>
          <p className="text-lg mb-4 text-blue-700 p-4">
            Get ready to level up your knowledge! We've added three exciting new
            courses to our platform: AI, Machine Learning, and Data Science.
            Whether you're a curious learner or a professional looking to
            upskill, these courses are designed to help you stay ahead of the
            curve. Dive in and start learning today!
          </p>
        
      </section>
    </div>
  );
}