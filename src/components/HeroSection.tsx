import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Shield, Wrench } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl animate-pulse"
          style={{ top: "20%", left: "10%", animationDuration: "4s" }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl animate-pulse"
          style={{ bottom: "10%", right: "15%", animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bg-primary/10 blur-3xl transition-all duration-1000 ease-out"
          style={{ left: `${mousePosition.x - 150}px`, top: `${mousePosition.y - 150}px` }}
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <Shield
          className="absolute text-primary/30 animate-float"
          style={{ top: "15%", left: "15%", animationDelay: "0s" }}
          size={40}
        />
        <Wrench
          className="absolute text-primary/30 animate-float"
          style={{ top: "25%", right: "20%", animationDelay: "2s" }}
          size={35}
        />
        <Sparkles
          className="absolute text-primary/20 animate-float"
          style={{ bottom: "20%", left: "20%", animationDelay: "1s" }}
          size={30}
        />
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Профессиональная защита автомобиля в Великом Новгороде</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 animate-fade-in-up">
          <span className="text-white">Black Save 53</span>
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          <span className="text-primary relative inline-block">
            Антикоррозийная обработка
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 200 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10C50 5 150 5 198 10"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-primary"
              />
            </svg>
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-white mb-4 animate-fade-in-up animate-delay-100">
          в Великом Новгороде
        </p>

        <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Защищаем ваш автомобиль от коррозии и ржавчины. Полный цикл обработки — от мойки до нанесения антикора с фотоотчётом.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-8">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="#contact">
              Записаться
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="#process">Наши работы</a>
          </Button>
        </div>

        <p className="text-white text-base mb-6 animate-fade-in-up animate-delay-200">
          Вы можете связаться с нами!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-12">
          <a
            href="tel:+79021488601"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all"
          >
            <span className="text-white font-semibold text-sm">Антонов Владислав Владимирович</span>
            <span className="text-primary font-bold">+7 902 148-86-01</span>
          </a>
          <a
            href="tel:+79539009051"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-all"
          >
            <span className="text-white font-semibold text-sm">Николаев Кирилл Алексеевич</span>
            <span className="text-primary font-bold">+7 953 900-90-51</span>
          </a>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-300">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Индивидуальный подход</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>Фотоотчёт клиенту</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Великий Новгород</span>
          </div>
        </div>
      </div>
    </section>
  )
}
