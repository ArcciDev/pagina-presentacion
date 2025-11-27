import { Gamepad2 } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Gamepad2 size={16} className="text-primary" />
            <span className="font-pixel text-[8px]">ARCCIDEV</span>
          </div>

          <p className="font-pixel text-[8px] text-muted-foreground">
            PÁGINA CREADA EN {currentYear} • NEXT.JS + TAILWIND
          </p>

          <div className="font-mono text-[10px] text-muted-foreground">v1.0.0</div>
        </div>
      </div>
    </footer>
  )
}
