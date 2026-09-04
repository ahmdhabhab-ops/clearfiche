import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  FileSearch,
  Gavel,
  Mail,
  MapPin,
  Pill,
  ScanLine,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/LeadForm";
import heroImage from "@/assets/hero-scanner.jpg";
import scanDetail from "@/assets/scan-detail.jpg";
import logoAsset from "@/assets/clearfiche-logo.png.asset.json";
import logoLightAsset from "@/assets/clearfiche-logo-light.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ClearFiche — Turn Paper Archives Into Searchable Intelligence" },
      {
        name: "description",
        content:
          "ClearFiche digitizes paper archives on-site in Lebanon: scan, auto-extract every field, and search years of documents in seconds. Book a demo.",
      },
      { property: "og:title", content: "ClearFiche — Paper In, Intelligence Out" },
      {
        property: "og:description",
        content:
          "On-premise scanning with automatic data extraction for HR, legal, pharmaceutical and enterprise archives.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const USE_CASES = [
  {
    icon: Users,
    title: "HR Departments",
    body: "Contracts, NSSF paperwork, signed appraisals and end-of-service files indexed by employee number. Pull a full personnel file during a meeting instead of after it.",
    detail: "Employee ID · Contract dates · Signature capture",
  },
  {
    icon: Gavel,
    title: "Law Firms & Lawyers",
    body: "Case bundles, court filings and notarized deeds captured page-accurate with Arabic and French recognition, so a citation is a search away, not an afternoon away.",
    detail: "Case number · Party names · Filing date",
  },
  {
    icon: Pill,
    title: "Pharmacies & Medical Warehouses",
    body: "Delivery notes, batch records and MoPH documentation read line by line — lot numbers and expiry dates land in your system the moment the page leaves the feeder.",
    detail: "Batch · Expiry · Supplier invoice",
  },
  {
    icon: Building2,
    title: "Enterprises with Legacy Archives",
    body: "Twenty years of boxes in a basement, converted room by room by our team on your premises. Nothing leaves the building, everything becomes searchable.",
    detail: "Bulk backfile · On-site crew · Chain of custody",
  },
];

const STEPS = [
  {
    step: "01",
    icon: ScanLine,
    title: "Scan",
    body: "Your existing scanner or one of ours sits on the local network. Staff feed the stack; ClearFiche picks up every page, deskews it and separates documents automatically.",
  },
  {
    step: "02",
    icon: FileSearch,
    title: "Auto-Extract",
    body: "Each page is read in Arabic, French and English. Dates, names, invoice totals, batch numbers and signatures are lifted into structured fields and checked against your rules.",
  },
  {
    step: "03",
    icon: ShieldCheck,
    title: "Archive",
    body: "Documents land in an encrypted repository with permissions, retention rules and a full audit trail. Full-text search returns the page — not a folder to dig through.",
  },
];

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Proof />
        <About />
        <UseCases />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Wordmark({
  showParent = false,
  light = false,
}: {
  showParent?: boolean;
  light?: boolean;
}) {
  return (
    <a href="#top" className="flex flex-col">
      <img
        src={light ? logoLightAsset.url : logoAsset.url}
        alt="ClearFiche — Digitize Your World"
        width={679}
        height={237}
        className="h-11 w-auto object-contain sm:h-12"
      />
      {showParent ? (
        <span className="mt-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground/80">
          Powered by Digicore Solutions S.A.R.L
        </span>
      ) : null}
    </a>
  );
}

function Header() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md"
    >
      <div className="mx-auto flex h-[5.25rem] max-w-6xl items-center justify-between px-6">
        <Wordmark showParent />
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">
            About
          </a>
          <a href="#who" className="transition-colors hover:text-foreground">
            Who it's for
          </a>
          <a href="#how" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#demo" className="transition-colors hover:text-foreground">
            Contact
          </a>
        </nav>
        <Button asChild variant="ink" size="sm">
          <a href="#demo">Request a demo</a>
        </Button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="surface-hero relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:py-28">
        <div>
          <p className="eyebrow text-accent">Document intelligence · Beirut</p>
          <h1 className="mt-5 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-[3.4rem]">
            Paper chaos in.
            <br />
            Searchable intelligence out.
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
            ClearFiche puts a scanner on your desk and an index behind it. Feed it the stack that
            has been sitting in the cabinet since 2011 — by the time the last page drops, every
            name, date and number inside it is searchable, permissioned and auditable.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild variant="ink" size="lg">
              <a href="#demo">
                Request a demo <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how">See how it works</a>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-7">
            {[
              ["3 sec", "average retrieval"],
              ["AR / FR / EN", "recognition"],
              ["On-premise", "your servers"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-lg font-semibold">{value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/8 blur-3xl" />
          <img
            src={heroImage}
            alt="A ClearFiche desk setup: an office document scanner feeding aged paper files into a dashboard of digitized archives"
            width={1600}
            height={1200}
            className="w-full rounded-xl border border-border object-cover shadow-[var(--shadow-lift)]"
          />
        </div>
      </div>
    </section>
  );
}

function Proof() {
  return (
    <section className="border-b border-border bg-secondary/50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-sm text-muted-foreground">
        <p>Trusted where the paperwork is not optional — legal, medical, industrial, public.</p>
        <p className="text-foreground/70">
          Deployed on-site across Lebanon from our Dekwaneh office.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow text-accent">About ClearFiche</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Lebanese-built document intelligence, delivered on-site.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We are a Beirut-area team headquartered at Tower 44, Dekwaneh, Lebanon, on a mission
              to eliminate paper clutter before it buries another filing cabinet.
            </p>
          </div>

          <div className="panel rounded-2xl p-8 sm:p-10">
            <p className="text-sm leading-relaxed text-muted-foreground">
              ClearFiche is not a third-party license or a resold platform. It is our own proprietary
              system, designed and built in-house by Digicore Solutions S.A.R.L. Every scanner
              connection, extraction rule, and archive index runs through software we control end to
              end — which means your documents are processed by a custom solution we can adapt,
              secure, and support directly.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Proprietary", "Custom ClearFiche software built in-house"],
                ["On-premise", "Scanning and storage inside your network"],
                ["Local support", "Tower 44, Dekwaneh, Lebanon"],
              ].map(([label, desc]) => (
                <div key={label} className="rounded-xl bg-secondary/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent">{label}</p>
                  <p className="mt-2 text-sm leading-snug text-foreground/80">{desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              From the first page through the scanner to the final archived record, ClearFiche
              performs seamless document scanning, automated data extraction, and intelligent
              archiving — all through one unified, company-owned platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  return (
    <section id="who" className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <p className="eyebrow text-accent">Who needs ClearFiche?</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
          Built for the teams that still measure archives in meters.
        </h2>
        <p className="mt-5 text-muted-foreground">
          Every industry files differently. ClearFiche is configured per document type, so the
          fields it extracts are the ones your people actually search by.
        </p>
      </div>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {USE_CASES.map(({ icon: Icon, title, body, detail }) => (
          <article
            key={title}
            className="group bg-card p-8 transition-colors duration-300 hover:bg-secondary/60"
          >
            <span className="flex size-10 items-center justify-center rounded-lg bg-ink text-ink-foreground transition-colors group-hover:bg-accent">
              <Icon className="size-[18px]" />
            </span>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            <p className="mt-6 border-t border-border pt-4 text-xs tracking-wide text-foreground/60">
              {detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="surface-ink">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow text-accent">How it works</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Three steps between the cabinet and the search bar.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-muted">
              No cloud upload unless you want one. The scanner, the extraction engine and the
              archive all run inside your network — ClearFiche installs it, trains your team on it,
              and stays reachable when the volume spikes.
            </p>
            <img
              src={scanDetail}
              alt="Close-up of a document passing through a ClearFiche-connected sheet-fed scanner"
              width={1200}
              height={912}
              loading="lazy"
              className="mt-10 w-full rounded-xl border border-ink-border object-cover"
            />
          </div>

          <ol className="space-y-px overflow-hidden rounded-xl border border-ink-border bg-ink-border">
            {STEPS.map(({ step, icon: Icon, title, body }) => (
              <li key={step} className="bg-ink/95 p-8 backdrop-blur-sm">
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm font-semibold text-accent">{step}</span>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <Icon className="ml-auto size-[18px] text-ink-muted" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink-muted">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div>
          <p className="eyebrow text-accent">Request a demo</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            Bring us one box. We'll show you the difference.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            Tell us what you file and how much of it there is. We'll come to your office with a
            scanner, digitize a real sample of your documents, and let you search it before you
            commit to anything.
          </p>

          <div className="mt-10 space-y-5 border-t border-border pt-8 text-sm">
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">info@clearfiche.com</p>
                <p className="mt-1 text-muted-foreground">Replies within one business day.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <div>
                <p className="font-semibold">Tower 44, Dekwaneh</p>
                <p className="mt-1 text-muted-foreground">
                  Mount Lebanon · Visits by appointment, Monday to Friday.
                </p>
              </div>
            </div>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="surface-ink border-t border-ink-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <Wordmark light />
        <p className="text-xs text-ink-muted">
          Tower 44, Dekwaneh, Lebanon · info@clearfiche.com
        </p>
        <p className="text-xs text-ink-muted">
          © {new Date().getFullYear()} ClearFiche. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
