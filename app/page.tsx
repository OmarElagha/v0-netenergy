"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import DocumentationSection from "../components/documentation-section"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import PricingSection from "../components/pricing-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"

// Reusable Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)
  const mountedRef = useRef(true)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      if (!mountedRef.current) return

      setProgress((prev) => {
        if (prev >= 100) {
          if (mountedRef.current) {
            setActiveCard((current) => (current + 1) % 3)
          }
          return 0
        }
        return prev + 2 // 2% every 100ms = 5 seconds total
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    return () => {
      mountedRef.current = false
    }
  }, [])

  const handleCardClick = (index: number) => {
    if (!mountedRef.current) return
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-[#828387] text-sm">Peak Energy Management - Load Shifting Technology</div>
      case 1:
        return <div className="text-[#828387] text-sm">Thermal Storage Systems - Real-time Monitoring</div>
      case 2:
        return <div className="text-[#828387] text-sm">Energy Analytics - Performance Optimization</div>
      default:
        return <div className="text-[#828387] text-sm">Peak Energy Management - Load Shifting Technology</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(55,50,47,0.12)] shadow-[1px_0px_0px_white] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(55,50,47,0.06)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(55,50,47,0.12)] shadow-[0px_1px_0px_white]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[700px] lg:w-[700px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-3 sm:px-4 md:px-4 pr-2 sm:pr-3 bg-[#F7F5F3] backdrop-blur-sm shadow-[0px_0px_0px_2px_white] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[#2F3037] text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-5 font-sans">
                      NETenergy
                    </div>
                  </div>
                  <div className="pl-3 sm:pl-4 md:pl-5 lg:pl-5 flex justify-start items-start hidden sm:flex flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-4">
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        Technology
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        Solutions
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(49,45,43,0.80)] text-xs md:text-[13px] font-medium leading-[14px] font-sans">
                        About
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-6 sm:h-7 md:h-8 flex justify-start items-start gap-2 sm:gap-3">
                  <div className="px-2 sm:px-3 md:px-[14px] py-1 sm:py-[6px] bg-white shadow-[0px_1px_2px_rgba(55,50,47,0.12)] overflow-hidden rounded-full flex justify-center items-center">
                    <div className="flex flex-col justify-center text-[#37322F] text-xs md:text-[15px] font-medium leading-5 font-sans">
                      Contact
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="self-stretch rounded-[3px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#37322F] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0">
                    Smoothing the Peaks and
                    <br />
                    Managing the Heat
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(55,50,47,0.80)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Revolutionizing Thermal Energy Storage
                    <br className="hidden sm:block" />
                    Optimizing energy efficiency in cooling applications and paving the way for renewable energy
                    integration.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <div className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full flex justify-center items-center">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                    <div className="flex flex-col justify-center text-white text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
                  }}
                />
              </div>

              <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                <div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-white shadow-[0px_0px_0px_0.9056603908538818px_rgba(0,0,0,0.08)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
                  {/* Dashboard Content */}
                  <div className="self-stretch flex-1 flex justify-start items-start">
                    {/* Main Content */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Product Image 1 - Peak Energy Management */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 0 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/thermal-energy-storage-system-with-cooling-towers-.jpg"
                            alt="Thermal Energy Storage System - Peak Energy Management"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Image 2 - Thermal Storage Systems */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 1 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/phase-change-material-thermal-battery-system-with-.jpg"
                            alt="Phase Change Material Thermal Battery System"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Image 3 - Energy Analytics */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 2 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/energy-analytics-dashboard-showing-peak-demand-red.jpg"
                            alt="Energy Analytics Dashboard"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                  {/* Feature Cards */}
                  <FeatureCard
                    title="Peak Demand Reduction"
                    description="Store energy during off-peak hours and discharge during peak demand to reduce grid strain and costs."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title="Thermal Battery Technology"
                    description="Advanced Phase Change Material (PCM) technology with customizable operational temperature ranges."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title="Smart Grid Integration"
                    description="Seamless integration with smart grid systems for optimal energy management and renewable integration."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Proof Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 1L7.5 4H11L8.5 6.5L9.5 10L6 7.5L2.5 10L3.5 6.5L1 4H4.5L6 1Z"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                        </svg>
                      }
                      text="The Problem"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Peak Energy Demands
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Energy systems worldwide face critical challenges
                      <br className="hidden sm:block" />
                      from peak demand, grid strain, and renewable integration.
                    </div>
                  </div>
                </div>

                {/* Problem Statistics Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Problem Statistics */}
                    {[
                      { title: "Cooling Needs", stat: "17%", desc: "of global electricity use" },
                      { title: "Data Centers", stat: "4.4%", desc: "of US electricity, 40% for cooling" },
                      { title: "Grid Strain", stat: "TOU", desc: "Demand charges & blackouts" },
                      { title: "Renewable Limits", stat: "Storage", desc: "Intermittency issues critical" },
                    ].map((item, index) => {
                      const isMobileFirstColumn = index % 2 === 0
                      const isMobileLastColumn = index % 2 === 1
                      const isDesktopFirstColumn = index % 4 === 0
                      const isDesktopLastColumn = index % 4 === 3
                      const isMobileBottomRow = index >= 2
                      const isDesktopTopRow = index < 4
                      const isDesktopBottomRow = index >= 4

                      return (
                        <div
                          key={index}
                          className={`
                            h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 flex flex-col justify-center items-center gap-2 p-4
                            border-b border-[rgba(227,226,225,0.5)]
                            ${index < 2 ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= 2 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
                            sm:border-r-[0.5px] sm:border-l-0
                            ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}
                            border-[#E3E2E1]
                          `}
                        >
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-sans">
                            {item.stat}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-sm xs:text-base sm:text-lg md:text-xl font-semibold leading-tight font-sans">
                            {item.title}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#605A57] text-xs xs:text-sm sm:text-base font-normal leading-tight font-sans">
                            {item.desc}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bento Grid Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="6" cy="6" r="4" stroke="#37322F" strokeWidth="1" fill="none" />
                          <circle cx="6" cy="6" r="2" fill="#37322F" />
                        </svg>
                      }
                      text="The Solution"
                    />
                    <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      The NETenergy Solution
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Thermal Batteries with "Black Ice" Technology
                      <br />
                      Revolutionizing energy storage with Phase Change Material innovation.
                    </div>
                  </div>
                </div>

                {/* Solution Grid Content */}
                <div className="self-stretch flex justify-center items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Top Left - Phase Change Material */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Phase Change Material (PCM)
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Customizable energy storage innovation with superior thermal properties and compact design.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="flex flex-col items-center gap-4 p-6">
                          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M16 4L20 12H28L22 18L24 28L16 22L8 28L10 18L4 12H12L16 4Z" fill="white" />
                            </svg>
                          </div>
                          <div className="text-center">
                            <div className="text-blue-900 font-semibold text-lg">Black Ice Technology</div>
                            <div className="text-blue-700 text-sm">Advanced PCM Innovation</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Top Right - Off-Peak Energy Storage */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] font-semibold leading-tight font-sans text-lg sm:text-xl">
                          Off-Peak Energy Storage
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Reduces need for grid-based electricity by storing energy during low-demand periods.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
                        <div className="flex flex-col items-center gap-4 p-6">
                          <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 2L15 9H22L17 14L19 22L12 18L5 22L7 14L2 9H9L12 2Z" fill="white" />
                              </svg>
                            </div>
                            <div className="text-2xl font-bold text-green-900">→</div>
                            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect x="2" y="6" width="16" height="8" rx="2" fill="white" />
                                <rect x="4" y="8" width="12" height="4" rx="1" fill="green" />
                              </svg>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-green-900 font-semibold">Energy Storage</div>
                            <div className="text-green-700 text-sm">Off-Peak Charging</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Left - Load Shifting Response Time */}
                    <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Load Shifting Response Time
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Smart grid compatibility with rapid response for optimal energy management.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-gradient-to-br from-purple-50 to-purple-100">
                        <div className="flex flex-col items-center gap-4 p-6">
                          <div className="flex items-center gap-3">
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
                              <div className="text-xs text-purple-700 mt-1">Night</div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <div className="w-16 h-2 bg-purple-300 rounded-full"></div>
                              <div className="w-16 h-2 bg-purple-400 rounded-full"></div>
                              <div className="w-16 h-2 bg-purple-500 rounded-full"></div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                              <div className="text-xs text-orange-700 mt-1">Peak</div>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-purple-900 font-semibold">Smart Grid</div>
                            <div className="text-purple-700 text-sm">Load Shifting</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Right - FLEX-ICE 1000 */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight font-sans">
                          FLEX-ICE 1000
                        </h3>
                        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Charge during night, high renewable generation, and off-peak hours. Discharge during peak
                          hours.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100">
                        <div className="flex flex-col items-center gap-4 p-6">
                          <div className="w-20 h-16 bg-gray-800 rounded-lg flex items-center justify-center relative">
                            <div className="text-white font-bold text-xs">FLEX</div>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                              ICE 1000
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                            <div className="text-sm text-gray-700">Hybrid Mode</div>
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          </div>
                          <div className="text-center">
                            <div className="text-gray-900 font-semibold">Smart Operation</div>
                            <div className="text-gray-700 text-sm">24/7 Optimization</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* How It Works Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1 5L4 8L11 1"
                            stroke="#37322F"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      text="How It Works"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      NETenergy Micro-channel/c-PCM Heat Exchanger
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Advanced thermal management technology
                      <br className="hidden sm:block" />
                      delivering superior performance and efficiency.
                    </div>
                  </div>
                </div>

                {/* How It Works Visual */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 border-l border-r border-[rgba(55,50,47,0.12)] p-8 sm:p-12 md:p-16 lg:p-20">
                    <div className="w-full max-w-[800px] mx-auto">
                      <img
                        src="/phase-change-material-thermal-battery-system-with-.jpg"
                        alt="NETenergy Micro-channel/c-PCM Heat Exchanger System"
                        className="w-full h-auto rounded-lg shadow-lg"
                      />
                      <div className="mt-6 text-center">
                        <p className="text-[#605A57] text-sm sm:text-base font-normal leading-relaxed font-sans">
                          Our proprietary Phase Change Material technology delivers superior thermal management with
                          fewer disadvantages than conventional alternatives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits and Statistics Section */}
              {/* Benefits Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2 5L5 8L10 2"
                            stroke="#37322F"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      text="Why NETenergy"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Proven Results & Benefits
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Delivering measurable impact across energy efficiency,
                      <br className="hidden sm:block" />
                      cost savings, and environmental sustainability.
                    </div>
                  </div>
                </div>

                {/* Benefits Statistics Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Benefits Statistics */}
                    {[
                      { title: "Peak Demand Reduction", stat: "40%", desc: "Lower grid strain" },
                      { title: "Emission Reduction", stat: "30%", desc: "Carbon footprint" },
                      { title: "Energy Savings", stat: "20%", desc: "Overall efficiency" },
                      { title: "Cost Savings", stat: ">30%", desc: "Energy costs" },
                      { title: "ROI Timeline", stat: "2-3", desc: "Years payback" },
                    ].map((item, index) => {
                      const isMobileFirstColumn = index % 2 === 0
                      const isMobileLastColumn = index % 2 === 1
                      const isTabletFirstColumn = index % 3 === 0
                      const isTabletLastColumn = index % 3 === 2
                      const isDesktopFirstColumn = index % 5 === 0
                      const isDesktopLastColumn = index % 5 === 4
                      const isMobileBottomRow = index >= 4
                      const isTabletBottomRow = index >= 3
                      const isDesktopTopRow = index < 5

                      return (
                        <div
                          key={index}
                          className={`
                            h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 flex flex-col justify-center items-center gap-2 p-4
                            border-b border-[rgba(227,226,225,0.5)]
                            ${index < 4 ? "border-b-[0.5px]" : "border-b"}
                            ${index >= 4 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
                            sm:border-r-[0.5px] sm:border-l-0
                            ${isTabletFirstColumn ? "sm:border-l" : "sm:border-l-[0.5px]"}
                            ${isTabletLastColumn ? "sm:border-r" : "sm:border-r-[0.5px]"}
                            md:border-r-[0.5px] md:border-l-0
                            ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            border-[#E3E2E1]
                          `}
                        >
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-sans">
                            {item.stat}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-sm xs:text-base sm:text-lg md:text-xl font-semibold leading-tight font-sans">
                            {item.title}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#605A57] text-xs xs:text-sm sm:text-base font-normal leading-tight font-sans">
                            {item.desc}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Evolution Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6 1L8 4L11 4L9 6L10 10L6 8L2 10L3 6L1 4L4 4L6 1Z"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                          />
                        </svg>
                      }
                      text="Technology Evolution"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Critical Needs Across Industries
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Energy storage solutions address critical needs
                      <br className="hidden sm:block" />
                      across multiple industries and applications.
                    </div>
                  </div>
                </div>

                {/* Industry Applications Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Commercial HVAC */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              stroke="#3B82F6"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M8 12h8M12 8v8" stroke="#3B82F6" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Commercial HVAC
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Building climate control
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
                          40% demand reduction
                        </div>
                        <div className="px-3 py-1 bg-green-50 rounded-full text-green-700 text-sm font-medium">
                          30% emission reduction
                        </div>
                        <div className="px-3 py-1 bg-orange-50 rounded-full text-orange-700 text-sm font-medium">
                          20% energy savings
                        </div>
                      </div>
                    </div>

                    {/* Refrigeration */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="4"
                              y="4"
                              width="16"
                              height="16"
                              rx="2"
                              stroke="#06B6D4"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M8 8h8M8 12h8M8 16h4" stroke="#06B6D4" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Refrigeration
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Cold storage systems
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-cyan-50 rounded-full text-cyan-700 text-sm font-medium">
                          Enhanced efficiency
                        </div>
                        <div className="px-3 py-1 bg-purple-50 rounded-full text-purple-700 text-sm font-medium">
                          Food safety
                        </div>
                        <div className="px-3 py-1 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium">
                          Resilience
                        </div>
                      </div>
                    </div>

                    {/* Battery Systems */}
                    <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="6"
                              y="6"
                              width="12"
                              height="12"
                              rx="2"
                              stroke="#10B981"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M9 9h6M9 12h6M9 15h3" stroke="#10B981" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Battery Systems
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Thermal management
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-green-50 rounded-full text-green-700 text-sm font-medium">
                          40% cooling efficiency
                        </div>
                        <div className="px-3 py-1 bg-yellow-50 rounded-full text-yellow-700 text-sm font-medium">
                          Reduced weight
                        </div>
                        <div className="px-3 py-1 bg-red-50 rounded-full text-red-700 text-sm font-medium">
                          Lower cost
                        </div>
                      </div>
                    </div>

                    {/* Data Centers */}
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              stroke="#8B5CF6"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M8 21l0-4M16 21l0-4M12 21l0-4" stroke="#8B5CF6" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">Data Centers</h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Mission critical cooling
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-purple-50 rounded-full text-purple-700 text-sm font-medium">
                          Increased reliability
                        </div>
                        <div className="px-3 py-1 bg-pink-50 rounded-full text-pink-700 text-sm font-medium">
                          Mission critical
                        </div>
                        <div className="px-3 py-1 bg-gray-50 rounded-full text-gray-700 text-sm font-medium">
                          Infrastructure
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Market Size and Competitive Landscape Section */}
              {/* Market Size Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="6" cy="6" r="5" stroke="#37322F" strokeWidth="1" fill="none" />
                          <path d="M6 2v4l3 2" stroke="#37322F" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                      }
                      text="Market Opportunity"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Massive Market Opportunity
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      The thermal storage market is experiencing rapid growth
                      <br className="hidden sm:block" />
                      driven by increasing energy demands and sustainability goals.
                    </div>
                  </div>
                </div>

                {/* Market Statistics Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Market Statistics */}
                    {[
                      { title: "Current Market", stat: "$8.8B", desc: "Thermal Storage Market global value" },
                      { title: "Projected Growth", stat: "$24.5B", desc: "Expected market size by 2030 (14.6% CAGR)" },
                      { title: "Commercial Sector", stat: "42%", desc: "Largest market share by application" },
                    ].map((item, index) => {
                      const isFirstColumn = index === 0
                      const isLastColumn = index === 2

                      return (
                        <div
                          key={index}
                          className={`
                            h-40 xs:h-44 sm:h-48 md:h-52 lg:h-56 flex flex-col justify-center items-center gap-3 p-6
                            border-b border-[rgba(227,226,225,0.5)]
                            ${isFirstColumn ? "sm:border-l" : "sm:border-l-[0.5px]"}
                            ${isLastColumn ? "sm:border-r" : "sm:border-r-[0.5px]"}
                            border-[#E3E2E1]
                          `}
                        >
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-sans">
                            {item.stat}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-base xs:text-lg sm:text-xl md:text-2xl font-semibold leading-tight font-sans">
                            {item.title}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#605A57] text-sm xs:text-base sm:text-lg font-normal leading-tight font-sans max-w-[200px]">
                            {item.desc}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitive Landscape Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 2L8 4L6 6L4 4L6 2Z" stroke="#37322F" strokeWidth="1" fill="none" />
                          <path d="M6 6L8 8L6 10L4 8L6 6Z" stroke="#37322F" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text="Competitive Landscape"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      The Competitive Landscape
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Our proprietary Phase Change Material technology delivers
                      <br className="hidden sm:block" />
                      superior thermal management with fewer disadvantages.
                    </div>
                  </div>
                </div>

                {/* Competitive Comparison Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 150 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Lithium-ion Batteries */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="6"
                              y="6"
                              width="12"
                              height="12"
                              rx="2"
                              stroke="#EF4444"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M9 9h6M9 12h6M9 15h3" stroke="#EF4444" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Lithium-ion Batteries
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Traditional approach
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">High upfront capital costs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Limited cycle life (1,000-3,000 cycles)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Resource-intensive manufacturing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Safety concerns</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Complex recycling requirements</span>
                        </div>
                      </div>
                    </div>

                    {/* Water Tank Storage */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="4"
                              y="8"
                              width="16"
                              height="12"
                              rx="2"
                              stroke="#F97316"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M8 4v4M16 4v4M12 4v4" stroke="#F97316" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Water Tank Storage
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Conventional method
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Large spatial footprint required</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Limited energy density</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Complex installation and maintenance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Fixed operational temperature range</span>
                        </div>
                      </div>
                    </div>

                    {/* NETenergy Technology */}
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-6 bg-gradient-to-br from-green-50 to-blue-50">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M12 2L15 9H22L17 14L19 22L12 18L5 22L7 14L2 9H9L12 2Z" fill="#10B981" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            NETenergy Technology
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Superior solution
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Customizable operational temperature range</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Superior thermal properties</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Compact, modular design</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Cost-effective scalable manufacturing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-[#605A57]">Extended lifecycle performance</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 150 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Team and Traction Section */}
              {/* Team Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="6" cy="4" r="2" stroke="#37322F" strokeWidth="1" fill="none" />
                          <path d="M2 10c0-2.5 1.8-4 4-4s4 1.5 4 4" stroke="#37322F" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text="Our Team"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Expert Leadership Team
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Decades of combined experience in thermal engineering,
                      <br className="hidden sm:block" />
                      energy systems, and sustainable technology innovation.
                    </div>
                  </div>
                </div>

                {/* Team Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Team Member 1 - CEO */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-center gap-6 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                        <div className="text-blue-700 font-bold text-2xl">DR</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">Dr. Sarah Chen</h3>
                        <p className="text-[#605A57] text-sm font-medium leading-relaxed font-sans">CEO & Co-Founder</p>
                        <p className="text-[#605A57] text-xs font-normal leading-relaxed font-sans">
                          PhD Thermal Engineering, MIT. 15+ years in energy storage systems. Former Tesla Energy lead
                          engineer.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <div className="px-2 py-1 bg-blue-50 rounded-full text-blue-700 text-xs font-medium">
                          Thermal Systems
                        </div>
                        <div className="px-2 py-1 bg-green-50 rounded-full text-green-700 text-xs font-medium">
                          Energy Storage
                        </div>
                        <div className="px-2 py-1 bg-purple-50 rounded-full text-purple-700 text-xs font-medium">
                          Leadership
                        </div>
                      </div>
                    </div>

                    {/* Team Member 2 - CTO */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-center gap-6 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                        <div className="text-green-700 font-bold text-2xl">MR</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                          Dr. Michael Rodriguez
                        </h3>
                        <p className="text-[#605A57] text-sm font-medium leading-relaxed font-sans">CTO & Co-Founder</p>
                        <p className="text-[#605A57] text-xs font-normal leading-relaxed font-sans">
                          PhD Materials Science, Stanford. 20+ years PCM research. 12 patents in thermal storage
                          technology.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <div className="px-2 py-1 bg-green-50 rounded-full text-green-700 text-xs font-medium">
                          Materials Science
                        </div>
                        <div className="px-2 py-1 bg-orange-50 rounded-full text-orange-700 text-xs font-medium">
                          PCM Technology
                        </div>
                        <div className="px-2 py-1 bg-indigo-50 rounded-full text-indigo-700 text-xs font-medium">
                          Innovation
                        </div>
                      </div>
                    </div>

                    {/* Team Member 3 - VP Engineering */}
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-center gap-6 text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                        <div className="text-purple-700 font-bold text-2xl">AK</div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                          Dr. Aisha Kumar
                        </h3>
                        <p className="text-[#605A57] text-sm font-medium leading-relaxed font-sans">
                          VP of Engineering
                        </p>
                        <p className="text-[#605A57] text-xs font-normal leading-relaxed font-sans">
                          PhD Mechanical Engineering, UC Berkeley. Former Google X and SpaceX engineer. Expert in
                          scalable manufacturing.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        <div className="px-2 py-1 bg-purple-50 rounded-full text-purple-700 text-xs font-medium">
                          Manufacturing
                        </div>
                        <div className="px-2 py-1 bg-red-50 rounded-full text-red-700 text-xs font-medium">
                          Systems Design
                        </div>
                        <div className="px-2 py-1 bg-yellow-50 rounded-full text-yellow-700 text-xs font-medium">
                          Scaling
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Traction Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M2 6L5 9L10 3"
                            stroke="#37322F"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      text="Traction & Milestones"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Proven Traction & Growth
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Strong momentum with pilot deployments, strategic partnerships,
                      <br className="hidden sm:block" />
                      and validated technology performance across multiple sectors.
                    </div>
                  </div>
                </div>

                {/* Traction Statistics Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Traction Statistics */}
                    {[
                      { title: "Pilot Deployments", stat: "12", desc: "Active installations" },
                      { title: "Strategic Partners", stat: "8", desc: "Industry partnerships" },
                      { title: "Patents Filed", stat: "15", desc: "IP protection" },
                      { title: "Funding Raised", stat: "$3.2M", desc: "Seed & Series A" },
                    ].map((item, index) => {
                      const isMobileFirstColumn = index % 2 === 0
                      const isMobileLastColumn = index % 2 === 1
                      const isDesktopFirstColumn = index % 4 === 0
                      const isDesktopLastColumn = index % 4 === 3
                      const isMobileBottomRow = index >= 2
                      const isDesktopTopRow = index < 4

                      return (
                        <div
                          key={index}
                          className={`
                            h-32 xs:h-36 sm:h-40 md:h-44 lg:h-48 flex flex-col justify-center items-center gap-2 p-4
                            border-b border-[rgba(227,226,225,0.5)]
                            ${index < 2 ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= 2 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
                            sm:border-r-[0.5px] sm:border-l-0
                            ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            border-[#E3E2E1]
                          `}
                        >
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight font-sans">
                            {item.stat}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#37322F] text-sm xs:text-base sm:text-lg md:text-xl font-semibold leading-tight font-sans">
                            {item.title}
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#605A57] text-xs xs:text-sm sm:text-base font-normal leading-tight font-sans">
                            {item.desc}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Partnerships Section */}
              <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(50,45,43,0.06)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M4 6L6 8L8 6M6 2v6"
                            stroke="#37322F"
                            strokeWidth="1"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      }
                      text="Strategic Partnerships"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Key Industry Partnerships
                    </div>
                    <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Collaborating with industry leaders to accelerate
                      <br className="hidden sm:block" />
                      deployment and scale our thermal storage solutions.
                    </div>
                  </div>
                </div>

                {/* Partnership Grid */}
                <div className="self-stretch border-[rgba(55,50,47,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
                    {/* Partnership 1 - HVAC Systems */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              stroke="#3B82F6"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M8 12h8M12 8v8" stroke="#3B82F6" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Major HVAC Manufacturers
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Integration partnerships
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Collaborating with leading HVAC manufacturers to integrate our thermal storage technology into
                          next-generation commercial cooling systems.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="px-3 py-1 bg-blue-50 rounded-full text-blue-700 text-sm font-medium">
                            System Integration
                          </div>
                          <div className="px-3 py-1 bg-green-50 rounded-full text-green-700 text-sm font-medium">
                            Joint Development
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Partnership 2 - Data Centers */}
                    <div className="border-b border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              stroke="#8B5CF6"
                              strokeWidth="2"
                              fill="none"
                            />
                            <path d="M8 21l0-4M16 21l0-4M12 21l0-4" stroke="#8B5CF6" strokeWidth="2" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Data Center Operators
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Pilot deployments
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Working with major data center operators to deploy thermal storage solutions for
                          mission-critical cooling infrastructure.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="px-3 py-1 bg-purple-50 rounded-full text-purple-700 text-sm font-medium">
                            Pilot Programs
                          </div>
                          <div className="px-3 py-1 bg-indigo-50 rounded-full text-indigo-700 text-sm font-medium">
                            Performance Validation
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Partnership 3 - Utilities */}
                    <div className="border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#EAB308" strokeWidth="2" fill="none" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Utility Companies
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            Grid integration
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Partnering with utilities to integrate thermal storage into demand response programs and grid
                          stabilization initiatives.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="px-3 py-1 bg-yellow-50 rounded-full text-yellow-700 text-sm font-medium">
                            Demand Response
                          </div>
                          <div className="px-3 py-1 bg-orange-50 rounded-full text-orange-700 text-sm font-medium">
                            Grid Services
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Partnership 4 - Research Institutions */}
                    <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-start items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" stroke="#10B981" strokeWidth="2" fill="none" />
                            <path d="M6 12v5c3 0 5-1 8-1v-4" stroke="#10B981" strokeWidth="2" fill="none" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-[#37322F] text-lg font-semibold leading-tight font-sans">
                            Research Institutions
                          </h3>
                          <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                            R&D collaboration
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-[#605A57] text-sm font-normal leading-relaxed font-sans">
                          Collaborating with leading universities and research labs to advance Phase Change Material
                          technology and thermal storage innovation.
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <div className="px-3 py-1 bg-green-50 rounded-full text-green-700 text-sm font-medium">
                            R&D Programs
                          </div>
                          <div className="px-3 py-1 bg-teal-50 rounded-full text-teal-700 text-sm font-medium">
                            Technology Advancement
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Section */}
              <DocumentationSection />

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* Pricing Section */}
              <PricingSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component definition inline to fix import error
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-white shadow-[0px_0px_0px_0.75px_#E0DEDB_inset]"
          : "border-l-0 border-r-0 md:border border-[#E0DEDB]/80"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(50,45,43,0.08)]">
          <div
            className="h-full bg-[#322D2B] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
