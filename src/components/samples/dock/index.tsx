import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from "lucide-react";

import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";

const data = [
  {
    title: "Home",
    icon: <HomeIcon className="h-full w-full text-neutral-100 " />,
    href: "#",
  },
  {
    title: "Products",
    icon: <Package className="h-full w-full text-neutral-100 " />,
    href: "#",
  },
  {
    title: "Components",
    icon: <Component className="h-full w-full text-neutral-100 " />,
    href: "#",
  },
  {
    title: "Activity",
    icon: <Activity className="h-full w-full text-neutral-100 " />,
    href: "#",
  },
  {
    title: "Change Log",
    icon: <ScrollText className="h-full w-full text-neutral-100 " />,
    href: "#",
  },
  {
    title: "Email",
    icon: <Mail className="h-full w-full text-neutral-100 " />,
    href: "#",
  },
  {
    title: "Theme",
    icon: <SunMoon className="h-full w-full text-neutral-100 " />,
    href: "#",
  },
];

export default function AppleStyleDock() {
  return (
    <div className="  absolute left-1/2 max-w-full -translate-x-1/2">
      <Dock className="  items-end pb-3">
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full  bg-zinc-700"
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
