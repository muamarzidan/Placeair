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

// Provinsi Bangka Belitung
import provinsiBangbel from '/src/assets/images/bangbel/thumbnail-bangbel.webp';
import kaolinOne from '/src/assets/images/bangbel/destination/thumbnail-dest-kaolin.webp';
import kaolinTwo from '/src/assets/images/bangbel/destination/thumbnail-dest-kaolin-2.webp';
import kaolinTree from '/src/assets/images/bangbel/destination/thumbnail-dest-kaolin-3.webp';
import puriAgungOne from '/src/assets/images/bangbel/destination/thumbnail-dest-puriagung.webp';
import puriAgungTwo from '/src/assets/images/bangbel/destination/thumbnail-dest-puriagung-2.webp';
import puriAgungTree from '/src/assets/images/bangbel/destination/thumbnail-dest-puriagung-3.webp';
import timahOne from '/src/assets/images/bangbel/destination/thumbnail-dest-timah.webp';
import timahTwo from '/src/assets/images/bangbel/destination/thumbnail-dest-timah-2.webp';
import timahTree from '/src/assets/images/bangbel/destination/thumbnail-dest-timah-3.webp';

// Provinsi Jawa Tengah
import provinsiJateng from '/src/assets/images/jateng/thumbnail-jateng.webp';
import gunungMerbabuOne from '/src/assets/images/jateng/destination/thumbnail-jateng-one.webp';
import gunungMerbabuTwo from '/src/assets/images/jateng/destination/thumbnail-jateng-two.webp';
import gunungMerbabuTree from '/src/assets/images/jateng/destination/thumbnail-jateng-tree.webp';
import lawangSewuOne from '/src/assets/images/jateng/destination/thumbnail-dest-lawangSewu.webp';
import lawangSewuTwo from '/src/assets/images/jateng/destination/thumbnail-dest-lawangSewu-2.webp';
import lawangSewuTree from '/src/assets/images/jateng/destination/thumbnail-dest-lawangSewu-3.webp';
import sendatariOne from '/src/assets/images/jateng/destination/thumbnail-dest-sendratari.webp';
import sendatariTwo from '/src/assets/images/jateng/destination/thumbnail-dest-sendratari-2.webp';
import sendatariTree from '/src/assets/images/jateng/destination/thumbnail-dest-sendratari-3.webp';

// Provinsi Jawa Timur
import provinsiJatim from '/src/assets/images/jatim/thumbnail-jatim.webp';
import airterjunTumpakSewuOne from '/src/assets/images/jatim/destination/thumbnail-dest-airterjunTumpakSewu.webp';
import airterjunTumpakSewuTwo from '/src/assets/images/jatim/destination/thumbnail-dest-airterjunTumpakSewu-2.webp';
import airterjunTumpakSewuTree from '/src/assets/images/jatim/destination/thumbnail-dest-airterjunTumpakSewu-3.webp';
import candiPataranOne from '/src/assets/images/jatim/destination/thumbnail-dest-candiPataran.webp';
import candiPataranTwo from '/src/assets/images/jatim/destination/thumbnail-dest-candiPataran-2.webp';
import candiPataranTree from '/src/assets/images/jatim/destination/thumbnail-dest-candiPataran-3.webp';
import kawahIjenOne from '/src/assets/images/jatim/destination/thumbnail-dest-kawahIjen.webp';
import kawahIjenTwo from '/src/assets/images/jatim/destination/thumbnail-dest-kawahIjen-2.webp';
import kawahIjenTree from '/src/assets/images/jatim/destination/thumbnail-dest-kawahIjen-3.webp';



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
    // Provinsi Sumatera Barat done
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
    // Provinsi Bangka Belitung done
    {
        id: 2, 
        province: "Bangka Belitung",
        thumbnailProvince: provinsiBangbel,
        bgMusic: bangbelMusic,
        destinations: [
            {
                id: 20,
                thumbnailProvince: provinsiBangbel,
                name: "Danau Kaolin",
                category: "alam", 
                description: "Danau Kaolin, yang terletak di Bangka Belitung, Indonesia, adalah sebuah danau buatan yang terbentuk dari bekas tambang kaolin. Danau ini terkenal dengan airnya yang berwarna biru jernih dan dikelilingi oleh tebing putih dari endapan kaolin. Keindahan alam dan kontras warna yang mencolok menjadikannya sebagai salah satu destinasi wisata menarik di daerah tersebut, ideal untuk berfoto dan menikmati pemandangan yang unik.",
                thumbnail: kaolinOne,
                thumbnailTwo: kaolinTwo,
                thumbnailTree: kaolinTree,
                province: "Bangka Belitung",
                location: "Bangka Tengah",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8740904647416!2d106.35028427496891!3d-2.5478740974304372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3d4513bce66569%3A0xb60b7ec414d881df!2sDanau%20Kaolin!5e0!3m2!1sid!2sid!4v1725028158454!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/E9cK3nPw1jYmu7459",
                rute: null,
                price: 0,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 0
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 0
                    },
                ],
                viewCount: 2001,
                rating: 4.6,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 21,
                thumbnailProvince: provinsiBangbel,
                name: "Puri Agung",
                category: "sejarah", 
                description: "Puri Tri Agung di Bangka Belitung adalah sebuah kompleks tempat tinggal yang terletak di Pangkalpinang, ibu kota provinsi. Tempat ini dikenal dengan arsitekturnya yang modern dan fasilitasnya yang lengkap, menawarkan kenyamanan serta kemudahan bagi penghuninya. Dengan desain yang elegan dan lingkungan yang nyaman, Puri Tri Agung merupakan pilihan populer untuk hunian yang mengutamakan kualitas dan gaya hidup yang baik.",
                thumbnail: puriAgungOne,
                thumbnailTwo: puriAgungTwo,
                thumbnailTree: puriAgungTree,
                province: "Bangka Belitung",
                location: "Sungai Liat",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8740904647416!2d106.35028427496891!3d-2.5478740974304372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3d4513bce66569%3A0xb60b7ec414d881df!2sDanau%20Kaolin!5e0!3m2!1sid!2sid!4v1725028158454!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/E9cK3nPw1jYmu7459",
                rute: null,
                price: 0,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 0
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 0
                    },
                ],
                viewCount: 2002,
                rating: 4.6,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 22,
                thumbnailProvince: provinsiBangbel,
                name: "Museum Timah",
                category: "sejarah", 
                description: "Museum Timah Bangka Belitung adalah sebuah museum yang terletak di Pangkalpinang, Bangka Belitung, Indonesia. Museum ini didedikasikan untuk memamerkan sejarah, proses, dan dampak industri timah di wilayah tersebut. Dengan koleksi yang mencakup peralatan penambangan, artefak sejarah, dan informasi tentang ekonomi serta budaya yang berkaitan dengan timah, museum ini memberikan wawasan mendalam tentang peran timah dalam perkembangan daerah dan negara.",
                thumbnail: timahOne,
                thumbnailTwo: timahTwo,
                thumbnailTree: timahTree,
                province: "Bangka Belitung",
                location: "Pangkal Pinang",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.091759643947!2d106.10691607480541!3d-2.1183288978627624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e22c12016178f93%3A0x6347a4211f64652d!2sMuseum%20Timah%20Indonesia!5e0!3m2!1sid!2sid!4v1725028832058!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/cNCiZTQCQYKZ1TEaA",
                rute: null,
                price: 0,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 0
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 0
                    },
                ],
                viewCount: 2003,
                rating: 4.6,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Jawa Barat
    {
        id: 3,
        province: "Jawa Barat",
        thumbnailProvince: provinsiJateng,
        bgMusic: jabarMusic,
        destinations: [
            {
                id: 3,
                thumbnailProvince: provinsiJateng,
                name: "Gunung Ciremai",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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
    // Provinsi Jawa Tengah done
    {
        id: 4,
        province: "Jawa Tengah",
        thumbnailProvince: provinsiJateng,
        bgMusic: jatengMusic,
        destinations: [
            {
                id: 40,
                thumbnailProvince: provinsiJateng,
                name: "Gunung Merbabu",
                category: "alam", 
                description: "Gunung Merbabu adalah gunung berapi yang sudah tidak aktif, terletak di perbatasan Jawa Tengah dan Yogyakarta. Gunung ini memiliki ketinggian sekitar 3.145 meter di atas permukaan laut, dan dikenal dengan jalur pendakian yang menantang namun menawarkan pemandangan yang luar biasa. Puncaknya menyajikan panorama 360 derajat yang memukau, dengan pemandangan gunung-gunung lain seperti Merapi, Sindoro, dan Sumbing. Gunung Merbabu menjadi favorit para pendaki karena keindahan padang savana dan hutan pinus yang asri.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
                province: "Jawa Tengah",
                location: "Boyolali",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15824.370680909444!2d110.42970024526339!3d-7.454999730899555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a7b455e544767%3A0xf7af0c6e80ad2dde!2sGn.%20Merbabu!5e0!3m2!1sid!2sid!4v1725029828118!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/FpbbhYWVUo3w9R4F7",
                rute: [
                    {
                        id: 1,
                        name: "Jalur Selo",
                        description: "Jalur Selo merupakan jalur pendakian paling populer di Gunung Merbabu. Jalur ini dimulai dari Desa Selo, Kabupaten Boyolali, dan menawarkan pemandangan yang indah sepanjang perjalanan. Pendakian melalui jalur ini membutuhkan waktu sekitar 4-5 jam untuk mencapai puncak.",
                    },
                    {
                        id: 2,
                        name: "Jalur Suwanting",
                        description: "Melalui jalur ini, Anda akan menjangkau puncak Merbabu dari sisi barat. Ciri khas dari rute ini adalah Anda harus melewati medan di tengah hutan lamtoro yang cukup panjang.",
                    },
                    {
                        id: 3,
                        name: "Jalur Wekas",
                        description: "Jalur wekas adalah jalur pendakian melalui sisi utara Merbabu. Jalur ini menjadi favorit pendakian karena memiliki tempat kemah yang luas di pos II dengan sumber air yang melimpah.",
                    },
                    {
                        id: 4,
                        name: "Jalur Cunthel",
                        description: "Pendaki akan melewati Pos Pemancar di tengah perjalanan, lalu menghadapi tanjakan terjal setelah bergabung dengan jalur Wekas dan Thekelan.",
                    },
                    {
                        id: 5,
                        name: "Jalur Thekelan",
                        description: "Di jalur ini, pendaki akan menemukan Watu Gubug, sebuah batu yang konon menjadi gerbang menuju dimensi lain. Jalur ini kemudian bergabung dengan Wekas dan Chuntel, di mana pendaki harus melewati tanjakan terjal dan rute ekstrem menuju puncak, termasuk Ondorante.",
                    },
                ],
                price: 5000,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 150000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 5000
                    }
                ],
                viewCount: 4001,
                rating: 4.6,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 41,
                thumbnailProvince: provinsiJateng,
                name: "Lawang Sewu",
                category: "sejarah", 
                description: "Lawang Sewu, yang berarti Seribu Pintu, adalah bangunan bersejarah di Semarang, Jawa Tengah, yang dibangun pada masa kolonial Belanda. Bangunan ini terkenal dengan arsitektur megahnya dan jumlah pintu serta jendela yang sangat banyak, sehingga diberi nama Lawang Sewu. Meski dulunya berfungsi sebagai kantor pusat kereta api, kini Lawang Sewu menjadi destinasi wisata populer, terutama bagi mereka yang tertarik dengan sejarah dan cerita mistis. Lawang Sewu juga menawarkan pemandangan indah dan suasana klasik yang memikat.",
                thumbnail: lawangSewuOne,
                thumbnailTwo: lawangSewuTwo,
                thumbnailTree: lawangSewuTree,
                province: "Jawa Tengah",
                location: "Semarang",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.213846095437!2d110.40788372483607!3d-6.984071093016835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4f19af0393%3A0x11304de4230ded0d!2sLawang%20Sewu%20Semarang!5e0!3m2!1sid!2sid!4v1725030363478!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/Svgp8W2gVdkw4S8T9",
                rute: null,
                price: 20000,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 30000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 20000
                    }
                ],
                viewCount: 4002,
                rating: 4.6,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 43,
                thumbnailProvince: provinsiJateng,
                name: "Sendratari Ramayana",
                category: "kesenian", 
                description: "Sendratari Ramayana Prambanan adalah pertunjukan seni tari yang menggambarkan kisah epik Ramayana dengan latar belakang Candi Prambanan yang megah. Setiap gerakan dalam tarian ini menceritakan kisah cinta, perjuangan, dan kemenangan, dengan kostum yang indah dan musik gamelan yang mendayu-dayu. Pertunjukan ini biasanya digelar di panggung terbuka pada malam hari, memberikan pengalaman magis dengan latar candi yang diterangi cahaya. Ini adalah salah satu atraksi budaya paling terkenal di Jawa Tengah.",
                thumbnail: sendatariOne,
                thumbnailTwo: sendatariTwo,
                thumbnailTree: sendatariTree,
                province: "Jawa Tengah",
                location: "Sleman",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3464830079256!2d110.48590797484385!3d-7.753026692265909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3091a1081%3A0x42d3e57612b8cf42!2sSendratari%20Ramayana%20Ballet%20Candi%20Prambanan!5e0!3m2!1sid!2sid!4v1725030532848!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/Nm5pLDx6vEHo1QFFA",
                rute: null,
                price: 150000,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 300000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 150000
                    }
                ],
                viewCount: 4003,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Jawa Timur done
    {
        id: 5,
        province: "Jawa Timur",
        thumbnailProvince: provinsiJatim,
        bgMusic: jatimMusic,
        destinations: [
            {
                id: 50,
                thumbnailProvince: provinsiJatim,
                name: "Kawah Ijen",
                category: "alam", 
                description: "Kawah Ijen, terletak di Jawa Timur, Indonesia, adalah sebuah kawah vulkanik yang terkenal dengan danau belerangnya yang berwarna hijau toska. Selain pemandangan kawah yang menakjubkan, Kawah Ijen juga dikenal dengan fenomena api birunya yang langka, yang terlihat saat malam hari. Kawah ini merupakan salah satu lokasi penambangan belerang terbesar di dunia, dan keindahan serta keunikannya menjadikannya tujuan populer bagi pendaki dan fotografer.",
                thumbnail: kawahIjenOne,
                thumbnailTwo: kawahIjenTwo,
                thumbnailTree: kawahIjenTree,
                province: "Jawa Timur",
                location: "Bondowoso",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63206.68061681739!2d114.21151325585355!3d-8.058821543898778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd149f2110ae607%3A0x7c04ef029d5e39bc!2sGn.%20Ijen!5e0!3m2!1sid!2sid!4v1725031911054!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/1yq8KmPTSGmP8B62A",
                rute: null,
                price: 5000,
                priceDetail :[
                    {
                        id: 1,
                        name: "WNA",
                        price: 100000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 5000
                    }
                ],
                viewCount: 5001,
                rating: 4.7,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 51,
                thumbnailProvince: provinsiJatim,
                name: "Air Terjun Tampak Sewu",
                category: "alam", 
                description: "Air Terjun Tumpak Sewa, yang terletak di Jawa Timur, Indonesia, adalah air terjun spektakuler yang dikenal dengan aliran airnya yang deras dan lebar, menyerupai tirai raksasa. Dikelilingi oleh tebing-tebing curam dan hutan yang rimbun, air terjun ini menciptakan pemandangan yang menakjubkan dan dramatis. Suara gemuruh air terjun dan mistiknya kabut yang muncul di sekitar area menambah keindahan serta daya tariknya sebagai salah satu destinasi wisata alam yang menawan.",
                thumbnail: airterjunTumpakSewuOne,
                thumbnailTwo: airterjunTumpakSewuTwo,
                thumbnailTree: airterjunTumpakSewuTree,
                province: "Jawa Timur",
                location: "Lumajang",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.7267178796983!2d112.91267287799099!3d-8.230212570666284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd614085869da41%3A0x4a94cc5f06772982!2sAir%20Terjun%20Tumpak%20Sewu!5e0!3m2!1sid!2sid!4v1725032167607!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/R1G88qbo4Bq5MziV9",
                rute: null,
                price: 10000,
                priceDetail :[
                    {
                        id: 1,
                        name: "WNA",
                        price: 10000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 10000
                    }
                ],
                viewCount: 5002,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 52,
                thumbnailProvince: provinsiJatim,
                name: "Candi Pataran",
                category: "sejarah", 
                description: " Candi Penataran, terletak di Jawa Timur, Indonesia, adalah situs candi Hindu-Buddha yang merupakan salah satu kompleks candi terbesar di wilayah tersebut. Dibangun pada abad ke-12 hingga ke-13 Masehi, candi ini dikenal dengan arsitektur dan reliefnya yang megah serta detail yang menampilkan cerita-cerita epik Hindu seperti Ramayana dan Mahabharata. Sebagai pusat agama dan budaya pada masanya, Candi Penataran menawarkan wawasan penting tentang sejarah dan seni Jawa Timur kuno.",
                thumbnail: candiPataranOne,
                thumbnailTwo: candiPataranTwo,
                thumbnailTree: candiPataranTree,
                province: "Jawa Timur",
                location: "Blitar",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.8302384752615!2d112.20717787484682!3d-8.016435392009923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78f299e69b8cd1%3A0x52eb091bf02148b8!2sCandi%20Penataran!5e0!3m2!1sid!2sid!4v1725032442864!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/z7Fanwvxt8zw4gz46",
                rute: null,
                price: 5000,
                priceDetail :[
                    {
                        id: 1,
                        name: "WNA",
                        price: 5000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 5000
                    }
                ],
                viewCount: 5003,
                rating: 4.5,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    // Provinsi Bali
    {
        id: 6,
        province: "Bali",
        thumbnailProvince: provinsiJateng,
        bgMusic: baliMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: provinsiJateng,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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
        thumbnailProvince: provinsiJateng,
        bgMusic: ntbMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: provinsiJateng,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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
        thumbnailProvince: provinsiJateng,
        bgMusic: kalselMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: provinsiJateng,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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
        thumbnailProvince: provinsiJateng,
        bgMusic: sulutMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: provinsiJateng,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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
        thumbnailProvince: provinsiJateng,
        bgMusic: sulselMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: provinsiJateng,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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
        thumbnailProvince: provinsiJateng,
        bgMusic: malukuMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: provinsiJateng,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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
        thumbnailProvince: provinsiJateng,
        bgMusic: papuaMusic,
        destinations: [
            {
                id: 6,
                thumbnailProvince: provinsiJateng,
                name: "Gunung NTB",
                category: "kesenian", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gunungMerbabuOne,
                thumbnailTwo: gunungMerbabuTwo,
                thumbnailTree: gunungMerbabuTree,
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