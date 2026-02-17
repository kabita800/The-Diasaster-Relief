import { CheckCircle, Truck, PackageCheck, ClipboardCheck, Box } from "lucide-react";

export default function DeliveryTrack() {
  return (
    <div className="bg-gray-100 min-h-screen pt-6 px-6">
  <div className="w-full max-w-5xl mx-auto bg-white rounded-lg shadow-md p-2">


        {/* Title */}
        <div className="text-center py-6">
          <h1 className="text-2xl font-semibold tracking-wide text-gray-600">
           TRACK YOUR SHIPMENT
          </h1>
        </div>

        {/* Green Header Section */}
        <div className="bg-teal-800 text-white text-center py-6">
          <h2 className="text-lg font-semibold tracking-wide">
            DONATION TRACKING: DONATION NO
          </h2>
        </div>

        {/* Info Row */}
        <div className="bg-teal-700 text-white grid md:grid-cols-3 text-center py-4 text-sm font-medium">
          <p>
            <span className="font-semibold">Shipped Via :</span> RescueTeams
          </p>
          <p>
            <span className="font-semibold">Status :</span> Quality Check
          </p>
          <p>
            <span className="font-semibold">Expected Date :</span> 7-NOV-2015
          </p>
        </div>

        {/* Timeline Section */}
        <div className="py-16 px-6">
          <div className="flex items-center justify-between relative">

            {/* Line */}
            <div className="absolute top-6 left-0 w-full h-1 bg-gray-300"></div>

            {/* Completed Line (Green Part) */}
            <div className="absolute top-6 left-0 w-1/2 h-1 bg-teal-600"></div>

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center w-1/5">
              <div className="bg-teal-600 text-white p-4 rounded-full">
                <CheckCircle size={24} />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600">
                Support confirmed
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center w-1/5">
              <div className="bg-teal-600 text-white p-4 rounded-full">
                <PackageCheck size={24} />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600">
                Verifying contribution
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center w-1/5">
              <div className="bg-teal-600 text-white p-4 rounded-full">
                <ClipboardCheck size={24} />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600">
                Compliance check
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center w-1/5">
              <div className="bg-red-400 text-white p-4 rounded-full">
                <Truck size={24} />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600">
                Dispatched Item
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center text-center w-1/5">
              <div className="bg-red-400 text-white p-4 rounded-full">
                <Box size={24} />
              </div>
              <p className="mt-3 text-sm font-medium text-gray-600">
                Supplies Delivered
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
