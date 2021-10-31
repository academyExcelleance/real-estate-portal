import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import { DataGrid, GridToolbar ,ColDef } from '@material-ui/data-grid';
import { Link,withRouter }  from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
  root: {
    '& .super-app-theme--cell': {
      backgroundColor: 'rgba(200, 200, 200, 0.55)',
      color: '#1a3e77',
      fontWeight: '600'

    },
    '& .super-app.negative': {
      backgroundColor: 'rgba(157, 255, 118, 0.49)',
      color: '#1a3e72',
      fontWeight: '600',
    },
    '& .super-app.positive': {
      backgroundColor: '#d47483',
      color: '#1a3e72',
      fontWeight: '600',
    },
  },
});

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


function PropertyList(props) {
  const classes  = useStyles();
  const [propertyLoaded, setPropertyLoaded] = React.useState(false);
  const [propertyList, setPropertyList] = React.useState([]);


  const setSelectedRow = (params) => {
    props.setSelectedRow(params.getValue(params.id,"address"));
  }
  const columns: ColDef[] = [
    { field: 'propertyId', headerName: 'Listing ID', flex: 0.75 },
    { field: 'city', headerName: 'City', flex: 0.75 },
    { field: 'state', headerName: 'State', flex: 0.75 },
    { field: 'state', headerName: 'State', flex: 0.75 },
  ];

  function sleep(delay = 0) {
      return new Promise((resolve) => {
        setTimeout(resolve, delay);
      });
    }

  React.useEffect(() => {
    (async () => {
    if(propertyList != null && propertyList.length === 0){
    const response = await fetch('http://webscrapservice-env.eba-kzpzmeby.ap-south-1.elasticbeanstalk.com/getMemberProperty?member=iu');
    await sleep(1e3);
    const propertyData = await response.json();
    alert(propertyData.length)
    if (propertyData.length > 0){
      setPropertyList(propertyData);
      setPropertyLoaded(true);
    }
  }})();
  },[propertyLoaded]);

    if (!propertyLoaded){
        return (
          <div>
            <p> Please wait! Result is loading...</p>
            <CircularProgress disableShrink />
          </div>
        );
      }
      if (propertyList.length > 0){
  return (
      <div style={{ height: '100%', width: '100%' }} className = {classes.root}>
      <StyledDataGrid rows={propertyList} columns={columns} pageSize={10} components={{
          Toolbar: GridToolbar,
      }} />
      </div>
  );
}
}
export default withRouter(PropertyList);
