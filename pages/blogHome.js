import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-16 px-8 md:px-16 bg-blue-600">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Share Your Thoughts
            </h1>
            <p className="text-lg text-white mb-8">
              Start writing and inspire others
            </p>
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-6 rounded">
              Get Started
            </button>
          </div>
          <div className="hero-image">
            <img
              src="path/to/hero-image.jpg"
              alt="Hero"
              className="max-w-full h-auto rounded"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-8 md:px-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Discover Unique Stories</h2>
            <p className="text-lg text-gray-700">
              Explore a wide range of topics written by passionate individuals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Topic 1</h3>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur maximus, lacus sed consequat ultrices, justo felis
                pulvinar elit.
              </p>
            </div>
            <div className="bg-gray-100 rounded shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Topic 2</h3>
              <p className="text-gray-600 mb-4">
                Nullam suscipit, urna at tempus mollis, risus quam finibus
                enim, eget lobortis nisl nulla vitae arcu.
              </p>
            </div>
            <div className="bg-gray-100 rounded shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Topic 3</h3>
              <p className="text-gray-600 mb-4">
                Aliquam tempus posuere odio ac mattis. Fusce convallis ipsum
                justo, eget fringilla purus mollis non.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 py-16 px-8 md:px-16">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Create Engaging Content</h2>
            <p className="text-lg text-white">
              Express yourself and connect with a global community of readers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Section 1</h3>
          <p className="text-gray-600 mb-4">
            Sed dapibus tellus sed libero placerat, vel fermentum urna
            volutpat. Aenean luctus nibh nec turpis tristique, sed
            consequat mauris accumsan.
          </p>
        </div>
        <div className="bg-white rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Section 2</h3>
          <p className="text-gray-600 mb-4">
            Nunc dictum, erat a consequat aliquam, felis elit volutpat
            ligula, sit amet aliquet erat justo nec diam.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section className="bg-white py-16 px-8 md:px-16">
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-700">
          Have any questions? We've got answers.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-100 rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Question 1</h3>
          <p className="text-gray-600 mb-4">
            Answer 1
          </p>
        </div>
        <div className="bg-gray-100 rounded shadow p-6">
          <h3 className="text-xl font-semibold mb-2">Question 2</h3>
          <p className="text-gray-600 mb-4">
            Answer 2
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
);
};

export default Home;
