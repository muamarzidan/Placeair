// import trialImg from '/src/assets/images/card-kelingking.webp';
import baliImg from '/src/assets/images/bali/thumbnail-bali.webp';
import jatengImg from '/src/assets/images/jateng/thumbnail-jateng.webp';

// Privinsi Jawa Tengah
import gMerbabuImgOne from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-one.webp';
import gMerbabuImgTwo from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-two.webp';
import gMerbabuImgTree from '/src/assets/images/jateng/destination/gMerbabu/thumbnail-jateng-tree.webp';

import jatengMusic from "/src/assets/music/jateng.mp3";

export default [
    {
        id: 1,
        province: "Bali",
        thumbnailProvince: baliImg,
        bgMusic: jatengMusic,
        destinations: [
            {
                id: 1,
                thumbnailProvince: baliImg,
                name: "Gunung Agung",
                category: "alam", 
                description: "Gunung Merbabu adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl. Gunung ini terkenal karena keindahan alamnya, terutama padang savana luas dan pemandangan puncak yang mempesona. Jalur pendakian menuju puncak Merbabu menawarkan pemandangan spektakuler dari berbagai vegetasi, mulai dari hutan tropis, padang rumput, hingga bunga edelweiss yang tumbuh subur di ketinggian.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Bali",
                location: "Semarang",
                locationMaps: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253497.1393726255!2d107.47834459527094!3d-6.903421164625082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1724919943704!5m2!1sid!2sid",
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                rute: [
                    {
                        id: 1,
                        name: "Jalur Selo",
                        description: "Pada jalur ini terdapat padang sabana yang terhampar luas dan pemandangan yang indah. Anda juga bisa berkemah di sabana tersebut."
                    },
                    {
                        id: 2,
                        name: "Jalur Suwanting",
                        description: "Melalui jalur ini, Anda akan menjangkau puncak Merbabu dari sisi barat. Ciri khas dari rute ini adalah Anda harus melewati medan di tengah hutan lamtoro yang cukup panjang."
                    },
                    {
                        id: 3,
                        name: "Jalur Wekas",
                        description: "Jalur wekas adalah jalur pendakian melalui sisi utara Merbabu. Jalur ini menjadi favorit pendakian karena memiliki tempat kemah yang luas di pos II dengan sumber air yang melimpah."
                    },
                    {   
                        id: 4,
                        name: "Jalur Cunthel",
                        description: "Pendaki akan melewati Pos Pemancar di tengah perjalanan, lalu menghadapi tanjakan terjal setelah bergabung dengan jalur Wekas dan Thekelan."
                    },
                    {
                        id: 5,
                        name: "Jalur Thekelan",
                        description: "Di jalur ini, pendaki akan menemukan Watu Gubug, sebuah batu yang konon menjadi gerbang menuju dimensi lain. Jalur ini kemudian bergabung dengan Wekas dan Chuntel, di mana pendaki harus melewati tanjakan terjal dan rute ekstrem menuju puncak, termasuk Ondorante."
                    }
                ],
                viewCount: 1000,
                price: 300000,
                priceDetail: [
                    {
                        id: 1,
                        name: "WNA",
                        price: 50000
                    },
                    {
                        id: 2,
                        name: "WNI",
                        price: 20000
                    },
                ],
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 11,
                thumbnailProvince: baliImg,
                name: "Gunung Agung 2",
                category: "alam", 
                description: "Gunung Agung adalah gunung berapi dengan ketinggian sekitar 3.145 mdpl.",
                thumbnail: gMerbabuImgOne,
                thumbnailTwo: gMerbabuImgTwo,
                thumbnailTree: gMerbabuImgTree,
                province: "Bali",
                location: "Semarang",
                viewCount: 1000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 2, 
        province: "Jawa Tengah",
        thumbnailProvince: jatengImg,
        bgMusic: jatengMusic,
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
                province: "Jawa Tengah",
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
    {
        id: 3,
        province: "Jawa Barat",
        thumbnailProvince: jatengImg,
        bgMusic: jatengMusic,
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
    {
        id: 4,
        province: "Maluku",
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
    {
        id: 5,
        province: "Jawa Timur",
        thumbnailProvince: jatengImg,
        bgMusic: jatengMusic,
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
                viewCount: 4000,
                locationLink: "https://maps.app.goo.gl/PHCgoG8gmPksbWiU9",
                price: 300000,
                rating: 4.8,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 6,
        province: "Nusa Tenggara Barat",
        thumbnailProvince: jatengImg,
        bgMusic: jatengMusic,
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
];