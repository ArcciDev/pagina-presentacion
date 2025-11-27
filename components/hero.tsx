"use client"

import { Sword, Mail, ChevronDown, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

const typewriterTexts = [
  "Licenciado en ciencias de la ingeniería.",
  "Creador de soluciones tecnológicas."
]

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullText = typewriterTexts[currentTextIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentFullText.length) {
            setDisplayText(currentFullText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length)
          }
        }
      },
      isDeleting ? 30 : 50,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTextIndex])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="rpg-box p-6 md:p-10 lg:p-12 text-center">
          {/* Corner decorations */}
          <div className="absolute top-3 left-3 w-2 h-2 bg-primary animate-pulse" />
          <div className="absolute top-3 right-3 w-2 h-2 bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-3 left-3 w-2 h-2 bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
          <div
            className="absolute bottom-3 right-3 w-2 h-2 bg-primary animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />

          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-accent animate-pulse-glow" size={16} />
            <p className="font-pixel text-[10px] text-accent tracking-widest">★ WELCOME ★</p>
            <Sparkles className="text-accent animate-pulse-glow" size={16} />
          </div>

          <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed mb-8 text-foreground">
            HELLO WORLD.
            <br />
            I&apos;M A <span className="text-primary">JUNIOR DEV</span>
          </h1>

          <div className="font-sans text-sm md:text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed bg-secondary/50 p-6 rounded border border-border text-left space-y-4">
            <p className="flex items-start gap-2">
              <span className="text-primary font-bold shrink-0">&gt; STATUS:</span>
              <span className="min-h-[1.5em]">
                {displayText}
                <span className="inline-block w-2 h-4 bg-accent ml-1 cursor-blink" />
              </span>
            </p>
            <p>
              <span className="text-primary font-bold">&gt; MISSION:</span> Resolver problemas reales aplicando mi
              conocimiento en distintos lenguajes de programación.
            </p>
            <p>
              <span className="text-primary font-bold">&gt; ABILITY:</span> Aprendizaje rápido y buenas bases en el área
              de informática.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 font-pixel text-[10px]">
            <a
              href="#projects"
              className="rpg-btn bg-blue-700 hover:bg-blue-600 text-white py-4 px-8 flex items-center justify-center gap-3 transition-colors"
            >
              <Sword size={16} className="animate-float" style={{ animationDuration: "2s" }} />
              VER PROYECTOS
            </a>
            <a
              href="#contact"
              className="rpg-btn bg-secondary hover:bg-secondary/80 text-foreground py-4 px-8 flex items-center justify-center gap-3 transition-colors"
            >
              <Mail size={16} />
              CONTACTAME
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12">
          <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors animate-bounce">
            <ChevronDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
