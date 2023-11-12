import { styled } from "@mui/material/styles";
import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { LineChart } from "../components/Linechart";
import BarChart from "../components/Barchart";
import { CombineBar } from "../components/CombineBar";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import TableData from "../components/TableData";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Dashboard = () => {
  let data = {
    jan: [
      { x: 1, y: 10 },
      { x: 2, y: 12 },
      { x: 3, y: 24 },
      { x: 4, y: 23 },
      { x: 5, y: 32 },
      { x: 6, y: 29 },
    ],
    feb: [
      { x: 1, y: 50 },
      { x: 2, y: 82 },
      { x: 3, y: 64 },
      { x: 4, y: 23 },
      { x: 5, y: 42 },
      { x: 6, y: 89 },
    ],
    mar: [
      { x: 1, y: 60 },
      { x: 2, y: 112 },
      { x: 3, y: 224 },
      { x: 4, y: 213 },
      { x: 5, y: 302 },
      { x: 6, y: 290 },
    ],
    apr: [
      { x: 1, y: 110 },
      { x: 2, y: 212 },
      { x: 3, y: 124 },
      { x: 4, y: 223 },
      { x: 5, y: 332 },
      { x: 6, y: 229 },
    ],
    may: [
      { x: 1, y: 70 },
      { x: 2, y: 52 },
      { x: 3, y: 84 },
      { x: 4, y: 63 },
      { x: 5, y: 62 },
      { x: 6, y: 99 },
    ],
  };
  const [manage, setManage] = React.useState("manage");
  const [monthwiseData, setMonthwiseData] = React.useState("jan");
  const [manageData, setManageData] = React.useState(data.jan);

  const barchartData = [
    {
      x: "Jan",
      groupA: 72,
    },
    {
      x: "Feb",
      groupA: 86,
    },
    {
      x: "Mar",
      groupA: 63,
    },
    {
      x: "Apr",
      groupA: 98,
    },
    {
      x: "May",
      groupA: 62,
    },
    {
      x: "Jun",
      groupA: 44,
    },
    {
      x: "Jul",
      groupA: 72,
    },
  ];

  const combineBardata = [
    {
      x: "Jun",
      groupA: 34,
      groupB: 42,
    },
    {
      x: "Jul",
      groupA: 2,
      groupB: 34,
    },
    {
      x: "Aug",
      groupA: 21,
      groupB: 32,
    },
    {
      x: "Sept",
      groupA: 18,
      groupB: 31,
    },
    {
      x: "Oct",
      groupA: 12,
      groupB: 21,
    },
    {
      x: "Nov",
      groupA: 12,
      groupB: 18,
    },
    {
      x: "Dec",
      groupA: 2,
      groupB: 8,
    },
  ];

  const handleChange = (event) => {
    setManage(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonthwiseData(event.target.value);
    let eventData = event.target.value;
    let findData =
      eventData === "jan"
        ? data.jan
        : eventData === "feb"
        ? data.feb
        : eventData === "mar"
        ? data.mar
        : eventData === "apr"
        ? data.apr
        : eventData === "may"
        ? data.may
        : [];
    setManageData(findData);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong style={{ marginTop: 20, minWidth: 120 }}>
                Checking Account
              </strong>

              <Box>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select
                    value={manage}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={"manage"}>Mange</MenuItem>
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <Select
                    value={monthwiseData}
                    onChange={handleMonthChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value={"jan"}>January</MenuItem>
                    <MenuItem value={"feb"}>February</MenuItem>
                    <MenuItem value={"mar"}>March</MenuItem>
                    <MenuItem value={"apr"}>April</MenuItem>
                    <MenuItem value={"may"}>May</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <hr />
            <LineChart
              height={300}
              width={500}
              data={manageData && manageData}
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong style={{ marginTop: 20, minWidth: 120 }}>
                Invoice own to you
              </strong>

              <Box sx={{ marginTop: "10px" }}>
                <Button
                  component="label"
                  sx={{ backgroundColor: "whitesmoke", color: "green" }}
                >
                  New Sales Invoice
                  <VisuallyHiddenInput type="file" />
                </Button>
              </Box>
            </Box>
            <hr style={{ marginTop: "17px" }} />
            <BarChart height={300} width={500} data={barchartData} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong style={{ marginTop: 20, minWidth: 120 }}>
                Total Cash Flow
              </strong>
              <Box></Box>
            </Box>
            <hr />
            <CombineBar height={300} width={500} data={combineBardata} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong style={{ marginTop: 20, minWidth: 120 }}>
                Account Watchlist
              </strong>
              <Box></Box>
            </Box>
            <hr />
            <TableData />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
