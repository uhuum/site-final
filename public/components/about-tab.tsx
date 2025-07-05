"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Target, Heart, Award, Calendar, MapPin } from "lucide-react"

interface AboutTabProps {
  onTabChange: (tab: string) => void
}

export default function AboutTab({ onTabChange }: AboutTabProps) {
  // Atualizar os botões "Agendar Visita" e "Inscrever Agora" para usar o novo link
  const handleContactClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <section className="text-center">
        <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
          <span className="text-red-700 text-sm font-medium tracking-wide">Nossa História</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">A Escola 10 na Bola</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Conheça nossa trajetória, missão e valores que nos guiam na formação de atletas e cidadãos
        </p>
      </section>

      {/* Nossa História */}
      <section className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Nossa História</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Fundada em <strong className="text-red-600">setembro de 2021</strong>, a <strong className="text-slate-900">"10 na Bola"</strong> é mais do que uma escola de futebol: é um projeto de transformação social que utiliza o esporte como ferramenta para mudar vidas. Localizada na vibrante <strong className="text-blue-900">Zona Sul de São Paulo</strong>, nossa iniciativa nasceu de um sonho compartilhado por educadores, treinadores e membros da comunidade que acreditavam no poder do futebol para inspirar, educar e unir.
              </p>
              <p>
                Desde o início, nosso objetivo foi claro: oferecer oportunidades gratuitas para crianças e adolescentes de comunidades carentes, promovendo não apenas o desenvolvimento técnico no futebol, mas também a formação de valores essenciais para a vida. Acreditamos que o esporte é um catalisador para o crescimento pessoal, ajudando a construir caráter, disciplina e senso de coletividade. Com uma abordagem inovadora, combinamos treinos esportivos com atividades educacionais, garantindo que nossos alunos se tornem não apenas atletas habilidosos, mas também cidadãos conscientes e preparados para os desafios do futuro.
              </p>
              <p>
                Em parceria com o <strong className="text-slate-900">Centro Educacional Assistencial Profissionalizante (CEAP)</strong>, a "10 na Bola" desenvolveu uma metodologia única que equilibra o ensino técnico do futebol com o acompanhamento educacional e emocional. Desde a sua fundação, já impactamos centenas de jovens, proporcionando-lhes um espaço seguro para sonhar, aprender e crescer. Nosso campo é mais do que um lugar para jogar bola; é um ambiente onde se cultivam amizades, se superam obstáculos e se constroem pontes para um futuro melhor.
              </p>
              <p>
                Continuamos a crescer, mantendo nosso compromisso com a inclusão, a educação e o desenvolvimento integral de nossos alunos, sempre com a missão de transformar vidas através do esporte.
              </p>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/treino-campo.png"
              alt="História da escola"
              width={500}
              height={400}
              className="rounded-2xl w-full h-auto shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-red-600 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Missão, Visão e Valores</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Missão</h3>
                <p className="text-slate-600 leading-relaxed">
                  Formar atletas e cidadãos através do esporte, educação e valores, oferecendo oportunidades gratuitas
                  para o desenvolvimento integral de crianças e adolescentes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Visão</h3>
                <p className="text-slate-600 leading-relaxed">
                  Ser referência em educação esportiva na Zona Sul de São Paulo, reconhecida pela excelência na formação
                  de jovens atletas e cidadãos conscientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Valores</h3>
                <p className="text-slate-600 leading-relaxed">
                  Respeito, disciplina, trabalho em equipe, responsabilidade social, inclusão e compromisso com a
                  educação e desenvolvimento pessoal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

{/* Metodologia */}
<section className="container mx-auto px-6">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossa Metodologia</h2>
    <p className="text-xl text-slate-600">Como desenvolvemos nossos alunos dentro e fora de campo</p>
  </div>

  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-red-600 font-bold text-xl">1</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Desenvolvimento Técnico</h3>
          <p className="text-lg text-slate-600">
            Fundamentos do futebol adaptados para cada faixa etária, com progressão gradual e respeitando o
            desenvolvimento motor.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-blue-600 font-bold text-xl">2</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Formação de Valores</h3>
          <p className="text-lg text-slate-600">
            Trabalho constante com disciplina, respeito, trabalho em equipe e responsabilidade social.
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-green-600 font-bold text-xl">3</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Acompanhamento Educacional</h3>
          <p className="text-lg text-slate-600">
            Incentivo aos estudos e acompanhamento do desempenho escolar de todos os alunos.
          </p>
        </div>
      </div>
    </div>

    <div className="relative flex items-center justify-center">
      <Image
        src="/images/treino-orientacoes-tecnicas.png?v=1" // Adicionado ?v=1 para evitar cache
        alt="Metodologia de ensino"
        width={500} // Ajuste para o tamanho desejado
        height={200} // Ajuste proporcionalmente
        className="rounded-2xl shadow-xl" // Removi w-full h-auto
        style={{ objectFit: 'cover' }} // Garante que a imagem mantenha proporções
      />
    </div>
  </div>
</section>

{/* Parceria CEAP */}
<section className="bg-blue-50 py-16">
  <div className="container mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">Parceria com CEAP</h2>
        <p className="text-lg text-slate-600 leading-relaxed text-justify">
          A parceria com o <strong>Centro Educacional Assistencial Profissionalizante (CEAP)</strong> é o coração do projeto "10 na Bola", sendo um pilar essencial para o sucesso de nossa missão. Desde o início, unimos forças com o CEAP para criar um programa que vai muito além do futebol, integrando esporte, educação e desenvolvimento humano em uma abordagem holística que transforma vidas.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed text-justify">
          O CEAP, com sua vasta experiência em educação e formação profissional, traz uma estrutura robusta que complementa nossas atividades esportivas. Juntos, oferecemos um ambiente seguro e acolhedor onde crianças e adolescentes da Zona Sul de São Paulo têm a oportunidade de desenvolver não apenas habilidades técnicas no futebol, mas também competências emocionais, sociais e educacionais que os preparam para a vida.
        </p>
      
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Acompanhamento educacional personalizado</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Orientação profissional e de carreira</span>
          </li>
          <li className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Apoio psicológico e social</span>
          </li>
        </ul>
      </div>

      <div className="relative">
        <Image
          src="/images/10NABOLA E CEAP.png"
          alt="Parceria CEAP"
          width={800}
          height={500}
        className="rounded-2xl shadow-xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* Localização */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossa Localização</h2>
          <p className="text-xl text-slate-600">Estamos no coração da Zona Sul de São Paulo</p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Endereço Completo</h3>
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
                  <Calendar className="w-6 h-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Horários de Funcionamento</h3>
                    <p className="text-slate-600">
                      Segunda à Sexta: 18H ÀS 20:30
                      <br />
                      Final de Semana: FECHADO
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/vista-aerea-escola.png"
                  alt="Vista aérea da escola"
                  width={400}
                  height={300}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-red-600 to-blue-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Quer Conhecer Nossa Escola?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Agende uma visita e veja de perto como trabalhamos na formação de atletas e cidadãos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-slate-100 font-medium px-8 py-4"
              onClick={handleContactClick}
            >
              Agendar Visita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-medium px-8 py-4 bg-transparent"
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
