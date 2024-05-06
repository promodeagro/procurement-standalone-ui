import { Button } from "antd";
import React from "react";

const BulkUpload = () => {
  return (
    <>
      <div className="flex flex-col gap-8 p-4">
        <span>
          <h2 className="font-bold text-[1.5rem]">Bulk Import Data</h2>
          <p className="text-sm">Upload your data through CSV. File</p>
        </span>
        <div className="flex gap-2 items-center">
          <span className="">
            <h2 className="font-bold text-lg">Step 1 : Download Sample Template File</h2>
            <p>
              Download sample template by clicking the button below. you can add
              the item data according to the template file
            </p>
          </span>
          <Button>Download</Button>
        </div>
        <div className="flex items-center">
          <span>
            <h2 className="font-bold text-lg">Step 2 :Upload CSV</h2>
            <p>
            Download sample template by clicking the button below. you can add the item data according to the template file
            </p>
          </span>
          <Button>Uploadfile</Button>
        </div>
      </div>
    </>
  );
};

export default BulkUpload;
