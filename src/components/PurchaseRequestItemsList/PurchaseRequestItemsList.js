"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  DatePicker,
  Form,
  Input,
  Select,
  Typography,
  Dropdown,
  Space,
  Table,
} from "antd";
const PurchaseRequestItemsList = ({ editModeData, handleEdit }) => {
  const [editMode, seteditMode] = useState(false);
  useEffect(() => {
    seteditMode(editModeData);
  }, [editModeData]);
 console.log(editModeData)
  console.log(editMode);
  const columns = [
    {
      dataIndex: "Line",
      render: (_, record) => (
        <Input
          value={record.Line}
          onChange={(e) => handleInputChange(e, record.key, "Line")}
          hidden={!editMode}
        />
      ),
    },
    {
      dataIndex: "ItemName",
      render: (_, record) => (
        <Input
          value={record.ItemName}
          onChange={(e) => handleInputChange(e, record.key, "ItemName")}
          hidden={!editMode}
        />
      ),
    },
    {
      dataIndex: "Category",
      render: (_, record) => (
        <Input
          value={record.Category}
          onChange={(e) => handleInputChange(e, record.key, "Category")}
          hidden={!editMode}
        />
      ),
      className: "custom-column",
    },
    {
      dataIndex: "Units",
      render: (_, record) => (
        <Input
          value={record.Units}
          onChange={(e) => handleInputChange(e, record.key, "Units")}
          hidden={!editMode}
        />
      ),
      className: "custom-column",
    },
    {
      dataIndex: "Quantity",
      render: (_, record) => (
        <Input
          value={record.Quantity}
          onChange={(e) => handleInputChange(e, record.key, "Quantity")}
          hidden={!editMode}
        />
      ),
      className: "custom-column",
    },
    {
      dataIndex: "Price",
      render: (_, record) => (
        <Input
          value={record.Price}
          onChange={(e) => handleInputChange(e, record.key, "Price")}
          hidden={!editMode}
        />
      ),
      className: "custom-column",
    },
    {
      dataIndex: "TotalCost",
      render: (_, record) => (
        <Input
          value={record.TotalCost}
          onChange={(e) => handleInputChange(e, record.key, "Total Cost")}
          hidden={!editMode}
        />
      ),
      className: "custom-column",
    },
    {
      dataIndex: "Action",
      render: (_, record) => (
        <Input
          value={record.Action}
          onChange={(e) => handleInputChange(e, record.key, "Action")}
          hidden={!editMode}
        />
      ),
      className: "custom-column",
    },
  ];
  const [data, setData] = useState([{}]);

  //   const [editMode, setEditMode] = useState(false);

  //   const handleEdit = () => {
  //       setEditMode(true);
  //   };

  const handleSave = () => {
    setEditMode(false);
  };
  const handleInputChange = (e, key, field) => {
    const newData = data.map((item) => {
      if (item.key === key) {
        return { ...item, [field]: e.target.value };
      }
      return item;
    });
    console.log(newData, "changed Data");
    setData(newData);
  };
  return (
    <>
      <Card>
        <Table columns={columns} dataSource={data} size="small" />
      </Card>
    </>
  );
};

export default PurchaseRequestItemsList;
