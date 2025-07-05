"use client"

import { useState, useEffect, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink, Youtube, X } from "lucide-react"

export default function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<any>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("video-section")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const closeVideo = useCallback(() => {
    setSelectedVideo(null)
    document.body.style.overflow = "unset"
  }, [])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedVideo) {
        closeVideo()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [selectedVideo, closeVideo])

  const documentaryVideo = {
    id: "copa-rei-2024-documentario",
    title: "Copa do Rei 2024 - A Conquista Incrível da Coroa",
    description:
      "Documentário completo sobre nossa conquista histórica na Copa do Rei 2024. Acompanhe cada passo dessa trajetória emocionante, desde a primeira partida até a grande final, onde a nossa escolinha conquistou o título de campeã de forma inesquecível!",
    duration: "11:50",
    thumbnail: "/images/copa-rei-2024-sub15-campeao.png",
    embedId: "Ds-_j1BSICE",
    category: "Documentário",
    featured: true,
  }

  const openVideo = (video: any) => {
    setSelectedVideo(video)
    document.body.style.overflow = "hidden"
  }

  const handleYouTubeChannelClick = () => {
    window.open("https://www.youtube.com/@10naBola", "_blank")
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeVideo()
    }
  }

  return (
    <section id="videos" className="py-24 bg-slate-50">
      <div id="video-section" className="container mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <Youtube className="w-4 h-4 text-red-600 mr-2" />
            <span className="text-red-700 text-sm font-medium tracking-wide">Canal no YouTube</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">Documentário Oficial</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Assista ao documentário completo da nossa conquista histórica na Copa do Rei 2024
          </p>
          <Button
            className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3"
            onClick={handleYouTubeChannelClick}
          >
            <Youtube className="w-5 h-5 mr-2" />
            Visitar Canal no YouTube
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Featured Documentary */}
        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-2xl shadow-slate-900/10 border-0 group cursor-pointer">
            <CardContent className="p-0" onClick={() => openVideo(documentaryVideo)}>
              <div className="relative">
                <img
                  src={documentaryVideo.thumbnail || "/placeholder.svg"}
                  alt={documentaryVideo.title}
                  className="w-full h-96 md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </div>
                </div>

                <div className="absolute top-6 right-6">
                  <span className="bg-slate-900/80 text-white px-4 py-2 rounded-full text-lg font-medium">
                    {documentaryVideo.duration}
                  </span>
                </div>

                <div className="absolute top-6 left-6">
                  <span className="bg-red-600 text-white px-4 py-2 rounded-full text-lg font-bold">
                    🏆 {documentaryVideo.category}
                  </span>
                </div>

                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{documentaryVideo.title}</h3>
                  <p className="text-slate-200 text-xl leading-relaxed max-w-4xl">{documentaryVideo.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-900/5 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Gostou do documentário?</h3>
            <p className="text-slate-600 mb-6 text-lg">
              Inscreva-se no nosso canal para acompanhar mais conteúdos exclusivos, bastidores e conquistas da nossa
              escola!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3"
                onClick={handleYouTubeChannelClick}
              >
                <Youtube className="w-5 h-5 mr-2" />
                Inscrever-se no Canal
              </Button>
              <Button
                variant="outline"
                className="border-2 border-red-600 text-red-600 hover:bg-red-50 font-medium px-8 py-3 bg-transparent"
                onClick={() => window.open("https://www.youtube.com/watch?v=Ds-_j1BSICE", "_blank")}
              >
                Assistir no YouTube
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={handleBackdropClick}
          >
            <div className="max-w-7xl w-full">


              {/* Modal content */}
              <div className="bg-white rounded-2xl overflow-hidden relative flex flex-col md:flex-row gap-6 p-6 min-h-[70vh]">

                {/* Video */}
                <div className="flex-1 aspect-video max-h-[80vh]">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                    title={selectedVideo.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-4">{selectedVideo.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-lg mb-6">{selectedVideo.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Duração: {selectedVideo.duration}</span>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        onClick={handleYouTubeChannelClick}
                        className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                      >
                        <Youtube className="w-4 h-4 mr-2" />
                        Ver Canal Completo
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="bg-white text-red-700 rounded-full p-3 shadow-lg hover:bg-red-100 hover:text-red-900 transition-colors"
                        onClick={closeVideo}
                        aria-label="Fechar vídeo"
                      >
                        <X className="w-7 h-7" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
