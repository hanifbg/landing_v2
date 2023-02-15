import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function NewProduct(props){
   return ( <Box sx={{ height: "650px", width: "100%" }}>
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
              {/* Fascia Gun Mini Pro */}
              {props.name}
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
              {/* Membantu meredakan nyeri otot dan kekakuan dengan 4 attachment
              massage head yang dapat digant dan Meningkatkan sirkulasi darah */}
              {props.desc}
            </Typography>
            <Link
            // https://www.tokopedia.com/mitimes/mitimes-fascia-massage-gun-mg1-orange-alat-pijat-orange
              href={props.url}
            >
              <Button variant="contained" sx={{ marginTop: "30px" }}>
                <AddShoppingCartIcon /> + Beli Sekarang
              </Button>
            </Link>
          </Box>
        </Box>
   );
}