import React from "react";

const Aboutus = () => {
  return (
    <div className="flex h-100 bg-teal-700 mb-125 mt-0 pb-150">
      {/* nav bar */}

      <div className="flex-1 flex flex-col pt-20">
        {/* main content */}

        <section id="about" class="">
          <div class="text-center max-w-3xl mx-auto mb-20 px-6 ">
            <h1 class="text-4xl font-bold text-white mb-4">About Us</h1>
            <p class="text-lg text-gray-600 leading-relaxed text-white">
              <span class="font-semibold text-white"> THEDisasterRelief</span>{" "}
            dedicated disaster relief platform committed to providing timely support and assistance to communities affected by natural and man-made disasters. Our mission is to connect donors, volunteers, and victims through a transparent and reliable system that ensures help reaches those who need it most. By combining technology, compassion, and coordinated action, we aim to make relief efforts faster, more organized, and more impactful. Together, we stand in solidarity with affected communities and work towards rebuilding lives with dignity and hope.
            </p>
          </div>

          <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
            <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl  hover:scale-105 transition">
              <i class="fas fa-bullseye text-4xl text-red-600 mb-4"></i>
              <h3 class="text-2xl font-semibold mb-2">Our Mission</h3>
              <hr class="w-16 mx-auto border-b-4 border-red-600 mb-4" />
              <p class="text-gray-600 leading-relaxed">
                To provide fast, transparent, and reliable support to communities affected by disasters through one trusted platform
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl  hover:scale-105 transition">
              <i class="fas fa-lightbulb text-4xl text-yellow-500 mb-4"></i>
              <h3 class="text-2xl font-semibold mb-2">Our Vision</h3>
              <hr class="w-16 mx-auto border-b-4 border-yellow-500 mb-4" />
              <p class="text-gray-600 leading-relaxed">
               To build a safer and more resilient society where help reaches every affected person quickly and efficiently during times of crisis.
              </p>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:scale-105 transition">
              <i class="fas fa-trophy text-4xl text-green-600 mb-4"></i>
              <h3 class="text-2xl font-semibold mb-2">Our Goals</h3>
              <hr class="w-16 mx-auto border-b-4 border-green-600 mb-4" />
              <p class="text-gray-600 leading-relaxed">
                Maintain transparency in donations and relief distribution also Ensure timely and organized disaster response
              </p>
            </div>
          </div>

          {/* team member */}
          <div className="ml-25 mr-25 ">
            <div className=" ">
              <h1 className="mt-10 font-bold text-4xl text-center text-gray-800 ">
                {" "}
                Meet Our <span className="text-teal-700">Team</span>
              </h1>
              <p className="text-center mb-10 italic">
                The people powering our vision
              </p>
            </div>

            <div className="grid grid-cols-4 pl-14 pb-4 gap-6">
              {/* Team Member 1 */}
              <div className="bg-white shadow-2xl border border-gray-200 rounded-xl w-60 p-4 hover:scale-105 transition-transform text-center">
                <img
                  src="/src/assets/WhatsApp Image 2026-02-11 at 13.23.06.jpeg"
                  className="w-full h-40 object-cover rounded-t-xl mb-3"
                />
                <h1 className="font-bold text-lg">Kabita Giri</h1>
                <p className="text-gray-600 text-sm">Frontend Manager</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white shadow-2xl border border-gray-200 rounded-xl w-60 p-4 hover:scale-105 transition-transform text-center">
                <img
                  src="/src/assets/WhatsApp Image 2026-02-11 at 13.27.26.jpeg"
                  className="w-full h-40 object-cover rounded-t-xl mb-3"
                />
                <h1 className="font-bold text-lg">Anil Kumar Shah</h1>
                <p className="text-gray-600 text-sm">Backend Manager</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white shadow-2xl border border-gray-200 rounded-xl w-60 p-4 hover:scale-105 transition-transform text-center">
                <img
                  src="/src/assets/WhatsApp Image 2026-02-11 at 13.26.02.jpeg"
                  className="w-full h-40 object-cover rounded-t-xl mb-3"
                />
                <h1 className="font-bold text-lg">Bibek Seluwal</h1>
                <p className="text-gray-600 text-sm">Database Manager</p>
              </div>

              {/* Team Member 4 */}
              <div className="bg-white shadow-2xl border border-gray-200 rounded-xl w-60 p-4 hover:scale-105 transition-transform text-center">
                <img
                  src="/src/assets/WhatsApp Image 2026-02-11 at 13.28.44.jpeg"
                  className="w-full h-40 object-cover rounded-t-xl mb-3"
                />
                <h1 className="font-bold text-lg">Khum Bahadur Shrestha</h1>
                <p className="text-gray-600 text-sm">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aboutus;