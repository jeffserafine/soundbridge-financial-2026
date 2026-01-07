import { Header } from "./header";
import { Footer } from "./footer";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* Navbar is h-24, so match the offset */}
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
    </div>
  );
}
