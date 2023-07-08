import './globals.css'
import MenuContextProvider from './contexts/mobileMenuContext'

export const metadata = {
  title: 'Serenity Springs',
  description: 'The ultimate spa experience in Santa Monica.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MenuContextProvider>
        <body className=''>{children}</body>
      </MenuContextProvider>
    </html>
  )
}
