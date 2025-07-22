'use client'

import React from 'react'
import { AlertTriangle } from "lucide-react";
interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
      <div className="flex flex-col items-center justify-center h-screen px-4">
          <div
              className="flex items-center gap-3 p-5 text-red-800 rounded-xl bg-red-100  dark:bg-gray-800 dark:text-red-400"
              role="alert"
          >
              <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-300" />
              <p className="text-lg font-semibold">{message}</p>
          </div>
      </div>


  )
}