import { TbSmartHome } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlSettings } from "react-icons/sl";
import { HiOutlineClock } from "react-icons/hi2";
import { TfiWallet } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { OnlineStore, PayHospital, Tickets } from "my-assets/Image";

export const navigationMenu = [
  { title: "home", icon: TbSmartHome },
  { title: "notification", icon: IoMdNotificationsOutline },
  { title: "schedule", icon: HiOutlineClock },
  { title: "users", icon: HiOutlineUsers },
  { title: "wallet", icon: TfiWallet },
  { title: "settings", icon: SlSettings },
];

export const spending = [
  { title: "Online Store", date: "May 30, 2023 at 08:00pm", icon: OnlineStore },
  { title: "Pay the hospital", date: "May 28, 2023 at 10:00pm", icon: PayHospital },
  { title: "Tickets", date: "May 10, 2023 at 12:00 pm", icon: Tickets },
];
