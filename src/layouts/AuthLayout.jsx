import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        // Kita hapus flex-center dan max-width agar konten bisa memenuhi layar
        <div className="min-h-screen bg-white">
            <main>
                {/* Outlet akan merender Login.jsx tanpa dibatasi kotak putih sempit */}
                <Outlet />
            </main>

            {/* Footer opsional yang rapi di bagian bawah */}
            <footer className="py-6 bg-[#E2D4B9]">
                <p className="text-center text-[10px] md:text-xs font-bold text-[#30360E] tracking-widest uppercase">
                    © 2026 Sistem Manajemen Toke Sawit. All rights reserved.
                </p>
            </footer>
        </div>
    );
}