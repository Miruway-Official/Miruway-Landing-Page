import NavbarLanding from "@/components/navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarLanding />
      {children}
      {/* <Footer /> */}
    </>
  );
}
