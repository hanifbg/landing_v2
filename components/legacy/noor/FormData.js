import React from "react";
import { Box, TextField, MenuItem, Typography, Button } from "@mui/material";

const FormDataPenerima = (props) => {
  const { jumlah, setJumlah, alamat, setAlamat, hp, setHp, nama, setNama } = props;

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        padding: "16px",
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: "12px" }}>
        Data Penerima:
      </Typography>
      
      {/* Pilihan Warna */}
      <TextField select fullWidth label="Pilih Warna" defaultValue="Tosca" sx={{ marginBottom: "12px" }}>
        <MenuItem value="Hitam">Hitam</MenuItem>
        <MenuItem value="Pink">Pink</MenuItem>
        <MenuItem value="Biru">Biru</MenuItem>
        <MenuItem value="Hijau">Hijau</MenuItem>
      </TextField>
      
      {/* Nama */}
      <TextField 
        fullWidth 
        label="Nama Anda" 
        variant="outlined" 
        value={nama} 
        onChange={(e) => setNama(e.target.value)} 
        sx={{ marginBottom: "12px" }} 
      />
      
      {/* Nomor Telepon */}
      <TextField 
        fullWidth 
        label="Nomor Whatsapp" 
        variant="outlined" 
        value={hp} 
        onChange={(e) => setHp(e.target.value)} 
        sx={{ marginBottom: "12px" }} 
      />
      
      {/* Alamat Lengkap */}
      <TextField 
        fullWidth 
        label="Alamat Lengkap Anda" 
        variant="outlined" 
        multiline 
        rows={3} 
        value={alamat} 
        onChange={(e) => setAlamat(e.target.value)} 
        sx={{ marginBottom: "12px" }} 
      />
      
      {/* Jumlah */}
      <TextField 
        fullWidth 
        label="Jumlah" 
        variant="outlined" 
        type="number" 
        value={jumlah} 
        onChange={(e) => setJumlah(e.target.value)} 
        sx={{ marginBottom: "12px" }} 
      />

      {/* Button Pesan Sekarang */}
      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        onClick={handleSubmit}
      >
        Pesan Sekarang
      </Button>
    </Box>
  );
};

export default FormDataPenerima;