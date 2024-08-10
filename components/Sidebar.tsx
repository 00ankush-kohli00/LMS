"use client";

import Link from "next/link";
import { AiOutlineAppstore } from "react-icons/ai";
import { HiOutlineDatabase } from "react-icons/hi";
import { SlSettings } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { RiBuilding3Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { GrInherit } from "react-icons/gr";
import { PiKeyholeDuotone } from "react-icons/pi";
import {
  FaBarsProgress,
  FaCodePullRequest,
  FaDatabase,
  FaUser,
  FaWhmcs,
} from "react-icons/fa6";
import { IoBookOutline, IoMenuSharp } from "react-icons/io5";
import { GoGitPullRequest } from "react-icons/go";
import { VscGroupByRefType } from "react-icons/vsc";
import { IconType } from "react-icons/lib";
import {
  FaBook,
  FaChartBar,
  FaHome,
  FaSitemap,
  FaTimes,
  FaUserCheck,
  FaUsersCog,
} from "react-icons/fa";

// const Sidebar = () => {
//   const [submenuStates, setSubmenuStates] = useState<any>({
//     userManagement: false,
//     department: false,
//     leave: false,
//   });
//   const toggleSubmenu = (submenu: any) => {
//     setSubmenuStates((prevStates: any) => ({
//       ...prevStates,
//       [submenu]: !prevStates[submenu],
//     }));
//   };

//   const [show, setShow] = useState(false);
//   const path = usePathname();

//   return (
//     <>
//       {/* Menu icon */}

//       {show ? (
//         <div
//           onClick={() => setShow(!show)}
//           className="bg-black/50 fixed w-full h-full text-white sm:hidden max-sm:block"
//         ></div>
//       ) : (
//         <IoMenuSharp
//           size={23}
//           className="fixed top-2 right-2 z-[100] max-w-min sm:hidden max-sm:block bg-blue-50"
//           onClick={() => setShow(() => !show)}
//         />
//       )}

//       <div
//         className={`bg-white shadow-xl h-screen  w-[16rem] overflow-hidden ${
//           show ? "max-sm:-left-[0]" : "max-sm:-left-[200%] "
//         } max-sm:fixed max-sm:z-[999] transition-all duration-400`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3 min-w-max">
//           {/* <img src="" alt="" /> */}
//           <span className="text-xl whitespace-pre ">Admin</span>
//         </div>

//         {/* Menu */}
//         <div className="flex flex-col w-full h-[70%]">
//           <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden w-full scroll">
//             <li
//               onClick={() => setShow(!show)}
//               className={`box ${path === "/dashboard" ? "active" : "box"}`}
//             >
//               <Link
//                 href={"/admin/dashboard"}
//                 className="flex gap-2 items-center"
//               >
//                 <AiOutlineAppstore size={23} className="min-w-max" />
//                 <p>Dashboard</p>
//               </Link>
//             </li>
//             <li
//               onClick={() => setShow(!show)}
//               className={`box ${path === "/employee" ? "active" : "box"}`}
//             >
//               <Link href={"admin/employee"} className="flex gap-2 items-center">
//                 <HiOutlineDatabase size={23} className="min-w-max" />
//                 <p>Employee</p>
//               </Link>
//             </li>

//             {/* Submenu part */}
//             <div className="border-y py-5 border-slate-300 w-full">
//               <div className="flex flex-col gap-1">
//                 {/* User Management */}
//                 <li
//                   onClick={() => toggleSubmenu("userManagement")}
//                   className={`box flex gap-2 items-center ${
//                     submenuStates.userManagement ? "text-blue-600" : ""
//                   }`}
//                 >
//                   <div className="flex gap-2 flex-1">
//                     <BsPerson size={23} className="min-w-max" />
//                     <p className="flex-1">User Management</p>
//                   </div>
//                   <IoIosArrowDown
//                     className={
//                       submenuStates.userManagement
//                         ? "rotate-180 transition-all delay-100"
//                         : "rotate-0 transition-all delay-100"
//                     }
//                   />
//                 </li>
//                 {submenuStates.userManagement && (
//                   <ul className="flex flex-col text-[0.8rem] font-normal overflow-hidden pl-8">
//                     <li
//                       onClick={() => setShow(!show)}
//                       className={`box px-20 ${
//                         path === "/user/role" ? "active " : "box"
//                       }`}
//                     >
//                       <Link
//                         href={"/user/role"}
//                         className="flex items-center gap-2"
//                       >
//                         <GrInherit />
//                         <p>Role</p>
//                       </Link>
//                     </li>
//                     <li
//                       onClick={() => setShow(!show)}
//                       className={`box ${
//                         path === "/user/permission" ? "active" : "box"
//                       }`}
//                     >
//                       <Link
//                         href={"/user/permission"}
//                         className="flex items-center gap-2"
//                       >
//                         <PiKeyholeDuotone size={15} />
//                         <p>Permission</p>
//                       </Link>
//                     </li>
//                   </ul>
//                 )}

//                 {/* Department */}
//                 <li
//                   onClick={() => toggleSubmenu("department")}
//                   className={`box flex gap-2 items-center ${
//                     submenuStates.department ? "text-blue-600" : ""
//                   }`}
//                 >
//                   <div className="flex gap-2 flex-1">
//                     <RiBuilding3Line size={23} className="min-w-max" />
//                     <p>Department</p>
//                   </div>
//                   <IoIosArrowDown
//                     className={
//                       submenuStates.department
//                         ? "rotate-180 transition-all delay-100"
//                         : "rotate-0 transition-all delay-100"
//                     }
//                   />
//                 </li>
//                 {submenuStates.department && (
//                   <ul className="flex flex-col text-[0.8rem] font-normal pl-8 overflow-hidden h-fit px-4">
//                     <li
//                       onClick={() => setShow(!show)}
//                       className={`box ${
//                         path === "/department/courses" ? "active " : "box"
//                       }`}
//                     >
//                       <Link
//                         href={"/department/courses"}
//                         className="flex items-center gap-2"
//                       >
//                         <FaBarsProgress />
//                         <p>Courses</p>
//                       </Link>
//                     </li>
//                     <li
//                       onClick={() => setShow(!show)}
//                       className={`box ${
//                         path === "/department/subject" ? "active " : "box"
//                       }`}
//                     >
//                       <Link
//                         href={"/department/subject"}
//                         className="flex items-center gap-2"
//                       >
//                         <IoBookOutline />
//                         <p>Subject</p>
//                       </Link>
//                     </li>
//                   </ul>
//                 )}

//                 {/* Leave */}
//                 <li
//                   onClick={() => toggleSubmenu("leave")}
//                   className={`box flex gap-1 items-center ${
//                     submenuStates.leave ? "text-blue-600" : ""
//                   }`}
//                 >
//                   <div className="flex gap-2 flex-1 items-center">
//                     <TbReportAnalytics size={23} className="min-w-max" />
//                     <p className="flex-1">Leave</p>
//                   </div>
//                   <IoIosArrowDown
//                     className={
//                       submenuStates.leave
//                         ? "rotate-180 transition-all delay-100"
//                         : "rotate-0 transition-all delay-100"
//                     }
//                   />
//                 </li>
//                 {submenuStates.leave && (
//                   <ul className="flex flex-col pl-8 text-[0.8rem] font-normal overflow-hidden h-fit">
//                     <li
//                       onClick={() => setShow(!show)}
//                       className={`box ${
//                         path === "/leave/leavetype" ? "active " : "box"
//                       }`}
//                     >
//                       <Link
//                         className="flex items-center gap-2"
//                         href={"/leave/leavetype"}
//                       >
//                         <VscGroupByRefType />
//                         <p>Leave Type</p>
//                       </Link>
//                     </li>
//                     <li
//                       onClick={() => setShow(!show)}
//                       className={`box ${
//                         path === "/leave/leaverequest" ? "active " : "box"
//                       }`}
//                     >
//                       <Link
//                         className="flex items-center gap-2"
//                         href={"/leave/leaverequest"}
//                       >
//                         <GoGitPullRequest />
//                         <p>Leave Request</p>
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </div>
//             </div>
//             {/* settings */}
//             <li
//               onClick={() => setShow(!show)}
//               className={`box ${path === "/settings" ? "active" : "box"}`}
//             >
//               <Link href={"/settings"} className="flex gap-2 items-center">
//                 <SlSettings size={23} className="min-w-max" />
//                 <p>Settings</p>
//               </Link>
//             </li>
//           </ul>
//           {/* Logout btn */}
//           <div className="absolute bottom-4 py-5 border-slate-300 w-[16rem] flex justify-center items-center ">
//             <button className="w-[14rem] border border-gray-400 box active flex justify-center">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;

/**
 * const navlink
 *
 */
type NavLink = {
  title: string;
  route?: string;
  icon: IconType;
  submenu?: {
    title: string;
    routes: string;
    icons: IconType;
  }[];
};

const navlin: NavLink[] = [
  {
    title: "Dashboard",
    route: "/admin",
    icon: FaHome,
  },
  {
    title: "Employee",
    route: "/admin/employee",
    icon: FaDatabase,
  },
  {
    title: "User Managment",

    icon: FaUser,
    submenu: [
      {
        title: "Role",
        routes: "/admin/user-management/role",
        icons: FaUsersCog,
      },
      {
        title: "Permission",
        routes: "/admin/user-management/permission",
        icons: FaUserCheck,
      },
    ],
  },
  {
    title: "Department",

    icon: FaSitemap,
    submenu: [
      {
        title: "Course",
        routes: "/admin/department/course",
        icons: FaBarsProgress,
      },
      {
        title: "Subject",
        routes: "/admin/department/subject",
        icons: FaBook,
      },
    ],
  },
  {
    title: "Leave",

    icon: FaChartBar,
    submenu: [
      {
        title: "Leave Types",
        routes: "/admin/leave/leave-types",
        icons: VscGroupByRefType,
      },
      {
        title: "Leave Request",
        routes: "/admin/leave/request",
        icons: FaCodePullRequest,
      },
    ],
  },
  {
    title: "Setting",
    route: "/admin/settings",
    icon: FaWhmcs,
  },
];

const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);
  const path = usePathname();
  return (
    <aside className=" h-screen relative">
      <button
        onClick={() => setShow(!show)}
        className=" absolute box md:hidden z-[999] duration-75 "
      >
        {show ? (
          <FaTimes size={23} />
        ) : (
          <IoMenuSharp size={23} className="absoulte left-2" />
        )}
      </button>

      <div
        className={`max-md:absolute bg-white z-[90] flex items-center gap-6 md:relative px-4 py-2 h-screen flex-col w-[16rem] shadow-xl md:flex transition-all  ${
          show
            ? "translate-x-[0%] delay-75"
            : "max-md:-translate-x-[100%] duration-200"
        } `}
      >
        {/*header  */}
        <h1 className="text-3xl text-blue-500 text-center font-bold ">Admin</h1>
        <div className="overflow-y-auto w-full flex flex-col h-[70%] gap-1">
          {navlin.map((items, idx) => {
            const [subMenu, setSubMenu] = useState<boolean>();
            return (
              <>
                <Link
                  className={`"relative flex flex-col justify-between box" ${
                    path === items.route ? "text-blue-500" : ""
                  }`}
                  href={items.route || "#"}
                  key={idx}
                >
                  <div
                    className={`box justify-start hover:bg-blue-100 hover:text-blue-600 w-full hover:active ${
                      subMenu && "text-blue-600 font-bold"
                    }`}
                    onClick={() => !items.submenu && (() => setShow(!show))}
                  >
                    <items.icon size={23} className="w-fit" />
                    <h1
                      className={`text-base font-medium flex-1 hover:backdrop-blur-sm`}
                      onClick={items.submenu && (() => setSubMenu(!subMenu))}
                    >
                      {items.title}
                    </h1>
                    {items.submenu && (
                      <IoIosArrowDown
                        size={23}
                        onClick={() => setSubMenu(!subMenu)}
                        className={` ${
                          subMenu
                            ? "rotate-180 transition-all delay-75"
                            : "rotate-0 transition-all delay-75"
                        }`}
                      />
                    )}
                  </div>

                  <div
                    className={`${subMenu ? "box" : "hidden"} flex flex-col`}
                  >
                    {items.submenu &&
                      items.submenu.map((subItems, idx) => (
                        <Link
                          className={` flex w-full gap-2 pl-8 ${
                            path === subItems.routes ? "text-blue-500" : ""
                          }`}
                          href={subItems.routes}
                          key={idx}
                        >
                          <subItems.icons size={18} />
                          <h1 className={`text-base font-medium`}>
                            {subItems.title}
                          </h1>
                        </Link>
                      ))}
                  </div>
                </Link>
              </>
            );
          })}
          <div className="absolute left-0 bottom-6 py-5 w-[16rem] flex justify-center items-center ">
            <button className="w-[14rem] border active border-slate-400 box active flex justify-center">
              Logout
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
// 18 oct 2018
