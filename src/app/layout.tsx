import './globals.css'
import Header from './Components/Layouts/Header';

export const metadata = {
  title: 'Panaverse Dao',
  description: 'Panaverse Dao Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {/*header*/}
        {children}</body>
    </html>
  )
}
