import React from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { GetServerSideProps } from 'next';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile() {
  return (
    <AdminLayout title={"Profile"}>
       <p>Ini adalah konten dari halaman Dashboard.</p>
    </AdminLayout>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();

export default Profile;
