import { NavLink } from "react-router-dom";

import Container from "./Container";
import Logo from "../ui/Logo";

import { useCategories } from "@/hooks/useCategories";

export default function Navbar() {
  const categories = useCategories();

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-10">
            {categories.map((category) => (
              <NavItem
                key={category.id}
                to={`/${category.slug}`}
              >
                {category.name}
              </NavItem>
            ))}

            <NavItem to="/about">
              About
            </NavItem>
          </div>
        </nav>
      </Container>
    </header>
  );
}

type NavItemProps = {
  to: string;
  children: React.ReactNode;
};

function NavItem({ to, children }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        text-[12px]
        uppercase
        tracking-[0.20em]
        transition-colors
        ${
          isActive
            ? "text-[var(--primary)]"
            : "text-[var(--text)] hover:text-[var(--primary)]"
        }
      `
      }
    >
      {children}
    </NavLink>
  );
}