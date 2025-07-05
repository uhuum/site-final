"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactSection() {
  // Atualizar a função handleWhatsAppClick para usar o novo link
  const handleWhatsAppClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full mb-6">
            <span className="text-green-700 text-sm font-medium tracking-wide">Fale Conosco</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Entre em Contato</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco pelo WhatsApp para inscrições, dúvidas ou agendar uma visita
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* WhatsApp Principal */}
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white mb-12 shadow-2xl">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Fale Conosco no WhatsApp</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Nossa forma principal de atendimento. Resposta rápida e atendimento personalizado!
              </p>
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50 font-bold px-12 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="mr-3 w-6 h-6" />
                Chamar no WhatsApp
              </Button>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Informações de Contato</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Endereço</h4>
                      <p className="text-slate-600">
                        Rua José Vieira Martins, 270
                        <br />
                        Jardim Itapura – São Paulo – SP
                        <br />
                        CEP 04466-025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Telefone</h4>
                      <p className="text-slate-600">(11) 97356-5415</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">E-mail</h4>
                      <p className="text-slate-600">10nabolaescoladefutebol@gmail.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Horário de Funcionamento</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Segunda a Sexta</h4>
                      <p className="text-slate-600">18h às 20h30</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-red-600" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Final de Semana</h4>
                      <p className="text-slate-600">Fechado</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Dica</h4>
                  <p className="text-blue-800 text-sm">
                    Para um atendimento mais rápido, entre em contato pelo WhatsApp durante nosso horário de
                    funcionamento!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Informações Adicionais */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Documentos para Inscrição</h3>
              <p className="text-slate-600 text-sm">RG, CPF, comprovante de residência e atestado médico</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🆓</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Aula Experimental</h3>
              <p className="text-slate-600 text-sm">Primeira aula gratuita para conhecer nossa metodologia</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Início Imediato</h3>
              <p className="text-slate-600 text-sm">Após aprovação, o aluno já pode começar os treinos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
