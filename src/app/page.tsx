import { CurtainHero } from "@/components/sections/CurtainHero";
import { PatternDivider } from "@/components/PatternDivider";
import { IndiaCivilization } from "@/components/sections/IndiaCivilization";
import { IndiaComplexity } from "@/components/sections/IndiaComplexity";
import { PeciaNetworkSection } from "@/components/sections/PeciaNetworkSection";
import { Thesis } from "@/components/sections/Thesis";
import { NameStory } from "@/components/sections/NameStory";
import { CategoryPositioning } from "@/components/sections/CategoryPositioning";
import { Lifecycle } from "@/components/sections/Lifecycle";
import { CapabilityEcosystem } from "@/components/sections/CapabilityEcosystem";
import { PeciaMethod } from "@/components/sections/PeciaMethod";
import { PeciaIntelligence } from "@/components/sections/PeciaIntelligence";
import { GlobalToIndia } from "@/components/sections/GlobalToIndia";
import { Localization } from "@/components/sections/Localization";
import { IndiaToWorld } from "@/components/sections/IndiaToWorld";
import { RestaurantToBrand } from "@/components/sections/RestaurantToBrand";
import { Franchising } from "@/components/sections/Franchising";
import { IndiaEngine } from "@/components/sections/IndiaEngine";
import { Founders } from "@/components/sections/Founders";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Capital } from "@/components/sections/Capital";
import { Portfolio } from "@/components/sections/Portfolio";
import { Proof } from "@/components/sections/Proof";
import { OldWayNewWay } from "@/components/sections/OldWayNewWay";
import { WhatIf } from "@/components/sections/WhatIf";
import { FutureOfFood } from "@/components/sections/FutureOfFood";
import { FinalScene } from "@/components/sections/FinalScene";
import { ContactFooter } from "@/components/sections/ContactFooter";

export default function Home() {
  return (
    <main className="flex-1">
      <CurtainHero />
      <PatternDivider className="bg-charcoal" />
      <IndiaCivilization />
      <IndiaComplexity />
      <PeciaNetworkSection />
      <Thesis />
      <NameStory />
      <CategoryPositioning />
      <Lifecycle />
      <CapabilityEcosystem />
      <PeciaMethod />
      <PeciaIntelligence />
      <GlobalToIndia />
      <Localization />
      <IndiaToWorld />
      <RestaurantToBrand />
      <Franchising />
      <IndiaEngine />
      <Founders />
      <Ecosystem />
      <Capital />
      <Portfolio />
      <Proof />
      <OldWayNewWay />
      <WhatIf />
      <FutureOfFood />
      <FinalScene />
      <PatternDivider className="bg-charcoal" flip />
      <ContactFooter />
    </main>
  );
}
