"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, Users, Target, Clock } from "lucide-react"
import { motion } from "framer-motion"

interface TrainingTabProps {
  onTabChange: (tab: string) => void
}

export default function TrainingTab({ onTabChange }: TrainingTabProps) {
  const handleInscricaoClick = (age: string, schedule: string, day: string) => {
    const message = `Olá, gostaria de matricular meu filho na turma ${age} que treina ${day} no horário ${schedule}. Meu filho tem entre ${age.replace("-", " e ")} anos. Gostaria de mais informações sobre a matrícula.`
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511973565415&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const icon = (name: string) => {
    switch (name) {
      case "Segunda-feira":
        return <Calendar className="w-6 h-6 text-white" />
      case "Terça-feira":
        return <Users className="w-6 h-6 text-white" />
      case "Quarta-feira":
        return <Target className="w-6 h-6 text-white" />
      case "Quinta-feira":
        return <Clock className="w-6 h-6 text-white" />
      case "Sexta-feira":
        return <Calendar className="w-6 h-6 text-white" />
      default:
        return <Calendar className="w-6 h-6 text-white" />
    }
  }

  const categories = [
    {
      name: "Segunda-feira",
      slots: [
        {
          age: "6-9 anos",
          schedule: "18h às 19h30",
          focus: "Iniciação e coordenação motora",
          students: "25+ alunos",
          description: "Primeira experiência com o futebol, focando em diversão, coordenação motora e socialização.",
          objectives: [
            "Desenvolvimento da coordenação motora",
            "Primeiros contatos com a bola",
            "Socialização e trabalho em grupo",
            "Disciplina básica e respeito às regras",
          ],
          image: "/images/treino-sub08-criancas.png",
        },
        {
          age: "16-17 anos",
          schedule: "19h30 às 21h",
          focus: "Alto rendimento e preparação",
          students: "22+ alunos",
          description: "Preparação para o alto rendimento com treinos específicos e orientação profissional.",
          objectives: [
            "Alto rendimento técnico",
            "Preparação para competições",
            "Orientação profissional",
            "Desenvolvimento de liderança",
          ],
          image: "/images/treino-sub17-descanso.png",
        },
      ],
    },
    {
      name: "Terça-feira",
      slots: [
        {
          age: "10-14 anos",
          schedule: "18h às 19h30 e 19h30 às 21h",
          focus: "Fundamentos e desenvolvimento técnico",
          students: "28+ alunos",
          description: "Treinos para fundamentos técnicos, tática de jogo e desenvolvimento físico.",
          objectives: ["Fundamentos técnicos", "Noções táticas", "Desenvolvimento físico", "Trabalho em equipe"],
          image: "/images/terca feira.png",
        },
      ],
    },
    {
      name: "Quarta-feira",
      slots: [
        {
          age: "8-11 anos",
          schedule: "18h às 19h30 e 19h30 às 21h",
          focus: "Fundamentos básicos e iniciação técnica",
          students: "30+ alunos",
          description: "Aprendizado dos fundamentos básicos do futebol com exercícios lúdicos e educativos.",
          objectives: ["Fundamentos básicos", "Desenvolvimento físico", "Coordenação motora", "Disciplina e respeito"],
          image: "/images/quarta feira.png",
        },
      ],
    },
    {
      name: "Quinta-feira",
      slots: [
        {
          age: "Goleiros",
          schedule: "18h às 19h30",
          focus: "Treinamento específico de goleiros",
          students: "10+ alunos",
          description: "Treino exclusivo para o desenvolvimento técnico de goleiros.",
          objectives: ["Defesas básicas e avançadas", "Reposição de bola", "Posicionamento", "Coordenação motora"],
          image: "/images/quinta goleiro.png",
        },
        {
          age: "13-15 anos",
          schedule: "19h30 às 21h",
          focus: "Desenvolvimento técnico-tático",
          students: "20+ alunos",
          description: "Treino técnico-tático para transição ao futebol competitivo.",
          objectives: ["Refinamento técnico", "Estratégias táticas", "Desenvolvimento físico", "Trabalho em equipe"],
          image: "/images/treino-sub14-orientacoes.png",
        },
      ],
    },
    {
      name: "Sexta-feira",
      slots: [
        {
          age: "14-15 anos",
          schedule: "18h às 19h30",
          focus: "Aprimoramento técnico",
          students: "22+ alunos",
          description: "Treinos intensos para aperfeiçoar técnica individual e entendimento tático.",
          objectives: ["Técnica avançada", "Sistemas táticos", "Preparação física", "Mentalidade competitiva"],
          image: "/images/sexta feira1.png",
        },
        {
          age: "10-13 anos",
          schedule: "19h30 às 21h",
          focus: "Fundamentos técnicos",
          students: "25+ alunos",
          description: "Fundamentos técnicos e disciplina para a base de formação.",
          objectives: ["Fundamentos fortes", "Noções táticas", "Disciplina", "Espírito esportivo"],
          image: "/images/sexta feira2.png",
        },
      ],
    },
  ]

  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Treinos e Horários</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Confira os dias, horários e faixas etárias de cada treino
        </p>
      </section>

      <section className="container mx-auto px-6 space-y-20 relative">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative overflow-hidden ${index !== 0 ? "border-t border-slate-200 pt-16" : ""}`}
          >
            {/* Padrão decorativo SVG */}
            <div aria-hidden="true" className="absolute inset-0 -z-10 opacity-10">
              <svg
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                fill="none"
                viewBox="0 0 800 800"
              >
                <defs>
                  <radialGradient id="grad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#1e40af" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <rect width="800" height="800" fill="url(#grad)" />
              </svg>
            </div>

            {/* Título animado */}
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-2xl md:text-3xl font-bold text-white px-6 py-3 rounded-full bg-gradient-to-r from-blue-800 to-blue-600 shadow-md mb-8"
            >
              {icon(category.name)}
              {category.name}
            </motion.h2>

            <div className="space-y-16">
              {category.slots.map((slot, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: idx * 0.2,
                  }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-10 items-center ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="lg:w-1/2 space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {slot.age} — {slot.schedule}
                    </h3>
                    <p className="text-lg text-slate-600">{slot.description}</p>

                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <div>
                              <div className="text-sm text-slate-600">Horário</div>
                              <div className="font-bold">{slot.schedule}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-blue-600" />
                            <div>
                              <div className="text-sm text-slate-600">Alunos</div>
                              <div className="font-bold">{slot.students}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Target className="w-5 h-5 text-blue-600" />
                            <div>
                              <div className="text-sm text-slate-600">Foco</div>
                              <div className="font-bold">{slot.focus}</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <ul className="list-disc pl-5 text-slate-600 space-y-1">
                      {slot.objectives.map((obj, idy) => (
                        <li key={idy}>{obj}</li>
                      ))}
                    </ul>

                    <Button
                      className="bg-blue-900 hover:bg-blue-800 text-white mt-4"
                      onClick={() => handleInscricaoClick(slot.age, slot.schedule, category.name)}
                    >
                      Inscrever-se
                    </Button>
                  </div>
                  <div className="lg:w-1/2">
                    <Image
                      src={slot.image || "/placeholder.svg"}
                      alt={`Treino ${slot.age}`}
                      width={500}
                      height={400}
                      className="rounded-xl shadow-xl w-full h-auto"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
