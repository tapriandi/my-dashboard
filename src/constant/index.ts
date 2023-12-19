import { TbSmartHome } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { HiOutlineClock } from "react-icons/hi2";
import { TfiWallet } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";

export const navigationMenu = [
  { title: "home", icon: TbSmartHome },
  { title: "notification", icon: IoMdNotificationsOutline },
  { title: "schedule", icon: HiOutlineClock },
  { title: "users", icon: HiOutlineUsers },
  { title: "wallet", icon: TfiWallet },
  { title: "settings", icon: SlSettings },
];
