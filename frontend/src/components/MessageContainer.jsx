import React, { useEffect } from 'react'
import SendInput from './SendInput'
import Messages from './Messages';
import { useSelector,useDispatch } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';
import ProfilePhoto from '../profile_dummy.png'

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const isOnline = onlineUsers?.includes(selectedUser?._id);
   
    return (
        <>
            {
                selectedUser !== null ? (
                    <div className='md:min-w-[550px] flex flex-col rounded bg-white'>
                        <div className='flex gap-2 items-center  px-4 py-2 mb-2'>
                            <div className={`avatar ${isOnline ? 'online' : ''}`}>
                                <div className='w-12 rounded-full'>
                                    <img src={ProfilePhoto} alt="user-profile" />
                                </div>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex justify-between gap-2 '>
                                    <p>{selectedUser?.fullName}</p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                ) : (
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center rounded bg-white'>
                        <h1 className='text-4xl font-bold'>Hi,{authUser?.fullName} </h1>
                        <h1 className='text-2xl'>Let's start conversation</h1>

                    </div>
                )
            }
        </>

    )
}

export default MessageContainer