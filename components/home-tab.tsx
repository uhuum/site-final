"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Heart } from "lucide-react"
import { ArrowRight, Trophy, Users, Star, Info, Camera, Phone, Youtube } from "lucide-react"
import NewsSection from "./news-section"
import { useEffect, useState } from "react"

interface HomeTabProps {
  onTabChange: (tab: string) => void
  onShowAllNews?: () => void
  onSelectNews?: (newsId: string) => void
}

export default function HomeTab({ onTabChange, onShowAllNews, onSelectNews }: HomeTabProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  useEffect(() => {
    setIsVisible(true)

    // Animate counters
    const targets = [200, 15, 1, 4]
    targets.forEach((target, index) => {
      let start = 0
      const duration = 2000
      const increment = target / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          start = target
          clearInterval(timer)
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(start)
          return newCounters
        })
      }, 16)
    })
  }, [])

  const handleContactClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  const statsData = [
    { number: counters[0], suffix: "+", label: "Alunos Atendidos", icon: Users, color: "blue" },
    { number: counters[1], suffix: "+", label: "Títulos Conquistados", icon: Trophy, color: "yellow" },
    { number: counters[2], suffix: "ª", label: "Aula Gratuita", icon: "🆓", color: "green" },
    { number: counters[3], suffix: "", label: "Anos de História", icon: Star, color: "red" },
  ]

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-900 animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-red-600 animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
              <div
                className={`inline-flex items-center px-3 sm:px-4 py-2 bg-red-600/10 rounded-full border border-red-600/20 transition-all duration-1000 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
              >
                <span className="text-red-600 text-xs sm:text-sm font-medium tracking-wide">
                  Desde 2021 transformando vidas
                </span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
              >
                <span className="text-slate-900">Educação e</span>
                <br />
                <span className="text-blue-900">Futebol</span>
                <br />
                <span className="text-red-600">Unidos</span>
              </h1>

              <p
                className={`text-lg sm:text-xl text-slate-600 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
              >
                Formamos atletas e cidadãos através do esporte, educação e valores fundamentais para a vida.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 group hover-lift btn-hover-lift ripple touch-manipulation"
                  onClick={handleContactClick}
                >
                  Inscreva-se Agora
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 icon-bounce" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover-lift touch-manipulation"
                  onClick={() => onTabChange("sobre")}
                >
                  Conheça Nossa História
                </Button>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl shadow-slate-900/10 hover-lift card-hover">
                <Image
                  src="/images/vista-aerea-escola.png"
                  alt="Vista aérea da Escola de Futebol 10 na Bola"
                  width={500}
                  height={400}
                  className="rounded-xl sm:rounded-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-xl sm:rounded-2xl opacity-20 animate-float"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {statsData.map((stat, index) => {
              const IconComponent = typeof stat.icon === "string" ? null : stat.icon
              return (
                <div
                  key={index}
                  className={`text-center transition-all duration-1000 delay-${1000 + index * 200} ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                >
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-${stat.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover-scale animate-float`}
                  >
                    {typeof stat.icon === "string" ? (
                      <span className="text-xl sm:text-2xl">{stat.icon}</span>
                    ) : (
                      <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${stat.color}-600 icon-bounce`} />
                    )}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 to-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 delay-1800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-100 rounded-full mb-4 sm:mb-6 hover-scale">
              <span className="text-blue-700 text-xs sm:text-sm font-medium tracking-wide">Nossos Parceiros</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Patrocínio e Apoio
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Conheça quem acredita e investe no nosso projeto de transformação social através do esporte
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Main Partner - CEAP */}
            <div
              className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-200 mb-8 sm:mb-12 hover-lift card-hover transition-all duration-1000 delay-2000 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
            >
              <div className="text-center mb-6 sm:mb-8">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-blue-50 rounded-full mb-3 sm:mb-4 hover-scale">
                  <span className="text-blue-700 text-xs sm:text-sm font-medium tracking-wide">Parceiro Principal</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Centro Educacional Assistencial Profissionalizante
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div
                  className={`text-center lg:text-left transition-all duration-1000 delay-2200 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
                >
                  <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                    <img
                      src="/images/logo-ceap-novo.png"
                      alt="CEAP - Centro Educacional Assistencial Profissionalizante"
                      className="h-12 sm:h-16 w-auto hover-scale"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4 sm:mb-6">
                    O CEAP é nosso parceiro estratégico desde o início, compartilhando a visão de transformar vidas
                    através da educação. Juntos, oferecemos um programa completo que vai além do futebol, incluindo
                    acompanhamento educacional e desenvolvimento pessoal.
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                    {["Educação", "Desenvolvimento Social", "Apoio Profissionalizante"].map((tag, index) => (
                      <span
                        key={tag}
                        className={`px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-medium hover-scale transition-all duration-300 delay-${index * 100}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative transition-all duration-1000 delay-2400 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
                >
                  <img
                    src="/images/ceap-parceria.png"
                    alt="Parceria 10 na Bola e CEAP"
                    className="rounded-xl sm:rounded-2xl w-full h-auto shadow-lg hover-scale"
                  />
                  <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-12 h-12 sm:w-16 sm:h-16 bg-blue-900 rounded-xl sm:rounded-2xl opacity-20 animate-float"></div>
                </div>
              </div>
            </div>

            {/* Future Partners Section */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {/* Call for Partnership */}
              <Card
                className={`bg-gradient-to-br from-slate-50 to-white border-2 border-dashed border-slate-300 hover:border-blue-300 transition-all duration-1000 delay-2600 card-hover hover-lift ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
              >
                <CardContent className="p-6 sm:p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 hover-scale animate-float">
                    <span className="text-2xl sm:text-3xl">🤝</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Seja Nosso Parceiro</h3>
                  <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                    Sua empresa pode fazer parte desta transformação social e ajudar a formar o futuro de centenas de
                    crianças e adolescentes.
                  </p>
                  <Button
                    className="bg-blue-900 hover:bg-blue-800 text-white font-medium hover-lift btn-hover-lift ripple touch-manipulation"
                    onClick={() => onTabChange("parcerias")}
                  >
                    Quero Ser Parceiro
                  </Button>
                </CardContent>
              </Card>

              {/* Support Options */}
              <Card
                className={`bg-white border-2 border-slate-200 hover:shadow-xl transition-all duration-1000 delay-2800 card-hover hover-lift ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-6 hover-scale animate-float">
                    <span className="text-2xl sm:text-3xl">💚</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">Como Apoiar</h3>
                  <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600">
                    {[
                      "Patrocínio de uniformes e equipamentos",
                      "Apoio em competições e viagens",
                      "Melhorias na infraestrutura",
                      "Programas educacionais complementares",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-2 h-2 bg-${["green", "blue", "red", "yellow"][index]}-600 rounded-full animate-pulse-slow`}
                        ></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full mt-4 sm:mt-6 border-2 border-green-600 text-green-600 hover:bg-green-50 bg-transparent hover-lift touch-manipulation"
                    onClick={() => onTabChange("parcerias")}
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection onShowAllNews={onShowAllNews} onSelectNews={onSelectNews} />

      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className={`text-center mb-8 sm:mb-12 transition-all duration-1000 delay-3000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
              Conheça Nossa Escola
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              Descubra tudo o que oferecemos para formar atletas e cidadãos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Info,
                title: "Nossa História",
                description: "Desde 2021 transformando vidas através do esporte e educação na Zona Sul de São Paulo.",
                tab: "sobre",
                color: "blue",
              },
              {
                icon: Users,
                title: "Nossos Treinos",
                description: "5 categorias organizadas por idade, com treinos técnicos e formação de valores.",
                tab: "treinos",
                color: "green",
              },
              {
                icon: Trophy,
                title: "Conquistas",
                description: "Mais de 15 títulos conquistados em diversas categorias e competições.",
                tab: "campeonatos",
                color: "yellow",
              },
              {
                icon: Youtube,
                title: "Vídeos",
                description: "Documentários, melhores momentos e bastidores no nosso canal oficial.",
                tab: "videos",
                color: "red",
              },
              {
                icon: Camera,
                title: "Galeria",
                description: "Momentos especiais, treinos, jogos e conquistas registrados em fotos.",
                tab: "galeria",
                color: "purple",
              },
              {
                icon: Heart,
                title: "Apoie o Projeto",
                description: "Várias formas de ajudar nossa missão de transformar vidas através do esporte.",
                tab: "apoie",
                color: "pink",
              },
              {
                icon: Phone,
                title: "Fale Conosco",
                description: "Entre em contato para inscrições, dúvidas ou agendar uma visita.",
                action: handleContactClick,
                color: "slate",
              },
            ].map((card, index) => {
              const IconComponent = card.icon
              return (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-1000 delay-${3200 + index * 100} cursor-pointer border-2 hover:border-${card.color}-300 card-hover hover-lift touch-manipulation ${
                    isVisible ? "animate-scale-in" : "opacity-0"
                  }`}
                  onClick={card.action || (() => onTabChange(card.tab!))}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-${card.color}-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 hover-scale animate-float`}
                    >
                      <IconComponent className={`w-6 h-6 sm:w-8 sm:h-8 text-${card.color}-600 icon-bounce`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{card.title}</h3>
                    <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">{card.description}</p>
                    <Button
                      variant="ghost"
                      className={`text-${card.color}-600 hover:text-${card.color}-700 text-sm sm:text-base touch-manipulation`}
                    >
                      {card.title === "Fale Conosco" ? "Contatar" : "Saiba Mais"}
                      <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 icon-bounce" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-red-600 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/90 to-blue-900/90"></div>
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6 transition-all duration-1000 delay-3800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Faça Parte da Nossa História
          </h2>
          <p
            className={`text-lg sm:text-xl text-red-100 mb-6 sm:mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-4000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Venha conhecer nossa escola e descobrir como podemos ajudar no desenvolvimento do seu filho
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center transition-all duration-1000 delay-4200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-slate-100 font-medium px-6 sm:px-8 py-3 sm:py-4 hover-lift btn-hover-lift ripple touch-manipulation"
              onClick={handleContactClick}
            >
              Inscrever Agora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium px-6 sm:px-8 py-3 sm:py-4 bg-transparent hover-lift touch-manipulation"
              onClick={() => onTabChange("apoie")}
            >
              Apoiar Projeto
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
