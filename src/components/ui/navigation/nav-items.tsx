import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { JSX } from "react";
import { usePathname } from "next/navigation";

function NavItems({
  items,
}: {
  items: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
}) {
  const pathname = usePathname();
  return (
    <>
      {items.map(
        (
          navItem: {
            name: string;
            link: string;
            icon?: JSX.Element;
          },
          idx: number
        ) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-primary-foreground hover:text-[#fecaca] ",
              `${pathname === navItem.link ? "text-primary" : ""}`
            )}
          >
            <span className="text-sm font-medium capitalize">
              {navItem.name}
            </span>
          </Link>
        )
      )}
    </>
  );
}

export default NavItems;
