import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export const SidebarData = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Accounts",
    path: "/account",
    icon: <AccountBalanceWalletIcon />,
  },
  {
    name: "Payroll",
    path: "/payroll",
    icon: <AttachMoneyIcon />,
  },
  {
    name: "Reports",
    path: "/report",
    icon: <DescriptionIcon />,
  },
  {
    name: "Advisor",
    path: "/advisor",
    icon: <PersonIcon />,
  },
  {
    name: "Contacts",
    path: "/contact",
    icon: <PermContactCalendarIcon />,
  },
];
