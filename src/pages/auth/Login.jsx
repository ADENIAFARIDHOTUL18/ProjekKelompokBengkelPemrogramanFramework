import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BsFillExclamationDiamondFill, BsShieldCheck } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { FcGoogle } from "react-icons/fc";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({ email: "", password: "" });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        axios.post("https://dummyjson.com/user/login", {
            username: dataForm.email,
            password: dataForm.password,
        })
        .then(() => navigate("/"))
        .catch((err) => setError(err.response?.data?.message || "Login Gagal"))
        .finally(() => setLoading(false));
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <nav className="bg-[#30360E] text-white p-4 flex justify-between items-center px-6 md:px-20 shadow-lg">
                <div className="flex items-center gap-3">
                    <div className="bg-white p-1.5 rounded-full text-[#30360E]">
                        <BsShieldCheck size={22} />
                    </div>
                    <span className="font-bold text-lg md:text-xl tracking-tight">Sistem Manajemen Toke Sawit</span>
                </div>
                <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
                    <a href="#" className="hover:text-[#E2D4B9]">Masuk</a>
                    <a href="#" className="hover:text-[#E2D4B9]">Daftar Mitra</a>
                </div>
            </nav>

            {/* Container Utama - Disini kita buat lebarnya maksimal */}
            <div className="flex-grow flex items-center justify-center p-4 md:p-10">
                <div className="flex flex-col md:flex-row w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                    
                    {/* Sisi Kiri: Deep Green */}
                    <div className="md:w-1/2 bg-[#30360E] p-10 md:p-20 text-white flex flex-col justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Selamat Datang Kembali!</h1>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            Sistem Manajemen Toke Sawit. Kelola perkebunan dan transaksi Anda dengan mudah, cepat, dan transparan.
                        </p>
                        <div className="flex items-center gap-5">
                            <div className="bg-white/10 p-4 rounded-2xl border border-white/20">
                                <BsShieldCheck className="text-3xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-xl">Keamanan Terjamin</h4>
                                <p className="text-sm text-gray-400">Data Anda tersimpan dengan aman.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sisi Kanan: Clay Beige Form */}
                    <div className="md:w-1/2 bg-[#E2D4B9] p-8 md:p-20 flex flex-col justify-center">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-black text-[#30360E] mb-2 uppercase">Login Mitra</h2>
                            <p className="text-[#30360E]/60 italic font-medium">Silahkan masuk dengan akun anda</p>
                        </div>

                        {/* Google Login */}
                        <button className="w-full flex items-center justify-center gap-3 border-2 border-[#30360E] rounded-full py-3.5 font-bold text-[#30360E] hover:bg-white/50 transition-all mb-8">
                            <FcGoogle className="text-2xl" />
                            Login dengan Akun Google
                        </button>

                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-[1px] bg-[#30360E]/20 flex-grow"></div>
                            <span className="text-[10px] font-black text-[#30360E]/40 uppercase tracking-[0.2em]">Atau Email</span>
                            <div className="h-[1px] bg-[#30360E]/20 flex-grow"></div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-[11px] font-black text-[#30360E] mb-2 uppercase tracking-widest">Email Address</label>
                                <div className="relative">
                                    <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2D4B9] text-lg" />
                                    <input
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        className="w-full bg-[#30360E] text-white pl-14 pr-6 py-4 rounded-2xl focus:ring-4 focus:ring-[#787F56]/50 outline-none placeholder:text-gray-500"
                                        placeholder="SuperAdmin19"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-black text-[#30360E] mb-2 uppercase tracking-widest">Password</label>
                                <div className="relative">
                                    <FaLock className="absolute left-5 top-1/2 -translate-y-1/2 text-[#E2D4B9] text-lg" />
                                    <input
                                        type="password"
                                        name="password"
                                        onChange={handleChange}
                                        className="w-full bg-[#30360E] text-white pl-14 pr-6 py-4 rounded-2xl focus:ring-4 focus:ring-[#787F56]/50 outline-none placeholder:text-gray-500"
                                        placeholder="••••••••••••"
                                    />
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs font-bold text-[#30360E] pt-2">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" className="w-4 h-4 accent-[#30360E] rounded" /> Ingat Saya
                                </label>
                                <a href="#" className="hover:underline">Lupa Password?</a>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#787F56] hover:bg-[#30360E] text-white font-black py-5 rounded-[20px] shadow-xl transition-all uppercase tracking-widest mt-6"
                            >
                                {loading ? <ImSpinner2 className="animate-spin mx-auto text-2xl" /> : "Masuk Sekarang"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}