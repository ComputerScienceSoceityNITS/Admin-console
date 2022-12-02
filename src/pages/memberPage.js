import React, { useState, useEffect } from "react";
import "../styles/MemberPage.css";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
  Search,
  Toolbar,
  Selection,
} from "@syncfusion/ej2-react-grids";

import { memberGrid } from "../components/memberGrid";

const MemberPage = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://css-website.herokuapp.com/api/admin/members/21-22")
      .then((req) => req.json())
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return (
    <div className="MemberPage">
      <GridComponent
        id="gridComp"
        dataSource={data.members}
        enableHover={false}
        allowPaging
        allowSorting
        selectionSettings={{ persistSelection: false }}
        toolbar={["Search", "Delete", "Add"]}
        editSettings={{
          allowDeleting: true,
          allowEditing: true,
          allowAdding: true,
        }}
        width="auto"
      >
        <ColumnsDirective>
          {memberGrid.map((elememt, index) => (
            <ColumnDirective key={index} {...elememt} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Sort,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
            Search,
            Toolbar,
            Selection,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default MemberPage;
