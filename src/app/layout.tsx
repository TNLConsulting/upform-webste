import type { Metadata } from 'next'
import Script from 'next/script'
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
        <Script id="crisp-chat" strategy="afterInteractive">{`
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="0bfe6651-3755-4986-b1f3-cb05deb1412f";
          window.CRISP_RUNTIME_CONFIG = { locale: "nl" };
          (function(){
            var d=document;
            var s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `}</Script>
      </body>
    </html>
  )
}
