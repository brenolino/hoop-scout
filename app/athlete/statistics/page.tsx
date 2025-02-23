"use client"

import { NavbarLogged } from "../../components/navbar-logged"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowDown, ArrowUp, ChevronLeft, FileDown } from "lucide-react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import Footer from "../../components/footer"

// Dados de exemplo para os gráficos
const athleteData = [
  { attribute: "ATT", value: 85 },
  { attribute: "TG", value: 92 },
  { attribute: "INT", value: 78 },
  { attribute: "PE", value: 88 },
  { attribute: "CA", value: 75 },
  { attribute: "ST", value: 82 },
]

const modelData = [
  { attribute: "ATT", value: 95 },
  { attribute: "TG", value: 97 },
  { attribute: "INT", value: 92 },
  { attribute: "PE", value: 94 },
  { attribute: "CA", value: 90 },
  { attribute: "ST", value: 93 },
]

const timelineData = [
  { date: "01 Jan", athlete: 2400, model: 3000 },
  { date: "15 Jan", athlete: 1398, model: 2800 },
  { date: "01 Feb", athlete: 3200, model: 2900 },
  { date: "15 Feb", athlete: 2780, model: 3100 },
  { date: "01 Mar", athlete: 1890, model: 2950 },
  { date: "15 Mar", athlete: 2390, model: 3200 },
  { date: "01 Apr", athlete: 3490, model: 3400 },
]

export default function AthleteStatisticsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <NavbarLogged />

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg p-6">
          {/* Stats Cards */}
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
                  <p className="text-sm text-gray-500">Minutos por Jogo</p>
                  <h3 className="text-2xl font-bold mt-1">32.5</h3>
                </div>
                <ArrowDown className="text-red-500" />
              </div>
            </Card>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Athlete Stats */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">ATRIBUTOS MÉDIOS</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={athleteData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="attribute" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#1a75ff" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Timeline Comparison */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">EVOLUÇÃO AO LONGO DO TEMPO</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="athlete" stroke="#1a75ff" />
                  <Line type="monotone" dataKey="model" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </Card>

            {/* Model Stats */}
            <Card className="p-4">
              <h3 className="font-semibold mb-4">ATLETA MODELO</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={modelData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="attribute" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white"
              onClick={() => window.history.back()}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Voltar
            </Button>
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

