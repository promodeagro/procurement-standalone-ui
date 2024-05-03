import React from 'react'
import Image from "next/image";
import filtericon from '../../../public/asset/filtericon.png'
import searchicon from '../../../public/asset/searchbar.png'
import { Divider, Table } from 'antd';

const columns = [
    {
        title: 'Request ID',
        dataIndex: 'id',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Location',
        dataIndex: 'Location',
    },
    {
        title: 'Creation Date',
        dataIndex: 'date',
    },
    {
        title: 'Required Delivery Date',
        dataIndex: 'deliveryDate',
    },
    {
        title: 'Total cost',
        dataIndex: 'totalConst',
    },
    {
        title: 'Priority',
        dataIndex: 'priority',
    },
    {
        title: 'Requested By',
        dataIndex: 'requestedBy',
    },
];

const data = [
    {
        key: '1',
        id: '#1243',
        status: 'pending',
        Location:'Voligonda Farm',
        date: '06/07/2023',
        deliveryDate:'06/07/2023',
        totalConst:'Rs.27000',
        priority:'Medium',
        requestedBy:'you'
    },
    {
        key: '2',
        id: '#1243',
        status: 'pending',
        Location:'Voligonda Farm',
        date: '06/07/2023',
        deliveryDate:'06/07/2023',
        totalConst:'Rs.27000',
        priority:'Medium',
        requestedBy:'you'
    },
    {
        key: '3',
        id: '#1243',
        status: 'pending',
        Location:'Voligonda Farm',
        date: '06/07/2023',
        deliveryDate:'06/07/2023',
        totalConst:'Rs.27000',
        priority:'Medium',
        requestedBy:'you'
    },
  
];


const RequesterTable = () => {
    return (
        <>
            <div className='bg-white mt-4'>
                <div className='flex items-center justify-start pl-8 mb-6'>
                    <button className='flex items-center hug w-hug border-2 rounded-lg p-2 border-purple-700 text-purple-700'>
                        <Image src={filtericon} alt='' />
                        Filter
                    </button>
                    <div className='ml-4 border-2 rounded-lg p-2 flex items-center' style={{ width: '20rem' }}>
                        <Image src={searchicon} alt='' className="mr-2" />
                        <input
                            type='text'
                            placeholder='Search Users by name, date...'
                            className='placeholder-gray-400 placeholder-opacity-50 text-gray-700 focus:border-none focus:outline-none'
                            style={{ width: '15rem' }}
                        />
                    </div>
                </div>
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        </>
    )
}

export default RequesterTable
