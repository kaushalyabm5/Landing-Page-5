import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react'; // Imported Lucide icons
import loginImg from '../../assets/loginImg/login3.png'; 

const Login = () => {
  // Centralized single source of truth for both form views
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending data to backend:", formData);
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-white p-4 overflow-x-hidden md:p-8 sm:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] sm:from-gray-50 sm:via-white sm:to-white">
      
      {/* ------------------------------------------------------------- */}
      {/* MOBILE / TABLET / IPAD VIEW: Dynamic & Form Fitting */}
      {/* ------------------------------------------------------------- */}
      <div className="flex xl:hidden flex-col w-full max-w-md md:max-w-xl min-h-[75vh] md:min-h-0 md:h-auto justify-between bg-gradient-to-b from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 relative overflow-hidden">
        {/* Dynamic Abstract Elements */}
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#E06D3E]/10 blur-2xl" />
        <div className="absolute top-1/3 -right-20 h-60 w-60 rounded-full bg-slate-300/20 blur-3xl" />
        
        {/* Mobile / Tablet Header Block */}
        <div className="relative z-10 mt-2">
          <h2 className="text-3xl font-black tracking-tight text-gray-900 md:text-4xl">
            Welcome back.
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-xs md:max-w-sm">
            Access your cross-platform dashboard, manage daily tasks, and seamlessly sync projects.
          </p>
        </div>

        {/* Mobile / Tablet Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-center my-8 md:my-6 space-y-5 relative z-10">
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              Account Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="name@company.com"
              className="w-full rounded-xl border-2 border-gray-200/80 px-4 py-3.5 text-sm focus:border-[#E06D3E] focus:outline-none transition-all bg-white shadow-inner"
              required
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Password
              </label>
              <a href="#forgot" className="text-xs font-medium text-[#E06D3E] hover:underline">
                Forgot?
              </a>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••••••"
                className={`w-full rounded-xl border-2 border-gray-200/80 px-4 py-3.5 text-sm focus:border-[#E06D3E] focus:outline-none transition-all bg-white shadow-inner ${showPassword ? 'tracking-normal' : 'tracking-widest'}`}
                required
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors select-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#0D0E12] to-black py-4 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:scale-[1.01] transition-transform mt-2"
          >
            Sign In to Dashboard
          </button>
        </form>
      </div>


      {/* ------------------------------------------------------------- */}
      {/* DESKTOP VIEW: Traditional Split Card Layout */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden xl:flex h-[420px] max-h-[420px] min-h-[420px] w-full max-w-[840px] items-center justify-center overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] border border-gray-100">
        
        {/* Left Side: Visual Banner */}
        <div className="relative w-1/2 flex-col justify-between p-7 h-full">
          <img 
            src={loginImg} 
            alt="BrightNest Background" 
            className="absolute inset-0 h-full w-full object-cover rounded-l-2xl"
          />
          <div className="absolute inset-0 bg-black/10 rounded-l-2xl" />
        </div>

        {/* Right Side: Traditional Card Form */}
        <div className="relative flex w-1/2 flex-col justify-center px-12 py-8">
          <div className="mx-auto w-full max-w-[300px]">
            <h2 className="mt-0.5 text-[1.5rem] font-bold tracking-tight text-[var(--main-green-color)]">
              Sign in to your account
            </h2>
            <p className="mt-1.5 text-[12px] text-gray-400 leading-normal">
              Access your tasks, notes, and projects anytime, anywhere.
            </p>

            <form className="mt-5 space-y-3" onSubmit={handleSubmit}>
              <div>
                <label className="block text-[12px] font-medium text-gray-600 mb-1">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="natalia.brak@knmstudio.com"
                  className="w-full rounded-md border border-gray-200 px-3 py-1.5 text-xs placeholder-gray-300 focus:border-gray-400 focus:outline-none transition-colors bg-white"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-[12px] font-medium text-gray-600">
                    Password
                  </label>
                  <a href="#forgot" className="text-[10px] text-gray-400 hover:text-[#E06D3E] transition-colors">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••••••"
                    className={`w-full rounded-md border border-gray-200 px-3 py-1.5 text-xs focus:border-gray-400 focus:outline-none transition-colors bg-white ${showPassword ? 'tracking-normal' : 'tracking-widest'}`}
                    required
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors cursor-pointer select-none"
                  >
                    {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="mt-3 w-full cursor-pointer rounded-md bg-[var(--main-green-color))] py-2 text-[12px] font-medium text-white shadow-md shadow-black/5 hover:bg-[var(--main-green-color)]/90 transition-all"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;