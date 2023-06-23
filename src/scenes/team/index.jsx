import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityUpdateOutlined,
} from "@mui/icons-material";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "PHONE", flex: 1 },
    { field: "email", headerName: "EMAIL", flex: 1 },
    {
      field: "access",
      headerName: "ACCESS LEVEL",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            width={"60%"}
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityUpdateOutlined />}
            {access === "user" && <LockOpenOutlined />}

            <Typography color={colors.grey[100]} ml="5px" sx={{}}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Member" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            border: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },

          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },

          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },

          "& .MuiDataGrid-footerContainer": {
            borderTop: 'none',
            backgroundColor: colors.blueAccent[700]
          }
        }}
      >
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
