"use client"

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { deleteAppointment } from '@/lib/features/appointmentsSlice';
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons';
import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from '@tanstack/react-table';
import { format } from 'date-fns';
import React, { useState } from 'react'



const AppointmentTable = ({ appointments, dispatch }) => {

    const handleDelete = (id) => {
        dispatch(deleteAppointment(id));
    }

    const columns = [
        {
            accessorKey: "patient_name",
            header: ({ column }) => {
                return (
                    <div className='flex items-center gap-1 cursor-pointer' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                        Patient Name
                        <CaretSortIcon className="w-4 h-4" />
                    </div>
                )
            },
            cell: ({ row }) => (
                <span className='font-medium'>{row.getValue("patient_name")}</span>
            ),
        },
        {
            accessorKey: "doctor_name",
            header: () => {
                return (
                    <span>Doctor</span>
                )
            },
            cell: ({ row }) => {
                return (
                    <span className='font-medium'>{row.getValue("doctor_name")}</span>
                );
            },
        },
        {
            accessorKey: "date",
            header: () => {
                return (
                    <span>Date</span>
                )
            },
            cell: ({ row }) => (
                <span className='font-medium'>{format(row.getValue("date"), 'LLLL d, yyyy')}</span>
            ),
        },
        {
            accessorKey: "time",
            header: () => {
                return (
                    <span>Time</span>
                )
            },
            cell: ({ row }) => (
                <span className='font-medium'>{row.getValue("time")}</span>
            ),
        },
        {
            accessorKey: "status",
            header: () => {
                return (
                    <span>Status</span>
                )
            },
            cell: ({ row }) => (
                <Badge variant={row.getValue("status") === "active" ? "outline" : "destructive"} className='font-medium capitalize'>{row.getValue("status")}</Badge>
            ),
        },
        {
            id: "actions",
            enableHiding: false,
            cell: ({ row }) => {
                const appointments = row.original;
    
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="w-8 h-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <DotsHorizontalIcon className="w-4 h-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem
                                onClick={() => handleDelete(appointments._id)}
                            >
                                Cancel Appointment
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ];
    
    const [sorting, setSorting] = useState([]);
    const [columnFilters, setColumnFilters] = useState([]);
    const [columnVisibility, setColumnVisibility] = useState({});
    const [rowSelection, setRowSelection] = useState({});

    const table = useReactTable({
        data: appointments,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className='flex flex-col gap-3'>
            <div className='flex flex-col justify-between gap-5 md:items-center md:flex-row'>
                <span className='text-xl font-semibold'>Active Appointments</span>
                <Input
                    placeholder="Search patients..."
                    value={(table.getColumn("patient_name")?.getFilterValue()) ?? ""}
                    onChange={(event) =>
                        table.getColumn("patient_name")?.setFilterValue(event.target.value)
                    }
                    className="w-full md:max-w-sm"
                />
            </div>
            <div className='flex flex-col w-full gap-3 border rounded-lg border-zinc-200'>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((group) => (
                            <TableRow>
                                {group.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} className="first:min-w-40 even:min-w-40">
                                            {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell className="py-5">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end py-4 space-x-2">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} of{" "}
                    {table.getFilteredRowModel().rows.length} row(s) selected.
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>

    )
}

export default AppointmentTable