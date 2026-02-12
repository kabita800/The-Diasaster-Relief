import React from "react";

export default function Mails() {
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-10">

      {/* Page Title */}
      <h1 className="text-2xl font-semibold mb-8">Mails</h1>

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <div className="overflow-x-auto">

          <table className="w-full border-collapse text-left">
            
            {/* Table Header */}
            <thead>
              <tr className="border-b text-gray-600">
                <th className="py-3 font-medium">ID</th>
                <th className="py-3 font-medium">Title</th>
                <th className="py-3 font-medium">Send Users</th>
                <th className="py-3 font-medium">District</th>
                <th className="py-3 font-medium">Date</th>
                <th className="py-3 font-medium">Time</th>
                <th className="py-3 font-medium">Incident</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr>
                <td colSpan="7" className="py-10 text-center text-gray-400">
                  No mails found.
                </td>
              </tr>
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}
