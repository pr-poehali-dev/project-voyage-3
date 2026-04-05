import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Camera, Users } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Контакты
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Записаться на <span className="text-primary">обработку</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-4">
            Готовы защитить ваш автомобиль? Вы можете записаться через группу ВКонтакте или по номерам телефонов.
          </p>
          <a
            href="https://vk.ru/blacksave53rus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0077FF] hover:text-[#0060CC] font-semibold transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-[#0077FF]" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.726-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.16 11.317 4.46 9.143 4.46 8.67c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.999c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.743c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.712-.559.712z"/>
            </svg>
            Группа ВКонтакте: vk.ru/blacksave53rus
          </a>
        </div>

        <div className="flex flex-col items-center gap-6 mb-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-bold px-12 py-7 text-xl shadow-lg shadow-primary/30 hover:shadow-xl transition-all"
            asChild
          >
            <a href="tel:+79021488601">Записаться</a>
          </Button>
          <p className="text-white text-lg font-medium">Вы можете связаться с нами!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm text-muted-foreground">Антонов Владислав Владимирович</h3>
                  <a href="tel:+79021488601" className="text-primary font-bold text-lg hover:underline">
                    +7 902 148-86-01
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-sm text-muted-foreground">Николаев Кирилл Алексеевич</h3>
                  <a href="tel:+79539009051" className="text-primary font-bold text-lg hover:underline">
                    +7 953 900-90-51
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Технологический процесс */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              Как мы работаем
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Технологический процесс <span className="text-primary">обработки</span>
            </h3>
          </div>

          <Card className="border border-primary/20 shadow-xl bg-background overflow-hidden mb-6">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {[
                  "Автомобиль разбирается снизу",
                  "Демонтируется защитный пластик",
                  "Демонтируются защитные локера арок",
                  "Тщательная мойка автомобиля на подъёмнике с применением активной пены Grass (днище, пороги, арки, скрытые полости, рама изнутри)",
                  "При наличии коррозии — пескоструй очагов коррозии",
                  "Покрытие эпоксидным грунтом",
                  "Антикоррозийная обработка автомобиля (арки, днище, скрытые полости, элементы подвески)",
                  "После сушки автомобиль полностью собирается",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {i + 1}
                    </div>
                    <span className="text-base leading-relaxed pt-1">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-background">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-3">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-bold mb-1">Доп. услуга</h4>
                <p className="text-muted-foreground text-sm">Шумоизоляция арок</p>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-background">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h4 className="font-bold mb-1">Индивидуальный подход</h4>
                <p className="text-muted-foreground text-sm">К каждому автомобилю</p>
              </CardContent>
            </Card>

            <Card className="border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-background">
              <CardContent className="p-6 text-center">
                <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-3">
                  <Camera className="h-6 w-6" />
                </div>
                <h4 className="font-bold mb-1">Фотоотчёт</h4>
                <p className="text-muted-foreground text-sm">Для каждого клиента</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}