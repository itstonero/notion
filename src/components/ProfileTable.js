import * as React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Text} from "@chakra-ui/react";
import { ProfileContext } from "../context/profileContext";
import { WarningIcon } from "@chakra-ui/icons";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function ProfileTable() {
  const { profileState } = React.useContext(ProfileContext);
  let startFrom = profileState.index - 1;
  startFrom += startFrom * 20;

  const data = profileState.match.slice(startFrom, startFrom + 20);
  const classes = useStyles();

  if(data.length === 0)
  {
    return <Text fontSize="xl" as="i" margin="100px" >
            <WarningIcon color="red.500"/> {" "} No Matching Result
          </Text>
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell>Last Name</StyledTableCell>
            <StyledTableCell>Gender</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell>Phone Number</StyledTableCell>
            <StyledTableCell>Payment Method</StyledTableCell>
            <StyledTableCell>Card Number</StyledTableCell>
            <StyledTableCell>Card Type</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Domain Name</StyledTableCell>
            <StyledTableCell>Mac Address</StyledTableCell>
            <StyledTableCell>Latitude</StyledTableCell>
            <StyledTableCell>Longitude</StyledTableCell>
            <StyledTableCell>Last Login</StyledTableCell>
            <StyledTableCell>URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.FirstName}</StyledTableCell>
              <StyledTableCell align="center">{row.LastName}</StyledTableCell>
              <StyledTableCell align="center">{row.Gender}</StyledTableCell>
              <StyledTableCell align="center">{row.UserName}</StyledTableCell>
              <StyledTableCell align="center">{row.PhoneNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.PaymentMethod}</StyledTableCell>
              <StyledTableCell align="center">{row.CreditCardNumber}</StyledTableCell>
              <StyledTableCell align="center">{row.CreditCardType}</StyledTableCell>
              <StyledTableCell align="center">{row.Email}</StyledTableCell>
              <StyledTableCell align="center">{row.DomainName}</StyledTableCell>
              <StyledTableCell align="center">{row.MacAddress}</StyledTableCell>
              <StyledTableCell align="center">{row.Latitude}</StyledTableCell>
              <StyledTableCell align="center">{row.Longitude}</StyledTableCell>
              <StyledTableCell align="center">{row.LastLogin}</StyledTableCell>
              <StyledTableCell align="center">{row.URL}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
