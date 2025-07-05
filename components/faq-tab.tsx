"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, HelpCircle, MessageCircle, Phone, Clock, Users, Trophy, Heart } from "lucide-react"

interface FAQTabProps {
  onTabChange: (tab: string) => void
}

export default function FAQTab({ onTabChange }: FAQTabProps) {
  const [openItems, setOpenItems] = useState<number[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleContactClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Inscrições e Matrículas",
      icon: Users,
      color: "blue",
      questions: [
        {
          question: "Como faço para inscrever meu filho na escolinha?",
          answer:
            "Entre em contato conosco pelo WhatsApp ou visite nossa sede. Oferecemos uma aula experimental gratuita para que seu filho conheça nossa metodologia antes da matrícula definitiva.",
        },
        {
          question: "Qual a idade mínima e máxima para participar?",
          answer:
            "Atendemos meninos de 6 a 17 anos, divididos em categorias por faixa etária para melhor desenvolvimento técnico e social.",
        },
        {
          question: "A escolinha aceita meninas?",
          answer:
            "Atualmente nossa escola de futebol é voltada exclusivamente para meninos, com foco no desenvolvimento específico do futebol masculino.",
        },
        {
          question: "Quais documentos são necessários para a matrícula?",
          answer:
            "RG e CPF do aluno, comprovante de residência, atestado médico atualizado e autorização dos responsáveis. Também solicitamos uma foto 3x4 recente.",
        },
        {
          question: "Há taxa de matrícula?",
          answer:
            "Sim, cobramos uma taxa de matrícula que inclui o kit inicial com camisa oficial da escolinha. Entre em contato para valores atualizados.",
        },
      ],
    },
    {
      title: "Treinos e Horários",
      icon: Clock,
      color: "green",
      questions: [
        {
          question: "Quantas vezes por semana são os treinos?",
          answer:
            "Os treinos acontecem uma vez por semana para cada categoria, de segunda a sexta-feira, das 18h às 20h30. Em casos específicos, os treinadores podem organizar treinos extras conforme a necessidade.",
        },
        {
          question: "O que acontece se meu filho faltar ao treino?",
          answer:
            "Entendemos que imprevistos acontecem. Não há penalização por faltas eventuais, mas incentivamos a frequência regular para melhor desenvolvimento.",
        },
        {
          question: "Os treinos acontecem em dias de chuva?",
          answer:
            "Nosso campo é descoberto, então em caso de chuva forte, o treino é cancelado por segurança. Sempre comunicamos antecipadamente pelos grupos de WhatsApp.",
        },
        {
          question: "Posso acompanhar os treinos do meu filho?",
          answer:
            "Sim! Os pais são sempre bem-vindos para assistir aos treinos. Temos arquibancada e incentivamos a participação da família no desenvolvimento dos atletas.",
        },
      ],
    },
    {
      title: "Metodologia e Desenvolvimento",
      icon: Trophy,
      color: "yellow",
      questions: [
        {
          question: "Qual a metodologia de ensino da escolinha?",
          answer:
            "Nossa metodologia combina desenvolvimento técnico do futebol com formação de valores como disciplina, respeito e trabalho em equipe. Focamos no desenvolvimento integral do atleta.",
        },
        {
          question: "Vocês participam de campeonatos?",
          answer:
            "Sim! Participamos regularmente de diversos campeonatos regionais. Já conquistamos mais de 15 títulos em diferentes categorias, sempre priorizando o aprendizado e a experiência dos atletas.",
        },
        {
          question: "Como é feito o acompanhamento do desenvolvimento?",
          answer:
            "Nossos treinadores acompanham o desenvolvimento de cada aluno durante os treinos, oferecendo orientações individuais e coletivas para melhorar o desempenho técnico e comportamental.",
        },
        {
          question: "Vocês fazem avaliações formais dos alunos?",
          answer:
            "Não fazemos avaliações formais ou relatórios escritos. O acompanhamento é feito de forma prática durante os treinos, com orientações diretas dos treinadores aos alunos e conversas com os pais quando necessário.",
        },
      ],
    },
    {
      title: "Valores e Pagamentos",
      icon: Heart,
      color: "red",
      questions: [
        {
          question: "Qual o valor da mensalidade?",
          answer:
            "Os valores variam conforme a categoria e frequência. Entre em contato conosco para informações atualizadas sobre mensalidades e formas de pagamento.",
        },
        {
          question: "Vocês oferecem bolsas ou descontos?",
          answer:
            "Sim! Temos um programa social que oferece bolsas parciais e integrais para famílias em situação de vulnerabilidade social. Avaliamos cada caso individualmente.",
        },
        {
          question: "Quais as formas de pagamento aceitas?",
          answer:
            "Aceitamos dinheiro, PIX, cartão de débito e crédito. O pagamento pode ser feito mensalmente até o dia 10 de cada mês.",
        },
        {
          question: "O que está incluso na mensalidade?",
          answer:
            "A mensalidade inclui todos os treinos da categoria, participação em campeonatos, acompanhamento técnico e uso das instalações. Materiais extras como chuteiras são por conta da família.",
        },
      ],
    },
  ]

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="text-center">
        <div
          className={`inline-flex items-center px-4 py-2 bg-purple-100 rounded-full mb-6 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-down" : "opacity-0"
          }`}
        >
          <HelpCircle className="w-4 h-4 text-purple-600 mr-2" />
          <span className="text-purple-700 text-sm font-medium tracking-wide">Dúvidas Frequentes</span>
        </div>
        <h1
          className={`text-4xl md:text-5xl font-bold text-slate-900 mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Perguntas Frequentes
        </h1>
        <p
          className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Encontre respostas para as principais dúvidas sobre nossa escola de futebol
        </p>
      </section>

      {/* FAQ Categories */}
      <section className="container mx-auto px-6">
        <div className="space-y-12">
          {faqCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <div
                key={categoryIndex}
                className={`transition-all duration-1000 delay-${600 + categoryIndex * 200} ${
                  isVisible ? "animate-slide-in-up" : "opacity-0"
                }`}
              >
                <div className="text-center mb-8">
                  <div
                    className={`inline-flex items-center px-6 py-3 bg-${category.color}-100 rounded-full mb-4 hover-scale`}
                  >
                    <IconComponent className={`w-5 h-5 text-${category.color}-600 mr-2`} />
                    <span className={`text-${category.color}-700 font-semibold`}>{category.title}</span>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex
                    const isOpen = openItems.includes(globalIndex)

                    return (
                      <Card
                        key={faqIndex}
                        className={`overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-${category.color}-200 card-hover`}
                      >
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-200"
                          >
                            <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                            <div
                              className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            >
                              <ChevronDown className="w-5 h-5 text-slate-500" />
                            </div>
                          </button>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-6 pb-6">
                              <div className={`h-px bg-${category.color}-200 mb-4`}></div>
                              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="container mx-auto px-6">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-1400 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Não Encontrou Sua Dúvida?</h2>
            <p className="text-xl text-slate-600">Entre em contato conosco diretamente</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card
              className={`text-center hover:shadow-xl transition-all duration-1000 delay-1600 border-2 border-green-100 hover:border-green-300 card-hover hover-lift ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-float">
                  <MessageCircle className="w-8 h-8 text-green-600 icon-bounce" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">WhatsApp</h3>
                <p className="text-slate-600 mb-6">
                  Fale conosco diretamente pelo WhatsApp para esclarecimentos rápidos
                </p>
                <Button
                  className="bg-green-600 hover:bg-green-700 text-white w-full hover-lift btn-hover-lift ripple"
                  onClick={handleContactClick}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`text-center hover:shadow-xl transition-all duration-1000 delay-1800 border-2 border-blue-100 hover:border-blue-300 card-hover hover-lift ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 hover-scale animate-float">
                  <Phone className="w-8 h-8 text-blue-600 icon-bounce" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Visita Presencial</h3>
                <p className="text-slate-600 mb-6">
                  Agende uma visita para conhecer nossa estrutura e conversar pessoalmente
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full hover-lift btn-hover-lift ripple"
                  onClick={handleContactClick}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Agendar Visita
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="text-center">
        <div className={`transition-all duration-1000 delay-2000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <p className="text-slate-600 mb-6">Quer saber mais sobre nossa escola?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8 py-3 bg-transparent hover-lift"
              onClick={() => onTabChange("sobre")}
            >
              Nossa História
            </Button>
            <Button
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium px-8 py-3 bg-transparent hover-lift"
              onClick={() => onTabChange("treinos")}
            >
              Ver Treinos
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
