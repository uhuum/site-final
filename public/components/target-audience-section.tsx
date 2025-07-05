"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { User, HandHeart, Users } from "lucide-react"

export default function TargetAudienceSection() {
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

    const section = document.getElementById("target-audience-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const audiences = [
    {
      icon: Users,
      title: "Meninos",
      subtitle: "(6 a 17 anos)",
      description:
        "Escola de futebol exclusiva para meninos, com foco no desenvolvimento esportivo e pessoal através do futebol.",
      color: "text-blue-900",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: User,
      title: "Pais e responsáveis",
      subtitle: "Família presente",
      description: "Apoio, orientação e desenvolvimento conjunto para fortalecer os laços familiares.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: HandHeart,
      title: "Voluntários e doadores",
      subtitle: "Apoie nossa missão",
      description: "Junte-se a nós para transformar vidas através do esporte e da educação.",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ]

  return (
    <section id="target-audience-section" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 border border-slate-200">
            <span className="text-slate-700 text-sm font-medium tracking-wide">Nossa Comunidade</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Para quem é a escolinha</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Oferecemos oportunidades para toda a comunidade se envolver
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const IconComponent = audience.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Card className="h-full bg-white border-2 border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-500 group">
                  <CardContent className="p-8 text-center h-full flex flex-col items-center">
                    {/* Icon */}
                    <div
                      className={`flex items-center justify-center w-16 h-16 rounded-2xl ${audience.bgColor} mb-6`}
                      style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "64px" }}
                    >
                      <IconComponent className={`w-8 h-8 ${audience.color}`} style={{ margin: "0 auto" }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4 text-center">
                      <h3 className="text-2xl font-bold text-slate-900">{audience.title}</h3>
                      <p className={`text-sm font-medium ${audience.color}`}>{audience.subtitle}</p>
                      <p className="text-slate-600 leading-relaxed flex-1">{audience.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
