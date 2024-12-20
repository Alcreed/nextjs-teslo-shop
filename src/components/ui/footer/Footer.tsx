import { titleFont } from "@/config/fonts"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="flex w-full justify-center text-xs mb-10">
      <Link href={"/"} className="mr-2">
        <span className={`${titleFont.className} antialiased font-bold`}>Teslo </span>
        <span>| shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href={"/"}>
        Privacidad & Legal
      </Link>
    </footer>
  )
}