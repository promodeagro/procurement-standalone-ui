"use client";

import Image from "next/image";
import { notosans } from "@/font/font";
import RequesterTable from "@/components/RequesterTable/RequesterTable";
import RequesterCard from "@/components/RequesterCard/RequesterCard";
// importing ant d components
import {
    Divider,
} from "antd";

const Dashboard = () => {
    return (
        <>

<RequesterCard/>
            <RequesterTable/>
        </>
    );
};

export default Dashboard;