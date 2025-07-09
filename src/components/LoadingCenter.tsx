'use client'

import React from 'react'

export default function LoadingCenter() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin shadow-md"></div>
    </div>
  )
}