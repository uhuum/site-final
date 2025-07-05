"use client"

import { useEffect, useState } from "react"
import { Users, Target, Trophy, Heart } from "lucide-react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState([0, 0, 0, 0])

  const stats = [
    {
      icon: Users,
      number: 200,
      suffix: "+",
      label: "alunos atendidos desde 2021",
      color: "text-blue-900",
      bgColor: "bg-blue-50",
    },
    {
      icon: Target,
      number: 80,
      suffix: "%",
      label: "de presença regular nos treinos",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Trophy,
      number: 8,
      suffix: "+",
      label: "títulos conquistados",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Heart,
      number: 100,
      suffix: "%",
      label: "dos alunos acompanhados por educadores",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          stats.forEach((stat, index) => {
            let start = 0
            const end = stat.number
            const duration = 2000
            const increment = end / (duration / 16)

            const timer = setInterval(() => {
              start += increment
              if (start >= end) {
                start = end
                clearInterval(timer)
              }
              setCounters((prev) => {
                const newCounters = [...prev]
                newCounters[index] = Math.floor(start)
                return newCounters
              })
            }, 16)
          })
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("stats-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="stats-section" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full mb-6">
            <span className="text-slate-700 text-sm font-medium tracking-wide">Nosso Impacto</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Nossos Números</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Resultados que comprovam nosso compromisso com a comunidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="bg-slate-50 rounded-3xl p-8 text-center border border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-500 group">
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>

                  {/* Number */}
                  <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    {counters[index]}
                    {stat.suffix}
                  </div>

                  {/* Label */}
                  <div className="text-slate-600 leading-relaxed">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
