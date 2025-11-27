"use client"

import { Scroll, ExternalLink, Github, Folder, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const projects = [
  {
    title: "App de Transporte Urbano con Turismo",
    type: "TESIS",
    typeColor: "bg-purple-900 text-purple-200",
    desc: "Aplicación móvil para mostrar rutas de transporte con paraderos y apartados turísticos. Integración de microbuses en tiempo real gracias a API GTFS-RT.",
    loot: ["Android Studio", "Firebase", "MapLibre", "GTFS", "Kotlin"],
    status: "COMPLETADO",
  },
  {
    title: "Reproductor de Música Desktop",
    type: "PERSONAL",
    typeColor: "bg-blue-900 text-blue-200",
    desc: "Aplicación de escritorio para reproducir música local y desde YouTube usando yt-dlp. Incluye listas de reproducción y controles avanzados.",
    loot: ["Electron", "JavaScript", "yt-dlp", "Node.js"],
    status: "EN PROGRESO",
  },
  {
    title: "Portfolio RPG",
    type: "PERSONAL",
    typeColor: "bg-blue-900 text-blue-200",
    desc: "Este mismo portfolio con temática de videojuego RPG retro. Construido con Next.js y Tailwind CSS.",
    loot: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    status: "COMPLETADO",
  },
]

export function Projects() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-center gap-4 mb-12">
          <Scroll className="text-blue-400" />
          <h2 className="font-pixel text-lg md:text-xl text-foreground">PROYECTOS</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="space-y-6">
          {projects.map((project, idx) => {
            const isExpanded = expandedProject === idx

            return (
              <div
                key={idx}
                className={cn("rpg-box transition-all duration-300 overflow-hidden", isExpanded ? "p-6" : "p-5")}
              >
                <div className="cursor-pointer" onClick={() => setExpandedProject(isExpanded ? null : idx)}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <div className="flex items-center gap-3 flex-1">
                      <Folder className="text-primary shrink-0" size={20} />
                      <span className={cn("font-pixel text-[8px] px-2 py-1 rounded shrink-0", project.typeColor)}>
                        {project.type}
                      </span>
                      <h3 className="font-pixel text-xs text-primary leading-relaxed">{project.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "font-pixel text-[8px] px-2 py-1 rounded",
                          project.status === "COMPLETADO"
                            ? "bg-accent/20 text-accent"
                            : "bg-yellow-900/50 text-yellow-300",
                        )}
                      >
                        {project.status}
                      </span>
                      <ChevronRight
                        size={16}
                        className={cn(
                          "text-muted-foreground transition-transform duration-300",
                          isExpanded && "rotate-90",
                        )}
                      />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="font-sans text-sm text-muted-foreground mb-6 leading-relaxed">{project.desc}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.loot.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-[10px] text-accent border border-accent/30 px-2 py-1 bg-accent/5 hover:bg-accent/10 transition-colors"
                          >
                            [{item}]
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {!isExpanded && (
                    <div className="flex flex-wrap gap-2">
                      {project.loot.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[10px] text-accent/70 border border-accent/20 px-2 py-0.5"
                        >
                          [{item}]
                        </span>
                      ))}
                      {project.loot.length > 3 && (
                        <span className="font-mono text-[10px] text-muted-foreground">
                          +{project.loot.length - 3} más
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
