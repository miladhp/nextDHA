import { MenuTree } from "@/constants/global";
import { MenuItem } from "../elements/MenuItem";
export default function Menu() {
  return (
    <>
      {MenuTree && MenuTree.length > 0 && (
        <ul className="navigation">{MenuTree.map((item) => MenuItem(item))}</ul>
      )}
    </>
  );
}
