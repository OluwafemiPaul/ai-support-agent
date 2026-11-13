import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ledgerly Support Agent | AI customer support demo",
  description: "An AI customer support agent for a fictional fintech startup, with cited answers, human handoff and an admin dashboard.",
};

const REPO_URL = "https://github.com/OluwafemiPaul/ai-support-agent";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white">L</span>
              <span>Ledgerly Support</span>
            </Link>
            <nav className="flex items-center gap-1 text-sm">
              <Link href="/" className="rounded-md px-3 py-1.5 hover:bg-slate-100">Chat</Link>
              <Link href="/docs" className="rounded-md px-3 py-1.5 hover:bg-slate-100">Help center</Link>
              <Link href="/admin" className="rounded-md px-3 py-1.5 hover:bg-slate-100">Admin</Link>
              <a href={REPO_URL} target="_blank" rel="noreferrer" className="rounded-md px-3 py-1.5 hover:bg-slate-100">GitHub</a>
            </nav>
          </div>
        </header>
        <div className="bg-amber-50 text-center text-xs text-amber-900 py-1.5 px-4">
          Ledgerly is a fictional company made for this portfolio demo. Do not enter real personal or financial information.
        </div>
        <main className="mx-auto max-w-5xl px-4 py-6">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 pb-8 text-xs text-slate-500">
          Built by Oluwafemi Olaleye with Next.js and Claude. Open source under the MIT license.
        </footer>
      </body>
    </html>
  );
}
