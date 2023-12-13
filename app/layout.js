import './ui/globals.css'
import { inter } from './ui/fonts'

export const metadata = {
  title: 'Edward Raga',
  description: 'Edward Raga es un desarrollador Fullstack',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
