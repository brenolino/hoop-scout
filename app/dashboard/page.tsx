"use client"

import React from "react"
import { NavbarLogged } from "../components/navbar-logged"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ChevronDown, ChevronRight, UserPlus } from "lucide-react"
import { useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts"
import { Button } from "@/components/ui/button"
import Footer from "../components/footer"
import Link from "next/link"

// Dados de exemplo para o gráfico de radar
const data = [
  { subject: "Física", A: 8.8, B: 9.5 },
  { subject: "Habilidades", A: 9.1, B: 9.2 },
  { subject: "Arremesso", A: 8.3, B: 9.0 },
  { subject: "Chances", A: 8.8, B: 9.3 },
  { subject: "Aptidão Natural", A: 8.5, B: 9.1 },
]

export default function DashboardPage() {
  const [expandedRow, setExpandedRow] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <NavbarLogged />

      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Atletas Cadastrados</h2>
              <p className="text-gray-500">Gerencie e acompanhe o desenvolvimento dos atletas</p>
            </div>
            <div className="flex gap-4 items-center">
              <Input type="search" placeholder="Buscar atleta..." className="max-w-xs" />
              <Link href="/athlete/rating">
                <Button className="bg-[#1a75ff] hover:bg-[#1a75ff]/90">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Adicionar Atleta
                </Button>
              </Link>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[30px]"></TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Chances</TableHead>
                <TableHead>Média Geral</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[0, 1, 2, 3, 4].map((index) => (
                <React.Fragment key={index}>
                  <TableRow
                    className="cursor-pointer hover:bg-gray-50"
                    onClick={() => setExpandedRow(expandedRow === index ? null : index)}
                  >
                    <TableCell>
                      {expandedRow === index ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </TableCell>
                    <TableCell>Primeiro Nome</TableCell>
                    <TableCell>Alta</TableCell>
                    <TableCell>8.8</TableCell>
                    <TableCell>Nome do Time</TableCell>
                    <TableCell>11 - 02 - 2025</TableCell>
                    <TableCell>
                      <Link href={`/athlete/statistics/${index}`} passHref>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-800"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver Estatísticas
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                  {expandedRow === index && (
                    <TableRow>
                      <TableCell colSpan={7}>
                        <div className="grid grid-cols-2 gap-8 p-4 bg-gray-50">
                          <div className="space-y-6">
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <h4 className="font-medium text-gray-500">Data de Entrada</h4>
                                <p>11 - 02 - 2025</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-500">Posição</h4>
                                <p>Pivot</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-500">Físico</h4>
                                <p>8.8</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium text-gray-500">Endereço</h4>
                                <p>Rua José Lourenço Kelmer – São Pedro</p>
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-500">Telefone</h4>
                                <p>(32)2102-3911</p>
                              </div>
                            </div>
                          </div>

                          <div className="h-[200px]">
                            <ResponsiveContainer width="100%" height="100%">
                              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis angle={30} domain={[0, 10]} />
                                <Radar name="Atleta" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                              </RadarChart>
                            </ResponsiveContainer>
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>

          <div className="mt-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">4</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

