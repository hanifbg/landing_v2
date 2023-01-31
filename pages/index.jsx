import { Box, Typography, Link, Button } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Stack, useTheme} from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Rating from '@mui/lab/Rating';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import '@brainhubeu/react-carousel/lib/style.css';
import TextField from '@mui/material/TextField';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const HomePage = () => {
  return (
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
        backgroundImage: "url(/assets/images/homepage/landing_page_banner.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundPositionY: "30px",
        backgroundSize: "85%",
        marginTop: "-30px",
      }}
    >
      <Box sx={{ height: "650px", width: "100%" }}>
        <Box
          sx={{
            marginTop: "100px",
            width: "411px",
          }}
        >
          <Typography
            component={"h1"}
            sx={{
              fontSize: "60px",
              fontWeight: "700",
              color: "#0F0C33",
            }}
          >
            Fascia Gun Mini Pro
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "28px",
              letterSpacing: "0.01em",
              color: "rgba(15, 12, 51, 0.5)",
            }}
          >
            Membantu meredakan nyeri otot dan kekakuan dengan 4 attachment
            massage head yang dapat digant dan Meningkatkan sirkulasi darah
          </Typography>
          <Link
            href={
              "https://www.tokopedia.com/mitimes/mitimes-fascia-massage-gun-mg1-orange-alat-pijat-orange"
            }
          >
            <Button variant="contained" sx={{ marginTop: "30px" }}>
              <AddShoppingCartIcon /> + Beli Sekarang
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ marginTop: "80px" }}>
        <Card>
          <CardContent>
            <Stack
              direction={"row"}
              divider={<Divider orientation={"vertical"} flexItem />}
              spacing={2}
            >
              <Box sx={{ flexGrow: 1, paddingLeft: "30px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <img src={"/assets/images/homepage/shipping.png"} />
                  </Grid>
                  <Grid item xs={8}>
                    <Box sx={{ paddingTop: "10px" }}>
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
              <Box sx={{ flexGrow: 1, paddingLeft: "30px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <img src={"/assets/images/homepage/layanan.png"} />
                  </Grid>
                  <Grid item xs={8}>
                    <Box sx={{ paddingTop: "10px" }}>
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
              <Box sx={{ flexGrow: 1, paddingLeft: "30px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <img src={"/assets/images/homepage/official.png"} />
                  </Grid>
                  <Grid item xs={8}>
                    <Box sx={{ paddingTop: "10px" }}>
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
  );
};

export default HomePage;
