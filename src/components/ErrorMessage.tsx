'use client'

import React from 'react'

interface ErrorMessageProps {
  message: string
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <p className="text-red-500 text-lg font-bold mb-4">
         Ocurrió un error al cargar los álbumes
      </p>
      <p className="text-gray-600">{message}</p>
    </div>
  )
}