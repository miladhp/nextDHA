import { usePathname } from "next/navigation";
import Link from "next/link";
export const MenuItem = (item) => {
  const pathname = usePathname();
  const isSameOrChildOf = (parentRoute) => {
    return pathname === parentRoute || pathname.startsWith(parentRoute + "/");
  };
  return (
    <li
      key={item.id}
      className={`${item.submenu ? "dropdown" : ""} ${
        isSameOrChildOf(item.link) ? "current" : ""
      }`}
    >
      {item.label && (
        <Link href={item.link || "#"} className="text-nowrap">
          {item.label}
        </Link>
      )}
      {item.submenu && item.submenu.length > 0 && (
        <ul>{item.submenu.map((subItem) => MenuItem(subItem))}</ul>
      )}
    </li>
  );
};
