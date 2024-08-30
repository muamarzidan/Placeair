// Provinsi Jawa Tengah
import jatengImg from '/src/assets/images/jateng/thumbnail-jateng.webp';
import gMerbabuImgOne from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-one.webp';
import gMerbabuImgTwo from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-two.webp';
import gMerbabuImgTree from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-tree.webp';



// Provinsi Sumatra Barat
import provinsiSumbar from '/src/assets/images/sumbar/thumbnail-sumbar.webp';
import jamGadangOne from '/src/assets/images/sumbar/destination/thumbnail-dest-jamgadang.webp';
import jamGadangTwo from '/src/assets/images/sumbar/destination/thumbnail-dest-jamgadang-2.webp';
import jamGadangTree from '/src/assets/images/sumbar/destination/thumbnail-dest-jamgadang-3.webp';
import harauOne from '/src/assets/images/sumbar/destination/thumbnail-dest-harau.webp';
import harauTwo from '/src/assets/images/sumbar/destination/thumbnail-dest-harau-2.webp';
import harauTree from '/src/assets/images/sumbar/destination/thumbnail-dest-harau-3.webp';
import nirwanaOne from '/src/assets/images/sumbar/destination/thumbnail-dest-nirwana.webp';
import nirwanaTwo from '/src/assets/images/sumbar/destination/thumbnail-dest-nirwana-2.webp';
import nirwanaTree from '/src/assets/images/sumbar/destination/thumbnail-dest-nirwana-3.webp';
// import seribuGadangOne from '/src/assets/images/sumbar/destination/thumbnail-dest-seribuGadang.webp';
// import seribuGadangTwo from '/src/assets/images/sumbar/destination/thumbnail-dest-seribuGadang-2.webp';
// import seribuGadangTree from '/src/assets/images/sumbar/destination/thumbnail-dest-seribuGadang-3.webp';



// Music
import sumbarMusic from "/src/assets/music/sumbar.mp3";
import bangbelMusic from "/src/assets/music/bangbel.mp3";
import jabarMusic from "/src/assets/music/jabar.mp3";
import jatengMusic from "/src/assets/music/jateng.mp3";
import jatimMusic from "/src/assets/music/jatim.mp3";
import baliMusic from "/src/assets/music/bali.mp3";
import ntbMusic from "/src/assets/music/ntb.mp3";
import kalselMusic from "/src/assets/music/kalsel.mp3";
import sulutMusic from "/src/assets/music/sulut.mp3";
import sulselMusic from "/src/assets/music/sulsel.mp3";
import malukuMusic from "/src/assets/music/maluku.mp3";
import papuaMusic from "/src/assets/music/papua.mp3";


export default [
    // Provinsi Sumatera Barat
    {
        id: 1,
        province: "Sumatera Barat",
        thumbnailProvince: provinsiSumbar,
        bgMusic: sumbarMusic,
        destinations: [
            {
                id: 10,
                thumbnailProvince: provinsiSumbar,
                name: "Jam Gadang",
                category: "kesenian", 
                description: "Jam Gadang adalah ikon Kota Bukittinggi yang terkenal dengan menara jam berarsitektur khas Minangkabau. Dibangun pada tahun 1926, menara ini memiliki ketinggian sekitar 26 meter dengan kubah yang bentuknya menyerupai atap rumah gadang. Jam ini unik karena hanya memiliki angka romawi 'IIII' untuk angka empat, berbeda dari jam biasanya. Setiap tahunnya, Jam Gadang menjadi pusat perayaan dan acara kebudayaan di Bukittinggi, menjadi daya tarik utama bagi wisatawan domestik dan mancanegara.",
                thumbnail: jamGadangOne,
                thumbnailTwo: jamGadangTwo,
                thumbnailTree: jamGadangTree,
                province: "Sumatera Barat",
                location: "Bukittinggi",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.090002095385!2d100.3528384539807!3d-0.306454380193766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd538bd1ff164a7%3A0xcea33881870dc19!2sJam%20Gadang%20Bukittinggi!5e0!3m2!1sid!2sid!4v1725023720284!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/PHTzfzYLBsbigN4Z6",
                rute: null,
                viewCount: 1001,
                price: 10000,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 10000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 10000
                    },
                ],
                rating: 4.7,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 11,
                thumbnailProvince: provinsiSumbar,
                name: "Lembah Harau",
                category: "alam", 
                description: "Lembah Harau terletak di Kabupaten Lima Puluh Kota dan dikenal sebagai salah satu lembah terindah di Sumatera Barat. Dikelilingi oleh tebing-tebing granit setinggi 100 hingga 300 meter, lembah ini menawarkan pemandangan alam yang memukau serta air terjun yang mengalir jernih. Selain panorama alam, Lembah Harau juga menjadi tempat favorit untuk kegiatan panjat tebing. Udara sejuk dan suasana tenang membuatnya ideal untuk melepas penat dan menikmati keindahan alam.",
                thumbnail: harauOne,
                thumbnailTwo: harauTwo,
                thumbnailTree: harauTree,
                province: "Sumatera Barat",
                location: "Lima Puluh Kota",
                viewCount: 1002,
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.50003340592!2d100.6411010435936!3d-0.0978316936769927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2ab31922ab0fdf%3A0x581641322ca49a0e!2sLembah%20Harau!5e0!3m2!1sid!2sid!4v1725024165210!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/XaQuBF1mjWbSFy6A7",
                rute: null,
                price: 20000,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 40000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 20000
                    },
                ],
                rating: 4.7,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 12,
                thumbnailProvince: provinsiSumbar,
                name: "Pantai Nirwana",
                category: "alam", 
                description: "Pantai Nirwana terletak di Kota Padang, Sumatera Barat, dan terkenal dengan pasir putihnya yang lembut serta air laut yang jernih. Pemandangan matahari terbenam di pantai ini sangat memukau, dengan langit yang berwarna keemasan dan siluet perahu nelayan yang melintas. Pantai ini juga cocok untuk aktivitas snorkeling karena terumbu karang yang masih terjaga. Selain itu, lokasi pantai yang dekat dengan pusat kota membuatnya mudah diakses oleh wisatawan.",
                thumbnail: nirwanaOne,
                thumbnailTwo: nirwanaTwo,
                thumbnailTree: nirwanaTree,
                province: "Sumatera Barat",
                location: "Padang",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31918.50003340592!2d100.6411010435936!3d-0.0978316936769927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2ab31922ab0fdf%3A0x581641322ca49a0e!2sLembah%20Harau!5e0!3m2!1sid!2sid!4v1725024165210!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/XaQuBF1mjWbSFy6A7",
                rute: null,
                viewCount: 1003,
                price: 5000,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 5000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 5000
                    },
                ],
                rating: 4.1,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Bangka Belitung
    {
        id: 2, 
        province: "Bangka Belitung",
        thumbnailProvince: jatengImg,
        bgMusic: bangbelMusic,
        destinations: [
            {
                id: 2,
                thumbnailProvince: jatengImg,
                name: "Gunung Merbabu",
                category: "sejarah", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Bangka Belitung",
                location: "Semarang",
                viewCount: 1000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Jawa Barat
    {
        id: 3,
        province: "Jawa Barat",
        thumbnailProvince: jatengImg,
        bgMusic: jabarMusic,
        destinations: [
            {
                id: 3,
                thumbnailProvince: jatengImg,
                name: "Gunung Ciremai",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Jawa Barat",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Jawa Tengah
    {
        id: 4,
        province: "Jawa Tengah",
        thumbnailProvince: jatengImg,
        bgMusic: jatengMusic,
        destinations: [
            {
                id: 4,
                thumbnailProvince: jatengImg,
                name: "Gunung Maluku",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Jawa Tengah",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Jawa Timur
    {
        id: 5,
        province: "Jawa Timur",
        thumbnailProvince: jatengImg,
        bgMusic: jatimMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung Jatim",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Jawa Timur",
                location: "Semarang",
                viewCount: 5001,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Bali
    {
        id: 6,
        province: "Bali",
        thumbnailProvince: jatengImg,
        bgMusic: baliMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Bali",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Nusa Tenggara Barat
    {
        id: 7,
        province: "Nusa Tenggara Barat",
        thumbnailProvince: jatengImg,
        bgMusic: ntbMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Nusa Tenggara Barat",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Kalimantan Selatan
    {
        id: 8,
        province: "Kalimantan Selatan",
        thumbnailProvince: jatengImg,
        bgMusic: kalselMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Kalimantan Selatan",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Sulawesi Utara
    {
        id: 9,
        province: "Sulawesi Utara",
        thumbnailProvince: jatengImg,
        bgMusic: sulutMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Sulawesi Utara",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Sulawesi Selatan
    {
        id: 10,
        province: "Sulawesi Selatan",
        thumbnailProvince: jatengImg,
        bgMusic: sulselMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Sulawesi Selatan",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Maluku
    {
        id: 11,
        province: "Maluku",
        thumbnailProvince: jatengImg,
        bgMusic: malukuMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Maluku",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Papua
    {
        id: 12,
        province: "Papua",
        thumbnailProvince: jatengImg,
        bgMusic: papuaMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: jatengImg,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Papua",
                location: "Semarang",
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    }
];