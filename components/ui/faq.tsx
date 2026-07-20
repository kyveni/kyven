"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  ["What is Kyven?", "Kyven is a community-first launchpad built for teams and communities exploring the Robinhood ecosystem."],
  ["When will Kyven launch?", "We’re actively building the first release. Join the waitlist to receive product updates and early-access announcements."],
  ["How does the waitlist work?", "Enter your email once. We’ll contact early supporters in stages as access becomes available."],
  ["Is early access limited?", "Yes. Invitations will be released gradually so we can learn from early users and improve the experience."],
] as const;

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 border-t border-white/10 bg-black py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">FAQ</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Frequently asked questions</h2>
        <Accordion className="mt-10" defaultValue={[] }>
          {questions.map(([question, answer], index) => (
            <AccordionItem key={question} value={`item-${index + 1}`} className="border-white/15">
              <AccordionTrigger className="py-5 text-base font-medium text-white hover:text-[#C8FF3D] hover:no-underline sm:text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 pr-8 text-base leading-7 text-zinc-400">{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
