import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { ProfileContext } from "../context/profileContext";
import { LinearProgress } from "@material-ui/core";

const columns = 
[
  { width: 200, field: "FullName", headerName: "Full Name",  valueGetter: (params) => `${params.getValue('FirstName') || ''} ${params.getValue('LastName') || ''}`, },
  { width: 150, field: "Gender", headerName: "Gender" },
  { width: 150, field: "UserName", headerName: "User Name" },
  { width: 150, field: "PhoneNumber", headerName: "Phone Number" },
  { width: 150, field: "PaymentMethod", headerName: "Payment Method" },
  { width: 200, field: "CreditCard", headerName: "Credit Card", valueGetter: (params) => `${params.getValue('CreditCardNumber') || ''} (${params.getValue('CreditCardType') || ''})`, },
  { width: 150, field: "Email", headerName: "Email" },
  //{ width: 150, field: "DomainName", headerName: "Domain Name" },
  //{ width: 150, field: "MacAddress", headerName: "Mac Address" },
  { width: 200, field: "Location", headerName: "Location", valueGetter: (params) => `${params.getValue('Latitude') || ''}, ${params.getValue('Longitude') || ''}`, },
  { width: 200, field: "LastLogin", headerName: "Last Login" },
  { width: 250, field: "URL", headerName: "URL" },
];

export default function ProfileTable() 
{
    const { profileState } = React.useContext(ProfileContext);
    if(profileState.all)
    {
        return (
          <div style={{ height: 1200, width: "95%", margin: "10px"}}>
            <DataGrid
              rows={profileState.match.map((x, i) => ({ ...x, id: i }))}
              columns={columns}
              pageSize={20}
              checkboxSelection={false}
            />
          </div>
        );
    }

    return <LinearProgress style={{ margin: "100px" }}/>
}
