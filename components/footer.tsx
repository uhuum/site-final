"use client"
import Image from "next/image"
import { MapPin, Phone, Mail, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/10nabola/", "_blank")
  }

  const handleYouTubeClick = () => {
    window.open("https://www.youtube.com/@10naBola", "_blank")
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4 sm:mb-6">
              <Image
                src="/images/logo-10-na-bola-escudo.png"
                alt="10 na Bola"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-15 sm:h-15 object-contain"
              />
              <div>
                <div className="text-white font-bold text-lg sm:text-xl">10 na Bola</div>
                <div className="text-slate-400 font-medium text-xs sm:text-sm">Escola de Futebol</div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 sm:mb-8 max-w-md leading-relaxed text-sm sm:text-base mx-auto sm:mx-0">
              Transformando vidas através do esporte desde 2021. Educação, valores e futebol para crianças e
              adolescentes da Zona Sul de São Paulo.
            </p>

            {/* Parceiro CEAP */}
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <span className="text-slate-400 text-xs sm:text-sm">Em parceria com:</span>
              <div className="bg-white px-2 py-1 rounded-lg flex items-center">
                <Image
                  src="/images/logo-ceap-novo.png"
                  alt="CEAP"
                  width={60}
                  height={30}
                  className="h-5 sm:h-6 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Contato */}
          <div id="contato" className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contato</h3>
            <div className="space-y-3 sm:space-y-4 text-slate-300">
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0 text-slate-400" />
                <div className="text-xs sm:text-sm leading-relaxed">
                  <p>Rua José Vieira Martins, 270</p>
                  <p>Jardim Itapura – São Paulo – SP</p>
                  <p>CEP 04466-025</p>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                <span className="text-xs sm:text-sm">(11) 97356-5415</span>
              </div>

              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                <span className="text-xs sm:text-sm">10nabolaescoladefutebol@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Horário de Funcionamento */}
          <div className="text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Funcionamento</h3>
            <div className="space-y-2 sm:space-y-3 text-slate-300">
              <div>
                <div className="font-medium text-white text-xs sm:text-sm">Segunda a Sexta</div>
                <div className="text-xs sm:text-sm">18h às 20h30</div>
              </div>
              <div>
                <div className="font-medium text-white text-xs sm:text-sm">Final de Semana</div>
                <div className="text-xs sm:text-sm">Fechado</div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-6 sm:mt-8">
              <h4 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-white">Siga-nos</h4>
              <div className="flex space-x-3 justify-center sm:justify-start">
                <button
                  onClick={handleInstagramClick}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors duration-300 touch-manipulation"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={handleYouTubeClick}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-colors duration-300 touch-manipulation"
                >
                  <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-slate-400 text-xs sm:text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Escola de Futebol 10 na Bola. Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400 text-xs sm:text-sm">Conecte-se conosco:</span>
            <div className="flex space-x-2">
              <button
                onClick={handleInstagramClick}
                className="text-slate-400 hover:text-white transition-colors duration-300 touch-manipulation"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={handleYouTubeClick}
                className="text-slate-400 hover:text-red-500 transition-colors duration-300 touch-manipulation"
              >
                <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
