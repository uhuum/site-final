"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HomeTab from "@/components/home-tab"
import AboutTab from "@/components/about-tab"
import TrainingTab from "@/components/training-tab"
import ChampionshipsSection from "@/components/championships-section"
import VideoSection from "@/components/video-section"
import GallerySection from "@/components/gallery-section"
import SupportSection from "@/components/support-section"
import ContactSection from "@/components/contact-section"
import AllNewsTab from "@/components/all-news-tab"
import SingleNewsTab from "@/components/single-news-tab"
import TestimonialsSection from "@/components/testimonials-section"
import TargetAudienceSection from "@/components/target-audience-section"
import PartnershipTab from "@/components/partnership-tab"
import FAQTab from "@/components/faq-tab"

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home")
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null)

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [activeTab])

  const handleShowAllNews = () => {
    setActiveTab("all-news")
  }

  const handleSelectNews = (newsId: string) => {
    setSelectedNewsId(newsId)
    setActiveTab("single-news")
  }

  const handleBackToNews = () => {
    setActiveTab("all-news")
    setSelectedNewsId(null)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "home":
        return <HomeTab onTabChange={setActiveTab} onShowAllNews={handleShowAllNews} onSelectNews={handleSelectNews} />
      case "sobre":
        return <AboutTab onTabChange={setActiveTab} />
      case "treinos":
        return <TrainingTab onTabChange={setActiveTab} />
      case "campeonatos":
        return <ChampionshipsSection />
      case "videos":
        return <VideoSection />
      case "galeria":
        return <GallerySection />
      case "parcerias":
        return <PartnershipTab onTabChange={setActiveTab} />
      case "apoie":
        return <SupportSection />
      case "contato":
        return <ContactSection />
      case "all-news":
        return <AllNewsTab onTabChange={setActiveTab} onNewsSelect={handleSelectNews} />
      case "single-news":
        return selectedNewsId ? (
          <SingleNewsTab
            newsId={selectedNewsId}
            onTabChange={setActiveTab}
            onBackToNews={handleBackToNews}
            onSelectNews={handleSelectNews}
          />
        ) : (
          <HomeTab onTabChange={setActiveTab} onShowAllNews={handleShowAllNews} onSelectNews={handleSelectNews} />
        )
      case "depoimentos":
        return <TestimonialsSection />
      case "faq":
        return <FAQTab onTabChange={setActiveTab} />
      default:
        return <HomeTab onTabChange={setActiveTab} onShowAllNews={handleShowAllNews} onSelectNews={handleSelectNews} />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pt-16 sm:pt-20">{renderTabContent()}</main>
      <TargetAudienceSection />
      <Footer />
    </div>
  )
}
