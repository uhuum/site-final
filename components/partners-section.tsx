"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function PartnersSection() {
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

    const section = document.getElementById("partners-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleContactClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="partners-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-slate-700 text-sm font-medium tracking-wide">Parceria Estratégica</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Nosso Parceiro</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Em parceria com o CEAP, oferecemos educação e esporte de qualidade para a comunidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-500">
              <Image
                src="/images/logo-ceap-novo.png"
                alt="CEAP - Centro Educacional Assistencial Profissionalizante"
                width={200}
                height={100}
                className="max-h-20 w-auto mx-auto mb-8"
              />

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Centro Educacional Assistencial Profissionalizante
              </h3>

              <p className="text-slate-600 leading-relaxed mb-8">
                O CEAP é nosso parceiro desde o início, compartilhando a visão de transformar vidas através da educação.
                Juntos, oferecemos um programa completo que vai além do futebol, incluindo acompanhamento educacional e
                desenvolvimento pessoal.
              </p>

              <Button
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white font-medium group transition-all duration-300 bg-transparent"
                onClick={handleContactClick}
              >
                Entre em Contato
                <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="relative">
              <Image
                src="/images/ceap-parceria.png"
                alt="Parceria 10 na Bola e CEAP"
                width={500}
                height={400}
                className="rounded-2xl w-full h-auto shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-900 rounded-2xl opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-red-600 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
