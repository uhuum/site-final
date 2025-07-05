"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"

export default function AboutSection() {
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

    const section = document.getElementById("about-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div id="about-section" className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full">
                <span className="text-red-600 text-sm font-medium tracking-wide">Nossa História</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                Educação e Futebol
                <br />
                <span className="text-red-600">Lado a Lado</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                A <strong className="text-slate-900">"10 na Bola"</strong> é uma escola de futebol com compromisso
                social, que alia esporte e formação humana. Atendemos crianças e adolescentes da comunidade com treinos
                técnicos, acompanhamento e incentivo ao estudo.
              </p>
              <p>
                Desde <strong className="text-red-600">setembro de 2021</strong>, nossa missão é desenvolver não apenas
                habilidades esportivas, mas também valores fundamentais como disciplina, respeito, trabalho em equipe e
                responsabilidade social.
              </p>
              <p>
                Localizada na <strong className="text-blue-900">Zona Sul de São Paulo</strong>, oferecemos treinos de
                iniciação e alto rendimento, sempre priorizando a formação integral de nossos alunos.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div className="relative group cursor-pointer">
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl shadow-slate-900/10 transition-all duration-500 group-hover:shadow-3xl group-hover:shadow-slate-900/15">
                <Image
                  src="/images/treino-campo.png"
                  alt="Treino da escolinha de futebol"
                  width={500}
                  height={400}
                  className="rounded-2xl w-full h-auto"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-6 bg-slate-900/20 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-slate-900 ml-1" />
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-red-600 rounded-2xl opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-900 rounded-2xl opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
