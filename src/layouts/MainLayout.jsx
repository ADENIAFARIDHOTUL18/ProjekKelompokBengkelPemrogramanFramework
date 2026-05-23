import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function MainLayout() {
    return (
        /* Menggunakan latar belakang #F4F1E8 agar senada dengan konsep Home */
        <div id="app-container" className="bg-[#F4F1E8] min-h-screen flex font-poppins">
            
            {/* Sidebar Tetap di Samping */}
            <Sidebar />

            <div id="layout-wrapper" className="flex flex-col flex-1">
                {/* Header diletakkan di atas area konten */}
                <Header />

                {/* Area Konten Utama */}
                <main id="main-content" className="flex-1 p-6 md:p-8 overflow-y-auto">
                    {/* Pembungkus Outlet agar konten di dalamnya memiliki jarak yang rapi */}
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>

                {/* Footer Kecil Khusus Dashboard (Opsional) */}
                <footer className="p-6 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    © 2026 UD. TOKESAWIT - Management System
                </footer>
            </div>
        </div>
    );
}