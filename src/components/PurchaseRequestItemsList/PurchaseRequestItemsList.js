import React, { useEffect, useState } from "react";
import { Button, Card, Input } from "antd";
import Image from "next/image";
import { useSelector } from "react-redux";
import Delete from "../../../public/asset/DeleteIcon.png";
import EditIcon from "../../../public/asset/EditIcon.png";
import DoneIcon from "../../../public/asset/DoneIcon.png";

const PurchaseRequestItemsList = ({
  editModeData,
  handleEdit,
  handleTotalCost,
}) => {
  const selectedData = useSelector((state) => state.catalog.selectedData);
  const [editMode, setEditMode] = useState(false);
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1); // State to store the index of the item being edited
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    setEditMode(editModeData);
  }, [editModeData]);

  useEffect(() => {
    if (!editModeData || editModeData && selectedData.length > 0) {
      setData(
        selectedData.map((item, index) => ({
          ...item,
          key: index,
          Items: item.Items || "",
          category: item.category || "",
          Units: item.Units || "",
          Quantity: item.Quantity || "",
          Cost: item.Cost || "",
        }))
      );
    }
  }, [selectedData, editModeData]);

  useEffect(() => {
    // Convert Cost and Quantity to numbers before calculating total cost
    const updatedData = data.map((item) => ({
      ...item,
      Cost: parseFloat(item.Cost),
      Quantity: parseFloat(item.Quantity),
    }));

    // Calculate total cost
    const newTotalCost = updatedData.reduce(
      (acc, item) => acc + item.Cost * item.Quantity,
      0
    );
    setTotalCost(newTotalCost);
    // Pass total cost to parent component
    handleTotalCost(newTotalCost);
  }, [data]);

  const handleDelete = (key) => {
    setData(data.filter((item) => item.key !== key));
  };

  const handleEditClick = (index) => {
    setEditingIndex(index);
  };

  const handleEditSave = (index, field, value) => {
    if (index >= 0 && index < data.length) {
      const newDataList = [...data];
      newDataList[index][field] = value;
      setData(newDataList);
    }
  };

  const handleDoneEdit = (totalCost) => {
    setEditingIndex(-1);
    handleAddNewItem();
    setEditMode(true);
    handleTotalCost(totalCost);
  };

  const handleSubmit = () => {
    if (editingIndex !== -1) {
      const editedItem = data[editingIndex];
      // Call handleEdit function to pass the edited data
      handleEdit(editedItem);
    }
  };

  const handleAddNewItem = () => {
    const newItem = {
      key: data.length,
      Items: "",
      category: "",
      Units: "",
      Quantity: "",
      Cost: "",
    };
    setData([...data, newItem]);
    setEditingIndex(data.length);
  };

  useEffect(() => {
    if (editMode) {
      handleAddNewItem();
    }
  }, [editMode]);

  return (
    <>
      <Card>
        <div>
          {data.map((item, index) => (
            <div key={index} className=" flex gap-[4rem] mb-6">
              <p className="font-semibold">{parseInt(item.key) + 1}</p>
              {editingIndex === index ? (
                <>
                  <input
                    type="text"
                    placeholder="Items"
                    className="font-semibold w-[10rem] border rounded-lg px-1"
                    value={item.Items}
                    onChange={(e) =>
                      handleEditSave(index, "Items", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Category"
                    className="font-semibold border w-[5rem] rounded-lg px-1"
                    value={item.category}
                    onChange={(e) =>
                      handleEditSave(index, "category", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Units"
                    className="font-semibold border w-[5rem] rounded-lg px-1"
                    value={item.Units}
                    onChange={(e) =>
                      handleEditSave(index, "Units", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Quantity"
                    className="font-semibold border w-[5rem] rounded-lg px-1"
                    value={item.Quantity}
                    onChange={(e) =>
                      handleEditSave(index, "Quantity", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Cost"
                    className="font-semibold rounded-lg border px-2"
                    value={item.Cost}
                    onChange={(e) =>
                      handleEditSave(index, "Cost", e.target.value)
                    }
                  />
                  <button type="delete" className=" " onClick={() => handleDoneEdit(totalCost)}>
                    <Image className="w-[1.5rem]" width={200} src={DoneIcon} />
                  </button>
                </>
              ) : (
                <>
                  <p className="font-semibold w-[10rem] ">{item.Items}</p>
                  <p className="font-semibold w-[5rem]">{item.category}</p>
                  <p className="font-semibold w-[5rem]">{item.Units}</p>
                  <p className="font-semibold w-[5rem]">{item.Quantity}</p>
                  <p className="font-semibold w-[4rem]">{item.Cost}</p>
                  <p className="font-semibold" id="total-cost">
                    {parseInt(item.Quantity) * parseFloat(item.Cost)}
                  </p>
                  <div className="flex items-center justify-center gap-x-4 w-[4rem]">
                    <Image
                      className="w-4 h-4 cursor-pointer"
                      src={Delete}
                      onClick={() => handleDelete(item.key)}
                    />

                    <Image
                      className="h-5 w-5 cursor-pointer"
                      src={EditIcon}
                      onClick={() => handleEditClick(index)}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default PurchaseRequestItemsList;
