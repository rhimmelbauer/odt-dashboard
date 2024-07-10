import { TableCell, TableRow } from "../ui/table"
import InvoiceCell from "./cells/InvoiceCell"
import { InvoiceProps } from "./TransactionTable"

const TransactionTableRow = ({ invoiceData, key }: { invoiceData: InvoiceProps, key: number }) => {
    return (
        <TableRow key={key}>
            <InvoiceCell invoiceNumber={invoiceData.invoiceNumber} />
            <TableCell>{invoiceData.paymentStatus}</TableCell>
            <TableCell>{invoiceData.coin}</TableCell>
            <TableCell className="text-right">{invoiceData.amount}</TableCell>
        </TableRow>
    )

}

export default TransactionTableRow