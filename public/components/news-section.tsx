"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface NewsSectionProps {
  onShowAllNews?: () => void
  onSelectNews?: (newsId: string) => void
}

export default function NewsSection({ onShowAllNews, onSelectNews }: NewsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const rawNews = [
    {
      id: "william-sub15-terceiro-milenio",
      title: "William do nosso Sub-15 Inicia Nova Jornada no Terceiro Milênio",
      date: "03 de Julho, 2025",
      excerpt:
        "Nosso atleta William, agora está treinando no Terceiro Milênio, um importante passo rumo à carreira profissional. Confira o relato emocionante sobre sua chegada e expectativas.",
      image: "/images/materia willian.png",
      category: "Depoimentos",
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
        "As equipes Sub-08, Sub-10, Sub-12 e Sub-14 da Escolinha 10 na Bola participaram das emocionantes finais da Copa Art Soccer 2025, encerrando o torneio com muita garra e dedicação dentro de campo.",
      image: "/images/copa-art-soccer-2025-finais.png",
      category: "Campeonatos",
      highlight: true,
    },
    {
      id: "ferias-2025",
      title: "Férias com Bola Rolando!",
      date: "01 de Julho, 2025",
      excerpt:
        "Dia 01 de julho marcou o início oficial das férias na Escolinha 10 na Bola! Durante esse período, os treinos continuam normalmente — e o nosso Treinamento Especial de Férias começa hoje, com atividades diferenciadas, mais diversão e muita bola no pé para nossos atletas.",
      image: "/images/DIA 01-07 INICIO DAS FÉRIAS NA NOSSA ESCOLINHA (1).png",
      category: "Comunicados",
      highlight: true,
    },
    {
      id: "camisas-venda-2025",
      title: "Camisas à Venda – 10 na Bola",
      date: "01 de Julho, 2025",
      excerpt:
        "Já estão disponíveis as novas camisas oficiais da Escolinha 10 na Bola! Garanta a sua e venha treinar com o manto. Disponíveis em todos os tamanhos para alunos e familiares.",
      image: "/images/COPA SOCCER EDIÇÃO 2024 (2).png",
      category: "Comunicados",
      highlight: true,
    },
  ]

  // Ordena pela data (mais recente primeiro)
  const news = [...rawNews].sort((a, b) => {
    const parseDate = (date: string) => new Date(date.split(" de ").reverse().join(" "))
    return parseDate(b.date).getTime() - parseDate(a.date).getTime()
  })

  // Auto-advance news
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [news.length])

  const nextNews = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length)
  const prevNews = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length)
  const goToNews = (index: number) => setCurrentIndex(index)

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
            <span className="text-blue-700 text-sm font-medium tracking-wide">Últimas Notícias</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Radar / Notícias</h2>
          <p className="text-xl text-slate-600">Acompanhe as últimas novidades da nossa escolinha</p>
        </div>

        {/* Main News Carousel */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-2xl shadow-slate-900/10 border-0">
            <div className="relative">
              <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src={news[currentIndex].image || "/placeholder.svg"}
                  alt={news[currentIndex].title}
                  fill
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                {currentIndex === 0 && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      🆕 NOVA NOTÍCIA
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4">
                  <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {news[currentIndex].category}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-2 text-slate-200 text-sm mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{news[currentIndex].date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">{news[currentIndex].title}</h3>
                  <p className="text-slate-200 text-lg leading-relaxed mb-4">{news[currentIndex].excerpt}</p>
                  <Button
                    variant="secondary"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
                    onClick={() => onSelectNews?.(news[currentIndex].id)}
                  >
                    Leia mais <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                onClick={prevNews}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
                onClick={nextNews}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </Card>

          {/* Dots */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            {news.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-900 scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => goToNews(index)}
              />
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.slice(1, 4).map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow bg-white border-0">
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={300}
                  height={150}
                  className="w-full h-48 object-cover rounded-t-lg"
                />

                {/* CATEGORIA */}
                <div className="absolute top-3 left-3">
                  <span className="bg-blue-900 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>

                {/* NOVA NOTÍCIA (caso seja a mais recente) */}
                {item.id === news[0].id && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold shadow">
                      🆕 NOVA NOTÍCIA
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-4">
                <div className="flex items-center space-x-2 text-slate-500 text-xs mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-slate-600 text-xs mb-3 line-clamp-2">{item.excerpt}</p>

                <Button
                  variant="ghost"
                  className="p-0 h-auto text-blue-900 hover:text-blue-700 text-xs"
                  onClick={() => onSelectNews?.(item.id)}
                >
                  Leia mais <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8" onClick={onShowAllNews}>
            Ver todas as notícias
          </Button>
        </div>
      </div>
    </section>
  )
}
