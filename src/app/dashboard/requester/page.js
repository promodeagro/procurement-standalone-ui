"use client"
import RequesterCard from '@/components/RequesterCard/RequesterCard'
import RequesterTable from '@/components/RequesterTable/RequesterTable'
import React, { useState } from 'react'

const page = () => {
  const [childData, setChildData] = useState('all');
  const getChildData = (data) => {
    setChildData(data);
  };

  console.log(childData , " propsData")
  return (
    <div>
      <RequesterCard sendDataToParent={getChildData}/>
      <RequesterTable dataFromParent={childData}/>
    </div>
  )
}

export default page