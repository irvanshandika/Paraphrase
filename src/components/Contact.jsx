import React, { useState } from "react";

function Contact() {
  const [loading, setLoading] = useState(false);
  const scriptURL = "https://script.google.com/macros/s/AKfycbxDhJp2Kya9dSPXVhpkStDYNhWums6uNMrB_ssrOeX1KkNg2B_3S0-7sFejJ9xMjqaj/exec";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const form = document.getElementById("form"); // Replace 'yourFormId' with the actual ID of your form
    try {
      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      }).then(() => {
        setLoading(false);
        form.reset();
        setTimeout(() => {
          alert("Pesan Terkirim");
        }, 1000);
      });
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="mt-10" id="contact">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="md:w-1/2 p-4 order-2 lg:order-2">
            <div
              className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl
            relative z-10 dark:bg-gray-800">
              <p className="w-full text-4xl font-medium text-center leading-snug dark:text-white">
                Contact <span className="text-indigo-500">Us</span>
              </p>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
              <form onSubmit={handleSubmit} name="messege-to-form" id="form" className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 rounded absolute dark:bg-gray-500 dark:text-white">Your Name</p>
                  <input
                    placeholder="John Doe"
                    type="text"
                    name="nama"
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  />
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 rounded absolute dark:bg-gray-500 dark:text-white">Email</p>
                  <input
                    placeholder="123@ex.com"
                    type="text"
                    name="email"
                    className="border placeholder-gray-400 focus:outline-none
                  focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
                  border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  />
                </div>
                <div className="relative">
                  <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 rounded absolute dark:bg-gray-500 dark:text-white">Your Message</p>
                  <textarea
                    placeholder="Leave a message..."
                    rows="6"
                    name="pesan"
                    className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"></textarea>
                </div>
                <div className="relative">
                  {loading ? (
                    <button type="submit" as="input" className="w-full inline-flex items-center justify-center pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
                      <span>Loading</span>
                      <svg aria-hidden="true" class="w-8 h-8 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                    </button>
                  ) : (
                    <button type="submit" as="input" className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="md:w-1/2 p-4 order-1 lg:order-1">
            <img className="w-full h-auto md:h-auto md:w-auto mx-auto md:mx-0" src="https://res.cloudinary.com/dszhlpm81/image/upload/v1692411646/assets/66855953953_yjk2ac.png" alt="Gambar" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
