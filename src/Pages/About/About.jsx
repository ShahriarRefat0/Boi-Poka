import React from "react";

const About = () => {
  return (
    <div className="bg-[#F8F7F3] text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3B2F2F] mb-6">
          About <span className="text-[#8B4513]">Boi-Poka</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Welcome to <strong>Boi-Poka</strong> – your cozy corner for book
          lovers! We believe books are not just pages, they’re journeys,
          inspirations, and gateways to new worlds.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">
            Our Mission
          </h2>
          <p>
            We aim to create a welcoming space for every reader — casual or
            passionate — to explore stories, cultures, and ideas through the
            power of books. Boi-Poka is built to inspire curiosity, connection,
            and lifelong learning.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">
            Who We Are
          </h2>
          <p>
            Founded by a passionate reader and lifelong learner, Boi-Poka is a
            place made for people who believe reading is more than a hobby —
            it’s a lifestyle. We’re a growing community of book lovers,
            dreamers, and thinkers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">
            What You’ll Find
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Book reviews & recommendations for every mood and genre.</li>
            <li>Reading challenges to help you build a daily reading habit.</li>
            <li>Community discussions & sharing your favorite reads.</li>
            <li>Tips, reading lists, and self-development resources.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">
            Why “Boi-Poka”?
          </h2>
          <p>
            “Boi” means <em>book</em> and “Poka” evokes a cozy spot — together
            they represent a warm nook for all book lovers. This website is your
            digital reading corner, where curiosity and comfort meet.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-3">
            Our Commitment
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              We value openness, respect, and diversity — every story matters.
            </li>
            <li>
              We ensure high-quality, thoughtful, and honest book content.
            </li>
            <li>
              We evolve with our readers — always improving and adding new
              features.
            </li>
          </ul>
        </section>

        <section className="text-center pt-10">
          <h2 className="text-2xl font-semibold text-[#8B4513] mb-4">
            Join the Journey
          </h2>
          <p className="mb-4">
            Whether you read one page or one hundred, you’re part of the
            community. Share your favorite books, start conversations, and let’s
            grow together.
          </p>
          <p className="font-medium text-[#3B2F2F]">
            <em>
              Let’s read, learn, and dream together — The Boi-Poka Team 📚
            </em>
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
