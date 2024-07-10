import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import TransactionTableRow from "./TransactionTableRow"
import { faker } from "@faker-js/faker"
import { Card } from "../ui/card"

const invoice_count = faker.number.int({min: 5, max: 15})

export type InvoiceProps = {
    invoiceNumber: string,
    paymentStatus: string,
    coin: string,
    amount: string
}

let invoices = [];

for (let index = 0; index < invoice_count; index++) {
    invoices.push({
        invoiceNumber: "INV" + faker.string.numeric({length: 3}),
        paymentStatus: faker.helpers.arrayElement(["Processing", "Completed", "Pending"]),
        coin: faker.helpers.arrayElement(["bitcoin", "ethereum", "dogecoin"]),
        amount: faker.finance.amount()
    })
    
}

const TransactionTable = () => {
    return (
        <Card>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Invoice</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Coin</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.map((invoice, index) => (
                        <TransactionTableRow invoiceData={invoice} key={index}/>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </Card>
    )
}

export default TransactionTable;