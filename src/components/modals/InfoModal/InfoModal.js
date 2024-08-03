import React from "react";
import { MAX_MISTAKES } from "../../../lib/constants";
import { Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import BaseModal from "../BaseModal";

function InfoModal() {
  return (
    <BaseModal
      title=""
      trigger={<Info className="mr-4" />}
      initiallyOpen={false}
      actionButtonText="Verstanden!"
    >
      <Tabs defaultValue="how-to-play">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="how-to-play">Spielregeln</TabsTrigger>
          <TabsTrigger value="about-us">Über die Entwickler</TabsTrigger>
        </TabsList>
        <TabsContent value="how-to-play">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Das Ziel</AccordionTrigger>
              <AccordionContent>
                Finde vier Gruppen von Begriffen, die etwas gemeinsam haben.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie wird gespielt?</AccordionTrigger>
              <AccordionContent>
                Wähle vier Begriffe und klicke auf 'Einreichen', um zu prüfen, ob du eine Kategorie vollständig richtig erraten hast. Doch Vorsicht! Du darfst nur ${MAX_MISTAKES} Fehler machen, bevor das Spiel automatisch endet. Die Zeit ist dabei nicht begrenzt.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="about-us">
          {" "}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Wer sind wir?</AccordionTrigger>
              <AccordionContent>
                Das Projekt basiert auf einer Entwicklung von {" "}
                <a
                  href="https://andcomputers.io/"
                  target="_blank"
                  className="underline font-bold"
                >
                  ancdomputers. 
                </a>
                Ins Deutsche übersetzt und ins Leben gerufen wurde KÖNNECTIONS von {" "}
                <a
                  href="https://www.linkedin.com/in/laura-plodek/"
                  target="_blank"
                  className="underline font-bold"
                >
                  Laura Plodek.
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Wie kann ich euch unterstützen?</AccordionTrigger>
              <AccordionContent>
                <p className="mb-1">Wir freuen uns über jede helfende Hand</p>
                <ul className="list-disc">
                  <li>
                    <p>Eigene Puzzleideen sendest du </p>
                    <a
                      href="mailto:laura.plodek@gmail.com"
                      target="_blank"
                      className="underline font-bold"
                    >
                      hier an uns direkt.
                    </a>
                  </li>
                  <li>
                    <p className="mt-2 mb-1">Für kleine Spenden, die uns helfen, KÖNNECTIONS am Leben zu halten:</p>
                    <ul>
                      <li>
                        {" "}
                        - in finanzieller Form{" "}
                        <a
                          href="paypal.me/l19p01"
                          target="_blank"
                          className="underline font-bold"
                        >
                          Paypal.
                        </a>
                      </li>
                      <li>
                        {" "}
                        - in koffeinierter Form{" "}
                        <a
                          href="https://www.buymeacoffee.com/lauriepk"
                          target="_blank"
                          className="underline font-bold"
                        >
                          buymeacoffee.
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </BaseModal>
  );
}

export default InfoModal;