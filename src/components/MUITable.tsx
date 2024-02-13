import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { data } from "../data/index";

const tableData:  any = data ?? [];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const tableHeaders = [
  "Email Id",
  "First Name",
  "Last Name",
  "Phone no",
  "City Name",
  "ID",
];

export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((th: string, index: number) => {
                return (
                  <StyledTableCell align={index  > 0 ? "right" : "left"} key={index}>
                    {th ?? "---"}
                  </StyledTableCell>
                );
              
            })}
          </TableRow>
        </TableHead>

        {tableData?.map((column: any, index: number) => (
          <TableBody key={index}>
            <StyledTableRow>

             {column.map((item:any)=>(

<StyledTableCell component="th" scope="row" sx={{color:`${(typeof item === 'object' && 'style' in item && 'color' in item.style) ? item.style.color : "black"}`}} align={(typeof item === 'object' && 'alignment' in item ) ? item.alignment : (typeof item === 'object' ) ? "left" : "left" }>


{
   ((typeof item === 'object') ? (


    ('email' in item  ? item.email : "---" ) ? ('firstName' in item ? item.firstName : "---" ) : ('lastName' in item  ? item.lastName : "---")  ?  ('phoneNo' in item ? item.phoneNo : "---") : ('cityName' in item ? item.cityName : "---") ? ('id' in item ? item.id : "---") : item


   ) : item ) 
}
</StyledTableCell>


             ))}
            </StyledTableRow>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
}
