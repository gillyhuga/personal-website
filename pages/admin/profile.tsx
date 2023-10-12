import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';

function Profile() {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="bg-white p-6 rounded shadow-lg">
        <p>Ini adalah konten dari halaman Dashboard.</p>
      </div>
    </AdminLayout>
  );
}

export default Profile;
