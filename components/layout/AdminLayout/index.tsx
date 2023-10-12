import React from 'react';
import AdminSidebar from "@/components/common/Sidebar"
import Head from '@/components/common/Head';

function AdminLayout({ children, title }) {
    return (
        <>
            <Head />
            <div className="flex">
                <AdminSidebar />
                <div className="flex-1 p-10">
                    <h1 className="text-2xl font-bold mb-4">{title}</h1>
                    <div className="bg-white p-6 rounded shadow-lg dark:bg-gray-900 dark:border-gray-700">
                        {children}
                    </div>
                </div>
            </div>
        </>

    );
}

export default AdminLayout;
