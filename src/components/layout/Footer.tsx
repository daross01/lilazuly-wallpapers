import Container from "./Container";
import Logo from "../ui/Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--border)]">
      <Container>
        <div className="flex flex-col items-center gap-6 py-12">
          <Logo />

          <p className="max-w-md text-center text-sm text-[var(--text-light)]">
            Discover aesthetic wallpapers for desktop, tablet and mobile.
          </p>

          <p className="text-xs tracking-[0.18em] uppercase text-[var(--text-light)]">
            © {new Date().getFullYear()} LILAZULY. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}