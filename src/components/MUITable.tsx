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


// return <StyledTableCell component="th" scope="row" sx={{color:`"black"}`}} align="left" >
// {item}
// </StyledTableCell>
export default function DataTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow >
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

<StyledTableCell component="th" scope="row" 

sx={{color:`${item?.style ? item.style.color : "black"}`}}

align={item?.alignment ? item.alignment : "left"}
>

{ item?.content ? item?.content : item  }


</StyledTableCell>


             ))}  

            </StyledTableRow>
          </TableBody>
        ))}
      </Table>
    </TableContainer>
  );
}
