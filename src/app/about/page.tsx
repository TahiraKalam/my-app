// export default function About() {
//     return (
//       <div>
//         <h1> About </h1>
//       </div>
//     );
//   }
export default async function AboutPage() {
    await new Promise((resolve) => {
      setTimeout(resolve, 5000);
    });
    return (
      <div className="bg-green-100 p-8 max-w-800">
        <h1 className="text-green-800 text-3xl font-bold p-5 m-5 border-8 border-green-300 rounded bg-green-200">About</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-green-600  p-2 m-12" >Welcome to EduGuide</h2>
          <p className="text-lg text-green-600 p-2 m-12">
            At EduGuide, we believe that education is the key to unlocking the full potential of individuals and society. Our mission is to provide a comprehensive guide to education, making it accessible, affordable, and achievable for all.
          </p>
          <h2 className="text-xl font-semibold text-green-600 p-2 m-12">Our Story</h2>
          <p className="text-lg text-green-600 p-2 m-12">
            EduGuide was founded by a team of educators and professionals who are passionate about making a difference in the lives of students. We saw the need for a platform that provides reliable, up-to-date, and unbiased information about educational institutions, courses, and career paths. Our goal is to empower students, parents, and educators with the knowledge they need to make informed decisions about education.
          </p>
        </section>
      </div>
    );
  }