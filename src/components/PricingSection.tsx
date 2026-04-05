import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function ContactBanner() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-3xl text-center">
        <p className="text-xl sm:text-2xl font-medium leading-relaxed mb-8">
          Все вопросы вы можете обсудить с нами в нашей группе{" "}
          <span className="text-primary font-bold">ВКонтакте</span> или по номерам телефонов, указанных на данном сайте.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#0077FF] hover:bg-[#0060CC] text-white font-bold px-8 gap-3"
            asChild
          >
            <a href="https://vk.ru/blacksave53rus" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.523-2.049-1.726-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C5.16 11.317 4.46 9.143 4.46 8.67c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.999c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.743c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .643.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.474-.085.712-.559.712z"/>
              </svg>
              Написать ВКонтакте
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 gap-2" asChild>
            <a href="tel:+79021488601">
              <Phone className="h-5 w-5" />
              Позвонить нам
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
