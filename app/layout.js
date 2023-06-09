"use client"
import './globals.css'
import { Inter } from 'next/font/google';
import Navbar from "./components/Navbar";
import injectContext from './context/appContext'
const inter = Inter({ subsets: ['latin'] })


function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script></head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}


export default injectContext(RootLayout)