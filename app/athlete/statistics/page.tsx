"use client"

import { NavbarLogged } from "../../components/navbar-logged"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, ArrowUp, ChevronLeft, FileDown } from "lucide-react"
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import Footer from "../../components/footer"
import Link from "next/link"

// Dados de exemplo para os gráficos com os atributos atualizados e escala até 10
const athleteData = [
  { attribute: "Salto Vertical", Valor: 8.0 },
  { attribute: "Velocidade", Valor: 7.5 },
  { attribute: "Índice de Agilidade", Valor: 8.5 },
  { attribute: "Aproveitamento de Arremessos", Valor: 7.0 },
  { attribute: "Aproveitamento de 3 Pontos", Valor: 6.5 },
  { attribute: "Aproveitamento de Lances Livres", Valor: 8.0 },
]

const modelData = [
  { attribute: "Salto Vertical", Valor: 9.0 },
  { attribute: "Velocidade", Valor: 8.5 },
  { attribute: "Índice de Agilidade", Valor: 9.0 },
  { attribute: "Aproveitamento de Arremessos", Valor: 8.0 },
  { attribute: "Aproveitamento de 3 Pontos", Valor: 7.5 },
  { attribute: "Aproveitamento de Lances Livres", Valor: 9.0 },
]

// Gráfico de comparação entre os atributos do atleta e do modelo
const comparisonData = [
  { attribute: "Salto Vertical", Atleta: 8.0, Modelo: 9.0 },
  { attribute: "Velocidade", Atleta: 7.5, Modelo: 8.5 },
  { attribute: "Índice de Agilidade", Atleta: 8.5, Modelo: 9.0 },
  { attribute: "Aproveitamento de Arremessos", Atleta: 7.0, Modelo: 8.0 },
  { attribute: "Aproveitamento de 3 Pontos", Atleta: 6.5, Modelo: 7.5 },
  { attribute: "Aproveitamento de Lances Livres", Atleta: 8.0, Modelo: 9.0 },
]

export default function AthleteStatisticsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <NavbarLogged />

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg p-6">
          {/* Cartões de Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
            <Card className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Pontos Hoje</p>
                  <h3 className="text-2xl font-bold mt-1">25</h3>
                </div>
                <ArrowUp className="text-green-500" />
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Assistências Hoje</p>
                  <h3 className="text-2xl font-bold mt-1">7</h3>
                </div>
                <ArrowUp className="text-green-500" />
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Rebotes por Jogo</p>
                  <h3 className="text-2xl font-bold mt-1">8.5</h3>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">% Arremessos</p>
                  <h3 className="text-2xl font-bold mt-1">48.2%</h3>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500">Avaliação Geral</p>
                  <h3 className="text-2xl font-bold mt-1">6.4</h3>
                </div>
              </div>
            </Card>
          </div>

          {/* Seção de Gráficos */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Atributos Médios do Atleta */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">ATRIBUTOS MÉDIOS</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={athleteData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="attribute" hide/>
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Valor" fill="#1a75ff" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Gráfico de Comparação entre os Atributos */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">COMPARAÇÃO DE ATRIBUTOS</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="attribute" hide/>
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Atleta" fill="#1a75ff" />
                  <Bar dataKey="Modelo" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Atributos do Atleta Modelo */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">ATLETA MODELO</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={modelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="attribute" hide/>
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Valor" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Botões de Ação */}
          <div className="flex gap-4">
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </Link>
            <Button variant="destructive">
              <FileDown className="mr-2 h-4 w-4" />
              Exportar PDF
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
