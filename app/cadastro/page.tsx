"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ShoppingBasketIcon as Basketball } from "lucide-react"

export default function CadastroPage() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      {/* Left side - Black */}
      <div className="bg-[#1a1a1a] p-16 flex flex-col justify-center">
        <div className="space-y-4">
          <h1 className="text-white text-7xl font-bold tracking-tighter flex items-center gap-2">
            HoopScout <Basketball className="w-12 h-12 stroke-[3]" />
          </h1>
          <div className="space-y-0 text-white text-3xl font-bold leading-tight">
            <p>crie sua conta</p>
            <p>e comece a analisar</p>
            <p>seu jogo hoje</p>
          </div>
        </div>
      </div>

      {/* Right side - Dark Gray */}
      <div className="bg-[#2a2a2a] p-16 flex flex-col justify-center items-center">
        <div className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="nome completo"
            className="h-12 bg-white border-0 text-black text-lg rounded-none"
          />
          <Input type="email" placeholder="e-mail" className="h-12 bg-white border-0 text-black text-lg rounded-none" />
          <Input
            type="password"
            placeholder="senha"
            className="h-12 bg-white border-0 text-black text-lg rounded-none"
          />
          <Input
            type="password"
            placeholder="confirmar senha"
            className="h-12 bg-white border-0 text-black text-lg rounded-none"
          />
          <Button className="w-full h-12 bg-[#1a75ff] hover:bg-[#1a75ff]/90 rounded-none text-lg font-medium">
            Criar Conta
          </Button>
          <div className="text-center">
            <a href="#" className="text-white hover:underline text-sm underline underline-offset-4">
              Já tem uma conta? Faça login!
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

