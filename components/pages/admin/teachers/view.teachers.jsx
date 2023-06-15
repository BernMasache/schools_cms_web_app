/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import { withRouter } from "next/router";
import Link from "next/link";
//STORES , COMPONETS AND FROMS
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import useCrypto from "../../../../services/cryptoJs";
//INITIALISE
const crypto = new useCrypto()
export default class ViewTeachers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          field: "name",
          hideable: false,
          headerName: "name",
          flex: 0.5,
          minWidth: 100,
          headerClassName:
            "bg-slate-100 px-3 py-3.5 text-left text-gray-900 capitalize text-lg  font-bold",
        },
        {
          field: "sex",
          hideable: false,
          headerName: "gender",
          flex: 1,
          minWidth: 100,
          headerClassName:
            "bg-slate-100 px-3 py-3.5 text-left text-gray-900 capitalize text-lg  font-bold",
        },
        {
          field: "phone",
          hideable: false,
          headerName: "phone",
          flex: 1,
          minWidth: 100,
          headerClassName:
            "bg-slate-100 px-3 py-3.5 text-left text-gray-900 capitalize text-lg  font-bold",
        },
        {
          field: "options",
          disableExport: true,
          type: "actions",
          headerName: "options",
          flex: 0.5,
          minWidth: 100,
          headerClassName:
            "bg-slate-100 px-3 py-3.5 text-left text-gray-900 capitalize text-lg  font-bold",
          renderCell: (params) => {
            return (
              <>
                <Link key={params.row.uuid} 
                href={{
                  pathname: `/admin/teachers/teacher/${params.row.name}`,
                  query: {
                      data: crypto.encrypt(params.row)
                  },
              }}>
                <span
                  key={params.row.uuid}
                  id={params.row.uuid}
                  className="capitalize bg-sky-700 p-1 rounded text-white hover:text-gray-900 text-capitalize"
                >
                  manage
                </span>
                </Link>
              </>
            );
          },
        },
      ],
    };
  }
  componentDidMount() {}

  //Render
  render() {
    const theme = createTheme({
      palette: {
        primary: { main: "#0066FF" },
      },
    });
    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          <div
            className="bg-white rounded"
            style={{ height: "60vh", minHeight: "200px", width: "100%" }}
          >
            <DataGrid
              components={{
                Toolbar: () => {
                  return (
                    <GridToolbarContainer>
                      <GridToolbarColumnsButton />
                      <GridToolbarFilterButton />
                      <GridToolbarExport
                        csvOptions={{
                          fileName: "teachers",
                        }}
                        // pdfOptions={{
                        //   fileName: "teachers",
                        // }}
                        printOptions={{
                          disableToolbarButton: false,
                        }}
                      />
                    </GridToolbarContainer>
                  );
                },
              }}
              density="compact"
              initialState={{
                pagination: {
                  pageSize: 25,
                },
                columns: {
                  columnVisibilityModel: {
                    name: true,
                    phone: true,
                    sex: true,
                    created: false,
                  },
                },
              }}
              rowsPerPageOptions={[25, 50, 100, 500]}
              getRowId={(row) => row.uuid}
              columns={this.state.columns}
              rows={this.props.teachers}
              localeText={{
                toolbarColumns: "columns",
                toolbarFilters: "filters",
                toolbarExport: "exports",
              }}
            />
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
