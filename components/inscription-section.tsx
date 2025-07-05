"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { User, Phone, Mail, Calendar, MapPin, FileText } from "lucide-react"

export default function InscriptionSection() {
  const [formData, setFormData] = useState({
    nomeAluno: "",
    dataNascimento: "",
    nomeResponsavel: "",
    telefone: "",
    email: "",
    endereco: "",
    categoria: "",
    observacoes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Dados do formulário:", formData)
    alert("Inscrição enviada com sucesso! Entraremos em contato em breve.")
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="inscricao" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-700 text-sm font-medium tracking-wide">Faça Parte</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Inscreva-se Agora</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Preencha o formulário abaixo e garante a vaga do seu filho na nossa escola de futebol
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl shadow-slate-900/10 border-0">
            <CardHeader className="bg-gradient-to-r from-red-600 to-blue-900 text-white rounded-t-lg">
              <CardTitle className="text-2xl font-bold text-center">Formulário de Inscrição</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nome do Aluno */}
                  <div className="space-y-2">
                    <Label htmlFor="nomeAluno" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-red-600" />
                      <span>Nome do Aluno</span>
                    </Label>
                    <Input
                      id="nomeAluno"
                      value={formData.nomeAluno}
                      onChange={(e) => handleChange("nomeAluno", e.target.value)}
                      placeholder="Digite o nome completo do aluno"
                      required
                    />
                  </div>

                  {/* Data de Nascimento */}
                  <div className="space-y-2">
                    <Label htmlFor="dataNascimento" className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-red-600" />
                      <span>Data de Nascimento</span>
                    </Label>
                    <Input
                      id="dataNascimento"
                      type="date"
                      value={formData.dataNascimento}
                      onChange={(e) => handleChange("dataNascimento", e.target.value)}
                      required
                    />
                  </div>

                  {/* Nome do Responsável */}
                  <div className="space-y-2">
                    <Label htmlFor="nomeResponsavel" className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-blue-900" />
                      <span>Nome do Responsável</span>
                    </Label>
                    <Input
                      id="nomeResponsavel"
                      value={formData.nomeResponsavel}
                      onChange={(e) => handleChange("nomeResponsavel", e.target.value)}
                      placeholder="Digite o nome do responsável"
                      required
                    />
                  </div>

                  {/* Telefone */}
                  <div className="space-y-2">
                    <Label htmlFor="telefone" className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-blue-900" />
                      <span>Telefone</span>
                    </Label>
                    <Input
                      id="telefone"
                      value={formData.telefone}
                      onChange={(e) => handleChange("telefone", e.target.value)}
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-blue-900" />
                      <span>E-mail</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="seuemail@exemplo.com"
                      required
                    />
                  </div>

                  {/* Categoria */}
                  <div className="space-y-2">
                    <Label htmlFor="categoria" className="flex items-center space-x-2">
                      <FileText className="w-4 h-4 text-red-600" />
                      <span>Categoria Desejada</span>
                    </Label>
                    <Select onValueChange={(value) => handleChange("categoria", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sub08">Sub-08 (6-8 anos)</SelectItem>
                        <SelectItem value="sub10">Sub-10 (8-10 anos)</SelectItem>
                        <SelectItem value="sub12">Sub-12 (10-12 anos)</SelectItem>
                        <SelectItem value="sub14">Sub-14 (12-14 anos)</SelectItem>
                        <SelectItem value="sub16">Sub-16 (14-16 anos)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Endereço */}
                <div className="space-y-2">
                  <Label htmlFor="endereco" className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-blue-900" />
                    <span>Endereço Completo</span>
                  </Label>
                  <Input
                    id="endereco"
                    value={formData.endereco}
                    onChange={(e) => handleChange("endereco", e.target.value)}
                    placeholder="Rua, número, bairro, cidade, CEP"
                    required
                  />
                </div>

                {/* Observações */}
                <div className="space-y-2">
                  <Label htmlFor="observacoes" className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-slate-600" />
                    <span>Observações (Opcional)</span>
                  </Label>
                  <Textarea
                    id="observacoes"
                    value={formData.observacoes}
                    onChange={(e) => handleChange("observacoes", e.target.value)}
                    placeholder="Alguma informação adicional sobre o aluno..."
                    rows={4}
                  />
                </div>

                {/* Botão de Envio */}
                <div className="text-center pt-6">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-red-600 to-blue-900 hover:from-red-700 hover:to-blue-800 text-white font-bold px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Enviar Inscrição
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">100% Gratuito</h3>
            <p className="text-slate-600 text-sm">Treinos, uniformes e acompanhamento sem nenhum custo</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚽</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Início Imediato</h3>
            <p className="text-slate-600 text-sm">Após aprovação, o aluno já pode começar os treinos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
