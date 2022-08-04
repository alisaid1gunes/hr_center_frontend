import React from "react";
import { Card, Grid } from "@mui/material";
import { StripedDataGrid } from "./StrippedDataGrid";
import { rows } from "./rows";
import { columns } from "./columns";
import CustomGridToolbar from "./CustomGridToolbar";

const DataGridUi = (props) => {
  const {
    applicantList,
    handleViewClick,
    handleUpdateClick,
    removeApplicant,
    page,
    setPage,
    take,
    count,
  } = props;
  return (
    <Grid container spacing={2} direction="row" justifyContent="center">
      <Grid item md={12} xs={12} sm={12}>
        <Card
          sx={{
            height: 400,
            width: "100%",
            borderRadius: "18px",
            padding: 2,
            marginTop: "15px",
          }}
        >
          <StripedDataGrid
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
            }
            components={{ Toolbar: CustomGridToolbar }}
            componentsProps={{
              toolbar: { count },
            }}
            key={Math.random()}
            sx={{ border: "none" }}
            rows={rows(applicantList)}
            columns={columns(
              handleViewClick,
              removeApplicant,
              handleUpdateClick
            )}
            pagination
            page={page}
            pageSize={take}
            rowsPerPageOptions={[take]}
            rowCount={count}
            paginationMode="server"
            onPageChange={(newPage) => {
              setPage(newPage);
            }}
          />
        </Card>
      </Grid>
    </Grid>
  );
};

export default DataGridUi;
