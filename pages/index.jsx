
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Stack, useTheme, Rating} from '@mui/material';
import {useRouter} from 'next/router';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import NewProduct from '../components/newProduct';
import Carousel from '../components/carousel';

const HomePage = () => {
  const history = useRouter();
  const [productSlideValue, setProductSlideValue] = useState(0);
  const [materialSelect, setMaterialSelect] = React.useState("basic");
  const tdLabelProductDetailStyle = {
    width: "25%",
    paddingTop: "10px",
  };

  const tdValueProductDetailStyle = {
    paddingTop: "10px",
  };

  const smallSlideImage = {
    width: "90px",
  };

  const showSlideImage = {
    width: "568px",
    height: "501px",
  };
  const productDetailSlides = [
    <img
      key={"slideproduct1"}
      style={showSlideImage}
      src={"/assets/images/homepage/Big-Image-4.jpg"}
    />,
    <img
      key={"slideproduct2"}
      style={showSlideImage}
      src={"/assets/images/homepage/Big-Image-5.jpg"}
    />,
    <img
      key={"slideproduct3"}
      style={showSlideImage}
      src={"/assets/images/homepage/Big-image.jpg"}
    />,
    <img
      key={"slideproduct4"}
      style={showSlideImage}
      src={"/assets/images/homepage/Big-Image-2.jpg"}
    />,
    <img
      key={"slideproduct5"}
      style={showSlideImage}
      src={"/assets/images/homepage/Big-Image-3.jpg"}
    />,
  ];
  const handleChangeMaterialSelect = (event, newAlignment) => {
    setMaterialSelect(newAlignment);
  };

  const onProductSlideChange = (value) => {
    setProductSlideValue(value);
  };

  return (
    <Container>
      <Box
        sx={{
          py: { xl: 8 },
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "left",
          textAlign: "left",
          width: "100%",
          backgroundImage:
            "url(/assets/images/homepage/landing_page_banner.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundPositionY: "30px",
          backgroundSize: "85%",
          marginTop: "-30px",
        }}
      >
        <NewProduct name="Fascia Gun Mini Pro"  desc="Membantu meredakan nyeri otot dan kekakuan dengan 4 attachment
              massage head yang dapat digant dan Meningkatkan sirkulasi darah" url="https://www.tokopedia.com/mitimes/mitimes-fascia-massage-gun-mg1-orange-alat-pijat-orange"></NewProduct>
        <Box sx={{ marginTop: "80px" }}>
          <Card>
            <CardContent>
              <Stack
                direction={"row"}
                divider={<Divider orientation={"vertical"} flexItem />}
                spacing={2}
              >
                <Box
                  sx={{ flexGrow: 1, paddingLeft: "30px", paddingTop: "10px" }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <img src={"/assets/images/homepage/shipping.png"} />
                    </Grid>
                    <Grid item xs={8}>
                      <Box sx={{ paddingTop: "0px" }}>
                        <Typography
                          component={"h3"}
                          sx={{
                            fontWeight: "600",
                            fontSize: "22px",
                            lineHeight: "33px",
                          }}
                        >
                          Gratis Ongkir
                        </Typography>
                        <Typography>Jabodetabek</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{ flexGrow: 1, paddingLeft: "30px", paddingTop: "10px" }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <img src={"/assets/images/homepage/layanan.png"} />
                    </Grid>
                    <Grid item xs={8}>
                      <Box sx={{}}>
                        <Typography
                          component={"h3"}
                          sx={{
                            fontWeight: "600",
                            fontSize: "22px",
                            lineHeight: "33px",
                          }}
                        >
                          Layanan 24/7
                        </Typography>
                        <Typography>Setiap hari melayani</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
                <Box
                  sx={{ flexGrow: 1, paddingLeft: "30px", paddingTop: "10px" }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={3}>
                      <img src={"/assets/images/homepage/official.png"} />
                    </Grid>
                    <Grid item xs={8}>
                      <Box>
                        <Typography
                          component={"h3"}
                          sx={{
                            fontWeight: "600",
                            fontSize: "22px",
                            lineHeight: "33px",
                          }}
                        >
                          Official Store
                        </Typography>
                        <Typography>Temukan di e-commerce</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "30px",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Typography
            component={"h1"}
            sx={{
              fontWeight: "600",
              fontSize: "48px",
              lineHeight: "72px",
              color: "#0F0C33",
            }}
          >
            Fitur Terbaik Dari Fascia Gun Mini Pro
          </Typography>
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(15, 12, 51, 0.5)",
            }}
          >
            Bermusik sambil merawat tubuh yang terlalu lelah setelah
            beraktifitas seharian.
          </Typography>
          <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
            <Grid container>
              <Grid item sm={12} md={6}>
                  <Carousel></Carousel>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box
                  sx={{
                    textAlign: "left",
                    fontWeight: "500",
                    fontSize: "16px",
                    lineHeight: "24px",
                    paddingLeft: "25px",
                  }}
                >
                  <Typography
                    component={"h2"}
                    sx={{
                      fontWeight: "600",
                      fontSize: "28px",
                      lineHeight: "42px",
                      color: "#0F0C33",
                    }}
                  >
                    Fascia Gun Mini Pro
                  </Typography>
                  <Rating name="quality" value={5} readOnly />
                  <Typography
                    sx={{
                      color: "rgba(15, 12, 51, 0.5)",
                    }}
                  >
                    Membantu meredakan nyeri otot dan kekakuan dengan 4
                    attachment massage head yang dapat diganti. Meningkatkan
                    sirkulasi darah, meningkatkan jangkauan gerak dan membantu
                    mempercepat pemanasan dan pemulihan
                  </Typography>
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <td style={tdLabelProductDetailStyle}>Price:</td>
                        <td style={tdValueProductDetailStyle}>
                          Rp. 500K{" "}
                          <span
                            style={{
                              opacity: "0.5",
                              textDecoration: "line-through",
                            }}
                          >
                            Rp. 999K
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td style={tdLabelProductDetailStyle}>Color:</td>
                        <td style={tdValueProductDetailStyle}>
                          <img
                            src={"/assets/images/homepage/small-color-1.png"}
                            style={{ width: "26px" }}
                          />
                          <img
                            src={"/assets/images/homepage/small-color-2.png"}
                            style={{ width: "26px", marginLeft: "8px" }}
                          />
                          <img
                            src={"/assets/images/homepage/small-color-3.png"}
                            style={{ width: "26px", marginLeft: "8px" }}
                          />
                          <img
                            src={"/assets/images/homepage/small-color-4.png"}
                            style={{ width: "26px", marginLeft: "8px" }}
                          />
                          <img
                            src={"/assets/images/homepage/small-color-6.png"}
                            style={{ width: "26px", marginLeft: "8px" }}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td style={tdLabelProductDetailStyle}>Material:</td>
                        <td style={tdValueProductDetailStyle}>
                          <ToggleButtonGroup
                            color="primary"
                            value={materialSelect}
                            exclusive
                            onChange={handleChangeMaterialSelect}
                            variant={"text"}
                          >
                            <ToggleButton value="basic">BASIC</ToggleButton>
                            <ToggleButton value="special">
                              SPECIAL EDITION
                            </ToggleButton>
                          </ToggleButtonGroup>
                        </td>
                      </tr>
                      <tr>
                        <td style={tdLabelProductDetailStyle}>Availability:</td>
                        <td style={tdValueProductDetailStyle}>
                          <Typography sx={{ color: "#5DB97C" }}>
                            In stock!
                          </Typography>
                        </td>
                      </tr>
                      <tr>
                        <td style={tdLabelProductDetailStyle}>Quantity:</td>
                        <td style={tdValueProductDetailStyle}>
                          <TextField
                            id="outlined-number"
                            type="number"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            sx={{ width: "20%" }}
                            defaultValue={1}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <Link
                            href={
                              "https://www.tokopedia.com/mitimes/mitimes-fascia-massage-gun-mg1-orange-alat-pijat-orange"
                            }
                          >
                            <Button
                              variant="contained"
                              sx={{ marginTop: "30px" }}
                            >
                              + Beli Sekarang
                            </Button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
