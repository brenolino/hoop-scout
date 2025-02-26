"use client"

import { useState } from "react"
import Link from "next/link"
import { NavbarLogged } from "../../components/navbar-logged"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Footer from "../../components/footer"

export default function AthleteRatingPage() {

  const userString = localStorage.getItem('user');
  const nomeAtleta = userString ? JSON.parse(userString).name : '';

  
  async function salvarDados() {
    const altura = document.querySelector('input[placeholder="Altura (cm)"]') as HTMLInputElement;
    const peso = document.querySelector('input[placeholder="Peso (kg)"]') as HTMLInputElement;
    const idade = document.querySelector('input[placeholder="Idade"]') as HTMLInputElement;
    const assists = document.querySelector('input[placeholder="Assistências por Jogo"]') as HTMLInputElement;
    const threePointPercentage = document.querySelector('input[placeholder="Aproveitamento de Arremessos 3 pontos(%)"]') as HTMLInputElement;
    const twoPointPercentage = document.querySelector('input[placeholder="Aproveitamento de Arremessos 2 Pontos (%)"]') as HTMLInputElement;
    const freeThrowPercentage = document.querySelector('input[placeholder="Aproveitamento de Lances Livres (%)"]') as HTMLInputElement;

    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    if (!user) {
      alert('Usuário não encontrado');
      return;
    }

    const response = await fetch('http://localhost:8083/athlete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({
        height: altura.value,
        weight: peso.value,
        age: idade.value,
        assistsGame: assists.value,
        longShot: threePointPercentage.value,
        shortShot: twoPointPercentage.value,
        freeThrow: freeThrowPercentage.value
      })
    });

    if (response.ok) {
      alert('Atleta salvo com sucesso!');
    } else {
      alert('Erro ao salvar atleta');
  }

  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <NavbarLogged />

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Avaliação</h2>
            <h1 className="text-3xl font-bold">{nomeAtleta}</h1>
            <p className="text-gray-500">Avalie este atleta</p>
          </div>



          {/* Physical Attributes Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Atributos Físicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Altura (cm)" type="number" className="h-12" />
              <Input placeholder="Peso (kg)" type="number" className="h-12" />
              <Input placeholder="Idade" type="number" className="h-12" />
            </div>
          </div>

          {/* Game Statistics Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Estatísticas de Jogo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Assistências por Jogo" type="number" className="h-12" />
              <Input placeholder="Aproveitamento de Arremessos 3 pontos(%)" type="number" className="h-12" />
              <Input placeholder="Aproveitamento de Arremessos 2 Pontos (%)" type="number" className="h-12" />
              <Input placeholder="Aproveitamento de Lances Livres (%)" type="number" className="h-12" />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <Link href="/dashboard">
              <Button className="bg-green-600 hover:bg-green-700 px-8" onClick={salvarDados}>Salvar Atleta</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

