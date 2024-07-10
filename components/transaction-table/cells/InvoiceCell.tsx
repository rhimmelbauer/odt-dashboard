import { TableCell } from "@/components/ui/table";

// TODO: Add a Link to a modal to show invoice details
const InvoiceCell = ({ invoiceNumber }: { invoiceNumber: string }) => {
    return <TableCell className="font-medium">{invoiceNumber}</TableCell>
}

export default InvoiceCell;