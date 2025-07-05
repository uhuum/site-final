"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, ArrowRight } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInscricaoClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-red-50/20 pt-32 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-blue-900 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-red-600 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-slate-900 animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
          <div className="space-y-8">
            <div
              className={`space-y-6 transition-all duration-1000 ${isVisible ? "animate-fade-in-left" : "opacity-0"}`}
            >
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full border border-red-600/20 hover-scale">
                <span className="text-red-600 text-sm font-medium tracking-wide">Desde 2021 transformando vidas</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-slate-900 block animate-fade-in-up stagger-1">Educação e</span>
                <span className="text-blue-900 block animate-fade-in-up stagger-2">Futebol</span>
                <span className="text-red-600 block animate-fade-in-up stagger-3">Unidos</span>
              </h1>

              <p
                className={`text-xl text-slate-600 leading-relaxed max-w-lg transition-all duration-1000 delay-800 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
              >
                Formamos atletas e cidadãos através do esporte, educação e valores fundamentais para a vida.
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 text-base group transition-all duration-300 hover-lift btn-hover-lift ripple"
                onClick={handleInscricaoClick}
              >
                Inscreva-se Agora
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 icon-bounce" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8 py-4 text-base group transition-all duration-300 bg-transparent hover-lift"
              >
                <Play className="mr-2 w-4 h-4 icon-bounce" />
                Assista ao vídeo
              </Button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-1200 ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl shadow-slate-900/10 hover-lift card-hover">
                <Image
                  src="/images/vista-aerea-escola.png"
                  alt="Vista aérea da Escola de Futebol 10 na Bola"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-900 rounded-2xl opacity-20 animate-float"></div>
              <div
                className="absolute -top-6 -left-6 w-16 h-16 bg-red-600 rounded-2xl opacity-20 animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ${isVisible ? "animate-bounce-in" : "opacity-0"}`}
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center hover-scale">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
