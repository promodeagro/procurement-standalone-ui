import React, { useEffect, useState } from "react";
import { Card, Col, Progress, Row, Typography } from "antd";
import {
  CheckCircleOutlined,
  IssuesCloseOutlined,
  ClockCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
// import api from "@/api";

const { Title, Paragraph } = Typography;

const DashCards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await api.get("/org_projects_overview");
  //       setData(result.data);
  //       console.log(result.data);
  //     } catch (error) {
  //       // handle error
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
    <div className=" mt-4 w-[90vw]">
    <Row  gutter={[34, 34]} style={{ width: "100%",  }}  >
      <Col xs={24} sm={12} md={12} lg={6} xl={5}>
        <Card
          className="h-[10rem]"
          bordered={false}
          style={{
            boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)",
            width: "100%",
            padding: "2px",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-[1rem] leading-snug text-left text-black font-semibold">
            All Requisitions{" "}
            </span>
          </div>
          <Title level={2}>20000</Title>
          
          <Paragraph className="text-sm font-normal leading-snug text-left text-black">
          current Month
          </Paragraph>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={12} lg={6} xl={5}>
        <Card
          className="h-[10rem]"
          style={{
            boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)",
            width: "100%",
            padding: "2px",
          }}
          bordered={false}
        >
          <div className="flex items-center justify-between w-[100%]  ">
            <span className="text-[1rem] leading-snug text-left text-black font-semibold">
            Approve Request{" "}
            </span>{" "}
  
          </div>
          <Title level={2}>2155</Title>
          
          <Paragraph className="pt-4 text-sm font-normal leading-snug text-left text-black">
          current Month
          </Paragraph>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={5}>
        <Card
          className="h-[10rem]"
          style={{
            boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)",
            width: "100%",
            padding: "5px",
          }}
          bordered={false}
        >
          <div className="flex items-center justify-between">
            <span className="text-[1rem] leading-snug text-left text-black font-semibold">
            Approve Request{" "}
            </span>{" "}
  
          </div>
          <Title level={2}>2155</Title>
          
          <Paragraph className="pt-4 text-sm font-normal leading-snug text-left text-black">
          current Month
          </Paragraph>
        </Card>
      </Col>
      <Col xs={24} sm={12} md={12} lg={6} xl={5}>
        <Card
          className="h-[10rem]"
          style={{
            boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)",
            width: "100%",
            padding: "5px",
          }}
          bordered={false}
        >
          <div className="flex items-center justify-between">
            <span className="text-[1rem] leading-snug text-left text-black font-semibold">
            Reject Request{" "}
            </span>{" "}
          </div>
          <Title level={2}>4545</Title>
          
          <Paragraph className="pt-4 text-sm font-normal leading-snug text-left text-black">
          current Month
          </Paragraph>
        </Card>
      </Col>

      <Col xs={24} sm={12} md={12} lg={6} xl={4}>
        <Card
          className="h-[10rem]"
          style={{
            boxShadow: "0px 0px 5px 1px rgba(0 , 0, 0, 0.2)",
            width: "100%",
            padding: "5px",
          }}
          bordered={false}
        >
          <div className="flex items-center justify-between">
            <span className="text-[1rem] leading-snug text-left text-black font-semibold">
            Track Request{" "}
            </span>{" "}
           
          </div>
          <Title level={2}>56555</Title>
          {/* <Progress type="line" percent={30} strokeWidth={16} strokeLinecap='square' strokeColor="#FF4D4F" trailColor='#F6EEFF' /> */}
          <Paragraph className="pt-4 text-sm font-normal leading-snug text-left text-black">
          current Month
          </Paragraph>
        </Card>
      </Col>
    </Row>
    </div>
    </>
  );
};

export default DashCards;
