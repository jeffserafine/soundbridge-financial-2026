import { Header } from "./header";
import { Footer } from "./footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 flex min-h-screen flex-col">
      <Header />
      {/* Navbar is h-20, so match the offset */}
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
