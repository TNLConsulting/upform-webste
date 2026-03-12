import type { Metadata } from 'next'
import { ClientProviders } from '@/components/ClientProviders'
import './globals.css'

export const metadata: Metadata = {
  title: 'Upform Studio | Reformer Pilates bij Uprise',
  description: 'Upform Studio — professionele reformer pilates lessen in Haacht. Ontdek onze klassen, prijzen en premium pilates reformers.',
  keywords: ['pilates', 'reformer pilates', 'pilates Haacht', 'pilates studio', 'Upform', 'Uprise'],
  openGraph: {
    title: 'Upform Studio | Reformer Pilates bij Uprise',
    description: 'Professionele reformer pilates lessen en premium toestellen in Haacht.',
    type: 'website',
    locale: 'nl_BE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  )
}
