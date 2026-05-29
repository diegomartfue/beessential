import { StickyNav } from "@/components/brand/StickyNav"
import { HeroSection } from "@/components/sections/HeroSection"
import { ProblemaSection } from "@/components/sections/ProblemaSection"
import { AcercaDeSection } from "@/components/sections/AcercaDeSection"
import { BeneficiosSection } from "@/components/sections/BeneficiosSection"
import { ProductoSection } from "@/components/sections/ProductoSection"
import { ComoSeUsaSection } from "@/components/sections/ComoSeUsaSection"
import { IdentidadSection } from "@/components/sections/IdentidadSection"
import { GaleriaSection } from "@/components/sections/GaleriaSection"
import { ContactoSection } from "@/components/sections/ContactoSection"

export default function Page() {
  return (
    <>
      <StickyNav />
      <main>
        <HeroSection />
        <ProblemaSection />
        <AcercaDeSection />
        <BeneficiosSection />
        <ProductoSection />
        <ComoSeUsaSection />
        <IdentidadSection />
        <GaleriaSection />
        <ContactoSection />
      </main>
    </>
  )
}
