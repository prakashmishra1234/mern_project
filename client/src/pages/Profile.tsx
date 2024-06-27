import {
  Avatar,
  Box,
  Grid,
  IconButton,
  Link,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { AuthContext } from "../Store";
import React from "react";
import ProfileImg from "../assets/profile-major.svg";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const Profile = () => {
  const context = React.useContext(AuthContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ pl: 2 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box height={"100%"}>
      <Grid
        container
        sx={{ flexDirection: { xs: "column-reverse", md: "row !important" } }}
      >
        <Grid item xs={12} md={8}>
          <Box
            width={"100%"}
            p={2}
            sx={{ display: { md: "flex", xs: "none" } }}
          >
            <Typography
              fontSize={"2.5rem"}
              fontWeight={500}
              fontFamily={"math"}
            >
              {context.user?.fullname}
            </Typography>
          </Box>
          <Box width={"100%"}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="About" {...a11yProps(1)} />
              <Tab label="Settings" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <Box width={"100%"}>
            <CustomTabPanel value={value} index={0}>
              Item One
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item Three
            </CustomTabPanel>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} container justifyContent={"center"}>
          <Box
            display={"flex"}
            sx={{
              alignItems: {
                md: "center",
                xs: "flex-start",
              },
              flexDirection: { md: "column", xs: "row" },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <IconButton sx={{ p: 0, height: "6rem", width: "6rem" }}>
              <Avatar
                sx={{ height: "100%", width: "100%" }}
                alt="Remy Sharp"
                src={ProfileImg}
              />
            </IconButton>
            <Box sx={{ ml: { md: 0, xs: 2 } }}>
              <Typography
                mt={2}
                fontFamily={"math"}
                fontSize={"22px"}
                fontWeight={500}
              >
                {context.user?.fullname}
              </Typography>
              <Typography mt={1} fontFamily={"math"}>
                0 Follower
              </Typography>
            </Box>
            <Box
              mt={2}
              width={"100%"}
              sx={{ display: { md: "flex", xs: "none" } }}
            >
              <Typography fontFamily={"math"}>Software Developer</Typography>
            </Box>
            <Box
              mt={4}
              width={"100%"}
              sx={{ display: { md: "flex", xs: "none" } }}
            >
              <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                Edit profile
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
