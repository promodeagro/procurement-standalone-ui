import React from 'react'
import Image from "next/image";
import filtericon from '../../../public/asset/filtericon.png'
import searchicon from '../../../public/asset/searchbar.png'
import { Divider, Table } from 'antd';
import { Approved, Pending, Reject } from '../Badges';
import medium from '../../../public/asset/medium.png'
import high from '../../../public/asset/high.png'
import low from '../../../public/asset/low.png'
import requestedby from '../../../public/asset/requestedby.png'

const columns = [
    {
        title: 'Request ID',
        dataIndex: 'id',
        className:"mb-6"
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
        status: <Reject />,
        Location: 'Voligonda Farm',
        date: '06/07/2023',
        deliveryDate: '06/07/2023',
        totalConst: 'Rs.27000',
        priority: <div className='flex items-center gap-2'>
            <Image src={medium} alt='Medium' height={16} width={16} />
            <span className='medium-priority mr-1 text-yellow-400 text-opacity-100'>{'Medium'}</span>
        </div>,
        requestedBy: <div className='flex items-center gap-2'>
            <Image src={requestedby} alt='Medium' height={25} width={25} />
            <span className='medium-priority mr-1'>{'You'}</span>
        </div>
    },
    {
        key: '2',
        id: '#1243',
        status: <Approved />,
        Location: 'Voligonda Farm',
        date: '06/07/2023',
        deliveryDate: '06/07/2023',
        totalConst: 'Rs.27000',
        priority: <div className='flex items-center gap-2'>
            <Image src={high} alt='Medium' height={16} width={16} />
            <span className='medium-priority mr-1 text-green-600 text-opacity-100'>{'High'}</span>
        </div>,
        requestedBy: <div className='flex items-center gap-2'>
            <Image src={requestedby} alt='Medium' height={25} width={25} />
            <span className='medium-priority mr-1'>{'You'}</span>
        </div>
    },
    {
        key: '3',
        id: '#1243',
        status: <Pending />,
        Location: 'Voligonda Farm',
        date: '06/07/2023',
        deliveryDate: '06/07/2023',
        totalConst: 'Rs.27000',
        priority: <div className='flex items-center gap-2'>
            <Image src={low} alt='Medium' height={16} width={16} />
            <span className='medium-priority mr-1 text-red-600 text-opacity-100'>{'Low'}</span>
        </div>,
        requestedBy: <div className='flex items-center gap-2'>
            <Image src={requestedby} alt='Medium' height={25} width={25} />
            <span className='medium-priority mr-1'>{'You'}</span>
        </div>
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
