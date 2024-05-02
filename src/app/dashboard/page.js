"use client";

import Image from "next/image";
import { notosans } from "@/font/font";
// importing ant d components
import DashCards from "@/components/Cards/Cards";
import { Divider } from "antd";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row gap-9 w-full ml-4 ">
        <DashCards />
      </div>
    </>
  );
};

export default Dashboard;
