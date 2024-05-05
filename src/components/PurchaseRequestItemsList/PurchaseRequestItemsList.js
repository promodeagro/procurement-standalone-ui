"use client";
import React, { useEffect, useState } from "react";
import { Card, Input } from "antd";
import { useSelector } from "react-redux";

const PurchaseRequestItemsList = ({ editModeData, handleEdit }) => {
  const selectedData = useSelector((state) => state.catalog.selectedData);
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setEditMode(editModeData);
  }, [editModeData]);

  useEffect(() => {
    setData(selectedData.map((item, index) => ({ ...item, key: index })));
  }, [selectedData]);

  return (
    <>
      <Card>
        <div>
          {data.map((item, index) => (
            <div key={index} className=" flex gap-[6.25rem] mb-6">
              <p className="font-semibold">{parseInt(item.key) + 1}</p>
              <p className="font-semibold w-[9.5rem] border">{item.Items}</p>
              <p className="font-semibold">{item.category}</p>
              <p className="font-semibold">{item.Units}</p>
              <p className="font-semibold">{item.Quantity}</p>
              <p className="font-semibold">{item.Cost}</p>
              <p className="font-semibold">
                {parseInt(item.Quantity) + parseInt(item.Cost)}
              </p>
              <p className="font-semibold"></p>
            </div>
          ))}
          {editMode && (
          <div className="flex gap-10 justify-between mb-6">
            <p className=" font-semibold text-lg w-10">{parseInt(data.length) + 1}</p>
            <Input
              type="text"
              placeholder="Enter something"
              className="font-semibold"
            />
            <Input
              type="text"
              placeholder="Enter something"
              className="font-semibold"
            />
            <Input
              type="text"
              placeholder="Enter something"
              className="font-semibold"
            />
            <Input
              type="text"
              placeholder="Enter something"
              className="font-semibold"
            />
            <Input
              type="text"
              placeholder="Enter something"
              className="font-semibold"
            />
            <Input
              type="text"
              placeholder="Enter something"
              className="font-semibold"
            />
            <Input
              type="text"
              placeholder="Enter something"
              className="font-semibold"
            />
          </div>)}
        </div>
      </Card>
    </>
  );
};

export default PurchaseRequestItemsList;
