"use client";
import Loader from "@/components/Loader";
import {LiveblocksProvider, RoomProvider, ClientSideSuspense} from "@liveblocks/react"
import React from 'react'

const Provider = ({children}: {children: React.ReactNode}) => {
  return (
    <LiveblocksProvider authEndpoint="/api/liveblocks-auth">
    
      <ClientSideSuspense fallback={<Loader/>}>
        {children}
      </ClientSideSuspense>
    
  </LiveblocksProvider>
  )
}

export default Provider