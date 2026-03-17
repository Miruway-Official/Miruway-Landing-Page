import { NavbarRedesign } from "@/components/redesign/navbar"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavbarRedesign />
      {children}
    </>
  )
}
