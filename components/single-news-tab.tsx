"use client"

import { useState } from "react"
import { Calendar, ArrowLeft, Share2, Heart, MessageSquare, Copy, Check } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FaInstagram, FaWhatsapp } from "react-icons/fa"

interface SingleNewsTabProps {
  newsId: string
  onTabChange: (tab: string) => void
  onBackToNews: () => void
  onSelectNews?: (newsId: string) => void
}

const allNews = [
  {
    id: "william-sub15-terceiro-milenio",
    title: "William do nosso Sub-15 Inicia Nova Jornada no Terceiro Milênio",
    date: "03 de Julho, 2025",
    excerpt:
      "William aluno do Sub-15 da nossa Escolinha 10 na Bola, deu um importante passo na carreira: agora faz parte do tradicional clube Terceiro Milênio.",
    image: "/images/materia willian.png",
    category: "Depoimentos",
    highlight: true,
    gallery: [
      "/images/materia willian.png",
      "/images/treino-sub17-descanso.png",
      "/images/treino-orientacoes-tecnicas.png",
      "/images/copa-rei-2025-sub17-campeao.png",
    ],
    content: `
      <p>William, atleta da categoria Sub-15 da nossa Escolinha 10 na Bola, deu um passo importante em sua carreira: agora faz parte do tradicional <strong>Clube Terceiro Milênio</strong>.</p>
      <p>Em entrevista à nossa equipe, ele contou como foi sua trajetória até essa conquista e quais são suas expectativas para o futuro no futebol.</p>
      <h3>Um sonho em construção</h3>
      <p>Com apenas 15 anos, William foi aprovado no Clube Terceiro Milênio, referência na formação de jovens talentos na Zona Sul de São Paulo.</p>
      <h3>"Esse é o meu primeiro grande passo"</h3>
      <blockquote><p>"Me sinto feliz e confiante. Esse é o primeiro passo da minha carreira, e espero que através desse clube eu me torne um grande jogador."</p></blockquote>
      <h3>Parabéns, William!</h3>
      <p>Parabenizamos o William por essa nova fase e desejamos muito sucesso nessa jornada. Seguiremos acompanhando sua evolução com orgulho e torcida!</p>
    `,
  },
  {
    id: "copa-rei-2025",
    title: "Conquista Histórica na Copa do Rei 2025",
    date: "28 de Junho, 2025",
    excerpt:
      "Nossas equipes Sub-13 e Sub-17 conquistaram o título da Copa do Rei 2025, marcando um ano histórico para nossa escola.",
    image: "/images/copa-rei-2025-sub13-campeao.png",
    category: "Campeonatos",
    highlight: true,
    gallery: [
      "/images/copa-rei-2025-sub13-campeao.png",
      "/images/copa-rei-2025-sub17-campeao.png",
      "/images/copa-rei-2024-sub15-campeao.png",
      "/images/treino-campo.png",
    ],
    content: `
      <p>Em uma campanha histórica, as equipes Sub-13 e Sub-17 da Escola de Futebol 10 na Bola conquistaram os títulos da Copa do Rei 2025, consolidando nossa posição como uma das principais escolas de futebol da Zona Sul de São Paulo.</p>
      <h3>Sub-13 - Campeões Invictos</h3>
      <p>A equipe Sub-13 teve uma campanha perfeita, vencendo todos os jogos da competição.</p>
      <h3>Sub-17 - Dominando a Categoria</h3>
      <p>A equipe Sub-17 confirmou o favoritismo e conquistou o título com autoridade.</p>
    `,
  },
  {
    id: "copa-art-soccer-2025",
    title: "Finais da Copa Art Soccer 2025",
    date: "29 de Junho, 2025",
    excerpt:
      "As equipes Sub-08, Sub-10, Sub-12 e Sub-14 da Escolinha 10 na Bola participaram das emocionantes finais da Copa Art Soccer 2025.",
    image: "/images/copa-art-soccer-2025-finais.png",
    category: "Campeonatos",
    highlight: true,
    gallery: [
      "/images/copa-art-soccer-2025-finais.png",
      "/images/copa-ad-soccer-2024-sub12-campeao-nova.png",
      "/images/final-copa-real-kids-2024-sub10-campeao.png",
      "/images/treino-sub08-criancas.png",
    ],
    content: `
      <p>A Copa Art Soccer 2025 foi palco de grandes emoções para nossas categorias de base.</p>
      <h3>Resultados das Finais</h3>
      <ul>
        <li><strong>Sub-08:</strong> Vice-campeão</li>
        <li><strong>Sub-10:</strong> Campeão</li>
        <li><strong>Sub-12:</strong> Vice-campeão</li>
        <li><strong>Sub-14:</strong> Campeão</li>
      </ul>
    `,
  },
  {
    id: "ferias-2025",
    title: "Férias com Bola Rolando!",
    date: "01 de Julho, 2025",
    excerpt: "Dia 01 de julho marcou o início oficial das férias na Escolinha 10 na Bola com atividades especiais.",
    image: "/images/DIA 01-07 INICIO DAS FÉRIAS NA NOSSA ESCOLINHA (1).png",
    category: "Comunicados",
    highlight: true,
    gallery: [
      "/images/DIA 01-07 INICIO DAS FÉRIAS NA NOSSA ESCOLINHA (1).png",
      "/images/treino-aniversario-2024-especial.png",
      "/images/treino-sub11-descanso.png",
      "/images/vista-aerea-escola.png",
    ],
    content: `
      <p>As férias escolares chegaram, mas na Escolinha 10 na Bola a diversão e o aprendizado continuam!</p>
      <h3>Programação Especial</h3>
      <ul>
        <li>Treinos técnicos com atividades lúdicas</li>
        <li>Jogos recreativos entre as categorias</li>
        <li>Atividades de integração e confraternização</li>
        <li>Workshops sobre nutrição esportiva</li>
        <li>Sessões de cinema com filmes esportivos</li>
      </ul>
    `,
  },
  {
    id: "camisas-venda-2025",
    title: "Camisas Oficiais à Venda – Escolinha 10 na Bola",
    date: "01 de Julho, 2025",
    excerpt:
      "Já estão disponíveis as novas camisas oficiais da Escolinha 10 na Bola! Garanta a sua e venha treinar com o manto.",
    image: "/images/COPA SOCCER EDIÇÃO 2024 (2).png",
    category: "Comunicados",
    highlight: true,
    gallery: [
      "/images/COPA SOCCER EDIÇÃO 2024 (2).png",
      "/images/treino-orientacoes-tecnicas.png",
      "/images/treino-sub14-orientacoes.png",
      "/images/10NABOLA E CEAP.png",
    ],
    content: `
      <p>Já estão disponíveis as novas camisas oficiais da Escolinha 10 na Bola!</p>
      <h3>Modelos Disponíveis:</h3>
      <ul>
        <li><strong>Camisa Cinza:</strong> Ideal para treinos</li>
        <li><strong>Camisa Branca:</strong> Para competições</li>
      </ul>
      <h3>Preço:</h3>
      <p>R$ 100,00</p>
    `,
  },
]

export default function SingleNewsTab({ newsId, onTabChange, onBackToNews, onSelectNews }: SingleNewsTabProps) {
  const [liked, setLiked] = useState(false)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState<string[]>([])

  const news = allNews.find((n) => n.id === newsId)

  if (!news) return <div className="text-center py-24">Notícia não encontrada</div>

  const relatedNews = allNews.filter((n) => n.id !== news.id).slice(0, 4)

  const handleLike = () => setLiked(!liked)

  const handleShare = () => {
    setShowShareMenu(!showShareMenu)
  }

  const handleWhatsAppShare = () => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    const text = `${news.title} - ${url}`
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank")
    setShowShareMenu(false)
  }

  const handleInstagramShare = () => {
    // Instagram não permite compartilhamento direto via URL, então vamos copiar o link
    const url = typeof window !== "undefined" ? window.location.href : ""
    navigator.clipboard.writeText(`${news.title} - ${url}`)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 3000)
    setShowShareMenu(false)
  }

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : ""
    navigator.clipboard.writeText(url)
    setLinkCopied(true)
    setTimeout(() => setLinkCopied(false), 3000)
    setShowShareMenu(false)
  }

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment.trim()])
      setComment("")
    }
  }

  const handleRelatedNewsClick = (relatedNewsId: string) => {
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: "smooth" })

    // Navegar para a notícia
    if (typeof onSelectNews === "function") {
      onSelectNews(relatedNewsId)
    }
  }

  return (
    <div className="max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 sm:gap-12 font-sans">
      <main className="prose prose-lg prose-slate max-w-none">
        <div className="mb-4 sm:mb-6">
          <Button
            onClick={onBackToNews}
            variant="outline"
            className="flex items-center text-sm bg-transparent touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Voltar para lista
          </Button>
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 leading-tight">
          {news.title}
        </h1>

        <div className="flex items-center text-slate-500 text-sm mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          {news.date}
        </div>

        <div className="relative w-full aspect-[16/9] mb-6 rounded-md overflow-hidden shadow-md">
          <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8 relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={`${liked ? "text-red-600" : "text-slate-700"} touch-manipulation`}
          >
            <Heart className={`w-4 h-4 mr-1 ${liked ? "fill-red-600" : ""}`} />
            {liked ? "Curtido" : "Curtir"}
          </Button>

          <div className="relative">
            <Button variant="ghost" size="sm" onClick={handleShare} className="touch-manipulation">
              <Share2 className="w-4 h-4 mr-1" /> Compartilhar
            </Button>

            {/* Share Menu */}
            {showShareMenu && (
              <div className="absolute top-full left-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg py-2 z-50 min-w-[200px]">
                <button
                  onClick={handleWhatsAppShare}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors touch-manipulation"
                >
                  <FaWhatsapp className="w-4 h-4 text-green-600" />
                  WhatsApp
                </button>

                <button
                  onClick={handleInstagramShare}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors touch-manipulation"
                >
                  <FaInstagram className="w-4 h-4 text-pink-500" />
                  Instagram (Copiar)
                </button>

                <button
                  onClick={handleCopyLink}
                  className="w-full flex items-center gap-3 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 transition-colors touch-manipulation"
                >
                  {linkCopied ? (
                    <>
                      <Check className="w-4 h-4 text-green-600" />
                      Link copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      Copiar link
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>

        {linkCopied && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            ✅ Link copiado para a área de transferência!
          </div>
        )}

        <div dangerouslySetInnerHTML={{ __html: news.content }} />

        {/* Galeria de Fotos da Notícia */}
        {news.gallery && news.gallery.length > 0 && (
          <div className="mt-8 sm:mt-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">📸 Galeria de Fotos</h3>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {news.gallery.map((src, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <div className="relative w-full h-64 sm:h-72 md:h-96 rounded overflow-hidden">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`${news.title} - Imagem ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="touch-manipulation" />
              <CarouselNext className="touch-manipulation" />
            </Carousel>
          </div>
        )}

        <div className="mt-8 sm:mt-12 border-t pt-6">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 flex items-center">
            <MessageSquare className="w-4 h-4 mr-2" /> Comentários
          </h3>
          <div className="space-y-4">
            {comments.length > 0 ? (
              comments.map((c, i) => (
                <div key={i} className="bg-slate-100 p-3 rounded text-sm text-slate-800">
                  {c}
                </div>
              ))
            ) : (
              <p className="text-slate-500">Nenhum comentário ainda. Seja o primeiro!</p>
            )}
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <input
                type="text"
                placeholder="Escreva um comentário..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="border px-3 py-2 rounded w-full text-sm touch-manipulation"
              />
              <Button onClick={handleCommentSubmit} className="bg-blue-900 text-white touch-manipulation">
                Enviar
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 sm:mt-12 pt-6 sm:pt-8 text-center bg-slate-50 rounded-lg p-6 sm:p-8 mx-auto max-w-2xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900">Gostou da notícia?</h2>
          <p className="text-slate-600 mb-4 sm:mb-6 text-base sm:text-lg">
            Compartilhe com seus amigos ou conheça mais sobre a nossa escola.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button className="bg-blue-900 text-white hover:bg-blue-800 px-4 sm:px-6 py-2 sm:py-3 touch-manipulation">
              Entrar em Contato
            </Button>
            <Button
              variant="outline"
              className="border-blue-900 text-blue-900 bg-transparent hover:bg-blue-50 px-4 sm:px-6 py-2 sm:py-3 touch-manipulation"
              onClick={() => onTabChange("sobre")}
            >
              Conheça a Escola
            </Button>
          </div>
        </div>
      </main>

      <aside className="space-y-6">
        <h3 className="text-base sm:text-lg font-semibold text-slate-800 border-b pb-2">Leia Também</h3>
        <ul className="space-y-4">
          {relatedNews.map((item) => (
            <li
              key={item.id}
              className="flex gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors touch-manipulation"
              onClick={() => handleRelatedNewsClick(item.id)}
            >
              <div className="relative w-16 sm:w-20 h-12 sm:h-16 flex-shrink-0 rounded overflow-hidden">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="text-sm text-slate-700">
                <p className="font-semibold leading-snug line-clamp-2">{item.title}</p>
                <span className="text-xs text-slate-500">{item.date}</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="pt-6 border-t">
          <Image
            src="/images/banner-promocional.jpg"
            alt="Banner Promocional"
            width={400}
            height={200}
            className="rounded shadow w-full h-auto"
          />
        </div>
      </aside>
    </div>
  )
}
