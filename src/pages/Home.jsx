import React from "react";
import { 
    FaUserCircle, 
    FaRegEye, 
    FaTruckLoading, 
    FaWallet, 
    FaChevronRight, 
    FaLightbulb, 
    FaWhatsapp, 
    FaUniversity, 
    FaClipboardList
} from "react-icons/fa";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F4F1E8] font-sans">
            {/* Navbar */}
            <nav className="bg-[#30360E] text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
                <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-full text-[#30360E]">
                        {/* Menggunakan icon perisai sebagai placeholder logo */}
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C381.5 463.7 496 326.5 496 128c0-19.4-11.7-36.9-30.5-44.3zM256 464.1c-100.8-43.2-192-167.3-192-336.1l192-80 192 80c0 168.8-91.2 292.9-192 336.1z"></path></svg>
                    </div>
                    <span className="font-bold text-xs md:text-sm uppercase tracking-wider">Sistem Manajemen Toke Sawit</span>
                </div>
                <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest">
                    <a href="#" className="border-b-2 border-white pb-1">Dashboard</a>
                    <a href="#" className="opacity-70 hover:opacity-100 transition">Riwayat Timbangan</a>
                    <a href="#" className="opacity-70 hover:opacity-100 transition">Pinjaman Saya</a>
                </div>
                <div className="text-3xl cursor-pointer">
                    <FaUserCircle />
                </div>
            </nav>

            {/* Hero Section */}
            <div className="bg-[#30360E] relative overflow-hidden pt-12 pb-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
                    
                    {/* Bagian Gambar (Path sesuai VS Code kamu) */}
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src="/sawit_transparant.png" 
                            alt="Sawit Transparant" 
                            className="w-full max-w-[500px] drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] transform -rotate-2 hover:rotate-0 transition duration-500"
                        />
                    </div>

                    {/* Bagian Teks Welcome */}
                    <div className="md:w-1/2 text-white text-center md:text-left">
                        <p className="italic text-[#E2D4B9] mb-3 text-lg font-medium">Selamat datang di</p>
                        <h1 className="text-5xl md:text-[80px] font-black mb-8 leading-[0.9] tracking-tighter uppercase">
                            Sistem <br /> Manajemen <br /> Sawit <span className="text-[#E2D4B9]">👍</span> T-OKE
                        </h1>
                        <div className="space-y-1">
                            <p className="text-xl font-medium">Halo, Ben! Kami hadir untuk</p>
                            <p className="text-lg font-bold text-[#E2D4B9] uppercase tracking-widest">Membangun Sinergi dan Menyejahterakan Petani.</p>
                        </div>
                    </div>
                </div>

                {/* Dekorasi Aksen Background */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3a4411] -skew-x-12 translate-x-24 opacity-50"></div>
            </div>

            {/* Harga Sawit Hari Ini (Floating Card) */}
            <div className="max-w-4xl mx-auto -mt-14 px-6 relative z-20">
                <div className="bg-[#787F56] text-white p-8 rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col md:flex-row items-center justify-center gap-10 border-4 border-white/10">
                    <div className="text-center md:text-left">
                        <p className="text-[11px] uppercase font-black tracking-[0.2em] opacity-80 mb-1">Harga sawit hari ini</p>
                        <h2 className="text-6xl font-black tracking-tighter">Rp. 3000<span className="text-xl font-medium opacity-70">/kg</span></h2>
                        <p className="text-[11px] font-bold opacity-60 mt-1 uppercase">Update 06 mei 2026</p>
                    </div>
                    <div className="h-16 w-[2px] bg-white/20 hidden md:block"></div>
                    <div className="flex items-center gap-3 bg-white/10 py-3 px-8 rounded-full border border-white/20">
                        <div className="w-6 h-6 bg-white text-[#787F56] rounded-full flex items-center justify-center font-bold text-sm">✓</div>
                        <span className="text-sm font-black uppercase tracking-widest">Status harga Berlaku</span>
                    </div>
                </div>
            </div>

            {/* Statistik Utama */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                <StatCard 
                    label="PENDAPATAN BULAN INI" 
                    value="Rp 15.845.00" 
                    sub="Periode Desember 2029" 
                    icon={<FaRegEye />} 
                    bg="bg-[#E2D4B9]" 
                />
                <StatCard 
                    label="TOTAL PANEN" 
                    value="5, 19 Ton" 
                    sub="Total akumulasi 5,199 Ton" 
                    icon={<FaTruckLoading />} 
                    bg="bg-[#E2D4B9]" 
                />
                <StatCard 
                    label="PINJAMAN AKTIF" 
                    value="Rp 400.000" 
                    sub="Segera lunasi hutang" 
                    icon={<FaWallet />} 
                    bg="bg-[#787F56]" 
                    dark 
                />
            </div>

            {/* Menu Utama Section */}
            <div className="max-w-7xl mx-auto px-6 pb-16">
                <div className="flex items-center gap-3 mb-10">
                    <div className="grid grid-cols-2 gap-1 w-6">
                        <div className="w-2.5 h-2.5 bg-[#30360E]"></div>
                        <div className="w-2.5 h-2.5 bg-[#30360E]"></div>
                        <div className="w-2.5 h-2.5 bg-[#30360E]"></div>
                        <div className="w-2.5 h-2.5 bg-[#30360E]"></div>
                    </div>
                    <h3 className="font-black text-2xl text-[#30360E] uppercase tracking-widest">Menu Utama</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <MenuBtn icon={<FaClipboardList />} label="Riwayat Timbangan" />
                    <MenuBtn icon={<FaUniversity />} label="Ajukan Pinjaman" />
                    <MenuBtn icon={<FaUserCircle />} label="Profile Saya" />
                    <MenuBtn icon={<FaWhatsapp />} label="Hubungi Admin" />
                </div>
            </div>

            {/* Tips & Berita Sawit */}
            <div className="bg-[#E2D4B9]/30 py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-12">
                        <div className="flex items-center gap-4">
                            <FaLightbulb className="text-4xl text-[#30360E]" />
                            <h3 className="text-4xl font-black text-[#30360E] uppercase tracking-tighter">Tips & Berita Sawit</h3>
                        </div>
                        <button className="bg-transparent border-2 border-[#30360E] px-8 py-2.5 rounded-full font-black text-[#30360E] uppercase text-xs hover:bg-[#30360E] hover:text-white transition-all">
                            Lihat Semua
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <NewsCard 
                            tag="Tips" 
                            title="Cara Pemupukan Efektif di Musim Hujan" 
                            img="https://images.unsplash.com/photo-1597113366853-91f976ed8142?q=80&w=400&auto=format&fit=crop" 
                        />
                        <NewsCard 
                            tag="Series" 
                            title="Prediksi Harga Sawit Bulan Depan" 
                            img="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&auto=format&fit=crop" 
                        />
                        <NewsCard 
                            tag="Teknologi" 
                            title="Alat Panen Modern untuk Efisiensi" 
                            img="https://images.unsplash.com/photo-1592919016327-51303e226488?q=80&w=400&auto=format&fit=crop" 
                        />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#332E2E] text-white p-16">
                <div className="max-w-7xl mx-auto border-t border-white/10 pt-10">
                    <h2 className="font-black text-3xl mb-1 tracking-tighter text-white">UD. TOKESAWIT</h2>
                    <p className="text-xs font-bold opacity-50 uppercase tracking-[0.3em] text-white">Sistem Manajemen Toke Sawit</p>
                </div>
            </footer>
        </div>
    );
}

// Komponen Pembantu
function StatCard({ label, value, sub, icon, bg, dark }) {
    return (
        <div className={`${bg} ${dark ? 'text-white' : 'text-[#30360E]'} p-10 rounded-[30px] shadow-lg relative overflow-hidden group transition-all duration-300 hover:shadow-2xl`}>
            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <p className="text-[11px] font-black uppercase tracking-widest opacity-80">{label}</p>
                    <div className="text-3xl opacity-40">{icon}</div>
                </div>
                <h3 className="text-4xl font-black mb-2 tracking-tighter">{value}</h3>
                <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">{sub}</p>
            </div>
            <div className="absolute -bottom-6 -right-6 text-9xl opacity-5 group-hover:scale-110 transition duration-500">{icon}</div>
        </div>
    );
}

function MenuBtn({ icon, label }) {
    return (
        <button className="bg-[#E2D4B9] p-10 rounded-[35px] flex flex-col items-center gap-5 shadow-sm hover:shadow-2xl hover:bg-[#D4C4A3] transition-all transform hover:-translate-y-2 group border-b-8 border-black/5">
            <div className="text-4xl text-[#30360E] group-hover:scale-110 transition duration-300">{icon}</div>
            <span className="text-xs font-black text-[#30360E] uppercase tracking-widest text-center">{label}</span>
        </button>
    );
}

function NewsCard({ tag, title, img }) {
    return (
        <div className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-gray-100 flex flex-col h-full group">
            <div className="overflow-hidden">
                <img src={img} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition duration-700" />
            </div>
            <div className="p-10 flex flex-col flex-grow">
                <span className="text-[#787F56] text-[11px] font-black uppercase tracking-[0.2em] mb-4">{tag}</span>
                <h4 className="text-2xl font-black text-[#30360E] mb-8 leading-tight">{title}</h4>
                <button className="text-[#30360E] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 mt-auto group-hover:gap-4 transition-all">
                    Baca Selengkapnya... <FaChevronRight className="text-[8px]" />
                </button>
            </div>
        </div>
    );
}