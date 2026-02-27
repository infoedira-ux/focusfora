"use client";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const supabase = createClient();

  async function handleLogin() {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-offwhite flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="font-serif text-3xl text-aubergine">
            Focus<span className="text-saffron">Fora</span>
          </Link>
          <p className="text-[#5A4060] text-sm mt-2 font-light">Welcome back</p>
        </div>
        <div className="bg-white p-8 rounded-sm border border-aubergine/[0.08] shadow-xl shadow-aubergine/[0.06]">
          <h1 className="font-serif text-2xl text-aubergine mb-6">Sign in</h1>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-sm mb-5">
              {error}
            </div>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors bg-offwhite"
                placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-xs font-medium text-aubergine uppercase tracking-wider mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full border border-aubergine/20 rounded-sm px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors bg-offwhite"
                placeholder="••••••••" />
            </div>
            <button onClick={handleLogin} disabled={loading}
              className="w-full ff-btn-primary py-3 text-sm disabled:opacity-50 disabled:cursor-not-allowed">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>
          <div className="mt-6 text-center space-y-3">
            <p className="text-xs text-[#5A4060]">
              Don't have an account?{" "}
              <Link href="/register" className="text-aubergine font-medium hover:text-saffron transition-colors">
                Create one free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
