"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
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

    const section = document.getElementById("testimonials-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const testimonials = [
    {
      quote:
        "Trabalhar na 10 na Bola é mais do que ensinar futebol, é formar caráter e ajudar a construir o futuro dessas crianças. Ver o crescimento de cada aluno é nossa maior recompensa.",
      author: "Adriano",
      role: "Treinador da Escola 10 na Bola",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "Aqui desenvolvemos não apenas as habilidades técnicas, mas principalmente os valores humanos. É gratificante ver como o esporte transforma a vida dos nossos alunos.",
      author: "Kayky",
      role: "Treinador da Escola 10 na Bola",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "A metodologia da escola vai além do futebol. Trabalhamos disciplina, respeito e trabalho em equipe. É emocionante acompanhar o desenvolvimento de cada criança.",
      author: "Mauricio",
      role: "Treinador da Escola 10 na Bola",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "Ser treinador aqui é uma responsabilidade e um privilégio. Formamos não apenas jogadores, mas cidadãos conscientes e preparados para a vida.",
      author: "Gilson",
      role: "Treinador da Escola 10 na Bola",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
    {
      quote:
        "A escola mudou minha vida! Aqui aprendi a jogar futebol, mas também aprendi valores importantes como respeito, disciplina e trabalho em equipe. Os treinadores são como uma família para nós.",
      author: "Arthur",
      role: "Aluno da Escola 10 na Bola",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials-section" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 border border-slate-200">
            <span className="text-slate-700 text-sm font-medium tracking-wide">Depoimentos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">O que dizem sobre nós</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação através do esporte - depoimentos de nossos treinadores e alunos
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-2 border-slate-200 shadow-xl shadow-slate-900/5">
            <CardContent className="p-0">
              <div className="relative">
                {/* Main Testimonial */}
                <div className="p-12 text-center min-h-[400px] flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-8 mx-auto">
                    <Quote className="w-8 h-8 text-blue-900" />
                  </div>

                  {/* Quote */}
                  <blockquote className="text-2xl md:text-3xl text-slate-900 mb-8 leading-relaxed font-medium">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
                    />
                    <div className="text-left">
                      <div className="font-bold text-slate-900 text-lg">{testimonials[currentIndex].author}</div>
                      <div className="text-slate-600 text-sm">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                </div>

                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border-2 border-slate-200 bg-white hover:bg-slate-50 transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-900 scale-125" : "bg-slate-300 hover:bg-slate-400"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
