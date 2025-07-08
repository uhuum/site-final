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
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-red-600/10 rounded-full">
                <span className="text-red-600 text-sm font-medium tracking-wide">Nossa História</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
                Futebol e Educação
                <br />
                <span className="text-red-600">Transformando Vidas</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                A <strong className="text-slate-900">10 na Bola</strong> é muito mais que uma escolinha de futebol: é um projeto social
                com raízes profundas na <strong className="text-blue-900">comunidade do Jardim Pedreira</strong>, na Zona Sul de São Paulo,
                sediada no campo do CEAP.
              </p>

              <p>
                Desde <strong className="text-red-600">setembro de 2021</strong>, nosso propósito tem sido claro e transformador:
                oferecer um ambiente seguro, acolhedor e educativo para crianças e adolescentes,
                onde o esporte se torna ferramenta para desenvolvimento humano, cidadania e inclusão.
              </p>

              <p>
                Atendemos meninos e meninas, muitos em situação de vulnerabilidade social, com treinos técnicos e acompanhamento
                que vão além da bola — cultivando valores como respeito, disciplina, trabalho em equipe, resiliência e empatia.
                Aqui, ninguém fica de fora por motivos financeiros; nossa missão é promover a igualdade de oportunidades.
              </p>

              <p>
                Com turmas organizadas por idade e uma equipe dedicada, oferecemos treinos de segunda a sexta-feira até às 21h,
                formando não só atletas, mas cidadãos conscientes e preparados para os desafios da vida.
              </p>

              <p className="font-semibold text-slate-900">
                Na 10 na Bola, a bola rola para todos. Sempre.
              </p>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
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
