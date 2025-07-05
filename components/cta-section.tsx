"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"

export default function CTASection() {
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

    const section = document.getElementById("cta-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  // Atualizar o botão "Inscreva seu filho" para usar o novo link
  const handleInscricaoClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="cta-section"
      className="py-24 bg-gradient-to-br from-red-600 via-red-700 to-slate-900 relative overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-white"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-blue-600"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full mb-8 backdrop-blur-sm">
            <span className="text-white/80 text-sm font-medium tracking-wide">Junte-se a Nós</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
            Transforme vidas através
            <br />
            <span className="text-red-200">do esporte</span>
          </h2>

          <p className="text-xl md:text-2xl text-red-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Treinos gratuitos, educação de qualidade e valores para a vida toda.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            {/* Substituir o onClick do botão "Inscreva seu filho" */}
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-slate-100 font-medium px-10 py-4 text-lg group transition-all duration-300 hover:shadow-xl"
              onClick={handleInscricaoClick}
            >
              Inscreva seu filho
              <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium px-10 py-4 text-lg backdrop-blur-sm bg-white/10 group transition-all duration-300"
              onClick={() => document.getElementById("apoie")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Heart className="mr-2 w-5 h-5" />
              Apoie o projeto
            </Button>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1ª</div>
              <div className="text-red-200 text-sm tracking-wide">Aula Gratuita</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-red-200 text-sm tracking-wide">Alunos Atendidos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-red-200 text-sm tracking-wide">Títulos Conquistados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
