import axios from 'axios';

// Fungsi untuk mengirim data ke Pipedream
const pushDataToSheet = async (orderData) => {
    // buat tanggal hari ini 
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const date = `${dd}/${mm}/${yyyy}`;

    const pipeDreamUrl = "https://eocnxio6l60dxkt.m.pipedream.net";

    try {
        const response = await axios.post(pipeDreamUrl, orderData);
        console.log("Data berhasil dikirim ke Pipedream:", response.data);
    } catch (error) {
        console.error("Gagal mengirim data ke Pipedream:", error.message);
    }
};

export default pushDataToSheet;