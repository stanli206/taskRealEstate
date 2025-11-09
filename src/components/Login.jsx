import React from "react";
import { Link } from "react-router-dom";

const Input = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
    />
  </div>
);

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <Link
          to="/residential/ongoing-projects"
          className="flex items-center group"
        >
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="ml-3 text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            EliteHouse
          </span>
        </Link>
        <Link
          to="/"
          className="text-sm font-medium text-purple-700 hover:text-purple-900"
        >
          Back to Home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-extrabold">
                Welcome back 👋
              </h1>
              <p className="text-gray-600 mt-2">
                Login to continue your EliteHouse journey
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Continue with Google
                </span>
              </button>
              <button className="w-full border border-gray-300 rounded-xl py-3 px-4 flex items-center justify-center gap-2 hover:bg-gray-50 transition">
                <img
                  src="https://www.svgrepo.com/show/452196/apple.svg"
                  alt="Apple"
                  className="w-5 h-5"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Continue with Apple
                </span>
              </button>
            </div>

            <div className="flex items-center my-8">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                or
              </span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <form className="space-y-4">
              <Input
                label="Email address"
                type="email"
                placeholder="you@example.com"
              />
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-sm font-medium text-purple-700 hover:text-purple-900"
                  >
                    Forgot?
                  </Link>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  Remember me
                </label>
              </div>

              <button
                type="button"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all"
              >
                Log in
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-6">
              New to EliteHouse?{" "}
              <Link className="font-semibold text-purple-700 hover:text-purple-900">
                Create an account
              </Link>
            </p>

            <p className="text-xs text-gray-500 mt-4">
              By continuing, you agree to our{" "}
              <Link to="/terms" className="underline hover:text-gray-700">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="underline hover:text-gray-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[380px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=1600&auto=format&fit=crop"
              alt="EliteHouse"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-700/70 via-pink-600/50 to-transparent" />
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="backdrop-blur-sm bg-white/10 rounded-xl p-6">
                <h2 className="text-2xl font-bold">Live the Elite Life</h2>
                <p className="mt-2 text-sm text-pink-100">
                  Curated homes, transparent pricing, expert guidance — all in
                  one place.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-white/20">
                    RERA Verified
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-white/20">
                    Trusted Builders
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-white/20">
                    Loan Assistance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-8">
          © {new Date().getFullYear()} EliteHouse. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
