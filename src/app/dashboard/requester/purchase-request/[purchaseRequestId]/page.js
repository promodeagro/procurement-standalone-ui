"use client"
import React, { useState } from 'react'
import Image from "next/image";
import rightArow from '../../../../../../public/asset/rightArow.png'
import allrequest from "../../../../../../public/asset/allrequest.png";
import { Pending, Status } from '@/components/Badges';
import high from '../../../../../../public/asset/BadgeRibbonHigh.png'
import { Button, Flex, Upload } from 'antd';
import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import atachtmentIcon from '../../../../../../public/asset/atachtmentIcon.png'
import { DownloadOutlined } from '@ant-design/icons';




const props = {
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange({ file, fileList }) {
        if (file.status !== 'uploading') {
            console.log(file, fileList);
        }
    },
    showUploadList: {
        showDownloadIcon: true,
        downloadIcon: 'Download',
        showRemoveIcon: true,
        removeIcon: <StarOutlined onClick={(e) => console.log(e, 'custom removeIcon event')} />,
    },
};

const page = () => {

    const [size, setSize] = useState('large'); // default is 'middle'

    return (
        <>
            <div className='flex items-center p-4 gap-2'>
                <p>Purchase Requisitions</p>
                <Image src={rightArow} alt='' />
                <p className='text-indigo-700 text-opacity-100 font-extrabold'>Purchase Request</p>
            </div>
            <div className='flex'>
                <div>
                    <div className='flex items-center  bg-white border-none p-4 ml-4 justify-between rounded-lg' style={{ width: '47rem' }}>
                        <div className='flex items-center'>
                            <div className="bg-gray-200 rounded-full p-1">
                                <Image src={allrequest} alt="" />
                            </div>
                            <h1 className='font-extrabold ml-2'>Total Requested Cost</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='font-thin text-gray-600'>Include Taxes</p>
                            <p className='font-extrabold text-xl'>Rs.7920</p>
                        </div>
                    </div>
                    <div style={{ width: '47rem' }} className=' bg-white border-none rounded-lg p-3 ml-4 mt-4 flex items-center justify-around'>
                        <div className='space-y-6'>
                            <div className='flex items-center'>
                                <h1>Request No : 06</h1>
                                <Pending />
                            </div>
                            <div className=''>
                                <p>Required Delivery Date</p>
                                <p>30/05/2002</p>
                            </div>
                            <div>
                                <p>Notes</p>
                                <p>Need Budget for New office Setup in Italy</p>
                            </div>
                        </div>
                        <div>
                            <p>Select Department</p>
                            <p className='font-bold'>Finance</p>
                        </div>
                        <div>
                            <p>Select Location</p>
                            <p className='font-bold'>Usa-Branch</p>
                        </div>
                        <div>
                            <p>Select Priority</p>
                            <Image src={high} alt='' className='w-8' />
                        </div>
                    </div>
                </div>
                <div style={{ width: '20rem' }} className=' bg-white border-none rounded-lg p-5 ml-5  '>
                    <p className='font-bold ml-16 pb-6'>Timeline & Actions</p>
                    <Flex gap="small" wrap className='flex flex-col w-48 ml-7 gap-4'>
                        <Button className=' -purple-600 -opacity-100 text-indigo-700 text-opacity-100'>Repeat</Button>
                        <Button className=' -red-600 -opacity-100 text-red-600 text-opacity-100'>Delete</Button>
                        <Button className='bg-blue-500'>Timeline</Button>
                        <Button className='bg-yellow-400'>Add comment</Button>
                    </Flex>
                </div>
            </div>
            <div>
                <table className="ml-4 mt-4" style={{ width: '68rem' }}>
                    <thead className='bg-white rounded-lg p-4' style={{ borderRadius: '12px', marginBottom: '1rem' }}>
                        <tr>
                            <th className="px-4 py-2">Line</th>
                            <th className="px-4 py-2">Item Name</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Units</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Total Cost</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-gray-100 rounded-lg p-4'>
                        <tr>
                            <td className="px-4 py-2">01</td>
                            <td className="px-4 py-2">Bitter Gourd Seed (1000)</td>
                            <td className="px-4 py-2">Seeds</td>
                            <td className="px-4 py-2">Piece</td>
                            <td className="px-4 py-2">95</td>
                            <td className="px-4 py-2">Rs.36</td>
                            <td className="px-4 py-2">Rs.3420</td>
                            <td className="px-4 py-2">
                                <Status />
                            </td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">01</td>
                            <td className="px-4 py-2">Biovita, Sea Weed Extract</td>
                            <td className="px-4 py-2">Fertilizers</td>
                            <td className="px-4 py-2">ML</td>
                            <td className="px-4 py-2">5</td>
                            <td className="px-4 py-2">Rs.700</td>
                            <td className="px-4 py-2">Rs.3500</td>
                            <td className="px-4 py-2"><Status /></td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">01</td>
                            <td className="px-4 py-2">Movento, Insecticide</td>
                            <td className="px-4 py-2">Pesticides</td>
                            <td className="px-4 py-2">Kg</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">Rs.500</td>
                            <td className="px-4 py-2">Rs.1000</td>
                            <td className="px-4 py-2"><Status /></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <div className='flex items-center max-w-[400px] p-2 ml-4 mt-8 mb-4 justify-between'>
                    <h5>Attachment Document</h5>
                    <Upload {...props} >
                        <Button className='bg-gray-200 border-none'>Browse files</Button>
                    </Upload>
                </div>
                <div className='flex items-center'>
                    <div className='flex items-center max-w-[400px] gap-6 ml-4 rounded-lg mb-4 bg-white border-none p-4'>
                        <div className=''>
                            <div className='flex items-center gap-2 mb-4'>
                                <Image src={atachtmentIcon} alt='' />
                                <div>
                                    <h2 className='font-extrabold'>Committe_Approval.pdf</h2>
                                    <p className='text-[12px]'>200kb</p>
                                </div>
                                <div className='ml-7'>
                                    <Button size={size} className='flex items-center gap-2 bg-gray-200'>
                                        Download
                                        <DownloadOutlined />
                                    </Button>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <Image src={atachtmentIcon} alt='' />
                                <div>
                                    <h2 className='font-extrabold'>Committe_Approval.pdf</h2>
                                    <p className='text-[12px]'>200kb</p>
                                </div>
                                <div className='ml-7'>
                                    <Button size={size} className='flex items-center gap-2 bg-gray-200'>
                                        Download
                                        <DownloadOutlined />
                                    </Button>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <Image src={atachtmentIcon} alt='' />
                                <div>
                                    <h2 className='font-extrabold'>Committe_Approval.pdf</h2>
                                    <p className='text-[12px]'>200kb</p>
                                </div>
                                <div className='ml-7'>
                                    <Button size={size} className='flex items-center gap-2 bg-gray-200'>
                                        Download
                                        <DownloadOutlined />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ml-4 max-w-[400px]'>
                        <h3>Comment</h3>
                        <div className='rounded-lg mb-4 bg-white border-none p-4 flex flex-col'>
                            <label>Label</label>
                            <textarea placeholder='need for office setup' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
