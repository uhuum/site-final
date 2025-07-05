"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Star, Calendar, Users } from "lucide-react"
import Image from "next/image"

export default function ChampionshipsSection() {
  const [activeCategory, setActiveCategory] = useState("sub08-09")

  const categories = [
    {
      id: "sub08-09",
      name: "Sub-08/09",
      title: "Categorias Sub-08 e Sub-09",
      description: "Nossas conquistas nas categorias de base",
      achievements: [
        {
          competition: "Copa Real Kids 2024",
          position: "Sub-08 Vice-campeão",
          year: "2024",
          icon: "🥈",
          image: "/images/copa-real-kids-2024-sub08-vice.png",
          description: "Equipe Sub-08 mostrou grande evolução chegando à final da Copa Real Kids 2024.",
        },
        {
          competition: "Copa Art Soccer 2025",
          position: "Sub-08 Vice-campeão",
          year: "2025",
          icon: "🥈",
          image: "/images/copa-art-soccer-sub08-vice.jpg",
          description:
            "Equipe Sub-08 conquistou o vice-campeonato da Copa Art Soccer com uma campanha excepcional e muito crescimento técnico.",
        },
      ],
    },
    {
      id: "sub10-11",
      name: "Sub-10/11",
      title: "Categorias Sub-10 e Sub-11",
      description: "Títulos das categorias intermediárias",
      achievements: [
        {
          competition: "Copa Real Kids 2024",
          position: "Sub-10 Campeão",
          year: "2024",
          icon: "🏆",
          image: "/images/final-copa-real-kids-2024-sub10-campeao.png",
          description: "Equipe Sub-10 conquistou o título da Copa Real Kids 2024 com uma campanha brilhante.",
        },
        {
          competition: "Copa Art Soccer 2025",
          position: "Sub-10 Campeão",
          year: "2025",
          icon: "🏆",
          image: "/images/copa-art-soccer-sub10-campeao.jpg",
          description:
            "Conquista histórica da Copa Art Soccer pela equipe Sub-10 com futebol de qualidade e espírito de equipe exemplar.",
        },
      ],
    },
    {
      id: "sub12-13",
      name: "Sub-12/13",
      title: "Categorias Sub-12 e Sub-13",
      description: "Conquistas das categorias de desenvolvimento",
      achievements: [
        {
          competition: "Copa do Rei 2025",
          position: "Sub-13 Campeão",
          year: "2025",
          icon: "🏆",
          image: "/images/copa-rei-2025-sub13-campeao.png",
          description: "Conquista histórica da Copa do Rei 2025 pela equipe Sub-13 com excelente campanha.",
        },
        {
          competition: "Copa A.D. Soccer 2024",
          position: "Sub-12 Campeão",
          year: "2024",
          icon: "🏆",
          image: "/images/copa-ad-soccer-2024-sub12-campeao-nova.png",
          description: "Equipe Sub-12 foi campeã da Copa A.D. Soccer 2024 com uma performance excepcional.",
        },
        {
          competition: "Copa A.D. Soccer 2024",
          position: "Sub-13 Campeão",
          year: "2024",
          icon: "🏆",
          image: "/images/copa-ad-soccer-2024-sub13-campeao.png",
          description:
            "Equipe Sub-13 conquistou o título da Copa A.D. Soccer 2024 com uma campanha excepcional e muito trabalho em equipe.",
        },
        {
          competition: "Copa Art Soccer 2025",
          position: "Sub-12 Vice-campeão",
          year: "2025",
          icon: "🥈",
          image: "/images/copa-art-soccer-sub12-vice.jpg",
          description:
            "Equipe Sub-12 mostrou grande evolução chegando à final da Copa Art Soccer com uma campanha sólida e consistente.",
        },
      ],
    },
    {
      id: "sub14-15",
      name: "Sub-14/15",
      title: "Categorias Sub-14 e Sub-15",
      description: "Títulos das categorias avançadas",
      achievements: [
        {
          competition: "Copa do Rei 2024",
          position: "Sub-15 Campeão",
          year: "2024",
          icon: "🏆",
          image: "/images/copa-rei-2024-sub15-campeao.png",
          description: "Conquista histórica da Copa do Rei 2024 pela equipe Sub-15 com campanha impecável.",
        },
        {
          competition: "Copa A.D. Soccer 2024",
          position: "Sub-15 Campeão",
          year: "2024",
          icon: "🏆",
          image: "/images/copa-ad-soccer-2024-sub15-campeao.png",
          description:
            "Conquista histórica da Copa A.D. Soccer 2024 pela equipe Sub-15 com excelente desempenho técnico e tático.",
        },
        {
          competition: "Copa Art Soccer 2025",
          position: "Sub-14 Campeão",
          year: "2025",
          icon: "🏆",
          image: "/images/copa-art-soccer-sub14-campeao.jpg",
          description:
            "Domínio total na Copa Art Soccer pela equipe Sub-14 com futebol técnico e tático de alto nível.",
        },
      ],
    },
    {
      id: "sub16-17",
      name: "Sub-16/17",
      title: "Categorias Sub-16 e Sub-17",
      description: "Conquistas das categorias de alto rendimento",
      achievements: [
        {
          competition: "Copa do Rei 2025",
          position: "Sub-17 Campeão",
          year: "2025",
          icon: "🏆",
          image: "/images/copa-rei-2025-sub17-campeao.png",
          description: "Domínio total na Copa do Rei 2025 pela equipe Sub-17 com futebol de alto nível.",
        },
        {
          competition: "Copa A.D. Soccer 2024",
          position: "Sub-17 Campeão",
          year: "2024",
          icon: "🏆",
          image: "/images/copa-ad-soccer-2024-sub17-campeao.png",
          description:
            "Equipe Sub-17 dominou a Copa A.D. Soccer 2024 com futebol de alto nível e grande união do grupo.",
        },
                {
          competition: "Copa A.D. Soccer 2022",
          position: "Sub-17 Campeão",
          year: "2022",
          icon: "🏆",
          image: "/images/vitória do Primeiro campeonato 2022.png",
          description:
            "Nossa primeira grande conquista! A Copa Soccer 2022 marcou o início da nossa trajetória nos campeonatos. Uma final inesquecível em casa, cheia de emoção, união e vitória!"
        },
      ],
    },
  ]

  const activeData = categories.find((cat) => cat.id === activeCategory) || categories[0]

  const handleContactClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="campeonatos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-slate-700 text-sm font-medium tracking-wide">Nossas Conquistas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Campeonatos e Vitórias</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Um histórico de conquistas que demonstra nossa excelência e dedicação ao esporte
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-900 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">{activeData.title}</h3>
            <p className="text-xl text-slate-600">{activeData.description}</p>
          </div>

          {/* Achievement Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeData.achievements.map((achievement, index) => (
              <Card
                key={index}
                className="bg-slate-50 border-2 border-slate-200 shadow-xl shadow-slate-900/5 overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <CardContent className="p-0">
                  {/* Image - Fixed height with proper aspect ratio */}
                  <div className="relative h-80 bg-slate-100">
                    <Image
                      src={achievement.image || "/placeholder.svg"}
                      alt={`${achievement.competition} - ${achievement.position}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-2xl shadow-lg">
                        {achievement.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-5 h-5 text-slate-500" />
                      <span className="text-lg font-bold text-slate-900">{achievement.year}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{achievement.competition}</h4>
                    <div className="text-lg font-semibold text-blue-900 mb-3">{achievement.position}</div>
                    <p className="text-slate-600 leading-relaxed text-sm">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-200">
              <Trophy className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">25+</h3>
            <p className="text-slate-600">Títulos Conquistados</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-200">
              <Users className="w-10 h-10 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">5</h3>
            <p className="text-slate-600">Categorias Ativas</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-200">
              <Star className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">100%</h3>
            <p className="text-slate-600">Dedicação e Excelência</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            className="bg-blue-900 hover:bg-blue-800 text-white font-medium px-8 py-3"
            onClick={handleContactClick}
          >
            Faça parte da nossa história
          </Button>
        </div>
      </div>
    </section>
  )
}
