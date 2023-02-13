import Card from "./Card";
import SidebarLink from "./SidebarLink";
import Image from "next/image";
import logo from '../assets/target.svg'

const links = [
  { label: "Home", icon: 'Grid', link: "/home" },
  {
    label: "Calendar",
    icon: "Calendar",
    link: "/calendar",
  },
  { label: "Profile", icon: "User", link: "/profile" },
  {
    label: "Settings",
    icon: "Settings",
    link: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Card className="h-full w-40 flex items-center justify-between flex-wrap">
      <Image className="w-20" src={logo} alt={"logo"}/>
      {links.map((link) => (
        <SidebarLink link={link} />
      ))}
  </Card>
  )
}

export default Sidebar