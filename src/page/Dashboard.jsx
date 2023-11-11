import { styled } from "@mui/material/styles";
import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { LineChart } from "../components/Linechart";
import BarChart from "../components/Barchart";
import { CombineBar } from "../components/CombineBar";
import { FormControl, MenuItem, Select } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Dashboard = () => {
  const [manage, setManage] = React.useState("manage");
  const LinechartData = [
    { x: 1, y: 10 },
    { x: 2, y: 12 },
    { x: 3, y: 24 },
    { x: 4, y: 23 },
    { x: 5, y: 32 },
    { x: 6, y: 29 },
  ];
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
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <strong>Checking Account</strong>
              <Box>
                <FormControl fullWidth>
                  <Select value={manage} label="Manage" onChange={handleChange}>
                    <MenuItem value={"manage"}>Mange</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <hr />
            <LineChart height={300} width={500} data={LinechartData} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <BarChart height={300} width={500} data={barchartData} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <CombineBar height={300} width={500} data={combineBardata} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
