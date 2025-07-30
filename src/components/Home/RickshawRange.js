"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container, Typography, Box, IconButton, Button } from "@mui/material";
import Link from "next/link";
import ArrowRightAltRounded from "@mui/icons-material/ArrowRightAltRounded";
import TitleBox from "@/ui/TitleBox";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { productData } from "@/utils/data";
// Brand color scheme
const primaryColor = "#0A3560";
const secondaryColor = "#FD0102";
const accentColor = "#F7B500";

const RickshawRange = () => {
  const products = productData
  .filter(product => !product.commingSoon);

  const splideRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);
  const perPage = 2; // Or whatever default you're targeting
  const totalIndicators =
    products.length > perPage ? Math.ceil(products.length - perPage + 2) : 2;

  useEffect(() => {
    const splide = splideRef.current?.splide;
    if (!splide) return;

    splide.on("move", (newIndex) => {
      setActiveDot(newIndex);
    });
  }, []);

  return (
    <Container
      maxWidth="xl"
      sx={{
        position: "relative",
        py: 2,
      }}
    >
      {/* Beautiful Card Container */}
      <Box
        sx={{
          position: "relative",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 30px 60px rgba(10, 28, 45, 0.15)",
          background: "linear-gradient(to bottom, #f9fbfd, #ffffff)",
          py: 4,
          textAlign: "center",
          zIndex: 1,
        }}
      >
        {/* Decorative elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "40%",
            height: "100%",
            background: `linear-gradient(45deg, ${primaryColor}20, ${secondaryColor}10)`,
            boxShadow: "0 -8px 20px rgba(10, 28, 45, 0.15)",
            clipPath: "polygon(100% 0, 0% 100%, 100% 100%)",
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "30%",
            height: "60%",
            background: `linear-gradient(45deg, ${accentColor}15, ${secondaryColor}10)`,
            clipPath: "polygon(0 100%, 0 0, 100% 100%)",
            zIndex: 0,
          }}
        />

        {/* Header Section */}
        <TitleBox
          subTitle={"RANGE"}
          center
          sx={{
            h2: {
              color: primaryColor,
              mb: 5,
            },
          }}
        >
          E-RICKSHAW
        </TitleBox>

        {/* Splide Carousel */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "1600px",
            mx: "auto",
            px: { xs: 0, md: 4 },
            zIndex: 2,
          }}
        >
          <Splide
            ref={splideRef}
            hasTrack={false}
            options={{
              start: 0, // Add this to ensure starting from first slide
              type: "slide", // Changed from loop
              type: "loop",
              perPage: 3,
              focus: "start",
              gap: "32px",
              pagination: false,
               align: "start", // Align slides to left
            padding: { left: 0 }, // Ensure first slide touches container edge
              arrows: false,
              breakpoints: {
                1200: { perPage: 2, gap: "24px" },
                768: { perPage: 1, gap: "16px" },
              },
            }}
            aria-label="Our Rickshaw Range"
          >
            {/* Custom Controls */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: 0,
                right: 0,
                transform: "translateY(-50%)",
                display: "flex",
                justifyContent: "space-between",
                zIndex: 10,
                px: 1,
              }}
            >
              <IconButton
                onClick={() => splideRef.current?.splide.go("<")}
                sx={{
                  background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor}80 100%)`,
                  width: 60,
                  height: 60,
                  ml: -0.8,
                  color: "white",
                  border: `2px solid ${primaryColor}`,
                  boxShadow: `0 4px 20px ${primaryColor}40`,
                  "&:hover": {
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor} 100%)`,
                    transform: "scale(1.1)",
                    boxShadow: `0 6px 24px ${primaryColor}80`,
                  },
                  transition:
                    "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  borderRadius: "50%",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    zIndex: 1,
                  },
                }}
              >
                <ChevronLeftIcon
                  sx={{
                    fontSize: "2rem",
                    position: "relative",
                    zIndex: 2,
                    color: "#FFFFFF",
                    filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.2))",
                  }}
                />
              </IconButton>

              <IconButton
                onClick={() => splideRef.current?.splide.go(">")}
                sx={{
                  background: `linear-gradient(135deg, ${primaryColor}80 0%, ${primaryColor} 100%)`,
                  width: 60,
                  height: 60,
                  mr: -0.8,
                  color: "white",
                  border: `2px solid ${primaryColor}`,
                  boxShadow: `0 4px 20px ${primaryColor}40`,
                  "&:hover": {
                    background: `linear-gradient(135deg, ${primaryColor} 0%, ${primaryColor} 100%)`,
                    transform: "scale(1.1)",
                    boxShadow: `0 6px 24px ${primaryColor}80`,
                  },
                  transition:
                    "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  borderRadius: "50%",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: "50%",
                    zIndex: 1,
                  },
                }}
              >
                <ChevronRightIcon
                  sx={{
                    fontSize: "2rem",
                    position: "relative",
                    zIndex: 2,
                    color: "#FFFFFF",
                    filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.2))",
                  }}
                />
              </IconButton>
            </Box>

            <SplideTrack>
              {products.map((product) => (
                <SplideSlide key={product.slug}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      height: 500,
                      borderRadius: "14px",
                      overflow: "hidden",
                      boxShadow: "0 20px 50px rgba(56, 74, 93, 0.2)",
                      position: "relative",
                      background: "white",
                      transition:
                        "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      transformOrigin: "center bottom",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
                  >
                    <Box
                      className="product-image"
                      component="img"
                      src={product.featuredImage}
                      alt={product.name}
                      sx={{
                        width: "100%",
                        height: 320,
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                        borderBottom: `1px solid ${primaryColor}`,
                      }}
                    />

                    {/* Gradient Overlay */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "100%",
                        background:
                          "linear-gradient(to top, rgba(10,53,96,0.85) 30%, transparent 50%)",
                        zIndex: 2,
                      }}
                    />

                    {/* Card Content */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        zIndex: 3,
                        p: 4,
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(4px)",
                          borderRadius: "12px",
                          p: 2,
                          mb: 2,
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <Typography
                          variant="h3"
                          sx={{
                            fontWeight: 800,
                            fontSize: "1.8rem",
                            color: "white",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                            mb: 0.5,
                          }}
                        >
                          {product.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            color: accentColor,
                            fontSize: "1rem",
                            letterSpacing: "0.5px",
                            textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                          }}
                        >
                          {/* {product.tagline} */}
                        </Typography>
                      </Box>

                      <Box sx={{ mt: 2 }}>
                        <Button
                          className="product-button"
                          component={Link}
                          href={`/vehicles/${product.slug}`}
                          variant="contained"
                          size="medium"
                          endIcon={<ArrowRightAltRounded />}
                          sx={{
                            borderRadius: "50px",
                            fontWeight: 700,
                            px: 4,
                            py: 1.5,
                            fontSize: "0.95rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.5px",
                            color: "#ffffff",
                            background:
                              "linear-gradient(135deg, #0A3560, #2A75CB)",
                            boxShadow: "0 6px 20px rgba(10, 53, 96, 0.5)",
                            position: "relative",
                            overflow: "hidden",
                            transition:
                              "all 0.35s cubic-bezier(0.25, 1, 0.5, 1)",
                            border: "1px solid rgba(255,255,255,0.3)",
                            "&:before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: "-100%",
                              width: "100%",
                              height: "100%",
                              background:
                                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
                              transition: "0.6s",
                            },
                            "&:hover": {
                              transform: "translateY(-3px) scale(1.05)",
                              "&:before": {
                                left: "100%",
                              },
                              boxShadow: "0 10px 30px rgba(21, 71, 122, 0.8)",
                            },
                            "&:hover .MuiSvgIcon-root": {
                              transform: "translateX(5px)",
                            },
                          }}
                        >
                          VIEW DETAILS
                        </Button>
                      </Box>
                    </Box>

                    {/* Floating Specs */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 20,
                        left: 20,
                        zIndex: 3,
                        display: "flex",
                        gap: 1.5,
                      }}
                    ></Box>
                  </Box>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </Box>

        {/* Dots Indicator */}
        <Box
          sx={{ display: "flex", justifyContent: "center", gap: 1.5, mt: 4 }}
        >
          {Array.from({ length: totalIndicators }).map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background:
                  activeDot === index ? "rgba(21, 71, 122, 0.8)" : "#D0D0D0",
                border: "1px solid #174ea6",
                transition: "all 0.3s ease",
                transform: activeDot === index ? "scale(1.3)" : "scale(1)",
                cursor: "pointer",
                "&:hover": {
                  background: `linear-gradient(135deg, #174ea6, #2563EB)`,
                },
              }}
              onClick={() => {
                splideRef.current?.splide.go(index);
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default RickshawRange;
