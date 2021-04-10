import { MdDashboard } from "react-icons/md";
import { BiCube } from "react-icons/bi";
import GroupIcon from "@material-ui/icons/Group";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import WorkIcon from "@material-ui/icons/Work";
import { GoPackage } from "react-icons/go";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { RiProductHuntLine } from "react-icons/ri";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const theTailorSideBarData = [
  {
    icon: <MonetizationOnIcon></MonetizationOnIcon>,
    title: "Sales",
  },
  {
    icon: <BiCube></BiCube>,
    title: "Order",
  },
  {
    icon: <RiProductHuntLine></RiProductHuntLine>,
    title: "Products",
  },
  {
    icon: <GroupIcon></GroupIcon>,
    title: "Customer",
  },
  {
    icon: <WorkIcon></WorkIcon>,
    title: "Employees",
  },
  {
    icon: <AccountCircleIcon></AccountCircleIcon>,
    title: "Account Details",
  },
];
export default theTailorSideBarData;
