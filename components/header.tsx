"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

interface HeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const menuItems = [
    {
      label: "Início",
      id: "home",
      type: "single",
    },
    {
      label: "Radar",
      id: "all-news",
      type: "single",
    },
    {
      label: "A Escolinha",
      id: "escolinha",
      type: "dropdown",
      items: [
        { label: "Nossa História", id: "sobre" },
        { label: "Treinos", id: "treinos" },
      ],
    },
    {
      label: "Atividades",
      id: "atividades",
      type: "dropdown",
      items: [
        { label: "Campeonatos", id: "campeonatos" },
        { label: "Vídeos", id: "videos" },
        { label: "Galeria", id: "galeria" },
      ],
    },
    {
      label: "Comunidade",
      id: "comunidade",
      type: "dropdown",
      items: [
        { label: "Depoimentos", id: "depoimentos" },
        { label: "Parcerias", id: "parcerias" },
        { label: "Apoie o Projeto", id: "apoie" },
      ],
    },
    {
      label: "Suporte",
      id: "suporte",
      type: "dropdown",
      items: [
        { label: "FAQ", id: "faq" },
        { label: "Contato", id: "contato" },
      ],
    },
  ]

  const handleInscricaoClick = () => {
    const whatsappUrl =
      "https://linktr.ee/Escolinha10NaBola?fbclid=PAZXh0bgNhZW0CMTEAAacrO_kAG8u5AkYnVPtJTjENaE9qkoTbGwCTWheUKm7pmAqVCWtlxSsp4v15XA_aem_voYzNcNViPY9U41uxjvuVg"
    window.open(whatsappUrl, "_blank")
  }

  const handleMenuClick = (item: any) => {
    if (item.type === "single") {
      onTabChange(item.id)
      setActiveDropdown(null)
      setIsMenuOpen(false)
    } else {
      setActiveDropdown(activeDropdown === item.id ? null : item.id)
    }
  }

  const handleSubMenuClick = (event: React.MouseEvent | React.TouchEvent, id: string) => {
    // Prevenir comportamentos padrão
    event.preventDefault()
    event.stopPropagation()

    // Log para debug (remover depois)
    console.log("SubMenu clicked:", id)

    // Fechar dropdown imediatamente
    setActiveDropdown(null)

    // Fechar menu mobile
    setIsMenuOpen(false)

    // Pequeno delay para garantir que a navegação aconteça após o fechamento
    setTimeout(() => {
      onTabChange(id)
    }, 50)
  }

  const handleLogoClick = () => {
    onTabChange("home")
    setIsMenuOpen(false)
  }

  const isActiveItem = (item: any) => {
    if (item.type === "single") {
      return activeTab === item.id
    } else {
      return item.items?.some((subItem: any) => subItem.id === activeTab)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-center bg-cover bg-no-repeat ${
        isScrolled
          ? "bg-[linear-gradient(to_right,_rgba(0,0,0,0.85),_rgba(153,27,27,0.75),_rgba(220,38,38,0.65)),url('/images/campo.png')] backdrop-blur-xl shadow-2xl border-b border-red-600/60"
          : "bg-[linear-gradient(to_right,_rgba(0,0,0,0.8),_rgba(153,27,27,0.7),_rgba(220,38,38,0.6)),url('/images/campo.png')] backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
          >
            <div className="relative">
              <Image
                src="/images/logo-10-na-bola.png"
                alt="10 na Bola"
                width={100}
                height={100}
                className="w-[120px] h-[120px] sm:w-[170px] sm:h-[170px] object-contain transition-transform duration-500 group-hover:scale-110 hover-glow"
              />
            </div>
          </button>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8" ref={dropdownRef}>
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => handleMenuClick(item)}
                  className={`flex items-center space-x-1 font-medium text-sm tracking-wide transition-all duration-300 py-2 px-3 xl:px-4 rounded-lg hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    isActiveItem(item)
                      ? "text-red-200 bg-white/15 shadow-lg backdrop-blur-sm"
                      : "text-white hover:text-red-200 hover:bg-white/10 hover:backdrop-blur-sm"
                  }`}
                >
                  <span className="text-shadow">{item.label}</span>
                  {item.type === "dropdown" && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.type === "dropdown" && activeDropdown === item.id && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-200/50 py-2 z-50 animate-fade-in-down">
                    {item.items?.map((subItem) => (
                      <button
                        key={subItem.id}
                        onClick={(e) => handleSubMenuClick(e, subItem.id)}
                        className={`w-full text-left px-4 py-3 text-sm transition-all duration-300 hover-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset ${
                          activeTab === subItem.id
                            ? "text-blue-600 bg-blue-50/80 font-semibold backdrop-blur-sm"
                            : "text-slate-700 hover:text-blue-600 hover:bg-slate-50/80 hover:backdrop-blur-sm"
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className="bg-white text-red-600 hover:bg-red-50 font-semibold px-4 xl:px-6 py-2.5 text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover-lift btn-hover-lift ripple focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
              onClick={handleInscricaoClick}
            >
              Inscreva-se
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-red-800/50 transition-all duration-300 hover-scale touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 transition-all duration-300 text-white ${
                  isMenuOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
                }`}
                size={24}
              />
              <X
                className={`absolute inset-0 transition-all duration-300 text-white ${
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
                }`}
                size={24}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-[80vh] opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-red-600/50 pt-6">
            <nav className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleMenuClick(item)}
                    className={`w-full text-left font-medium text-sm tracking-wide transition-all duration-300 py-3 px-4 rounded-lg hover-lift touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      isActiveItem(item)
                        ? "text-red-200 bg-white/15 backdrop-blur-sm"
                        : "text-white hover:text-red-200 hover:bg-white/10 hover:backdrop-blur-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-shadow">{item.label}</span>
                      {item.type === "dropdown" && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.id ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </div>
                  </button>

                  {/* Mobile Dropdown */}
                  {item.type === "dropdown" && activeDropdown === item.id && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.items?.map((subItem) => (
                        <button
                          key={subItem.id}
                          onClick={(e) => handleSubMenuClick(e, subItem.id)}
                          onTouchEnd={(e) => handleSubMenuClick(e, subItem.id)}
                          className={`w-full text-left text-sm py-4 px-4 rounded-lg transition-all duration-200 touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent relative z-10 ${
                            activeTab === subItem.id
                              ? "text-red-200 bg-white/20 font-semibold backdrop-blur-sm border border-white/20"
                              : "text-slate-200 hover:text-red-200 hover:bg-white/15 hover:backdrop-blur-sm active:bg-white/25 active:text-white"
                          }`}
                          style={{
                            minHeight: "48px",
                            display: "flex",
                            alignItems: "center",
                            WebkitTapHighlightColor: "transparent",
                          }}
                        >
                          <span className="pointer-events-none">{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Button
                className="bg-white text-red-600 hover:bg-red-50 font-semibold w-full mt-4 py-3 hover-lift btn-hover-lift ripple touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                onClick={() => {
                  handleInscricaoClick()
                  setIsMenuOpen(false)
                }}
              >
                Inscreva-se
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
