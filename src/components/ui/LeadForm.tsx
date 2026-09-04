import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check } from "lucide-react";

const INDUSTRIES = [
  "Human Resources",
  "Legal / Law Firm",
  "Pharmacy / Medical Warehouse",
  "Banking & Finance",
  "Manufacturing & Logistics",
  "Government / Public Sector",
  "Other",
];

type Fields = { name: string; company: string; phone: string; email: string; industry: string };

const EMPTY: Fields = { name: "", company: "", phone: "", email: "", industry: "" };

export function LeadForm() {
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const set = (key: keyof Fields) => (value: string) =>
    setFields((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fields.industry) {
      setError("Please pick the industry closest to your operation.");
      return;
    }
    setError(null);

    const body = [
      `Name: ${fields.name}`,
      `Company: ${fields.company}`,
      `Phone: ${fields.phone}`,
      `Email: ${fields.email}`,
      `Industry: ${fields.industry}`,
      "",
      "I would like to see ClearFiche running on our own documents.",
    ].join("\n");

    window.location.href = `mailto:info@clearfiche.com?subject=${encodeURIComponent(
      `Demo request — ${fields.company || fields.name}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="panel rounded-xl p-8 sm:p-10">
        <div className="flex size-11 items-center justify-center rounded-full bg-accent/12 text-accent">
          <Check className="size-5" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Your request is on its way</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Your mail client is opening with the details addressed to info@clearfiche.com. A
          ClearFiche specialist replies within one business day, usually with a 20-minute slot to
          run a live scan on a sample of your own files.
        </p>
        <button
          type="button"
          onClick={() => {
            setFields(EMPTY);
            setSent(false);
          }}
          className="mt-6 text-sm font-semibold text-accent underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="panel rounded-xl p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Full name" placeholder="Rania Khoury">
          <Input
            id="name"
            required
            value={fields.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Rania Khoury"
          />
        </Field>
        <Field id="company" label="Company">
          <Input
            id="company"
            required
            value={fields.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder="Levant Holding s.a.l."
          />
        </Field>
        <Field id="phone" label="Phone">
          <Input
            id="phone"
            required
            type="tel"
            value={fields.phone}
            onChange={(e) => set("phone")(e.target.value)}
            placeholder="+961 3 000 000"
          />
        </Field>
        <Field id="email" label="Work email">
          <Input
            id="email"
            required
            type="email"
            value={fields.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder="you@company.com"
          />
        </Field>
        <div className="sm:col-span-2">
          <Field id="industry" label="Industry">
            <Select value={fields.industry} onValueChange={set("industry")}>
              <SelectTrigger id="industry">
                <SelectValue placeholder="Select the closest match" />
              </SelectTrigger>
              <SelectContent>
                {INDUSTRIES.map((industry) => (
                  <SelectItem key={industry} value={industry}>
                    {industry}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </Field>
        </div>
      </div>

      {error ? <p className="mt-4 text-sm text-destructive">{error}</p> : null}

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xs text-xs leading-relaxed text-muted-foreground">
          Sent straight to info@clearfiche.com. We never share your details, and there is no
          mailing list.
        </p>
        <Button type="submit" variant="ink" size="lg">
          Request a demo
        </Button>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  placeholder?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-xs font-semibold tracking-wide text-foreground/80">
        {label}
      </Label>
      {children}
    </div>
  );
}
