import React from "react";

export default function Victim() {
  return (
    <div className="flex-1 bg-gray-100 min-h-screen">
      
      {/* Page Title */}
    

      {/* Table Container */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            {/* Table Head */}
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-3 font-medium">ID</th>
                <th className="font-medium">Full Name</th>
                <th className="font-medium">E-mail</th>
                <th className="font-medium">Province</th>
                <th className="font-medium">District</th>
                <th className="font-medium">City</th>
                <th className="font-medium">Date</th>
                <th className="font-medium">Time</th>
                <th className="font-medium text-center">Actions</th>
              </tr>
            </thead>

            {/* Empty Body (Ready for Backend Data) */}
            <tbody>
              <tr>
                <td colSpan="9" className="text-center py-10 text-gray-400">
                  No victims found.
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}
