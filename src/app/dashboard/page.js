"use client";

import Image from "next/image";
import { notosans } from "@/font/font";
// importing ant d components
import {CalendarFilled} from "@ant-design/icons" 
import DashCards from "@/components/Cards/Cards";
import PieCharts from "@/components/Charts/PieChart";
import { Divider } from "antd";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-row gap-9 w-full ml-4 ">
        <DashCards />
      </div>
      <div className="flex w-[100%]">
        <div className="bg-white w-[50%] mt-3 ml-3 ">
          <div className="flex items-center justify-between"><p className="text-[1rem] p-2 text-gray-500">Requisition Stats</p>
          <span><p className="text-[1rem] font-semibold bg-white hover:bg-gray-300 p-1 rounded-lg cursor-pointer">Calender <CalendarFilled />
          </p></span>
          </div>
          <PieCharts />
        </div>
        <div className="h-[10rem]">

        </div>
      </div>
    </>
  );
};

export default Dashboard;
