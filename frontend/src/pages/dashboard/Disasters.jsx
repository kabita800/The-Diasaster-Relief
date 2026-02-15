export default function Disasters() {
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
                <th className="font-medium px-2 py-2">ID</th>
                <th className="font-medium px-2 py-2">Disaster Type</th>
                <th className="font-medium px-2 py-2">Province</th>
                <th className="font-medium px-2 py-2">District</th>
                <th className="font-medium px-2 py-2">City</th>
                <th className="font-medium px-2 py-2">Date</th>
                <th className="font-medium px-2 py-2">Time</th>
                <th className="font-medium text-center px-2 py-2">Actions</th>
              </tr>
            </thead>

            {/* Empty Body (Ready for Backend Data) */}
            <tbody>
              <tr>
                <td colSpan="9" className="text-center py-10 text-gray-400">
                  No disasters found.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
