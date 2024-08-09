import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    // <div className="flex w-full h-screen">
    //   <main className="max-w-6xl flex-1 mx-auto py-4">{children}</main>
    // </div>

    <div className="flex w-full max-h-[100vh] justify-between ">
      <Sidebar />
      <main className="container mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
