"use client";
import Loader from "@/components/Loader";
import { getClerkUsers ,getDocumentUsers} from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import {LiveblocksProvider, RoomProvider, ClientSideSuspense} from "@liveblocks/react"
import React from 'react'
import { text } from "stream/consumers";
import { useUser } from '@clerk/nextjs';

const Provider = ({children}: {children: React.ReactNode}) => {

  const {user:clerkUser}= useUser()
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth"
    resolveUsers={async({userIds})=>{
      const users = await getClerkUsers({userIds})

      return users
    }} resolveMentionSuggestions = {async({text,roomId})=>{
      const roomUsers = await getDocumentUsers({roomId,
        currentUser:clerkUser?.emailAddresses[0].emailAddress!,text
      })
      return roomUsers;
    }}>
      
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
    
  </LiveblocksProvider>
  )
}

export default Provider