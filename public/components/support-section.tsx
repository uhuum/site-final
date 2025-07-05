"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Handshake, Gift } from "lucide-react"

export default function SupportSection() {
  const handleDonationClick = () => {
    const message = "Olá, quero ajudar a escolinha com um valor"
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511973565415&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handlePartnershipClick = () => {
    const message =
      "Olá, tenho interesse em ser parceiro da Escolinha 10 na Bola. Gostaria de saber mais sobre as oportunidades de parceria e como minha empresa pode apoiar o projeto."
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511973565415&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleMaterialDonationClick = () => {
    const message =
      "Olá, gostaria de doar materiais esportivos para a Escolinha 10 na Bola. Tenho interesse em contribuir com equipamentos, uniformes ou outros materiais necessários."
    const whatsappUrl = `https://api.whatsapp.com/send?phone=5511973565415&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="apoie" className="py-24 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <span className="text-red-700 text-sm font-medium tracking-wide">Apoie Nossa Missão</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Como Você Pode Ajudar</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Existem várias formas de apoiar nosso projeto e ajudar a transformar mais vidas através do esporte
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-red-100 hover:border-red-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Doação Financeira</h3>
              <p className="text-slate-600 mb-6">Contribua financeiramente para manter nossos treinos e atividades</p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full" onClick={handleDonationClick}>
                Doar Agora
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-green-100 hover:border-green-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Handshake className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Parceria</h3>
              <p className="text-slate-600 mb-6">Sua empresa pode se tornar parceira e apoiar nosso projeto</p>
              <Button className="bg-green-600 hover:bg-green-700 text-white w-full" onClick={handlePartnershipClick}>
                Ser Parceiro
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-xl transition-all duration-300 border-2 border-yellow-100 hover:border-yellow-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Doação de Materiais</h3>
              <p className="text-slate-600 mb-6">Doe equipamentos esportivos, uniformes ou materiais</p>
              <Button
                className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
                onClick={handleMaterialDonationClick}
              >
                Doar Materiais
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Impacto das Doações */}
        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-900/5 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Impacto das Suas Doações</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">R$ 50</div>
              <p className="text-slate-600">Ajuda a subsidiar mensalidades de alunos carentes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">R$ 200</div>
              <p className="text-slate-600">Cobre equipamentos e materiais para uma categoria</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">R$ 500</div>
              <p className="text-slate-600">Financia melhorias na infraestrutura da escola</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
