"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingBasketIcon as Basketball } from "lucide-react"
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const response = await fetch('http://localhost:8083/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('jwtToken', data.token);
      window.location.href = '/dashboard'; 
    } else {
      alert('E-mail ou senha inválidos.');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-2">
      {/* Left side - Black */}
      <div className="bg-[#1a1a1a] p-16 flex flex-col justify-center">
        <div className="space-y-4">
          <h1 className="text-white text-7xl font-bold tracking-tighter flex items-center gap-2">
            HoopScout <Basketball className="w-12 h-12 stroke-[3]" />
          </h1>
          <div className="space-y-0 text-white text-3xl font-bold leading-tight">
            <p>explore seu desempenho</p>
            <p>e estatísticas no basquete</p>
            <p>através dos dados</p>
          </div>
        </div>
      </div>

      {/* Right side - Dark Gray */}
      <div className="bg-[#2a2a2a] p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-4">
          <Input
            type="email"
            placeholder="e-mail"
            className="h-12 bg-white border-0 text-black text-lg rounded-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="senha"
            className="h-12 bg-white border-0 text-black text-lg rounded-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className="w-full h-12 bg-[#1a75ff] hover:bg-[#1a75ff]/90 rounded-none text-lg font-medium"
            onClick={handleLogin}
          >
            Entrar
          </Button>
          <div className="text-center">
            <a href="/cadastro" className="text-white hover:underline text-sm underline underline-offset-4">
              Primeira vez? Crie uma conta!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}