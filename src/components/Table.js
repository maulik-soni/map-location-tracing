import React, { useRef, useState } from 'react';
import '../style/Table.css';

const TableElements = (type) => {
  let displayName = "";
  let className = "";

  switch(type){
    case "container":
      className = "divTable";
      displayName = "TableContainer";
      break;
    case "head":
      className = "divTableHeading";
      displayName = "TableHead";
      break;
    case "body":
      className = "divTableBody";
      displayName = "TableBody";
      break;
    case "row":
      className = "divTableRow";
      displayName = "TableRow";
      break;
    case "cell":
    default:
      className = "divTableCell";
      displayName = "TableCell";
      break;
  }

  const TableComponent = (props)=>{
    const {children, isActiveRow} = props;
    const classname = isActiveRow ? className+" divTableRow-active" : className;
    return <div className={classname} onClick={props.onClick}>{children}</div>;
  }
  TableComponent.displayName = displayName;
  return TableComponent;
}

const Table = (props) => {
  const {rows, data, onRowClick, highLightLocation={}} = props;
  const TableContainer = TableElements("container");
  const TableHead = TableElements("head");
  const TableBody = TableElements("body");
  const TableRow = TableElements("row");
  const TableCell = TableElements("cell");

  const tableRowClickHandler = (row)=>{
    onRowClick(row);
  }
 
  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          {
            rows.map((row, index)=>{
              return (
                <TableCell key={index}>
                  <b>{row.lable}</b>
                </TableCell>
              )
            })
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {
          data.map((d, index)=>{
            const isActiveRow = highLightLocation.id === d.id;
            return (
              <TableRow key={index} onClick={()=>{tableRowClickHandler(d)}} isActiveRow={isActiveRow}>
                {
                  rows.map((row, i)=>{
                    return (
                      <TableCell key={i}>
                        {d[row.key]}
                      </TableCell>
                    )
                  })
                }
              </TableRow>
            )
          })
        }
      </TableBody>
    </TableContainer>
  );
}

export default Table;