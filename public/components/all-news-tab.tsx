"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Trophy, MessageCircle, Info } from "lucide-react"
import Image from "next/image"

interface AllNewsTabProps {
  onTabChange: (tab: string) => void
  onNewsSelect: (newsId: string) => void
}

export default function AllNewsTab({ onTabChange, onNewsSelect }: AllNewsTabProps) {
  const allNews = [
    {
  id: "william-sub15-terceiro-milenio",
  title: "William do Sub-15 Inicia Nova Jornada no Terceiro Milênio",
  date: "03 de Julho, 2025",
  excerpt:
    "William, mais conhecido como Negueba, atleta do Sub-15, agora faz parte do clube Terceiro Milênio. Em seu depoimento, conta como foi sua chegada e as expectativas para o futuro no futebol.",
  image: "/images/materia willian.png", 
  category: "alunos",
  highlight: true,
},

    {
      id: "copa-rei-2025",
      title: "Conquista Histórica na Copa do Rei 2025",
      date: "28 de Junho, 2025",
      excerpt:
        "Nossas equipes Sub-13 e Sub-17 conquistaram o título da Copa do Rei 2025, marcando um ano histórico para nossa escola.",
      image: "/images/copa-rei-2025-sub13-campeao.png",
      category: "Campeonatos",
      highlight: true,
    },
    {
      id: "copa-art-soccer-2025",
      title: "Finais da Copa Art Soccer 2025",
      date: "29 de Junho, 2025",
      excerpt:
        "As equipes Sub-08, Sub-10, Sub-12 e Sub-14 da Escolinha 10 na Bola participaram das emocionantes finais da Copa Art Soccer 2025.",
      image: "/images/copa-art-soccer-2025-finais.png",
      category: "Campeonatos",
      highlight: true,
    },
    {
      id: "ferias-2025",
      title: "Férias com Bola Rolando!",
      date: "01 de Julho, 2025",
      excerpt: "Dia 01 de julho marcou o início oficial das férias na Escolinha 10 na Bola com atividades especiais.",
      image: "/images/DIA 01-07 INICIO DAS FÉRIAS NA NOSSA ESCOLINHA (1).png",
      category: "Comunicados",
      highlight: true,
    },
    {
      id: "camisas-venda-2025",
      title: "Camisas à Venda – 10 na Bola",
      date: "01 de Julho, 2025",
      excerpt:
        "Já estão disponíveis as novas camisas oficiais da Escolinha 10 na Bola! Garanta a sua e venha treinar com o manto.",
      image: "/images/COPA SOCCER EDIÇÃO 2024 (2).png",
      category: "Comunicados",
      highlight: true,
    },
  ]

  const categories = [
    { id: "todos", label: "Todas", icon: Info },
    { id: "Campeonatos", label: "Campeonatos", icon: Trophy },
    { id: "Comunicados", label: "Comunicados", icon: MessageCircle },
      { id: "alunos", label: "alunos", icon: MessageCircle },

  ]

  const [activeCategory, setActiveCategory] = useState("todos")

  const filteredNews = activeCategory === "todos" ? allNews : allNews.filter((news) => news.category === activeCategory)

  return (
    <div className="space-y-16 py-8">
      <section className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
          <span className="text-blue-700 text-sm font-medium tracking-wide">Central de Notícias</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Todas as Notícias</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Acompanhe todas as novidades, conquistas e acontecimentos da nossa escola
        </p>
      </section>

      <section className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-blue-900 text-white shadow-lg"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news) => (
            <Card
              key={news.id}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-300 bg-white"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={news.image || "/placeholder.svg"}
                    alt={news.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {news.highlight && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                        🔥 DESTAQUE
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {news.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-2 text-slate-500 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">{news.title}</h3>

                  <p className="text-slate-600 mb-4 line-clamp-3">{news.excerpt}</p>

                  <Button
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      onNewsSelect(news.id)
                    }}
                  >
                    Ler Notícia Completa <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600">Nenhuma notícia encontrada nesta categoria.</p>
          </div>
        )}
      </section>

      <section className="text-center">
        <Button
          variant="outline"
          className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8 py-3 bg-transparent"
          onClick={() => onTabChange("home")}
        >
          Voltar ao Início
        </Button>
      </section>
    </div>
  )
}
