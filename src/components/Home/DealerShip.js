"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  IconButton,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

const DealershipFormModal = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const primaryColor = theme.palette.primary?.main || "#0A3560";
  const secondaryColor = theme.palette.secondary?.main || "#FD0102";
  const whiteColor = theme.palette.white?.main || "#FFFFFF";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    model: "",
    state: "",
    city: "",
  });

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < theme.breakpoints.values.md);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [theme.breakpoints.values.md]);

  const isHardRefresh = useCallback(() => {
    try {
      const timeSincePageLoad = Date.now() - performance.timing.navigationStart;
      return timeSincePageLoad < 2000;
    } catch {
      return false;
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isHome = window.location.pathname === "/";
    const modalShown = sessionStorage.getItem("modalShouldBeOpen");

    if (isHome && isHardRefresh() && !modalShown) {
      const timer = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem("modalShouldBeOpen", "true");
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isHardRefresh]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setOpen(false);
    sessionStorage.removeItem("modalShouldBeOpen");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const payload = {
        ...formData,
        phone: formData.mobile,
        title: "Dealership",
        message: `Model: ${formData.model}`,
        address: '', // you can optionally collect address if needed
      };
  
      await axios.post("/api/contact", payload);
  
      enqueueSnackbar("Message sent successfully", {
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: { vertical: "top", horizontal: "right" },
      });
  
      setFormData({
        name: "",
        email: "",
        mobile: "",
        model: "",
        state: "",
        city: "",
      });
  
      handleClose();
    } catch (err) {
      enqueueSnackbar(err?.response?.data?.message || "Something went wrong", {
        variant: "error",
        autoHideDuration: 3000,
      });
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: "4px",
          overflow: "hidden",
          height: "auto",
          maxHeight: "90vh",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: { xs: 6, md: 16 },
          top: { xs: 6, md: 16 },
          zIndex: 10,
          color: isMobile ? whiteColor : primaryColor,
          backgroundColor: "rgba(0,0,0,0.1)",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.2)" },
        }}
      >
        <CloseIcon sx={{ fontSize: { xs: "1.07rem", md: "1.5rem" } }} />
      </IconButton>

      <DialogContent
        sx={{
          p: 0,
          height: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          sx={{
            height: "100%",
            overflow: "hidden",
          }}
        >
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              position: "relative",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
              color: whiteColor,
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                backgroundImage: `linear-gradient(rgba(10, 53, 96, 0.8), rgba(10, 53, 96, 0.8)), url('/images/Black.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Box sx={{ maxWidth: "500px", zIndex: 1 }}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                FATEH
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.8rem" },
                  mb: 4,
                  textTransform: "uppercase",
                }}
              >
                MOST RELIABLE E-VEHICLE OF INDIA
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  mt: { xs: 2, md: 6 },
                  mb: 2,
                  textTransform: "uppercase",
                }}
              >
                APPLY FOR DEALERSHIP
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              bgcolor: "#f5f5f5",
              p: { xs: 3, md: 5 },
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflowY: "auto",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.2rem", md: "1.5rem" },
                mt: 2,
                textAlign: "center",
                color: primaryColor,
              }}
            >
              For Information Please Fill
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="standard"
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Email ID"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="standard"
                />
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <TextField
                  label="Mobile Number *"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  variant="standard"
                  inputProps={{
                    pattern: "[0-9]{10}",
                    title: "Enter 10-digit mobile number",
                  }}
                />
              </FormControl>
              <FormControl fullWidth required sx={{ mb: 2 }} variant="standard">
                <InputLabel>Select a Model</InputLabel>
                <Select
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  label="Select a Model"
                >
                  <MenuItem value="the-ld">Fateh Diamond MS</MenuItem>
                  <MenuItem value="the-ld">Fateh Diamond SS</MenuItem>
                  <MenuItem value="goreen">Fateh Silver MS</MenuItem>
                  <MenuItem value="goreen">Fateh Silver SS</MenuItem>
                  {/* <MenuItem value="panther">FatehEV Gold</MenuItem> */}
                  {/* <MenuItem value="super-deluxe">
                    FatehEV Cargo(Loader)
                  </MenuItem> */}
                  {/* <MenuItem value="super-deluxe">Fateh Grabage Loader</MenuItem> */}
                </Select>
              </FormControl>
              <FormControl fullWidth required sx={{ mb: 2 }} variant="standard">
                <InputLabel>Select State</InputLabel>
                <Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  label="Select State"
                >
                   <MenuItem value="andhra-pradesh">Andhra Pradesh</MenuItem>
                  <MenuItem value="arunachal-pradesh">Arunachal Pradesh</MenuItem>
                  <MenuItem value="assam">Assam</MenuItem>
                  <MenuItem value="bihar">Bihar</MenuItem>
                  <MenuItem value="chhattisgarh">Chhattisgarh</MenuItem>
                  <MenuItem value="goa">Goa</MenuItem>
                  <MenuItem value="gujarat">Gujarat</MenuItem>
                  <MenuItem value="haryana">Haryana</MenuItem>
                  <MenuItem value="himachal-pradesh">Himachal Pradesh</MenuItem>
                  <MenuItem value="jharkhand">Jharkhand</MenuItem>
                  <MenuItem value="karnataka">Karnataka</MenuItem>
                  <MenuItem value="kerala">Kerala</MenuItem>
                  <MenuItem value="madhya-pradesh">Madhya Pradesh</MenuItem>
                  <MenuItem value="maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="manipur">Manipur</MenuItem>
                  <MenuItem value="meghalaya">Meghalaya</MenuItem>
                  <MenuItem value="mizoram">Mizoram</MenuItem>
                  <MenuItem value="nagaland">Nagaland</MenuItem>
                  <MenuItem value="odisha">Odisha</MenuItem>
                  <MenuItem value="punjab">Punjab</MenuItem>
                  <MenuItem value="rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="sikkim">Sikkim</MenuItem>
                  <MenuItem value="tamil-nadu">Tamil Nadu</MenuItem>
                  <MenuItem value="telangana">Telangana</MenuItem>
                  <MenuItem value="tripura">Tripura</MenuItem>
                  <MenuItem value="uttar-pradesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="uttarakhand">Uttarakhand</MenuItem>
                  <MenuItem value="west-bengal">West Bengal</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 3 }}>
                <TextField
                  label="Your City / Place"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  variant="standard"
                />
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                size="large"
                sx={{
                  py: 1.5,
                  backgroundColor: secondaryColor,
                  color: whiteColor,
                  "&:hover": { backgroundColor: "#d60001" },
                  borderRadius: 0,
                }}
              >
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DealershipFormModal;