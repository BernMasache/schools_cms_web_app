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
const crypto = new useCrypto();
export default class ViewStudents extends React.Component {
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
            "bg-slate-100 py-3.5 pl-4 pr-3 text-left text-gray-900 sm:pl-6 lg:pl-8 capitalize text-lg  font-bold ",
        },
        {
          field: "code",
          hideable: false,
          headerName: "code",
          flex: 0.5,
          minWidth: 100,
          headerClassName:
            "bg-slate-100 px-3 py-3.5 text-left text-gray-900 capitalize text-lg  font-bold",
        },
        // { field: 'sex', hideable: false, headerName: "gender", flex: 0.5, minWidth: 100, headerClassName: 'bg-slate-100 px-3 py-3.5 text-left text-gray-900 capitalize text-lg  font-bold' },
        {
          field: "current_year",
          hideable: false,
          headerName: "form",
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
                <Link
                  key={params.row.id}
                  href={{
                    pathname: "/admin/students/student/" + params.row.code,
                    query: {
                      data: crypto.encrypt({
                        name: params.row.name,
                        code: params.row.code,
                        uuid:params.row.uuid,
                        phone:params.row.phone,
                        sex:params.row.sex,
                        dob:params.row.dob,
                        formEnrolled:params.row.form_enrolled,
                        status:params.row.status,
                        currentForm:params.row.current_year
                      }),
                    },
                  }}
                >
                  <span
                    key={params.row.id}
                    id={params.row.id}
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
                          fileName: "students",
                        }}
                        printOptions={{
                          disableToolbarButton: true,
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
                    username: true,
                    phone: true,
                    email: true,
                    status: true,
                    created: false,
                  },
                },
              }}
              rowsPerPageOptions={[25, 50, 100, 500]}
              getRowId={(row) => row.uuid}
              columns={this.state.columns}
              rows={this.props.students}
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
