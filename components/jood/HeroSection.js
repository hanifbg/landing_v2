import React from "react";
import Image from "next/image";

import { Box, Stack, Typography } from "@mui/material";

import logo from "../../assets/icon/logo-instant.webp";
import zikrRing from "../../public/jood/zikrRing.webp";
import logoZood from "../../public/jood/jood_logo.webp";
import jood_b from "../../public/jood/jood_black.webp";
import title1 from "../../public/jood/hero_title_1.webp";
import title2 from "../../public/jood/hero_title_2.webp";
import title3 from "../../public/jood/hero_title_3.webp";
import title4 from "../../public/jood/hero_title_4.webp";
import title5 from "../../public/jood/hero_title_5.webp";
import title6 from "../../public/jood/hero_title_6.webp";
import title7 from "../../public/jood/hero_title_7.webp";
import hero1 from "../../public/jood/hero_1.webp";
import hero2 from "../../public/jood/hero_2.webp";
import hero3 from "../../public/jood/hero_3.webp";
import hero4 from "../../public/jood/hero_4.webp";
import hero5 from "../../public/jood/hero_5.webp";
import hero6 from "../../public/jood/hero_6.webp";
import promo from "../../assets/images/promo-jood.svg";

const HeroSection = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage: "url('/jood/bg-hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Stack sx={{ padding: "0 20px" }}>
          <Image
            src={logo}
            alt="Logo Instant"
            width={110}
            height={30}
            style={{
              margin: "0 auto 40px",
            }}
          />
          <Image
            src={zikrRing}
            alt="Zikr"
            width={169}
            height={44}
            style={{
              marginBottom: "16px",
            }}
          />
          <Image src={logoZood} alt="Jood" width={312} height={124} />
          <Box sx={{ textAlign: "right", overflow: "hidden", position: "relative", top: "-32px" }}>
            <Image
              src={jood_b}
              alt="Jood"
              width={201}
              height={275}
              style={{
                transform: "rotate(14.745deg)",
              }}
            />
          </Box>
        </Stack>
        <Box
          sx={{
            background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 7.11%, #ffffff 83.33%)",
            padding: "16px",
          }}
        >
          <Image src={title1} alt="Benefit" width={345} height={138} />
          <Typography
            color="text.primary"
            sx={{
              fontSize: "0.875rem",
              padding: "16px 16px 0",
            }}
          >
            Cincin pintar yang menggabungkan pengingat Adzan & pelacak kebugaran dengan desain elegan sesuai kebutuhan Muslim modern
          </Typography>
        </Box>
      </Box>

      <Box onClick={() => window.open("https://api.whatsapp.com/send?phone=6285179766847&text=Halo,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20Zikr%20Ring%20Jood.", "_blank")}>
        <Image src={promo} alt="promo" width={360} height={193} style={{ cursor: "pointer" }} />
      </Box>

      <Box
        sx={{
          backgroundImage: "url('/jood/vector.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          textAlign="center"
          sx={{
            paddingTop: "44px",
            marginBottom: "-40px",
          }}
        >
          <Image
            src={title2}
            alt="jood title"
            width={276}
            height={34}
            style={{
              marginBottom: "14px",
            }}
          />
          <Typography
            color="text.primary"
            sx={{
              fontSize: "0.875rem",
            }}
          >
            untuk Iman yang Lebih Dekat
          </Typography>
        </Box>
        <Box sx={{ position: "relative" }}>
          <Image src={hero1} alt="jood title" width={393} height={453} />
          <Image
            src={hero2}
            alt="Benefit"
            width={253}
            height={188}
            style={{
              position: "absolute",
              bottom: "-90px",
              right: "0",
            }}
          />
        </Box>
      </Box>

      <Box sx={{ position: "relative", padding: "60px 16px 40px" }}>
        <Image src={title3} alt="jood title" width={262} height={102} style={{ marginBottom: "14px" }} />
        <Typography
          color="text.primary"
          sx={{
            fontSize: "0.875rem",
          }}
        >
          Notifikasi untuk Adzan Subuh, Dzuhur, Ashar, Maghrib, dan Isya.
        </Typography>
      </Box>
      <Box sx={{ position: "relative", marginBottom: "40px" }}>
        <Image src={hero3} alt="jood" width={392} height={262} />
        <Box
          sx={{
            position: "absolute",
            bottom: "32px",
            right: { xs: "16px", md: "0" },
          }}
        >
          <Image src={title4} alt="jood" width={320} height={88} />
        </Box>
        <Typography
          color="text.primary"
          sx={{
            fontSize: "0.875rem",
            paddingTop: "60px",
            paddingRight: "16px",
            textAlign: "right",
          }}
        >
          Hitung tasbih dengan mudah
        </Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Box sx={{ textAlign: "right", position: "relative", width: "100%", overflow: "hidden" }}>
          <Image src={hero4} alt="jood" width={332} height={239} />
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #e6f3ff 0%, #ffffff 100%)",
              filter: "blur(120px)",
              transform: "scale(1.1)",
              height: "100px",
              marginTop: "auto",
            }}
          ></Box>
          <Box sx={{ position: "absolute", bottom: "0", left: { xs: "16px", md: "0" } }}>
            <Image src={title5} alt="jood" width={313} height={44} />
          </Box>
        </Box>
        <Typography
          color="text.primary"
          sx={{
            fontSize: "0.875rem",
            padding: "16px 16px 40px",
          }}
        >
          Temukan arah Ka'bah akurat kapan saja.
        </Typography>
      </Box>
      <Box>
        <Box sx={{ position: "relative" }}>
          <Image src={hero5} alt="jood" width={332} height={239} />
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              right: { xs: "16px", md: "0" },
            }}
          >
            <Image src={title6} alt="jood" width={313} height={44} />
          </Box>
        </Box>
        <Typography
          color="text.primary"
          sx={{
            fontSize: "0.875rem",
            padding: "16px 16px 40px",
          }}
        >
          Monitor langkah harian dan pembakaran kalori
        </Typography>
      </Box>
      <Box>
        <Box sx={{ position: "relative" }}>
          <Box sx={{ textAlign: "right" }}>
            <Image src={hero6} alt="jood" width={332} height={239} />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "0",
              width: "100%",
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 7.11%, #ffffff 83.33%)",
              paddingTop: "40px",
              paddingLeft: {
                xs: "16px",
                md: "0",
              },
            }}
          >
            <Image src={title7} alt="jood" width={211} height={88} />
          </Box>
        </Box>
        <Typography
          color="text.primary"
          sx={{
            fontSize: "0.875rem",
            padding: "16px 16px 40px",
          }}
        >
          Ideal untuk aktivitas sehari-hari, termasuk saat wudhu.
        </Typography>
      </Box>
    </Box>
  );
};

export default HeroSection;
