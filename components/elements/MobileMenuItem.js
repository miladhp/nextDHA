// import { usePathname } from "next/navigation";
import Link from "next/link";
export const MobileMenuItem = (item, isActive, handleClick) => {
  //   const pathname = usePathname();
  //   const isSameOrChildOf = (parentRoute) => {
  //     return pathname === parentRoute || pathname.startsWith(parentRoute + "/");
  //   };
  return (
    <li
      key={item.id}
      onClick={() => handleClick(item.id)}
      className={`${item.submenu ? "dropdown current" : "dropdown"}`}
    >
      {item.label && (
        <Link href={item.link || "#"} className="text-nowrap">
          {item.label}
        </Link>
      )}
      {item.submenu && item.submenu.length > 0 && (
        <>
          <ul style={{ display: `${isActive ? "block" : "none"}` }}>
            {item.submenu.map((subItem) =>
              MobileMenuItem(subItem, false, handleClick)
            )}
          </ul>
          <div
            className={isActive ? "dropdown-btn open" : "dropdown-btn"}
            onClick={() => handleClick(item.id)}
          >
            <span
              className="fa fa-angle-right"
              style={{
                transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
                transition: "transform 150ms ease",
              }}
            />
          </div>
        </>
      )}
    </li>
  );
};
