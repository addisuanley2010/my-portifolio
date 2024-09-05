const Contact = () => {
  return (
    <div
      className="min-h-screen bg-gray-900 px-4 py-20 text-white"
      id="contact"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Get in Touch me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-md flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4 text-indigo-400">
              Contact Information
            </h2>
            <div className="border-b-2 border-indigo-400 w-16 mb-4"></div>
            <p className="text-lg">Email: addisuanley2010@gmail.com</p>
            <p className="text-lg">Phone: +251921881486</p>
            <p className="text-lg">Location: Addis Ababa</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-md">
            <h2 className="text-xl font-bold mb-4 text-indigo-400">
              Contact Form
            </h2>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 mb-4"
              placeholder="Your Name"
            />

            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 mb-4"
              placeholder="Your Email"
            />

            <label htmlFor="phone" className="block mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 mb-4"
              placeholder="Your Phone Number"
            />

            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full bg-gray-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-400 mb-4"
              placeholder="Your Message"
            ></textarea>

            <button className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
