"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Handshake, Target, TrendingUp, Users, Award, Heart, Building, Megaphone } from "lucide-react"
import { useEffect, useState } from "react"

interface PartnershipTabProps {
  onTabChange: (tab: string) => void
}

export default function PartnershipTab({ onTabChange }: PartnershipTabProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  useEffect(() => {
    setIsVisible(true)

    // Animate counters
    const targets = [200, 15, 4, 100]
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

  const impactNumbers = [
    { number: counters[0], suffix: "+", label: "Crianças Impactadas", icon: Users },
    { number: counters[1], suffix: "+", label: "Títulos Conquistados", icon: Award },
    { number: counters[2], suffix: "", label: "Anos de Atuação", icon: Target },
    { number: counters[3], suffix: "%", label: "Foco Social", icon: Heart },
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="text-center">
        <div
          className={`inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6 transition-all duration-1000 ${isVisible ? "animate-fade-in-down" : "opacity-0"}`}
        >
          <Handshake className="w-4 h-4 text-blue-600 mr-2 animate-float" />
          <span className="text-blue-700 text-sm font-medium tracking-wide">Parcerias e Patrocínio</span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all duration-1000 delay-200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Seja Nosso Parceiro
        </h1>
        <p
          className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          Junte-se a nós na missão de transformar vidas através do esporte. Sua empresa pode fazer a diferença na
          formação de centenas de crianças e adolescentes.
        </p>
      </section>

      {/* Why Partner With Us */}
      <section className="container mx-auto px-6">
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-600 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Por que ser nosso parceiro?</h2>
          <p className="text-xl text-slate-600">Mais que patrocínio, uma parceria que gera valor real</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactNumbers.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className={`text-center hover-lift card-hover transition-all duration-1000 delay-${800 + index * 100} ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale">
                    <IconComponent className="w-8 h-8 text-blue-600 icon-bounce" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2 animate-count-up">
                    {item.number}
                    {item.suffix}
                  </div>
                  <div className="text-slate-600">{item.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Benefits for Partners */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-1200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Benefícios para sua Empresa</h2>
            <p className="text-xl text-slate-600">Vantagens que vão além da visibilidade</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Visibilidade de Marca",
                description:
                  "Exposição em uniformes, eventos, redes sociais e materiais promocionais com alcance de milhares de pessoas.",
                color: "blue",
              },
              {
                icon: Heart,
                title: "Responsabilidade Social",
                description:
                  "Demonstre o compromisso da sua empresa com o desenvolvimento social e a transformação de vidas.",
                color: "green",
              },
              {
                icon: Building,
                title: "Networking",
                description:
                  "Conecte-se com outras empresas parceiras e participe de eventos exclusivos da nossa rede.",
                color: "yellow",
              },
              {
                icon: Award,
                title: "Associação ao Sucesso",
                description: "Sua marca será associada às conquistas esportivas e ao sucesso dos nossos atletas.",
                color: "red",
              },
              {
                icon: Megaphone,
                title: "Conteúdo Exclusivo",
                description: "Acesso a conteúdos exclusivos, bastidores e histórias inspiradoras para suas campanhas.",
                color: "purple",
              },
              {
                icon: Users,
                title: "Engajamento da Equipe",
                description: "Oportunidades de voluntariado e engajamento dos colaboradores em ações sociais.",
                color: "indigo",
              },
            ].map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card
                  key={index}
                  className={`hover-lift card-hover transition-all duration-1000 delay-${1400 + index * 100} ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-${benefit.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 hover-scale animate-float`}
                    >
                      <IconComponent className={`w-8 h-8 text-${benefit.color}-600 icon-bounce`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                    <p className="text-slate-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Partner - CEAP */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-2000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nosso Parceiro Principal</h2>
            <p className="text-xl text-slate-600">Conheça quem já acredita no nosso projeto</p>
          </div>

          <Card
            className={`max-w-4xl mx-auto bg-white shadow-xl hover-lift transition-all duration-1000 delay-2200 ${isVisible ? "animate-scale-in" : "opacity-0"}`}
          >
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div
                  className={`transition-all duration-1000 delay-2400 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
                >
                  <div className="flex items-center mb-6">
                    <img
                      src="/images/logo-ceap-novo.png"
                      alt="CEAP - Centro Educacional Assistencial Profissionalizante"
                      className="h-16 w-auto mr-4 hover-scale"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">CEAP</h3>
                      <p className="text-slate-600">Parceiro desde 2021</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    O Centro Educacional Assistencial Profissionalizante (CEAP) é nosso parceiro estratégico desde o
                    início. Juntos, oferecemos um programa completo que vai além do futebol, incluindo acompanhamento
                    educacional e desenvolvimento pessoal para todas as crianças e adolescentes.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {["Educação", "Desenvolvimento Social", "Apoio Profissionalizante"].map((tag, index) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium hover-scale transition-all duration-300 delay-${index * 100}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative transition-all duration-1000 delay-2600 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
                >
                  <img
                    src="/images/ceap-parceria.png"
                    alt="Parceria 10 na Bola e CEAP"
                    className="rounded-2xl w-full h-auto shadow-lg hover-scale"
                  />
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-blue-900 rounded-2xl opacity-20 animate-float"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2
            className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1000 delay-2800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Pronto para Fazer a Diferença?
          </h2>
          <p
            className={`text-xl text-blue-100 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-3000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            Entre em contato conosco e descubra como sua empresa pode se tornar parte desta transformação social.
            Juntos, podemos formar não apenas atletas, mas cidadãos conscientes e preparados para o futuro.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-1000 delay-3200 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-slate-100 font-medium px-8 py-4 hover-lift btn-hover-lift ripple"
              onClick={handleContactClick}
            >
              <Handshake className="mr-2 w-5 h-5 icon-bounce" />
              Quero Ser Parceiro
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 font-medium px-8 py-4 bg-transparent hover-lift"
              onClick={() => onTabChange("sobre")}
            >
              Conhecer o Projeto
            </Button>
          </div>

          <div
            className={`text-blue-200 text-sm transition-all duration-1000 delay-3400 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          >
            📞 Resposta em até 24 horas | 💬 Atendimento personalizado | 📊 Proposta sob medida
          </div>
        </div>
      </section>
    </div>
  )
}
