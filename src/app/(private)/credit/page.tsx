"use client"

import React from "react"
import { useState } from "react"

// Datos de ejemplo
const transactions = [
  {
    id: "MP001234",
    date: "2024-01-15",
    time: "14:30:25",
    amount: 5000,
    credits: 500,
    status: "completed",
    paymentMethod: "Tarjeta de crédito",
    reference: "REF-2024-001",
  },
  {
    id: "MP001235",
    date: "2024-01-14",
    time: "09:15:42",
    amount: 10000,
    credits: 1000,
    status: "completed",
    paymentMethod: "Transferencia bancaria",
    reference: "REF-2024-002",
  },
  {
    id: "MP001236",
    date: "2024-01-13",
    time: "16:45:18",
    amount: 2500,
    credits: 250,
    status: "pending",
    paymentMethod: "Tarjeta de débito",
    reference: "REF-2024-003",
  },
  {
    id: "MP001237",
    date: "2024-01-12",
    time: "11:20:33",
    amount: 7500,
    credits: 750,
    status: "failed",
    paymentMethod: "Tarjeta de crédito",
    reference: "REF-2024-004",
  },
  {
    id: "MP001238",
    date: "2024-01-11",
    time: "13:55:07",
    amount: 15000,
    credits: 1500,
    status: "completed",
    paymentMethod: "Mercado Pago",
    reference: "REF-2024-005",
  },
  {
    id: "MP001239",
    date: "2024-01-10",
    time: "08:30:15",
    amount: 3000,
    credits: 300,
    status: "completed",
    paymentMethod: "Tarjeta de crédito",
    reference: "REF-2024-006",
  },
]

const getStatusBadge = (status: string) => {
  const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
  switch (status) {
    case "completed":
      return `${baseClasses} bg-green-100 text-green-800`
    case "pending":
      return `${baseClasses} bg-yellow-100 text-yellow-800`
    case "failed":
      return `${baseClasses} bg-red-100 text-red-800`
    default:
      return `${baseClasses} bg-gray-100 text-gray-800`
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "completed":
      return "Completado"
    case "pending":
      return "Pendiente"
    case "failed":
      return "Fallido"
    default:
      return status
  }
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(amount)
}

export default function CreditPage() {
  const [expandedRows, setExpandedRows] = useState<string[]>([])

  const totalCredits = transactions.filter((t) => t.status === "completed").reduce((sum, t) => sum + t.credits, 0)

  const toggleRowExpansion = (transactionId: string) => {
    setExpandedRows((prev) =>
      prev.includes(transactionId) ? prev.filter((id) => id !== transactionId) : [...prev, transactionId],
    )
  }

  const isRowExpanded = (transactionId: string) => {
    return expandedRows.includes(transactionId)
  }

  return (
    <div className="min-h-screen p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-gray-900">Movimientos de Créditos</h1>
            <p className="text-gray-600">Historial de compras de monedas esqueleto</p>
          </div>
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            <span>Comprar monedas esqueleto</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Monedas Esqueleto Card */}
          <div className="bg-white rounded-lg border border-gray-600 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monedas Esqueleto</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">3000</p>
                  <p className="text-xs text-gray-500 mt-1">+12% desde el mes pasado</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-full">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-6-6c-2.475 0-4.534 1.626-5.447 3.9A9.002 9.002 0 003 9m5.145 6.145a9 9 0 00-1.162 2.556m1.162-2.556a9 9 0 016.406 3.536"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Total Adquirido Card */}
          <div className="bg-white rounded-lg border border-gray-600 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Adquirido</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{totalCredits.toLocaleString()}</p>
                  <p className="text-xs text-gray-500 mt-1">+8% desde el mes pasado</p>
                </div>
                <div className="p-3 bg-green-50 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4.5v15m7.5-7.5h-15"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Monedas Usadas Card */}
          <div className="bg-white rounded-lg border border-gray-600 shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monedas Usadas</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">300</p>
                </div>
                <div className="p-3 bg-red-50 rounded-full">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12h-15"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Historial de Transacciones</h3>
              <p className="text-sm text-gray-600">
                Mostrando {transactions.length} de {transactions.length} transacciones
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ID Transacción
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha y Hora
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monedas
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Método de Pago
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Referencia
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {transactions.map((transaction, index) => (
                    <React.Fragment key={transaction.id}>
                      <tr key={transaction.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-6 2 whitespace-nowrap text-sm text-gray-900">
                          <button
                            onClick={() => toggleRowExpansion(transaction.id)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <svg
                              className={`w-5 h-5 transform transition-transform ${isRowExpanded(transaction.id) ? "rotate-90" : ""}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                          {transaction.id}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          <div>
                            <div className="text-sm">{transaction.date}</div>
                            <div className="text-xs text-gray-500">{transaction.time}</div>
                          </div>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          <div className="flex items-center space-x-1">
                            <svg
                              className="h-4 w-4 text-purple-500"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-6-6c-2.475 0-4.534 1.626-5.447 3.9A9.002 9.002 0 003 9m5.145 6.145a9 9 0 00-1.162 2.556m1.162-2.556a9 9 0 016.406 3.536"
                              />
                            </svg>
                            <span>{transaction.credits.toLocaleString()}</span>
                          </div>
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-900">
                          {transaction.paymentMethod}
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm text-gray-500">{transaction.reference}</td>
                      </tr>

                      {/* Expanded Row Details */}
                      {isRowExpanded(transaction.id) && (
                        <tr className="bg-gray-50">
                          <td colSpan={6} className="px-6 py-2">
                            <div className="bg-white rounded-lg border border-gray-200 p-4">
                              <h4 className="text-lg font-semibold text-gray-900 mb-4">Detalle de la Transacción</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                <div>
                                  <p className="text-sm font-medium text-gray-600">ID de Transacción</p>
                                  <p className="text-sm text-gray-900 mt-1">{transaction.id}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600">Fecha</p>
                                  <p className="text-sm text-gray-900 mt-1">{transaction.date}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600">Hora</p>
                                  <p className="text-sm text-gray-900 mt-1">{transaction.time}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600">Monto Pagado</p>
                                  <p className="text-sm text-gray-900 mt-1 font-semibold">
                                    {formatCurrency(transaction.amount)}
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600">Monedas Adquiridas</p>
                                  <p className="text-sm text-gray-900 mt-1 flex items-center space-x-1">
                                    <svg
                                      className="h-4 w-4 text-purple-500"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-6-6c-2.475 0-4.534 1.626-5.447 3.9A9.002 9.002 0 003 9m5.145 6.145a9 9 0 00-1.162 2.556m1.162-2.556a9 9 0 016.406 3.536"
                                      />
                                    </svg>
                                    <span>{transaction.credits.toLocaleString()}</span>
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600">Estado</p>
                                  <p className="text-sm text-gray-900 mt-1">
                                    <span className={getStatusBadge(transaction.status)}>
                                      {getStatusText(transaction.status)}
                                    </span>
                                  </p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600">Método de Pago</p>
                                  <p className="text-sm text-gray-900 mt-1">{transaction.paymentMethod}</p>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-600">Referencia</p>
                                  <p className="text-sm text-gray-900 mt-1">{transaction.reference}</p>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-white px-4 py-3 border border-gray-200 rounded-lg">
          <div className="flex-1 flex justify-between sm:hidden">
            <button
              disabled
              className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed"
            >
              Anterior
            </button>
            <button
              disabled
              className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-400 bg-gray-100 cursor-not-allowed"
            >
              Siguiente
            </button>
          </div>
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Mostrando <span className="font-medium">1</span> a{" "}
                <span className="font-medium">{transactions.length}</span> de{" "}
                <span className="font-medium">{transactions.length}</span> transacciones
              </p>
            </div>
            <div>
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button
                  disabled
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400 cursor-not-allowed"
                >
                  <span className="sr-only">Anterior</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  disabled
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-gray-100 text-sm font-medium text-gray-400 cursor-not-allowed"
                >
                  <span className="sr-only">Siguiente</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
