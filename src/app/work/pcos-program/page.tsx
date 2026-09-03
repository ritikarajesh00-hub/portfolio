import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pill } from "@/components/ui/Pill";
import {
  Arc,
  B,
  ComparisonTable,
  DefinitionRows,
  DraftNote,
  H2,
  H3,
  Insight,
  LeadIn,
  Measure,
  MetaStrip,
  P,
  PageBlock,
  Rationale,
  Section,
  SectionNumber,
  ShotPlaceholder,
  Voices,
} from "@/components/case-study/parts";

export const metadata: Metadata = {
  title: "Designing a doctor-led landing page for a PCOS program — Rithika",
  description:
    "Consumer research, UX narrative, information architecture and UI for a Kapiva PCOS program landing page built to diagnose before it sells.",
};

export default function PcosCaseStudy() {
  return (
    <main className="relative overflow-x-clip">
      <Navbar />

      <article>
        {/* ---------- Hero ---------- */}
        <header className="page-x pt-[60px] pb-[30px]">
          <Measure>
            <Link
              href="/#work"
              className="mb-[26px] inline-block text-base font-medium text-muted transition-colors hover:text-brand"
            >
              ← Back to work
            </Link>

            <div className="mb-[26px] flex flex-wrap gap-[9px]">
              <Pill tone="solid">Kapiva</Pill>
              <Pill tone="outline">Health · D2C</Pill>
              <Pill tone="outline">Funnel &amp; Conversion</Pill>
            </div>

            <h1 className="mb-[22px] max-w-[15ch] text-hero leading-[1.12] font-semibold text-ink">
              Designing a doctor-led landing page for a PCOS program
            </h1>

            <p className="max-w-[56ch] text-xl leading-[1.55] text-muted">
              Consumer research, UX narrative, information architecture, and UI — a landing page
              built to diagnose before it sells, shipped solo in a week.
            </p>

            <MetaStrip
              items={[
                { label: "Role", value: "Solo Product Designer" },
                { label: "Scope", value: "Research → Narrative → UI" },
                { label: "V1 timeline", value: "1 week to live" },
                { label: "Platform", value: "Mobile-first web" },
              ]}
            />
          </Measure>
        </header>

        {/* ---------- 01 Overview ---------- */}
        <Section>
          <SectionNumber>01 — Overview</SectionNumber>
          <LeadIn>
            Kapiva asked for one thing: a landing page for a new PCOS program. What the page
            actually had to do was harder — convince a woman who has already tried five things for
            her PCOS to trust a sixth.
          </LeadIn>
          <P>
            PCOS is one of the most common hormonal conditions among Indian women, and one of the
            most poorly served. The market is crowded with supplements that promise a fix, and every
            one of them makes the same pitch: one product, for all women, for all PCOS. For someone
            who’s been managing the condition for years, that pitch has stopped working — because
            she’s heard it before, and it didn’t hold.
          </P>
          <P>
            So the commercial goal (move from one-off supplement sales toward a higher-retention
            program) and the design goal turned out to be the same goal:{" "}
            <B>earn the right to be believed before asking for money.</B>
          </P>
          <ShotPlaceholder
            tall
            caption="Hero screen — final V1 landing page, top fold"
            hint="Drop the full-height hero mockup here (mobile frame preferred)"
          />
        </Section>

        {/* ---------- 02 Problem ---------- */}
        <Section>
          <SectionNumber>02 — The problem behind the brief</SectionNumber>
          <H2>The real problem wasn’t the page</H2>
          <P>
            The surface brief was “design a PCOS landing page.” The real problem showed up the
            moment I started looking at how women actually live with this condition.
          </P>
          <P>
            Women dealing with hormonal imbalance don’t just have a health problem — they have a{" "}
            <B>trust problem</B>. Three things were true at once, and each one made the next harder:
          </P>
          <DefinitionRows
            rows={[
              {
                term: "She treats symptoms, not causes",
                detail:
                  "Acne, irregular periods, weight gain, hair fall — each chased separately. Almost no one had named the actual driver: insulin resistance, elevated androgens, cortisol imbalance.",
              },
              {
                term: "She’s not inactive — she’s exhausted",
                detail:
                  "She’s already trying things. Home remedies, medicines, powders, yoga, advice from every corner of the internet. The effort was never missing. What’s missing is anything that works on the root cause — and she knows it.",
              },
              {
                term: "Every option sounds identical",
                detail:
                  "One supplement, for everyone. Which meant every past failure had quietly trained her to expect the next one to fail too.",
              },
            ]}
          />
          <Insight>
            The page isn’t selling a product. It’s offering an end to the exhaustion of figuring it
            out alone.
          </Insight>
          <P>
            That sentence became the test every design decision had to pass. If a section added
            noise, made another claim, or asked for trust it hadn’t earned, it was working against
            the one thing the page was really for.
          </P>
        </Section>

        {/* ---------- 03 Research ---------- */}
        <Section>
          <SectionNumber>03 — Listening first</SectionNumber>
          <H2>What the interviews changed</H2>
          <P>
            Before designing anything, I ran interviews with women living with PCOS — sourced
            through an agency rather than pulled from Kapiva’s existing customers, so the input
            wasn’t skewed toward people who already believed in the brand. Alongside the interviews
            I ran secondary research and a competitive teardown of other women’s-health and PCOS
            brands.
          </P>
          <P>
            The interviews kept returning to the same feeling: <B>exhaustion from trying
            everything.</B> Not apathy, not lack of information — fatigue from years of effort that
            never added up to a result.
          </P>
          <Voices
            quotes={[
              {
                quote:
                  "“I want to just solve it — I’ve been suffering from it for the past 5 to 6 years.”",
                who: "PCOS sufferer, interview",
              },
              {
                quote:
                  "“I had PCOS, then I conceived, and now the PCOS has come back again.”",
                who: "PCOS sufferer, interview",
              },
              {
                quote:
                  "“I’m even ready to take GLP injections if that would reduce my weight and help reverse the PCOS.”",
                who: "PCOS sufferer, interview",
              },
            ]}
          />
          <P>
            These three voices reframed the whole project. The first told me the timeline she’s
            living on — <em className="italic">years</em>, not weeks. The second told me it recurs;
            a one-time fix is the wrong promise, because the condition itself isn’t one-time. The
            third told me how far she’s willing to go, and how much she’s willing to spend, if she
            believes something will actually work. That’s not a supplement buyer. That’s someone
            waiting for a program worth committing to.
          </P>

          <H3>What the competitors were missing</H3>
          <P>
            The teardown made the opening obvious. Across the category, no one was treating the root
            cause <em className="italic">naturally</em>, and no one was offering real guidance — the
            hand-holding a woman actually needs when she’s navigating this alone. Everyone sold a
            bottle. No one sold a path.
          </P>
          <P>
            That gap defined the position Kapiva could own: personalised, natural support built
            around her body and her specific PCOS type, without side effects — delivered as{" "}
            <B>a complete program, not a product.</B>
          </P>
          <DraftNote>
            Add the competitor audit artefact here — even a simple matrix (brands × root-cause /
            personalisation / guidance / natural) makes the gap visual and proves the analysis was
            real. Name the specific brands you reviewed.
          </DraftNote>
        </Section>

        {/* ---------- 04 Strategy ---------- */}
        <Section>
          <SectionNumber>04 — The strategic bet</SectionNumber>
          <H2>Move the conversion from cart to consult</H2>
          <P>
            Instead of optimising the page for <B>product purchase</B>, I designed it for{" "}
            <B>doctor consultation</B>.
          </P>
          <P>
            The consultation is the moment a blind purchase becomes a personalised decision. It’s
            where a stranger’s website turns into her plan. Reframing the goal this way solved both
            sides of the problem at once — the health outcome and the business model stopped
            competing.
          </P>
          <ComparisonTable
            columns={["Blind purchase", "Diagnosis-first"]}
            rows={[
              {
                label: "Trust",
                cells: [
                  { text: "She guesses if it’s for her" },
                  { text: "A doctor confirms it", positive: true },
                ],
              },
              {
                label: "Health outcome",
                cells: [
                  { text: "Generic, symptom-level" },
                  { text: "Matched to her root cause", positive: true },
                ],
              },
              {
                label: "Business",
                cells: [
                  { text: "One-time SKU" },
                  { text: "Ongoing program, higher LTV", positive: true },
                ],
              },
              {
                label: "Churn",
                cells: [
                  { text: "Stops when results stall" },
                  { text: "Stays because it’s hers", positive: true },
                ],
              },
            ]}
          />
          <P>
            Practically, this moved the conversion moment upstream — <B>from cart to consult</B> —
            and every section on the page now had a single job: get her to that conversation.
          </P>
        </Section>

        {/* ---------- 05 Narrative walkthrough ---------- */}
        <Section>
          <SectionNumber>05 — Building the argument</SectionNumber>
          <H2>One argument, delivered in order</H2>
          <P>
            The page isn’t a stack of sections. It’s one argument, delivered in order — each step
            earning the next. Designed as an emotional arc:
          </P>
          <Arc steps={["Recognition", "Hope", "Curiosity", "Validation", "Trust", "Action"]} />

          <PageBlock number="01" title="Hero" job="Job: stop the scroll, state the promise.">
            <P>
              One headline, one CTA, three trust markers. The promise is plain: fix the root cause
              of your PCOS, not just the symptoms, with a plan built for you.
            </P>
            <Rationale label="Decision:">
              the whole fold had to resolve without scrolling — no fragmentation. The category
              pattern is proven, so I matched the structure and spent the creative budget on tone,
              not reinvention.
            </Rationale>
            <ShotPlaceholder caption="Screen — hero fold" hint="Mobile frame" />
          </PageBlock>

          <PageBlock
            number="02"
            title="Symptoms"
            job="Job: make her feel seen. She should recognise herself here."
          >
            <P>
              PCOS shows up differently in different women. Weight gain is a symptom. Acne is a
              symptom. Hair loss is a symptom. She might be living with one, or many.
            </P>
            <Rationale label="Decision:">
              this couldn’t be a text list. If she doesn’t see herself here, nothing downstream
              lands — so it needed real visualisation, not bullet points.
            </Rationale>
            <ShotPlaceholder
              caption="Screen — symptoms section"
              hint="Show the visual treatment you built"
            />
            <DraftNote>
              Phase 2 idea worth mentioning — make this interactive (she selects her symptoms, gets
              a micro-insight back). Turns a passive scroll into a personal moment and captures
              intent before the consult.
            </DraftNote>
          </PageBlock>

          <PageBlock number="03" title="The reframe" job="Job: flip fear into hope.">
            <P>
              Instead of scaring her, show what’s on the other side: get PCOS under control and
              hormonal acne eases, fertility improves, metabolic health improves — each claim
              anchored to real research.
            </P>
            <Rationale label="Decision:">
              fear converts once and corrodes trust. In a category full of overclaiming, restraint
              and sourced evidence became the trust signal.
            </Rationale>
            <ShotPlaceholder caption="Screen — reframe / positive stakes" hint="Mobile frame" />
          </PageBlock>

          <PageBlock
            number="04"
            title="Know your PCOS type"
            job="Job: the hook. The idea the whole page turns on."
          >
            <P>
              There are many types of PCOS. Most solutions treat all of them the same. We don’t.
              Which one is yours?
            </P>
            <Rationale label="Why this is the most important section:">
              it plants one uncomfortable idea — that one-supplement-for-everyone isn’t just weaker,
              it’s <B>wrong</B>. Once she accepts PCOS isn’t one thing, a doctor stops being an
              upsell and becomes the obvious next step. Kept deliberately restrained and scientific
              — the idea does the work; over-designing it would make it read as marketing.
            </Rationale>
            <ShotPlaceholder
              caption="Screen — PCOS type section"
              hint="Scientific illustration style"
            />
          </PageBlock>

          <PageBlock
            number="05"
            title="Why everything else has failed you"
            job="Job: validate her frustration, clear the field."
          >
            <P>
              An honest comparison across home remedies, medicines, and other supplements — what
              each does, and what each can’t. Home remedies can’t go deep enough to find her type.
              Supplements without diagnosis bounce back the moment she stops.
            </P>
            <Rationale label="Decision:">
              tone was the whole challenge. Attack the things she’s tried and she gets defensive —
              she <em className="italic">chose</em> them. So the section is honest about limits,
              never aggressive. Language was also kept regulator-safe by design.
            </Rationale>
            <ShotPlaceholder caption="Screen — comparison section" hint="Tick / cross treatment" />
          </PageBlock>

          <PageBlock number="06" title="The protocol" job="Job: name and own the solution.">
            <P>
              The program gets an identity — not an incremental improvement, a transformation. Lead
              with the after-state, scientifically framed rather than cosmetic, then explain the
              mechanism. People commit to an outcome first and rationalise the process second.
            </P>
            <Rationale label="Open item:">
              the protocol name is being finalised separately — it needs to sound ownable and
              distinct.
            </Rationale>
            <ShotPlaceholder caption="Screen — protocol reveal" hint="Transformation imagery" />
          </PageBlock>

          <PageBlock
            number="07"
            title="How it works"
            job="Job: make it feel achievable, not overwhelming."
          >
            <P>
              The mechanism, broken into clear steps, so belief turns into confidence — she can see
              this is a process she can actually finish.
            </P>
            <DraftNote>
              The step-by-step mechanism isn’t finalised yet. Drop the steps in here once locked,
              and note how you balanced “thorough enough to be credible” against “simple enough to
              not overwhelm.”
            </DraftNote>
            <ShotPlaceholder caption="Screen — how it works" hint="Step sequence" />
          </PageBlock>
        </Section>

        {/* ---------- 06 Principles ---------- */}
        <Section>
          <SectionNumber>06 — Principles that governed the page</SectionNumber>
          <H2>Four rules every section had to pass</H2>
          <DefinitionRows
            rows={[
              {
                term: "Diagnose, don’t declare",
                detail:
                  "Every section moves her toward understanding her own body, rather than accepting a claim about it.",
              },
              {
                term: "Credibility over persuasion",
                detail:
                  "In a category built on overclaiming, restraint reads as confidence. Sourced data over adjectives; scientific illustration over lifestyle gloss.",
              },
              {
                term: "Validate, never blame",
                detail:
                  "She’s tried things that didn’t work. The page never implies she was foolish for trying them.",
              },
              {
                term: "One argument, one action",
                detail: "A single CTA throughout. Every extra exit is a leak in the funnel.",
              },
            ]}
          />
        </Section>

        {/* ---------- 07 V1 → V2 ---------- */}
        <Section>
          <SectionNumber>07 — What V1 taught us</SectionNumber>
          <H2>Shipping was the halfway point</H2>
          <P>
            V1 shipped in a week and went live. Then I did the part that’s easy to skip: I waited,
            and I watched.
          </P>
          <P>
            After three weeks, conversions were coming in lower than we wanted. Rather than guess at
            fixes, I went back to the source — fresh consumer calls to understand what wasn’t
            landing. That’s what’s driving V2 now.
          </P>
          <Insight>
            Shipping the page was the halfway point, not the finish line. The interviews that built
            V1 are the same tool diagnosing V2.
          </Insight>
          <DraftNote>
            To finish once V2 is further along: what the follow-up calls revealed, the specific
            hypotheses for V2, and what you’re changing in the narrative or flow. Leave this as an
            honest “in progress” section — it reads as maturity, not incompleteness.
          </DraftNote>
          <ShotPlaceholder
            caption="Optional — V1 vs V2 comparison / early V2 direction"
            hint="Add when ready"
          />
        </Section>

        {/* ---------- 08 Reflection ---------- */}
        <Section>
          <SectionNumber>08 — Reflection</SectionNumber>
          <H2>What this changed about how I think</H2>
          <P>
            This project reset how I think about conversion. The instinct on a landing page is to
            shorten the path to purchase. Here, the opposite was true: the fastest way to a sale was
            to slow down and earn belief first — to move the conversion from cart to consult, and
            let trust do the selling.
          </P>
          <P>
            Designing under a one-week deadline forced clarity. There was no room to decorate; every
            section had to justify its place against a single question — does this move her closer
            to the consultation? That constraint made the page better, not worse.
          </P>
          <DraftNote>
            Optional additions: what you’d test first if you had the analytics; how this
            diagnosis-first model could extend to other conditions beyond PCOS; one thing you’d do
            differently with hindsight.
          </DraftNote>

          <div className="mt-[40px] border-t border-hairline pt-[40px]">
            <Link
              href="/#work"
              className="inline-flex items-center gap-[8px] border-b-2 border-brand pb-[4px] text-xl font-medium text-ink transition-colors hover:text-brand"
            >
              ← Back to all work
            </Link>
          </div>
        </Section>
      </article>

      <Footer />
    </main>
  );
}
