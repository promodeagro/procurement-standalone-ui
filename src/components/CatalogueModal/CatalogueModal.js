import React from "react";
import { useState } from "react";
import { Button, Table } from "antd";
import { selectSelectedData } from "@/context/AddItemsSlice/addItemsSlice";
import { useDispatch, useSelector } from "react-redux";
const CatalogueModal = (props) => {
  

  const handleClick = () => {
    // Call the function passed from the parent and pass data back
    
    props.onClick(false , selectedData);
  };
  const columns = [
    {
      title: "Items",
      dataIndex: "Items",
    },
    {
      title: "Units",
      dataIndex: "Units",
    },
    {
      title: "category",
      dataIndex: "category",
    },
    {
      title: "Quantity",
      dataIndex: "Quantity",
    },
    {
      title: "Cost",
      dataIndex: "Cost",
    },
    {
      title: "Stock Availability",
      dataIndex: "StockAvailability",
    },
  ];
  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      Items: `Edward King ${i}`,
      Units: "Each",
      category: `Tech ${i}`,
      Quantity: `London, Park Lane no. ${i}`,
      Cost: `${i}`,
      StockAvailability: `1${i}`,
    });
  }
  const [selectedData ,setSelectedData] = useState() 
console.log(selectedData, " selected row data")

  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys ,selectedRows) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
    setSelectedData(selectedRows)
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  return (
    <>
      <div>
        <div
          style={{
            marginBottom: 16,
          }}
          className="flex items-center justify-between"
        >
          <span
            style={{
              marginLeft: 8,
            }}
            className="flex gap-2 items-center"
          >
            <h2 className="text-lg font-semibold">Inventory</h2>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : "Selected 0 items"}
          </span>
          <Button onClick={handleClick} className="mr-6">Add Items</Button>
        </div>
        <Table
          className="w-[80rem]"
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
        />
      </div>
    </>
  );
};

export default CatalogueModal;
