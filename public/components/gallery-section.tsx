"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCategory, setActiveCategory] = useState("todos")
  const [selectedImage, setSelectedImage] = useState<any>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("gallery-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "campeonatos", label: "Campeonatos" },
    { id: "treinos", label: "Treinos" },
    { id: "amistosos", label: "Amistosos" },
    { id: "eventos", label: "Eventos" },
  ]

  const galleryImages = [
    // Campeonatos
    {
      src: "/images/copa-rei-2025-sub17-campeao.png",
      alt: "Equipe Sub-17 Campeã Copa do Rei 2025",
      title: "Sub-17 Campeões Copa do Rei 2025",
      description:
        "Nossa equipe Sub-17 conquistou o título da Copa do Rei 2025 com uma campanha impecável, demonstrando técnica, garra e união. Foi uma conquista histórica que marca o crescimento da nossa escola.",
      category: "campeonatos",
    },
    {
      src: "/images/copa-rei-2024-sub15-campeao.png",
      alt: "Equipe Sub-15 Campeã Copa do Rei 2024",
      title: "Sub-15 Campeões Copa do Rei 2024",
      description:
        "Conquista histórica da Copa do Rei 2024 pela equipe Sub-15. Os jogadores demonstraram excelência técnica e espírito de equipe exemplar durante toda a competição.",
      category: "campeonatos",
    },
    {
      src: "/images/copa-rei-2025-sub13-campeao.png",
      alt: "Equipe Sub-13 Campeã Copa do Rei 2025",
      title: "Sub-13 Campeões Copa do Rei 2025",
      description:
        "A categoria Sub-13 também brilhou na Copa do Rei 2025 - Final Prata, mostrando que o trabalho de base da nossa escola está dando frutos. Os meninos jogaram com muita dedicação e espírito de equipe.",
      category: "campeonatos",
    },
    {
      src: "/images/copa-ad-soccer-2024-sub12-campeao-nova.png",
      alt: "Sub-12 Campeões Copa A.D. Soccer 2024",
      title: "Sub-12 Campeões Copa A.D. Soccer 2024",
      description:
        "Nossa equipe Sub-12 foi campeã da Copa A.D. Soccer 2024 - Final Prata, demonstrando a qualidade do trabalho desenvolvido na escola. Foi uma campanha perfeita com muito futebol bonito.",
      category: "campeonatos",
    },
    {
      src: "/images/final-copa-real-kids-2024-sub10-campeao.png",
      alt: "Sub-10 Campeões Copa Real Kids 2024",
      title: "Sub-10 Campeões Copa Real Kids 2024",
      description:
        "Momento emocionante da final da Copa Real Kids 2024, onde nossa equipe Sub-10 conquistou o título após uma partida emocionante. A alegria das crianças é o que nos motiva a continuar.",
      category: "campeonatos",
    },
    {
      src: "/images/treino-sub08-conquista-copa-real-kids.png",
      alt: "Sub-08 Celebrando Conquista Copa Real Kids",
      title: "Sub-08 Celebrando Conquista Copa Real Kids",
      description:
        "Momento especial das crianças da categoria Sub-08 celebrando uma conquista na Copa Real Kids. A alegria e união dos pequenos atletas é inspiradora.",
      category: "campeonatos",
    },
    // Treinos
    {
      src: "/images/treino-orientacoes-tecnicas.png",
      alt: "SUB.16/17 - Recebendo orientações do nosso treinador",
      title: "Orientações Técnicas Durante o Treino",
      description:
        "Momento de orientação técnica durante o treino do SUB.16/17, onde nossos educadores passam instruções importantes para o desenvolvimento dos alunos. A atenção e dedicação são fundamentais.",
      category: "treinos",
    },
    {
      src: "/images/treino-sub14-orientacoes.png",
      alt: "Treino da categoria Sub-14",
      title: "Treino da categoria Sub-14",
      description:
        "SUB.14 montando seus times para o amistoso entre eles. Todo final de treino, temos um tempo para fazer o amistoso entre eles!",
      category: "treinos",
    },
    {
      src: "/images/treino-sub11-descanso.png",
      alt: "Treino da categoria Sub-11",
      title: "SUB.11 Esperando o treino começar",
      description:
        "Intervalo durante o treino da categoria Sub-11. Estes momentos são importantes para hidratação, orientações táticas e fortalecimento dos laços entre os jogadores.",
      category: "treinos",
    },
    {
      src: "/images/treino-sub17-descanso.png",
      alt: "Treino da categoria Sub-17",
      title: "SUB.16/17 - Esperando o treino começar",
      description:
        "Intervalo durante o treino da categoria Sub-17. Estes momentos são importantes para hidratação, orientações táticas e fortalecimento dos laços entre os jogadores.",
      category: "treinos",
    },
    {
      src: "/images/treino-sub08-criancas.png",
      alt: "Treino da categoria Sub-08",
      title: "Treino Lúdico - Sub-08",
      description:
        "Treino da categoria Sub-08 com atividades lúdicas e educativas. Nesta idade, o foco é na diversão, coordenação motora e primeiros contatos com a bola.",
      category: "treinos",
    },
    {
      src: "/images/copa-real-kids-2024-sub10-treino.png",
      alt: "Sub-10 na Copa Real Kids",
      title: "Preparação Sub-10 para Copa Real Kids",
      description:
        "SUB.10 Chegando em campo para mais uma partida da Copa Real Kids. Antes do jogo começar eles se aquecem e recebem orientações dos nossos treinadores.",
      category: "campeonatos",
    },
    // Amistosos
    {
      src: "/images/copa-ad-soccer-sub17-acao.png",
      alt: "Ação durante jogo Sub-17",
      title: "Sub-17 em Ação na Copa A.D. Soccer",
      description:
        "Lance de jogo da equipe Sub-17 na Copa A.D. Soccer. Momento que mostra a técnica, determinação e qualidade do futebol praticado pelos nossos atletas.",
      category: "campeonatos",
    },
    {
      src: "/images/amistoso-nauticos.png",
      alt: "Amistoso contra Náuticos",
      title: "10 na Bola vs Náuticos",
      description:
        "Partida amistosa contra a equipe Náuticos. Os jogos amistosos são importantes para testar novas táticas, dar oportunidade a todos os jogadores e fortalecer o espírito esportivo.",
      category: "amistosos",
    },
    {
      src: "/images/amistoso-sub16-camaroes-1.png",
      alt: "Amistoso Sub-16 contra Camarões",
      title: "Amistoso: 10 Na Bola X Camarões",
      description:
        "Partida amistosa da categoria Sub-16 contra a equipe Camarões. Estes jogos são fundamentais para o desenvolvimento técnico e tático dos nossos atletas.",
      category: "amistosos",
    },
    {
      src: "/images/amistoso-sub16-camaroes-2.png",
      alt: "Amistoso Sub-16 contra Camarões - Jogo",
      title: "Amistoso: 10 Na Bola X Camarões",
      description:
        "Lance da partida amistosa Sub-16 contra Camarões. Momento que mostra a intensidade e dedicação dos nossos jogadores durante as partidas.",
      category: "amistosos",
    },
    // Eventos
    {
      src: "/images/treino-aniversario-2024-especial.png",
      alt: "Comemoração de aniversário da escola",
      title: "Aniversário de um dos nossos alunos da escolinha",
      description:
        "Comemoração especial do aniversário do nosso aluno do SUB-10. Momento de confraternização entre alunos, famílias e educadores, celebrando mais um ano de vida.",
      category: "eventos",
    },
    {
      src: "/images/ceap-parceria.png",
      alt: "Parceria com CEAP",
      title: "Evento de Parceria com CEAP",
      description:
        "Evento oficial de parceria com o CEAP (Centro Educacional Assistencial Profissionalizante). Após a vitória em 2024 na Copa do Rei, nosso SUB.15 foi convocado pelo diretor do CEAP para nos parabenizar pela vitória!",
      category: "eventos",
    },
    {
      src: "/images/vista-aerea-escola.png",
      alt: "Vista aérea das instalações",
      title: "Nossas Instalações",
      description:
        "Vista aérea das instalações da Escola de Futebol 10 na Bola. Nosso espaço foi pensado para proporcionar o melhor ambiente de aprendizado e desenvolvimento esportivo.",
      category: "eventos",
    },
{
  src: "/images/Amistoso sub.08_ 10 na bola x Chute Inicial Corinthians.png",
  alt: "Premiação Sub-08 - Amistoso contra o Corinthians",
  title: "Premiação Amistoso",
  description:
    "Registro da premiação da equipe Sub-08 da Escola 10 na Bola, após a vitória no amistoso contra o Chute Inicial Corinthians. O jogo aconteceu em nossa casa, no CEAP.",
  category: "amistoso",
},

{
  src: "/images/AMISTOSO SUB.10_ 10 NA BOLA X SANTOS.png",
  alt: "Amistoso Sub-10 - 10 na Bola x Santos",
  title: "SUB.12 aquecendo antes do amistoso contra o Santos",
  description:
    "Momento especial do amistoso da categoria Sub-10 entre a Escola 10 na Bola e o Santos. A partida foi realizada na casa do adversário e representou uma experiência inesquecível para nossos atletas.",
  category: "amistoso",
},

{
  src: "/images/Amistoso sub.12_ 10 na bola x Chute Inicial Corinthians.png",
  alt: "Amistoso Sub-12 - 10 na Bola x Chute Inicial Corinthians",
  title: "Sub-12 | 10 na Bola x Chute Inicial Corinthians",
  description:
    "Registro do amistoso da categoria Sub-12 entre a Escola 10 na Bola e o Chute Inicial Corinthians. Um jogo emocionante realizado em nossa casa, promovendo integração, respeito e espírito esportivo.",
  category: "amistoso",
},

{
  src: "/images/COPA DO REI 2023 - SUB.15 - primeira partida do campeonato.png",
  alt: "Copa do Rei 2023 - Sub-15 - Primeira Partida",
  title: "Copa do Rei 2023 | Sub-15 - Primeira Partida",
  description:
    "Início da jornada da categoria Sub-15 na Copa do Rei 2023. Esta foi a primeira partida do campeonato, marcando o começo de uma trajetória cheia de esforço, dedicação e espírito de equipe.",
  category: "campeonato",
},

{
  src: "/images/vitória do Primeiro campeonato 2022.png",
  alt: "Final Copa Soccer 2022 - Vitória da 10 na Bola",
  title: "Copa Soccer 2022 | Vitória Histórica na Final",
  description:
    "Vitória inesquecível da Escola 10 na Bola na final da Copa Soccer 2022 — o primeiro campeonato oficial da nossa história. A decisão aconteceu em nossa casa e marcou o início de uma trajetória vitoriosa, com muita emoção, união e superação.",
  category: "campeonato",
},

{
  src: "/images/primeiro campeonato interno sub.16_17.png",
  alt: "Primeiro Campeonato Interno - Sub-16/17",
  title: "Campeonato Interno | Sub-16/17 - Primeira Edição",
  description:
    "Primeiro campeonato interno da categoria Sub-16/17 da Escola 10 na Bola. Uma competição especial entre os próprios alunos, realizada com o objetivo de fortalecer o espírito esportivo, a disciplina e a integração entre os atletas.",
  category: "interno",
}






  ]

  const filteredImages =
    activeCategory === "todos" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (image: any) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  return (
    <section id="galeria" className="py-24 bg-slate-50">
      <div id="gallery-section" className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full mb-6 border border-slate-200">
            <span className="text-slate-700 text-sm font-medium tracking-wide">Nossa Galeria</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Momentos Especiais</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Registros dos nossos melhores momentos, conquistas e o dia a dia da nossa escola
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-blue-900 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="group overflow-hidden bg-white border-2 border-slate-200 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-500 cursor-pointer">
                <CardContent className="p-0" onClick={() => openLightbox(image)}>
                  <div className="relative overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-lg font-bold">{image.title}</h3>
                      <p className="text-sm text-slate-200">Clique para ver detalhes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="bg-white rounded-2xl overflow-hidden">
                <div className="relative">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto max-h-[60vh] object-contain"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white"
                    onClick={closeLightbox}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{selectedImage.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
