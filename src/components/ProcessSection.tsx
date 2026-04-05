import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Droplets, Wrench, Shield, CheckCircle } from "lucide-react"
import { Fragment } from "react"

const steps = [
  {
    icon: Wrench,
    title: "Разборка и подготовка",
    description:
      "Автомобиль разбирается снизу: демонтируется защитный пластик и локера арок для полного доступа ко всем поверхностям.",
    number: "01",
  },
  {
    icon: Droplets,
    title: "Профессиональная мойка",
    description:
      "Тщательная мойка на подъёмнике с применением активной пены Grass: днище, пороги, арки, скрытые полости, рама изнутри.",
    number: "02",
  },
  {
    icon: Shield,
    title: "Антикоррозийная обработка",
    description:
      "При наличии коррозии — пескоструй очагов. Покрытие эпоксидным грунтом. Нанесение антикора на арки, днище, скрытые полости и элементы подвески.",
    number: "03",
  },
  {
    icon: CheckCircle,
    title: "Сборка и фотоотчёт",
    description:
      "После полной сушки автомобиль собирается в исходное состояние. Клиент получает подробный фотоотчёт всех этапов работы.",
    number: "04",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Как мы работаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Технологический процесс <span className="text-primary">обработки</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Каждый автомобиль проходит полный цикл подготовки и обработки — без компромиссов с качеством.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background">
                <div className="absolute top-0 right-0 text-[120px] font-bold bg-gradient-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
