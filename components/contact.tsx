"use client"

import { Map, Mail, Github, Linkedin, Send } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const socialLinks = [
  { icon: Github, href: "https://github.com/arccidev", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/arccidev", label: "LinkedIn" },
  { icon: Mail, href: "mailto:arccidev@gmail.com", label: "Email" },
]

export function Contact() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section id="contact" className="py-20 pb-32">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <div className="rpg-box p-8 md:p-10 relative overflow-hidden">
          {/* Animated scan line effect */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage: "linear-gradient(transparent 50%, rgba(255,255,255,0.1) 50%)",
              backgroundSize: "100% 4px",
            }}
          />

          <div className="relative z-10">
            <Map className="text-foreground mx-auto mb-6 animate-float" size={36} />

            <h2 className="font-pixel text-sm md:text-base text-foreground mb-4">
              ¿NECESITAS AYUDA CON ALGÚN PROYECTO?
            </h2>

            <p className="font-sans text-sm text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
              No dudes en contactarme. Estoy disponible para proyectos freelance, colaboraciones o simplemente para
              charlar sobre tecnología.
            </p>

            <a
              href="mailto:arccidev@gmail.com"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={cn(
                "w-full block font-pixel text-[10px] md:text-xs bg-accent text-accent-foreground py-4 transition-all duration-300 relative overflow-hidden group",
                isHovered && "bg-accent/90",
              )}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Send size={14} className={cn("transition-transform duration-300", isHovered && "translate-x-1")} />
                CONTACTAR (EMAIL)
              </span>
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500",
                  isHovered && "translate-x-full",
                )}
              />
            </a>

            <div className="flex justify-center gap-6 mt-8">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors group"
                    aria-label={link.label}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
