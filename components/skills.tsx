"use client"

import { Terminal, Zap, BookOpen, Star, Code2, Database, GitBranch } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const skills = [
  {
    name: "Python",
    icon: Terminal,
    level: 5,
    maxLevel: 10,
    desc: "Scripts, Agentes, Algoritmos IA",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400",
  },
  {
    name: "JavaScript",
    icon: Zap,
    level: 4,
    maxLevel: 10,
    desc: "React, Node.js, Electron.js",
    color: "text-amber-400",
    bgColor: "bg-amber-400",
  },
  {
    name: "Databases",
    icon: Database,
    level: 3,
    maxLevel: 10,
    desc: "Firebase, SQLite, PostgreSQL",
    color: "text-blue-400",
    bgColor: "bg-blue-400",
  },
  {
    name: "Git",
    icon: GitBranch,
    level: 4,
    maxLevel: 10,
    desc: "Control de versiones",
    color: "text-orange-400",
    bgColor: "bg-orange-400",
  },
  {
    name: "Lectura",
    icon: BookOpen,
    level: 10,
    maxLevel: 10,
    desc: "Documentación técnica",
    color: "text-accent",
    bgColor: "bg-accent",
  },
  {
    name: "Problem Solving",
    icon: Code2,
    level: 6,
    maxLevel: 10,
    desc: "Algoritmos y estructuras de datos",
    color: "text-purple-400",
    bgColor: "bg-purple-400",
  },
]

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 border-t-4 border-dashed border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-center gap-4 mb-12">
          <Star className="text-primary animate-spin" style={{ animationDuration: "3s" }} />
          <h2 className="font-pixel text-lg md:text-xl text-foreground">HABILIDADES</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => {
            const Icon = skill.icon
            const isHovered = hoveredSkill === skill.name
            const levelPercentage = (skill.level / skill.maxLevel) * 100

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={cn(
                  "rpg-box p-5 transition-all duration-300 cursor-default group",
                  isHovered && "scale-[1.02] -translate-y-1",
                )}
                style={{
                  boxShadow: isHovered
                    ? `4px 4px 0px 0px oklch(0.05 0.01 260), 0 0 20px -5px ${skill.color.includes("accent") ? "oklch(0.65 0.20 160 / 0.3)" : "currentColor"}`
                    : undefined,
                }}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={cn("transition-transform duration-300", skill.color, isHovered && "scale-110")}>
                    <Icon size={28} />
                  </div>
                  <span className="font-pixel text-[10px] text-primary">
                    LVL {skill.level.toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-pixel text-xs text-foreground mb-2">{skill.name}</h3>
                <p className="font-sans text-xs text-muted-foreground mb-4 leading-relaxed">{skill.desc}</p>

                <div className="relative">
                  <div className="w-full bg-background h-2 rounded-sm overflow-hidden">
                    <div
                      className={cn("h-full transition-all duration-500 skill-bar", skill.bgColor)}
                      style={{ width: isHovered ? `${levelPercentage}%` : `${levelPercentage * 0.8}%` }}
                    />
                  </div>
                  <div className="absolute -top-6 right-0 font-pixel text-[8px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.level}/{skill.maxLevel}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
