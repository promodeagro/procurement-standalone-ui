"use client";

import Image from "next/image";
import { notosans } from "@/font/font";
// importing ant d components
import { CalendarFilled } from "@ant-design/icons";
import DashCards from "@/components/Cards/Cards";
import PieCharts from "@/components/Charts/PieChart";
import SimpleBarChart from "@/components/Charts/BarChart";
import { Divider } from "antd";
import RequesterTable from "@/components/RequesterTable/RequesterTable";


const Dashboard = () => {
  const childData = 'all';
  return (
    <>
      <div className="flex flex-row gap-9 w-full ml-4 ">
        <DashCards />
      </div>
      <div className="flex w-[100%] mt-8">
        <div className="bg-white w-[40%] mt-3 ml-3 rounded-xl" style={{boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)"}}>
          <div className="flex items-center justify-between p-4 ">
            <p className="text-[1rem] font-semibold">Requisition Stats</p>
            <span>
              <p className="text-[1rem] font-semibold bg-white hover:bg-gray-100 p-1 rounded-lg cursor-pointer">
                Calender <CalendarFilled />
              </p>
            </span>
          </div>
          <PieCharts />
          <div className="flex w-[100%] items-center justify-center gap-3 ">
            <span className="bg-[#00C49F] h-3 w-3 rounded-lg"></span>
            <p>Apptoved</p>
            <span className="bg-[#FFBB28] h-3 w-3 rounded-lg"></span>
            <p>Pending</p>
            <span className="bg-[#FF8042] h-3 w-3 rounded-lg"></span>
            <p>Reject</p>
          </div>
        </div>
        <div className="bg-white w-[60%] h-[25rem] mt-3 ml-3 rounded-xl" style={{boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)"}}>
          <div className="flex items-center justify-between p-4 ">
            <p className="text-[1rem] font-semibold">Requisition Stats</p>
            <span>
              <p className="text-[1rem] font-semibold bg-white hover:bg-gray-100 p-1 rounded-lg cursor-pointer">
                Calender <CalendarFilled />
              </p>
            </span>
          </div> 
          <SimpleBarChart />
        </div>
        <div className="h-[10rem]"></div>
      </div>
      <RequesterTable dataFromParent={childData}/>
    </>
  );
};

export default Dashboard;
