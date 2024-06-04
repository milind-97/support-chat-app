import React, { useEffect, useRef } from 'react'
import {useSelector} from "react-redux";
import ProfilePhoto from '../profile_dummy.png'

const Message = ({message}) => {
    const scroll = useRef();
    const {authUser,selectedUser} = useSelector(store=>store.user);
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'Asia/Kolkata'
    };

    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"});
    },[message]);
    
    return (
        <div ref={scroll} className={`chat ${message?.senderId === authUser?._id ? 'chat-end' : 'chat-start'}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img alt="Tailwind CSS chat bubble component" src={message?.senderId === authUser?._id ? ProfilePhoto  : ProfilePhoto } />
                </div>
            </div>
            
            <div className={`chat-bubble ${message?.senderId !== authUser?._id ? 'bg-gray-200 text-black' : ''} `}>{message?.message}</div>
            <div className="">
                <time className="text-xs opacity-50">{new Date(message?.createdAt).toLocaleString('en-IN', options)}</time>
            </div>
        </div>
    )
}

export default Message