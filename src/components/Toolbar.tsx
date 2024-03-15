import { CircleIcon, SlashIcon, SquareIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import { useState } from "react";
import { ToolTip } from "./shared/ToolTip";

const Toolbar = () => {
  const [activeToolItem, setActiveToolItem] = useState("A");
  return (
    <div className="absolute flex gap-4 px-5 py-2.5 rounded-md shadow-[0px_5px_40px_rgb(0,0,0,0.52)] dark:shadow-[0px_0px_40px_rgb(255,255,255,0.42)] border border-gray-600 bg- dark:bg-white  top-4 left-1/2 -translate-x-1/2">
      <ToolTip text={"Square"}>
        <div
          className={cx(
            "w-8 h-8 flex items-center dark:text-primary-foreground justify-center hover:bg-slate-300 cursor-pointer border rounded-sm",
            { "bg-slate-500 hover:bg-slate-500": activeToolItem === "A" }
          )}
          onClick={() => setActiveToolItem("A")}
        >
          <SquareIcon />
        </div>
      </ToolTip>

      <ToolTip text={"Line"}>
        <div
          className={cx(
            "w-8 h-8 flex items-center dark:text-primary-foreground justify-center hover:bg-slate-300 cursor-pointer border rounded-sm",
            { "bg-slate-500 hover:bg-slate-500": activeToolItem === "B" }
          )}
          onClick={() => setActiveToolItem("B")}
        >
          <SlashIcon />
        </div>
      </ToolTip>
      <ToolTip text={"Circle"}>
        <div
          className={cx(
            "w-8 h-8 flex items-center dark:text-primary-foreground justify-center hover:bg-slate-300 cursor-pointer border rounded-sm",
            { "bg-slate-500 hover:bg-slate-500": activeToolItem === "C" }
          )}
          onClick={() => setActiveToolItem("C")}
        >
          <CircleIcon />
        </div>
      </ToolTip>
    </div>
  );
};

export default Toolbar;
