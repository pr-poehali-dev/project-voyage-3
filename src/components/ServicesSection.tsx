import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Droplets, Wrench, Layers, Zap, Camera } from "lucide-react"

const services = [
  {
    icon: Droplets,
    title: "Мойка на подъёмнике",
    description:
      "Тщательная профессиональная мойка с применением активной пены Grass: днище, пороги, арки, скрытые полости и рама изнутри — полная очистка перед обработкой.",
  },
  {
    icon: Zap,
    title: "Пескоструй очагов коррозии",
    description:
      "При обнаружении ржавчины проводим пескоструйную обработку очагов коррозии для полного удаления окисления перед нанесением защитных материалов.",
  },
  {
    icon: Layers,
    title: "Эпоксидный грунт",
    description:
      "Покрытие эпоксидным грунтом создаёт надёжную основу и дополнительный барьер от влаги и коррозии на металлических поверхностях кузова.",
  },
  {
    icon: Shield,
    title: "Антикоррозийная обработка",
    description:
      "Нанесение антикора на все уязвимые зоны: арки, днище, скрытые полости и элементы подвески. Защита от ржавчины, влаги, соли и дорожных реагентов.",
  },
  {
    icon: Wrench,
    title: "Шумоизоляция арок",
    description:
      "Дополнительная услуга: шумоизоляция колёсных арок снижает уровень шума от дороги.",
  },
  {
    icon: Camera,
    title: "Фотоотчёт",
    description:
      "После завершения работ каждый клиент получает подробный фотоотчёт всех этапов обработки. Полная прозрачность и уверенность в качестве выполненных работ.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что мы <span className="text-primary">делаем</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Полный цикл антикоррозийной защиты вашего автомобиля — от подготовки до финального фотоотчёта.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}