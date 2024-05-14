"use client";
import React, { useState } from "react";
import { Button, Card, Col, Row } from "antd";
import drafrequest from "../../../public/asset/drafrequest.png";
import Image from "next/image";
import allrequest from "../../../public/asset/allrequest.png";
import pendingrequest from "../../../public/asset/pendingrequest.png";
import rejectrequest from "../../../public/asset/rejectrequest.png";
import approvedrequest from "../../../public/asset/approvedrequest.png";
import Link from "next/link";

const RequesterCard = ({sendDataToParent} ) => {
    const [size, setSize] = useState("large");
    const [selectedCard, setSelectedCard] = useState("all");

    const handleCardClick = (data) => {
        sendDataToParent(data);
        setSelectedCard(data);
    };

    return (
        <>
            <div className="flex items-center justify-between pt-8 pb-8">
                <h1 className="font-bold pl-4">Purchase Requisitions</h1>
                <Button type="primary" size={size} className="mr-4"><Link href={"/dashboard/requester/purchase-request"}>
                    + Create Request
                </Link>
                </Button>
            </div>
            <Row gutter={16} className=" gap-y-2 gap-x-2 overflow-x-hidden " style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', justifyContent:"space-between" }}>
                <Col span={4} className="w-auto">
                    <Card
                        bordered={false}
                        className={selectedCard === "all" ? "border-b-4 border-blue-500" : ""}
                        onClick={() => handleCardClick("all")}
                        style={{ width: '12rem' }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-200 rounded-full p-1">
                                <Image src={allrequest} alt="" />
                            </div>
                            <div className="flex items-center flex-col">
                                <p className="font-bold">1354</p>
                                <p className="text-sm">All Request</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={4} className="w-auto">
                    <Card
                        bordered={false}
                        className={selectedCard === "pending" ? "border-b-4 border-blue-500" : ""}
                        onClick={() => handleCardClick("pending")}
                        style={{ width: '12rem' }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-200 rounded-full p-1">
                                <Image src={pendingrequest} alt="" />
                            </div>
                            <div>
                                <p className="font-bold">1354</p>
                                <p className="text-sm">Pending Request</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={4} className="w-auto">
                    <Card
                        bordered={false}
                        className={selectedCard === "reject" ? "border-b-4 border-blue-500" : ""}
                        onClick={() => handleCardClick("reject")}
                        style={{ width: '12rem' }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-200 rounded-full p-1">
                                <Image src={rejectrequest} alt="" />
                            </div>
                            <div className="flex items-center flex-col">
                                <p className="font-bold">1354</p>
                                <p className="text-sm">Reject Requests</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={4} className="w-auto">
                    <Card
                        bordered={false}
                        className={selectedCard === "approved" ? "border-b-4 border-blue-500" : ""}
                        onClick={() => handleCardClick("approved")}
                        style={{ width: '13rem' }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="bg-gray-200 rounded-full p-1">
                                <Image src={approvedrequest} alt="" />
                            </div>
                            <div className="flex items-center flex-col">
                                <p className="font-bold">1354</p>
                                <p className="text-sm w-[8rem]">Approved Requests</p>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col span={4} className="w-auto mr-4">
                    <Card
                        bordered={false}
                        className={selectedCard === "draft" ? 'border-b-4 border-blue-500' : ''}
                        onClick={() => handleCardClick("draft")}
                        style={{ width: '11rem',marginRight:"1rem" }}
                    >
                        <div className="flex items-center justify-center">
                            <div className="bg-gray-200 rounded-full p-1">
                                <Image src={drafrequest} alt="" />
                            </div>
                            <div>
                                <div className="flex items-center flex-col">
                                    <p className="font-bold">1354</p>
                                    <p className="text-sm">Draft Requests</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default RequesterCard;
