"use client"

import { useState } from "react"
import { NavbarLogged } from "../../components/navbar-logged"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Footer from "../../components/footer"

// Dados do atleta modelo para comparação
const modelAthleteData = [
  { attribute: "Altura", value: "2.28m" },
  { attribute: "Envergadura", value: "2.54m" },
  { attribute: "Peso", value: "141 Kg" },
  { attribute: "Nota Geral", value: "9.7" },
]

export default function AthleteRatingPage() {
  const [variables, setVariables] = useState([
    { name: "Skills", value: "" },
    { name: "Habilities", value: "" },
    { name: "Arremesso", value: "" },
  ])

  const [newVariable, setNewVariable] = useState({
    name: "",
    grade: "",
    weight: "",
  })

  const handleAddVariable = () => {
    if (newVariable.name && newVariable.grade && newVariable.weight) {
      setVariables([...variables, { name: newVariable.name, value: "" }])
      setNewVariable({ name: "", grade: "", weight: "" })
    }
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <NavbarLogged />

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Avaliação</h2>
            <h1 className="text-3xl font-bold">Atleta Fulano de Tal</h1>
            <p className="text-gray-500">Avalie este atleta</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Variables and Rating */}
            <div className="space-y-6">
              {variables.map((variable, index) => (
                <Input
                  key={index}
                  placeholder={variable.name}
                  value={variable.value}
                  onChange={(e) => {
                    const newVariables = [...variables]
                    newVariables[index].value = e.target.value
                    setVariables(newVariables)
                  }}
                  className="h-12 text-lg"
                />
              ))}

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full h-12 bg-orange-500 hover:bg-orange-600 text-lg">Nova variável</Button>
                </DialogTrigger>
                <DialogContent className="bg-white">
                  <DialogHeader>
                    <DialogTitle>Adicionar Nova Variável</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4 ">
                    <Input
                      placeholder="Nova Variável"
                      value={newVariable.name}
                      onChange={(e) => setNewVariable({ ...newVariable, name: e.target.value })}
                    />
                    <Input
                      placeholder="Nota"
                      type="number"
                      value={newVariable.grade}
                      onChange={(e) => setNewVariable({ ...newVariable, grade: e.target.value })}
                    />
                    <Input
                      placeholder="Peso"
                      type="number"
                      value={newVariable.weight}
                      onChange={(e) => setNewVariable({ ...newVariable, weight: e.target.value })}
                    />
                    <Button className="w-full bg-orange-500 hover:bg-orange-600" onClick={handleAddVariable}>
                      Adicionar Variável
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-lg">Avaliar</Button>
            </div>

            {/* Right side - Model Athlete Card */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Atributos</h3>
              <div className="space-y-4">
                {modelAthleteData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-600">{item.attribute}</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Physical Attributes Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Atributos Físicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Altura (cm)" type="number" className="h-12" />
              <Input placeholder="Peso (kg)" type="number" className="h-12" />
              <Input placeholder="Envergadura (cm)" type="number" className="h-12" />
              <Input placeholder="Salto Vertical (cm)" type="number" className="h-12" />
              <Input placeholder="Velocidade (s/40m)" type="number" className="h-12" />
              <Input placeholder="Índice de Agilidade" type="number" className="h-12" />
            </div>
          </div>

          {/* Game Statistics Section */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Estatísticas de Jogo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input placeholder="Pontos por Jogo" type="number" className="h-12" />
              <Input placeholder="Rebotes por Jogo" type="number" className="h-12" />
              <Input placeholder="Assistências por Jogo" type="number" className="h-12" />
              <Input placeholder="Aproveitamento de Arremessos (%)" type="number" className="h-12" />
              <Input placeholder="Aproveitamento de 3 Pontos (%)" type="number" className="h-12" />
              <Input placeholder="Aproveitamento de Lances Livres (%)" type="number" className="h-12" />
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700 px-8">Salvar Atleta</Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

