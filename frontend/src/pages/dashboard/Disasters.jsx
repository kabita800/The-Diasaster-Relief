import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

export default function Disasters() {
  const [disasters, setDisasters] = useState([]);
  const { user } = useAuth();
  
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (d) => {
    setEditingId(d.id);
    setEditFormData(d);
  };
  
  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };
  
  const handleSave = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/disasters/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFormData)
      });
      const updatedItem = await res.json();
      setDisasters(disasters.map(d => (d.id === id ? updatedItem : d)));
      setEditingId(null);
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this disaster?")) {
      try {
        await fetch(`http://localhost:5000/api/disasters/${id}`, { method: 'DELETE' });
        setDisasters(disasters.filter(d => d.id !== id));
      } catch (err) { console.error(err); }
    }
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/disasters")
      .then((res) => res.json())
      .then((data) => setDisasters(data))
      .catch((err) => console.error(err));
  }, []);
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
                {user?.role === 'admin' && <th className="font-medium text-center px-2 py-2">Actions</th>}
              </tr>
            </thead>

            {/* Backend Data Loop */}
            <tbody>
              {disasters.length > 0 ? (
                disasters.map((d) => (
                  <tr key={d.id} className="border-b">
                    {editingId === d.id ? (
                      <>
                        <td className="px-2 py-3 text-sm">{d.id}</td>
                        <td className="px-2 py-3 text-sm"><input name="disasterType" value={editFormData.disasterType || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="province" value={editFormData.province || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="district" value={editFormData.district || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="city" value={editFormData.city || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="date" type="date" value={editFormData.date || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="time" type="time" value={editFormData.time || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm text-center">
                          <button onClick={() => handleSave(d.id)} className="text-green-600 hover:text-green-800 mx-1">Save</button>
                          <button onClick={handleCancelClick} className="text-gray-500 hover:text-gray-700 mx-1">Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-2 py-3 text-sm">{d.id}</td>
                        <td className="px-2 py-3 text-sm">{d.disasterType}</td>
                        <td className="px-2 py-3 text-sm">{d.province}</td>
                        <td className="px-2 py-3 text-sm">{d.district}</td>
                        <td className="px-2 py-3 text-sm">{d.city}</td>
                        <td className="px-2 py-3 text-sm">{d.date}</td>
                        <td className="px-2 py-3 text-sm">{d.time}</td>
                        {user?.role === 'admin' && (
                          <td className="px-2 py-3 text-sm text-center">
                            <button onClick={() => handleEditClick(d)} className="text-blue-500 hover:text-blue-700 mx-1">Edit</button>
                            <button onClick={() => handleDelete(d.id)} className="text-red-500 hover:text-red-700 mx-1">Delete</button>
                          </td>
                        )}
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={user?.role === 'admin' ? "8" : "7"} className="text-center py-10 text-gray-400">
                    No disasters found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
