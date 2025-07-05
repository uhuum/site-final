"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, Star, Users, Target } from "lucide-react"

export default function TrainingSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("training-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const categories = [
    {
      name: "Sub-08/09",
      age: "6-9 anos",
      schedule: "Segunda-feira - 18h às 19h30",
      focus: "Iniciação e coordenação motora",
      highlight: false,
      color: "text-blue-900",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      students: "25+ alunos",
    },
    {
      name: "Sub-10/11",
      age: "10-11 anos",
      schedule: "Seg/Qua/Sex - 16h às 17h30",
      focus: "Fundamentos básicos",
      highlight: false,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      students: "30+ alunos",
    },
    {
      name: "Sub-12",
      age: "12-13 anos",
      schedule: "Seg/Qua/Sex - 17h30 às 19h",
      focus: "Técnica e tática básica",
      highlight: true,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      students: "35+ alunos",
    },
    {
      name: "Sub-14",
      age: "14-15 anos",
      schedule: "Ter/Qui/Sáb - 18h às 19h30",
      focus: "Desenvolvimento técnico-tático",
      highlight: true,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      students: "28+ alunos",
    },
    {
      name: "Sub-16",
      age: "16-17 anos",
      schedule: "Segunda-Feira - 19h30 às 21h",
      focus: "Alto rendimento e preparação",
      highlight: true,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      students: "22+ alunos",
    },
  ]

  return (
    <section id="treinos" className="py-24 bg-white">
      <div id="training-section" className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-slate-700 text-sm font-medium tracking-wide">Nossas Turmas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Treinos e Categorias</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Turmas organizadas por idade e nível de desenvolvimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                className={`h-full bg-slate-50 border-2 border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-500 group ${
                  category.highlight ? "ring-2 ring-red-600/20" : ""
                }`}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="relative">
                      <h3 className={`text-3xl font-bold ${category.color}`}>{category.name}</h3>
                      {category.highlight && (
                        <div className="absolute -top-2 -right-8">
                          <div className="bg-red-600 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center space-x-1">
                            <Star className="w-3 h-3 fill-current" />
                            <span>Destaque</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Info Cards */}
                  <div className="space-y-4 flex-1">
                    <div
                      className={`p-4 rounded-xl ${category.bgColor} border ${category.borderColor} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <div className="flex items-center space-x-3">
                        <Calendar className={`w-5 h-5 ${category.color}`} />
                        <div>
                          <div className="text-sm font-medium text-slate-600">Idade</div>
                          <div className="font-bold text-slate-900">{category.age}</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-xl ${category.bgColor} border ${category.borderColor} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <div className="flex items-center space-x-3">
                        <Clock className={`w-5 h-5 ${category.color}`} />
                        <div>
                          <div className="text-sm font-medium text-slate-600">Horário</div>
                          <div className="font-bold text-slate-900">{category.schedule}</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-xl ${category.bgColor} border ${category.borderColor} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <div className="flex items-center space-x-3">
                        <Users className={`w-5 h-5 ${category.color}`} />
                        <div>
                          <div className="text-sm font-medium text-slate-600">Alunos</div>
                          <div className="font-bold text-slate-900">{category.students}</div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={`p-4 rounded-xl ${category.bgColor} border ${category.borderColor} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <div className="flex items-center space-x-3">
                        <Target className={`w-5 h-5 ${category.color}`} />
                        <div>
                          <div className="text-sm font-medium text-slate-600">Foco</div>
                          <div className="font-bold text-slate-900">{category.focus}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Button
                      className={`w-full bg-slate-900 hover:bg-slate-800 text-white font-medium transition-all duration-300`}
                    >
                      Inscrever-se
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8 py-3 bg-transparent"
          >
            Ver horários completos
          </Button>
        </div>
      </div>
    </section>
  )
}
