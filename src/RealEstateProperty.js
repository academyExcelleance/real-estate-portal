import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import { DataGrid, GridToolbar ,ColDef } from '@material-ui/data-grid';
import { Link,withRouter }  from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const StyledDataGrid = withStyles({
  root: {
    "& .MuiDataGrid-renderingZone": {
      maxHeight: "none !important"
    },
    "& .MuiDataGrid-cell": {
      lineHeight: "unset !important",
      maxHeight: "none !important",
      whiteSpace: "normal",
      align:"center"
    },
    "& .MuiDataGrid-row": {
      maxHeight: "none !important"
    }
  }
})(DataGrid);


function RealEstateProperty(props) {
  const [propertyLoaded, setPropertyLoaded] = React.useState(false);

  const setSelectedRow = (params) => {
    props.setSelectedRow(params.getValue(params.id,"address"));
  }
  const columns: ColDef[] = [
    { field: 'name', headerName: 'Name', flex: 0.75,
    renderCell: (params) => (
          <strong>
              <Link target="_blank" onClick = {setSelectedRow(params)}
                  to={{
                    pathname: "/propertyDetails",
                    //search:"?adrs=" + params.getValue(params.id, 'address').trim() + '&name=' + params.getValue(params.id, 'name').trim() + '&description=' + params.getValue(params.id, 'description').trim() + '&price=' + params.getValue(params.id, 'price').trim() ,
                    search:"?id=" + params.getValue(params.id, 'id') ,
                    hash: "#the-hash",
                    state: { fromDashboard : "true"   }
                  }}
                >{params.value}</Link>
          </strong>
        )
      },
    { field: 'address', headerName: 'Address' , flex: 1.2},
    { field: 'description', headerName: 'Description' , flex: 1.5},
    { field: 'price', headerName: 'Price', flex: 1.5},
    { field: 'image',  headerName: 'Image', flex: 1,
    renderCell: (params) => (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                  component="img"
                  image={params.value}
                  alt="green iguana"
                />
              </CardActionArea>
          </Card>
        )
    },
  ];


  if (props.propertyList.length > 0){
  return (
      <div style={{ width: '100%' }} >
      <StyledDataGrid autoHeight  rows={props.propertyList} columns={columns} />
      </div>
  );
}
}
export default withRouter(RealEstateProperty);
