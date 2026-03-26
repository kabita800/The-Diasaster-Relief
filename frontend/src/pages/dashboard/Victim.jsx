import React, { useState, useEffect } from "react";
import { useAuth } from '../../context/AuthContext';

export default function Victim() {
  const [victims, setVictims] = useState([]);
  const { user } = useAuth();

  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (v) => {
    setEditingId(v.id);
    setEditFormData(v);
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
      const res = await fetch(`http://localhost:5000/api/victims/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editFormData)
      });
      const updatedItem = await res.json();
      setVictims(victims.map(v => (v.id === id ? updatedItem : v)));
      setEditingId(null);
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this victim?")) {
      try {
        await fetch(`http://localhost:5000/api/victims/${id}`, { method: 'DELETE' });
        setVictims(victims.filter(v => v.id !== id));
      } catch (err) { console.error(err); }
    }
  };

  const handleApprove = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/victims/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isApproved: true })
      });
      const updatedItem = await res.json();
      setVictims(victims.map(v => (v.id === id ? { ...v, isApproved: updatedItem.isApproved || true } : v)));
    } catch (err) { console.error(err); }
  };


  useEffect(() => {
    fetch("http://localhost:5000/api/victims")
      .then(res => res.json())
      .then(data => setVictims(data))
      .catch(err => console.error(err));
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
                <th className="py-3 font-medium">ID</th>
                <th className="font-medium">Full Name</th>
                <th className="font-medium">E-mail</th>
                <th className="font-medium">Province</th>
                <th className="font-medium">District</th>
                <th className="font-medium">City</th>
                <th className="font-medium">Date</th>
                <th className="font-medium">Time</th>
                {user?.role === 'admin' && <th className="font-medium text-center">Actions</th>}
              </tr>
            </thead>

            {/* Backend Data Loop */}
            <tbody>
              {(user?.role === 'admin' ? victims : victims.filter(v => v.isApproved)).length > 0 ? (
                (user?.role === 'admin' ? victims : victims.filter(v => v.isApproved)).map((v) => (
                  <tr key={v.id} className="border-b">
                    {editingId === v.id ? (
                      <>
                        <td className="py-3 px-2 text-sm">{v.id}</td>
                        <td className="px-2 py-3 text-sm"><input name="fullName" value={editFormData.fullName || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="email" value={editFormData.email || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="province" value={editFormData.province || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="district" value={editFormData.district || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="city" value={editFormData.city || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="date" type="date" value={editFormData.date || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm"><input name="time" type="time" value={editFormData.time || ''} onChange={handleEditChange} className="border p-1 w-full rounded" /></td>
                        <td className="px-2 py-3 text-sm text-center">
                          <button onClick={() => handleSave(v.id)} className="text-green-600 hover:text-green-800 mx-1">Save</button>
                          <button onClick={handleCancelClick} className="text-gray-500 hover:text-gray-700 mx-1">Cancel</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="py-3 px-2 text-sm">{v.id}</td>
                        <td className="px-2 py-3 text-sm">{v.fullName}</td>
                        <td className="px-2 py-3 text-sm">{v.email}</td>
                        <td className="px-2 py-3 text-sm">{v.province}</td>
                        <td className="px-2 py-3 text-sm">{v.district}</td>
                        <td className="px-2 py-3 text-sm">{v.city}</td>
                        <td className="px-2 py-3 text-sm">{v.date}</td>
                        <td className="px-2 py-3 text-sm">{v.time}</td>
                        {user?.role === 'admin' && (
                          <td className="px-2 py-3 text-sm text-center">
                            {!v.isApproved && (
                              <button onClick={() => handleApprove(v.id)} className="text-green-500 hover:text-green-700 mx-1">Approve</button>
                            )}
                            <button onClick={() => handleEditClick(v)} className="text-blue-500 hover:text-blue-700 mx-1">Edit</button>
                            <button onClick={() => handleDelete(v.id)} className="text-red-500 hover:text-red-700 mx-1">Delete</button>
                          </td>
                        )}
                      </>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={user?.role === 'admin' ? "9" : "8"} className="text-center py-10 text-gray-400">
                    No victims found.
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
