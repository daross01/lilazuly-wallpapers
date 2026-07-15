import { NavLink } from "react-router-dom";
import { useState } from "react";

import Container from "./Container";
import Logo from "../ui/Logo";

import { useCategories } from "@/hooks/useCategories";
import { useSubcategories } from "@/hooks/useSubcategories";

export default function Navbar() {
  const categories = useCategories();
  const subcategories = useSubcategories();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          <Logo />

          <div className="flex items-center gap-10">
            {categories.map((category) => {
              const subs = subcategories.filter(
                (sub) => sub.category_id === category.id
              );

              return (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <NavItem to={`/${category.slug}`}>
                    {category.name}
                  </NavItem>

                  {activeCategory === category.id && (
                    <div
                      className="
                        absolute
                        top-full
                        left-1/2
                        -translate-x-1/2
                        mt-4
                        w-56
                        rounded-xl
                        border
                        border-[var(--border)]
                        bg-white
                        shadow-lg
                        py-3
                      "
                    >
                      {subs.map((sub) => (
                        <NavLink
                          key={sub.id}
                          to={`/${category.slug}/${sub.slug}`}
                          className="
                            block
                            px-5
                            py-2
                            text-sm
                            text-[var(--text)]
                            hover:text-[var(--primary)]
                            transition-colors
                          "
                        >
                          {sub.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <NavItem to="/about">About</NavItem>
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