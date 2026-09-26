import { getConsultationHref, getDictionary } from "@/content";
import { defaultLocale } from "@/i18n/config";
import { Hero } from "@/components/home/Hero";
import { QuestionStrip } from "@/components/home/QuestionStrip";
import { ConcernSection } from "@/components/home/ConcernSection";
import { KnowledgeLibrary } from "@/components/home/KnowledgeLibrary";
import { PerspectiveSection } from "@/components/home/PerspectiveSection";
import { ClientFlow } from "@/components/home/ClientFlow";
import { AboutElena } from "@/components/home/AboutElena";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  const { home, insights, insightCategories } = getDictionary(defaultLocale);
  return (
    <main>
      <Hero content={home.hero} />
      <QuestionStrip content={home.questionStrip} />
      <ConcernSection content={home.concerns} />
      <KnowledgeLibrary
        content={home.library}
        insights={insights}
        categories={insightCategories}
        consultHref="/#contact"
      />
      <PerspectiveSection content={home.perspectives} />
      <ClientFlow content={home.clientFlow} />
      <AboutElena content={home.about} />
      <ContactCTA content={home.contact} href={getConsultationHref()} />
    </main>
  );
}
