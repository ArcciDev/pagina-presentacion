"use client"

import { useState, useEffect } from "react"
import { Heart, Menu, X, Gamepad2 } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#skills", label: "HABILIDADES" },
  { href: "#projects", label: "PROYECTOS" },
  { href: "#contact", label: "CONTACTO" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-pixel text-[9px] md:text-[10px]",
        isScrolled ? "bg-card/95 backdrop-blur-sm border-b-2 border-border py-3" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[1, 2, 3].map((i) => (
              <Heart
                key={i}
                className="text-destructive fill-destructive animate-pulse-glow"
                size={12}
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <span className="hidden md:flex items-center gap-2 text-primary">
            <Gamepad2 size={14} className="animate-float" />
            PLAYER 1
          </span>
        </div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-primary hover:text-foreground transition-colors"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-card/95 backdrop-blur-sm border-b-2 border-border overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-48 py-4" : "max-h-0",
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-primary hover:text-foreground transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
