export const Pending = () => {

    return (
        <div className="inline-block bg-yellow-100 rounded-full border text-center text-[#0c0d0e] text-xs font-normal font-['Roboto'] leading-tight px-2 py-1">
            Pending
        </div>

    )
}

export const Approved = () => {

    return (
        <div className="w-fit  bg-green-300 rounded-md border text-center text-[#0c0d0e] text-xs font-normal font-['Roboto'] leading-tight px-3 py-2">
            Approved
        </div>
    )
}


export const Reject = () => {

    return (
        <div className="w-fit bg-pink-300 rounded-md border text-center text-[#0c0d0e] text-xs font-normal font-['Roboto'] leading-tight px-3 py-2">
            Reject
        </div>
    )
}

export const Draft = () => {

    return (
        <div className="bg-blue-100 text-xs font-normal text-[#0c0d0e] font-['Roboto'] leading-tight">
            Draft
        </div>
    )
}

export const Status = () => {
    return (
        <div className="bg-yellow-300 text-yellow-500 border border-yellow-400 w-36 rounded-sm">Waiting For Approval</div>
    )
}



