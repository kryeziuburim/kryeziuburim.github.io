"use client"

import { Button } from "@/components/ui/button"
import { CircleHelp } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function HelpButton() {
  const pathname = usePathname()

  const isEN = pathname?.startsWith("/en")
  const isFR = pathname?.startsWith("/fr")
  const lang = isEN ? "en" : isFR ? "fr" : "de"

  const docsUrl = `https://docs.claimity.ch/${lang}/`
  
  const label = isEN ? "Help" : isFR ? "Aide" : "Hilfe"

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        className="h-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-teal-600 hover:bg-teal-700 text-white hover:-translate-y-1 px-5"
      >
        <Link href={docsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <CircleHelp className="h-4 w-4" />
          <span className="font-medium text-sm">{label}</span>
        </Link>
      </Button>
    </div>
  )
}
