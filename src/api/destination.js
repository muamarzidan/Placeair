import trialImg from '/src/assets/images/card-kelingking.webp';
import sumbarImg from '/src/assets/images/sumbar/thumbnail-sumbar.webp';
import bangbelImg from '/src/assets/images/bangbel/thumbnail-bangbel.webp';
import jabarImg from '/src/assets/images/jabar/thumbnail-jabar.webp';
import jatimImg from '/src/assets/images/jatim/thumbnail-jatim.webp';
import baliImg from '/src/assets/images/bali/thumbnail-bali.webp';
import nusbatImg from '/src/assets/images/nusbat/thumbnail-nusbat.webp';
import kalselImg from '/src/assets/images/kalsel/thumbnail-kalsel.webp';
import sulutImg from '/src/assets/images/sulut/thumbnail-sulut.webp';
import sulselImg from '/src/assets/images/sulsel/thumbnail-sulsel.webp';
import malukuImg from '/src/assets/images/maluku/thumbnail-maluku.webp';
import papuaImg from '/src/assets/images/papua/thumbnail-papua.webp';

// Privinsi Jawa Tengah
import jatengImg from '/src/assets/images/jateng/thumbnail-jateng.webp';
import gMerbabuImgOne from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-one.webp';
import gMerbabuImgTwo from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-two.webp';
import gMerbabuImgTree from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-tree.webp';
import jatengMusic from "/src/assets/music/jateng.mp3";

export default [
    {
        id: 1, 
        name: "Ini Bali",
        category: "alam", 
        thumbnail: trialImg,
        thumbnailProvince: baliImg,
        description: "This is a description",
        province: "Bali",
        location: "Nusa Penida, Bali",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 150000,
        rating: 4.3,
        viewCount: 1000,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 2, 
        name: "Gunung Merbabu",
        category: "alam", 
        thumbnail: gMerbabuImgOne,
        thumbnailTwo: gMerbabuImgTwo,
        thumbnailtree: gMerbabuImgTree,
        thumbnailProvince: jatengImg,
        description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl. Gunung ini terkenal karena keindahan alamnya, terutama padang savana luas dan pemandangan puncak yang mempesona. Jalur pendakian menuju puncak Merbabu menawarkan pemandangan spektakuler dari berbagai vegetasi, mulai dari hutan tropis, padang rumput, hingga bunga edelweiss yang tumbuh subur di ketinggian.",
        bgMusic: jatengMusic,
        province: "Jawa Tengah",
        location: "Semarang",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 300000,
        rating: 4.8,
        viewCount: 1000,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 3, 
        name: "Ini Jabar",
        category: "sejarah", 
        thumbnail: trialImg,
        thumbnailProvince: jabarImg,
        description: "This is a description",
        province: "Jawa Barat",
        location: "Rengasdengklok, Kerawang",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 240000,
        rating: 3,
        viewCount: 436,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 4, 
        name: "Ini Maluku",
        category: "sejarah", 
        thumbnail: trialImg,
        thumbnailProvince: malukuImg,
        description: "This is a description",
        province: "Maluku",
        location: "Ambon",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 23,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 5, 
        name: "Ini Jatim",
        category: "kesenian", 
        thumbnail: trialImg,
        thumbnailProvince: jatimImg,
        description: "This is a description",
        province: "Jawa Timur",
        location: "Malang",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 1,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 6, 
        name: "Ini NTB",
        category: "kesenian", 
        thumbnail: trialImg,
        thumbnailProvince: nusbatImg,
        description: "This is a description",
        province: "Nusa Tenggara Barat",
        location: "Lombok",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 920,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 7, 
        name: "Ini Sumbar",
        category: "alam", 
        thumbnail: trialImg,
        thumbnailProvince: sumbarImg,
        description: "This is a description",
        province: "Sumatera Barat",
        location: "Bukit tinggi",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 543,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 8, 
        name: "Ini Bangbel",
        category: "alam", 
        thumbnail: trialImg,
        thumbnailProvince: bangbelImg,
        description: "This is a description",
        province: "Bangka Belitung",
        location: "Belitung",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 2001,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 9, 
        name: "Ini Kalsel",
        category: "kesenian", 
        thumbnail: trialImg,
        thumbnailProvince: kalselImg,
        description: "This is a description",
        province: "Kalimantan Selatan",
        location: "Banjarmasin",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 63,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 10, 
        name: "Ini Papua",
        category: "kesenian", 
        thumbnail: trialImg,
        thumbnailProvince: papuaImg,
        description: "This is a description",
        province: "Papua",
        location: "Jayapura",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 874,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 11, 
        name: "Ini Sulut",
        category: "kesenian", 
        thumbnail: trialImg,
        thumbnailProvince: sulutImg,
        description: "This is a description",
        province: "Sulawesi Utara",
        location: "Manado",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 220,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 12, 
        name: "Ini Sulsel",
        category: "kesenian", 
        thumbnail: trialImg,
        thumbnailProvince: sulselImg,
        description: "This is a description",
        province: "Sulawesi Selatan",
        location: "Makassar",
        locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
        price: 250000,
        rating: 4,
        viewCount: 10,
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    }
];