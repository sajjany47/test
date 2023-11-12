import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function TableData() {
  const columns = [
    { id: "acount", label: "Acount" },
    { id: "thisMonth", label: "This Month" },
    { id: "ytd", label: "YTD" },
  ];

  const rows = [
    { acount: "Sales", thisMonth: "119458", ytd: "1148129" },
    { acount: "Advertising", thisMonth: "119458", ytd: "1148129" },
    { acount: "Inventary", thisMonth: "469226", ytd: "976809" },
    { acount: "Entertainment", thisMonth: "0.00", ytd: "0.00" },
    { acount: "Product", thisMonth: "465210", ytd: "252910" },
  ];
  return (
    <TableContainer>
      <Table sx={{ minWidth: 250 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => {
            return (
              <TableRow key={index} hover role="checkbox" tabIndex={-1}>
                {columns.map((column) => {
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {row[column.id]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
