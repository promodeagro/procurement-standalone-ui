"use client";
import React from "react";
import {
  Button,
  Card,
  DatePicker,
  Modal,
  Form,
  Input,
  Select,
  Typography,
  Dropdown,
  Space,
  Table,
  Menu,
} from "antd";
import { useState } from "react";
import RequestCostIcon from "../../../../../public/asset/RequestCostIcon.png";
import Image from "next/image";
import { DownOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import PurchaseRequestItemsList from "@/components/PurchaseRequestItemsList/PurchaseRequestItemsList";
import CatalogueModal from "@/components/CatalogueModal/CatalogueModal";
import { space } from "postcss/lib/list";
import { useDispatch } from "react-redux";
import { setSelectedData } from "@/context/AddItemsSlice/addItemsSlice";
import SubmitIcon from "../../../../../public/asset/SubmitIcon.png";
import BulkUpload from "@/components/BulkUpload/BulkUpload";
import DeleteModalIcon from "../../../../../public/asset/DeleteModalIcon.png"
import Link from "next/link";

const page = () => {
  //Catalog Modal--
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [SubmitModalOpen, setSubmitModalOpen] = useState(false);
  const [importtModalOpen, setImportModalOpen] = useState(false);
  const [DeleteModalOpen, setDeleteModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const showSubmitModal = () => {
    setSubmitModalOpen(true);
  };
  const showImportModal = () => {
    setImportModalOpen(true);
  };
  const showDeleteModal = () => {
    setDeleteModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setSubmitModalOpen(false);
    setImportModalOpen(false)
    setDeleteModalOpen(false)
  };

  const propsHandleClick = (data) => {
    setIsModalOpen(data);
    
  };
  //End Catalog Modal
  const [totalCost, setTotalCost] = useState(0);
  const handleTotalCost = (cost) => {
    setTotalCost(cost);
  };

  console.log(totalCost, "total cost");

  const [editMode, setEditMode] = useState(false);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const handleEdit = () => {
    setEditMode(true);
    console.log("object");
  };
  const items = [
    {
      label: <span onClick={showModal}>Catalog</span>,
      key: "0",
    },
    {
      label: <span onClick={handleEdit}>Custom</span>,
      key: "1",
    },
    {
      label: <span onClick={showImportModal}>Import</span>,
      key: "2",
    },
  ];
  return (
    <>
      <div>
        <Card className="mt-4 items-center w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 ">
              <Image src={RequestCostIcon} />
              <h2 className="text-lg font-semibold">Total Requested Cost</h2>
            </div>
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <p>Include Taxes</p>
                <h1 className="text-3xl font-semibold">Rs.{totalCost || 0}</h1>
              </span>
              <span className="flex gap-2">
                <Link href="/dashboard/requester/purchase-request/1">
                <Button type="primary" onClick={showSubmitModal} >
                  Submit
                </Button>
                </Link>
                <Button danger onClick={showDeleteModal}>Delete</Button>
                <Modal
                  width={500}
                  open={SubmitModalOpen}
                  onCancel={handleCancel}
                  footer={false}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Image src={SubmitIcon} />
                    <h2>Confirm your decision to submit this request</h2>
                    <p>This action can’t be undone</p>
                    <div className="flex gap-2">
                      <Button type="primary">Submit</Button>
                      <Button>Cancel</Button>
                    </div>
                  </div>
                </Modal>
                <Modal
                  width={500}
                  open={DeleteModalOpen}
                  onCancel={handleCancel}
                  footer={false}
                >
                  <div className="flex flex-col items-center gap-4">
                    <Image src={DeleteModalIcon} />
                    <h2>Do you want to Delete this Request?</h2>
                    <p>This action can’t be undone</p>
                    <div className="flex gap-2">
                      <Button type="primary" danger>Delete</Button>
                      <Button onClick={handleCancel}>Go Back</Button>
                    </div>
                  </div>
                </Modal>
              </span>
            </div>
          </div>
        </Card>
        <Card className="mt-4">
          <h2 className="font-semibold text-[1rem]">
            {" "}
            Request No : 06{" "}
            <span className="bg-gray-300 ml-2 rounded-2xl w-20 px-4 font-semibold">
              Draft
            </span>
          </h2>
          <Form className="mt-6">
            <div className="flex items-center gap-4 ">
              <Form.Item>
                <label className="text-[1rem] text-gray-500 font-semibold">
                  Required Delivery Date*
                </label>
                <DatePicker
                  className="w-[100%] h-10"
                  placeholder="DD.MM.YYYY"
                  onChange={onChange}
                />
              </Form.Item>
              <Form.Item className="">
                <label className="text-[1rem] text-gray-500 font-semibold">
                  Select Department*
                </label>
                <Select
                  className="w-[100%] h-10"
                  showSearch
                  style={{
                    width: 250,
                  }}
                  placeholder="Search an option.."
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item>
                <label className="text-[1rem] text-gray-500 font-semibold">
                  Select Department*
                </label>
                <Select
                  className="w-[100%] h-10"
                  showSearch
                  style={{
                    width: 250,
                  }}
                  placeholder="Search an option.."
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item>
                <label className="text-[1rem] text-gray-500 font-semibold">
                  Select Priority*
                </label>
                <Select
                  className="w-[100%] h-10"
                  showSearch
                  style={{
                    width: 250,
                  }}
                  placeholder="Search an option.."
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label ?? "").includes(input)
                  }
                  filterSort={(optionA, optionB) =>
                    (optionA?.label ?? "")
                      .toLowerCase()
                      .localeCompare((optionB?.label ?? "").toLowerCase())
                  }
                  options={[
                    {
                      value: "1",
                      label: "Not Identified",
                    },
                    {
                      value: "2",
                      label: "Closed",
                    },
                    {
                      value: "3",
                      label: "Communicated",
                    },
                    {
                      value: "4",
                      label: "Identified",
                    },
                  ]}
                />
              </Form.Item>
            </div>
            <div>
              <Form.Item>
                <label className="text-[1rem] text-gray-500 font-semibold">
                  Notes
                </label>
                <TextArea
                  showCount
                  maxLength={100}
                  onChange={onChange}
                  placeholder="Writing anything"
                  style={{
                    height: 120,
                    resize: "none",
                  }}
                />
              </Form.Item>
            </div>
          </Form>
        </Card>
        <span className="flex items-center justify-between mt-4 ml-2">
          <h2 className="text-lg font-semibold">Items List</h2>
          <Dropdown
            className="border bg-gray-400 rounded-md p-2"
            overlay={
              <Menu>
                {items.map((item) => (
                  <Menu.Item
                    key={item.key}
                    onClick={() => {
                      item.key === "0" ? showModal : item.onClick;
                    }}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu>
            }
            trigger={["click"]}
          >
            <a
              onClick={(e) => e.preventDefault()}
              className="font-semibold hover:text-white hover:bg-indigo-700"
            >
              <Space>
                Add Items
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Modal
            width={600}
            
            open={importtModalOpen}
            onCancel={handleCancel}
            footer={false}
          >
             <BulkUpload/>
          </Modal>
          <Modal
            width={900}
            open={isModalOpen}
            onCancel={handleCancel}
            footer={false}
          >
            <CatalogueModal onClick={propsHandleClick} />
          </Modal>
        </span>
        <Card className="mt-4">
          <div className="flex justify-between">
            <p className="font-semibold">Line</p>
            <p className="font-semibold w-36">Item Name</p>
            <p className="font-semibold">Category</p>
            <p className="font-semibold">Units</p>
            <p className="font-semibold">Quantity</p>
            <p className="font-semibold">Price</p>
            <p className="font-semibold">Total Cost</p>
            <p className="font-semibold">Action</p>
          </div>
        </Card>
        <div className="mt-4">
          <PurchaseRequestItemsList
            editModeData={editMode}
            handleEdit={handleEdit}
            handleTotalCost={handleTotalCost}
          />
        </div>
      </div>
    </>
  );
};

export default page;
