import Navbar from "../components/Navbar";
import "./globals.css";
import { Inter, Roboto } from 'next/font/google';
import type { Metadata } from 'next';
const inter = Inter({ subsets: ['latin'] })
// const roboto = Roboto({subsets: ['latin'],  weight: ['400']})
export const metadata: Metadata = {
  title: 'Next.js Project',
  description: 'A Next.js project with typescript and TailwindCss',
  keywords: 'Typescript, Next.js, Tailwindcss'
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="eng">
    <body className={inter.className}>
      <Navbar />
      <main className="max-w-3xl mx-auto py-10">
        {children}
      </main>
    </body>
  </html>
}