import React from 'react';
import AdminSidebar from "@/components/pages/admin/Sidebar"

function AdminLayout({ children }) {
    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-1 p-10">
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
