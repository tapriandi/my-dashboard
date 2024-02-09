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
  {
    title: "Pay the hospital",
    date: "May 28, 2023 at 10:00pm",
    icon: PayHospital,
  },
  { title: "Tickets", date: "May 10, 2023 at 12:00 pm", icon: Tickets },
];

export const lastTransaction = [
  {
    title: "Bassie Cooper",
    date: "02 july 2023",
    icon: Tickets,
    amount: "-$3,000",
  },
  {
    title: "Guy Hawkins",
    date: "02 july 2023",
    icon: Tickets,
    amount: "-$1,970",
  },
  {
    title: "Floyd Miles",
    date: "02 july 2023",
    icon: Tickets,
    amount: "-$5,000",
  },
  {
    title: "Bassie Cooper",
    date: "02 july 2023",
    icon: Tickets,
    amount: "-$3,000",
  },
  {
    title: "Guy Hawkins",
    date: "02 july 2023",
    icon: Tickets,
    amount: "-$1,970",
  },
  {
    title: "Floyd Miles",
    date: "02 july 2023",
    icon: Tickets,
    amount: "-$5,000",
  },
];

export const listBuy = [
  { id: 1, item: "Macbook", active: false },
  { id: 2, item: "Bicycle", active: false },
  { id: 3, item: "Motorcycle", active: false },
  { id: 4, item: "Iphone 14 pro max", active: false },
];

export const listChat = [
  {
    title: "Are you ready?",
    icon: Tickets,
    account: "me",
  },
  {
    title: "Bassie Cooper",
    icon: Tickets,
    account: "other",
  },
];

export const optionsBalace = [
  { title: "option 1", value: "opt1" },
  { title: "option 2", value: "opt2" },
  { title: "option 3", value: "opt3" },
];
