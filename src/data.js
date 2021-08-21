const data = [
    {
        id: 0,
        count: 1,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194422/01/sv01/fnd/IND/fmt/png/PUMA-x-FIRST-MILE-FUSE-Men's-Training-Shoes"],
        price: 10000,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.2,
        name: "PUMA x FIRST MILE FUSE Men's Training Shoes",
        brand: "Puma"
    },

    {
        id: 1,
        count: 2,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/368846/07/sv01/fnd/IND/fmt/png/Respin-SL-Unsiex-Shoes", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/368846/01/sv01/fnd/IND/fmt/png/Respin-SL-Unsiex-Shoes"],
        price: 5000,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 3.2,
        name: "Respin-SL-Unsiex-Shoes",
        brand: "Puma"
    },
    {
        id: 2,
        count: 2,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374766/09/sv01/fnd/IND/fmt/png/Court-Pure-SoftFoam+-Unisex-Sneakers", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/374766/05/sv01/fnd/IND/fmt/png/Court-Pure-SoftFoam+-Unisex-Sneakers"],
        price: 15000,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.1,
        name: "Court Pure SoftFoam Sneakers",
        brand: "Puma"
    },
    {
        id: 3,
        count: 2,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369573/15/sv01/fnd/IND/fmt/png/PUMA-Rebound-Lay-Up-SoftFoam+-Unisex-Sneakers", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/369573/03/sv01/fnd/IND/fmt/png/PUMA-Rebound-Lay-Up-SoftFoam+-Unisex-Sneakers"],
        price: 3745,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 3.2,
        name: "PUMA Rebound Lay Up",
        brand: "Puma"
    },
    {
        id: 4,
        count: 1,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/381599/01/sv01/fnd/IND/fmt/png/PUMA-x-PWRFRAME-OP-1-Cyber-Unisex-Sneakers"],
        price: 11300,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.1,
        name: "Cyber Unisex Sneakers",
        brand: "Puma"
    },
    {
        id: 5,
        count: 2,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/368863/01/sv01/fnd/IND/fmt/png/X-Ray-Lite-Rainbow-Shoes", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/368863/02/sv01/fnd/IND/fmt/png/X-Ray-Lite-Rainbow-Shoes"],
        price: 5745,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.2,
        name: "X-Ray-Lite-Rainbow-Shoes",
        brand: "Puma"
    },
    {
        id: 6,
        count: 3,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371683/06/sv01/fnd/IND/fmt/png/Ralph-Sampson-Demi-OG--Sneakers", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371683/07/sv01/fnd/IND/fmt/png/Ralph-Sampson-Demi-OG--Sneakers", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/371683/08/sv01/fnd/IND/fmt/png/Ralph-Sampson-Demi-OG--Sneakers"],
        price: 3745,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 3.2,
        name: "Ralph-Sampson-Demi-OG",
        brand: "Puma"
    },
    {
        id: 7,
        count: 1,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194419/04/sv01/fnd/IND/fmt/png/FUSE-Men's-Training-Shoes"],
        price: 6745,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.4,
        name: "FUSE Men's Training Shoes",
        brand: "Puma"
    },
    {
        id: 8,
        count: 1,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/105511/06/sv01/fnd/IND/fmt/png/PUMA-19.1-Bowling-Men's-Cricket-Shoes"],
        price: 10325,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.7,
        name: "PUMA 19.1 Bowling Men's Cricket Shoes",
        brand: "Puma"
    },
    {
        id: 9,
        count: 1,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/104709/01/sv01/fnd/IND/fmt/png/evoKNIT-FTB-II-FG-Men's-Football-Boots"],
        price: 13745,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.8,
        name: "evoKNIT FTB II FG Men's Football Boots",
        brand: "Puma"
    },
    {
        id: 10,
        count: 2,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106309/03/sv01/fnd/IND/fmt/png/TACTO-IT-Men's-Football-Boots", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/106309/06/sv01/fnd/IND/fmt/png/TACTO-IT-Men's-Football-Boots"],
        price: 12745,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.2,
        name: "TACTO IT Men's Football Boots",
        brand: "Puma"
    },
    {
        id: 11,
        count: 2,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194812/02/sv01/fnd/IND/fmt/png/Disc-Rebirth-Basketball-Shoes", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/194812/01/sv01/fnd/IND/fmt/png/Disc-Rebirth-Basketball-Shoes"],
        price: 18745,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.2,
        name: "Disc Rebirth Basketball Shoes",
        brand: "Puma"
    },

    {
        id: 12,
        count: 4,
        name: "Nike Air Force 1 GORE-TEX",
        details: "The radiance lives on in the Nike Air Force 1 GORE-TEX, the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.This time it's clad in GORE-TEX technology.",
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ae84199e-1240-43d7-8635-b8e174e6f346/air-force-1-gore-tex-shoes-xkl3Ps.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/711a15f0-09e8-43b5-909a-f68037fa2f2d/air-force-1-gore-tex-shoes-xkl3Ps.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/69392630-6b18-44f3-a6b0-e6a2a38637e6/air-force-1-gore-tex-shoes-xkl3Ps.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5ac16ee8-7f6b-431a-85ca-41b23a7178b3/air-force-1-gore-tex-shoes-xkl3Ps.png"],
        price: 14495,
        rating: 4.4,
        brand: "Nike"
    },
    {
        id: 13,
        count: 4,
        name: "NiNike SB Zoom Blazer Mid Premium",
        details: 'Inspired by the community art spaces of Barcelona, the Nike SB Zoom Blazer Mid Premium is made from a collage of materials like suede, leather and canvas.The design is elevated with a multi-coloured "Nike" embroidery on the heel and a mismatched Swoosh, capped off by a contrasting herringbone sole.',
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/79a7d14d-670b-4558-8cb8-c98611c2a366/sb-zoom-blazer-mid-skate-shoe-bdtQ2K.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/88f9cba0-f76d-4b24-ad99-ed3b50e8a9b3/sb-zoom-blazer-mid-skate-shoe-bdtQ2K.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/b2acb56c-d45f-4b65-94ec-41ac37eec438/sb-zoom-blazer-mid-skate-shoe-bdtQ2K.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d68a0895-436e-4482-9444-2d0aa7256480/sb-zoom-blazer-mid-skate-shoe-bdtQ2K.png"],
        price: 8795,
        rating: 3.5,
        brand: "Nike"
    },
    {
        id: 14,
        count: 4,
        name: "Nike Wildhorse 7",
        details: "Take on those tough and extreme trail runs with the rugged build of the Nike Wildhorse 7.The upper delivers durable ventilation with support where you need it.Foam midsole cushioning provides responsiveness on every mile.",
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/16f391c8-6573-417a-898f-09d63f9d54a2/wildhorse-7-trail-running-shoes-XdK82N.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/3f0f20f2-bfb6-49c2-9a0f-1b5af98ae98b/wildhorse-7-trail-running-shoes-XdK82N.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/c2934abe-53d4-46cf-a854-41c3bb6aa3b0/wildhorse-7-trail-running-shoes-XdK82N.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/8cac4b97-1a6f-49f2-a81c-dfadea596929/wildhorse-7-trail-running-shoes-XdK82N.png"],
        price: 10495,
        rating: 4.0,
        brand: "Nike"
    },
    {
        id: 15,
        count: 4,
        name: "Nike Glide FlyEase",
        details: "The shoe has a hands-free FlyEase entry.Its flexible heel collapses when you step in then snaps back into place to secure your foot.",
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1f3999c5-4ff6-49de-a683-340bc6c10a58/glide-flyease-shoe-71zmgZ.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e44f1da9-a081-4a3e-bc7b-1aaeec39951e/glide-flyease-shoe-71zmgZ.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/362d977b-f227-4cc5-9d1a-9c54f52d86ad/glide-flyease-shoe-71zmgZ.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/35bc715e-7cf1-4fb1-9dd4-63b21ba4c2a5/glide-flyease-shoe-71zmgZ.png"],
        price: 10295,
        rating: 4.4,
        brand: "Nike"
    },
    {
        id: 16,
        count: 4,
        name: "PG 5 EP",
        details: "Paul George has an effortlessly smooth, reliably steady game.He takes his time, but he's always well-positioned to make the extra pass, cut through the lane or nail a pull-up jumper.The PG 5 EP combines the agile low-top profile Paul likes with flexible Nike Air Dot Weld Strobel cushioning.",
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bdaf3bee-5b3d-41e4-b646-73f637692501/pg-5-ep-basketball-shoes-Gk5ZV1.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e67e7d96-31bc-40fb-887e-02fde0fa3416/pg-5-ep-basketball-shoes-Gk5ZV1.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/49a56f14-a3a8-4cfe-823a-2a16797fee3d/pg-5-ep-basketball-shoes-Gk5ZV1.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6f18d5a7-8799-4004-af7c-3eccb44de0c0/pg-5-ep-basketball-shoes-Gk5ZV1.png"],
        price: 12495,
        rating: 4.7,
        brand: "Nike"
    },
    {
        id: 17,
        count: 4,
        name: "Air Max Bolt",
        details: "The radiance lives on in the Nike Air Force 1 GORE-TEX, the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.This time it's clad in GORE-TEX technology.",
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9f267577-bb2d-4f2a-b081-bb6863b72c2b/air-max-bolt-shoe-qcn5kT.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/286d2f3a-5531-4c1a-984a-d12eb84093b0/air-max-bolt-shoe-qcn5kT.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/299b7f0b-1e69-429a-89b6-bf5ab45b167b/air-max-bolt-shoe-qcn5kT.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e53eb893-ea65-4556-a5eb-d22755f35e79/air-max-bolt-shoe-qcn5kT.png"],
        price: 8285,
        rating: 3.9,
        brand: "Nike"
    },
    {
        id: 18,
        count: 2,
        name: "Nike SB Chron 2 Slip",
        details: "The radiance lives on in the Nike Air Force 1 GORE-TEX, the b-ball OG that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.This time it's clad in GORE-TEX technology.",
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/6ae5ecd6-04eb-47a5-9cc0-b87835f7a292/sb-chron-2-slip-skate-shoe-Sb3bFm.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/2f78ef43-afba-462a-851e-6fbd666cfb72/sb-chron-2-slip-skate-shoe-Sb3bFm.png"],
        price: 4495,
        rating: 4.5,
        brand: "Nike"
    },
    {
        id: 19,
        count: 4,
        name: "Nike Court Vision Alta",
        details: "Street fashion meets b-ball authenticity in the distinctly modern and 100% feminine Nike Court Vision Alta.The detailed upper features a collapsible heel for style versatility, chic synthetic leather with tumbled texture and transparent mesh for an airy aesthetic.Its lifted foam midsole feels incredible while keeping the heritage b-ball look.",
        img: ["https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ed252d68-c2e9-4057-8edc-d6fb8540c0c9/court-vision-alta-shoes-8xrQqK.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ded2d647-707a-4735-baca-ef77acb761ea/court-vision-alta-shoes-8xrQqK.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5f5535a0-a624-401a-b5a2-795913a9f6c5/court-vision-alta-shoes-8xrQqK.png", "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ad11d687-0da8-4c78-af11-5178d94da6f1/court-vision-alta-shoes-8xrQqK.png"],
        price: 5495,
        rating: 4.8,
        brand: "Nike"
    },
    {
        id: 20,
        count: 2,
        name: "Nike Owaysis",
        details: "Summertime is a feeling and the Nike Owaysis is summertime at its best—simple, comfortable and versatile.Tuned to meet the needs of your foot, the sporty shape and premium details add a dose of style .",
        img: ["https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/668e48d0-f73e-4871-8e55-e27910fa127c/owaysis-sandals-81lstS.png", "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/3a9e944a-e5b0-4830-8a3a-64c227f93e75/owaysis-sandals-81lstS.png"],
        price: 3995,
        rating: 4.3,
        brand: "Nike"
    },
    {
        id: 21,
        count: 3,
        img: ["https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/372849/18/sv01/fnd/IND/fmt/png/X-Ray-Game-Unisex-Shoes", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/372849/01/sv01/fnd/IND/fmt/png/X-Ray-Game-Unisex-Shoes", "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1500,h_1500/global/372849/11/sv01/fnd/IND/fmt/png/X-Ray-Game-Unisex-Shoes"],
        price: 8000,
        details: "Introducing the stylish, low-slung FUSE, designed based on insights from our own PUMA athletes and featuring the very best in stability and shock absorption.",
        rating: 4.5,
        name: "X-Ray-Game-Unisex-Shoes",
        brand: "Puma"
    },
    {
        id: 22,
        count: 2,
        img: ["https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10769098/2019/10/17/4e8dc285-fce6-4d57-b058-d79d2132eb271571294516344-NOISE-Black-ColorFit-Pro-2-Active-Smartwatch-324157129451526-1.jpg", "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/10769098/2019/10/17/07f18399-5aa8-45a6-b9b4-14811ca725241571294516228-NOISE-Black-ColorFit-Pro-2-Active-Smartwatch-324157129451526-2.jpg"],
        price: 12000,
        details: "The brilliant 1.3 colour display is now full capacitive touch, supporting taps and swipes, so it is easy to read and operate.",
        rating: 4.5,
        name: "Jet Black ColorFit Pro 2 Smartwatch",
        brand: "Noise"
    },
    {
        id: 23,
        count: 3,
        img: ["https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7546900/2019/1/24/c9be0d6e-30a4-4242-b4e0-1c166b73f2781548320874402-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-1.jpg",
            "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7546900/2019/1/24/4ff84b3f-96cc-4e3c-84e2-b6d5d13e06451548320874372-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-3.jpg",
        "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/7546900/2019/1/24/e8fca578-9400-4658-8a80-a932e52d4b151548320874353-HERENOW-Men-Polo-Collar-T-shirt-4861548320873235-4.jpg"],
        price: 1800,
        details: "Navy blue solid T-shirt, has a polo collar, short sleeve.100% cotton Machine-wash Polo Collar",
        rating: 4.5,
        name: "Men Navy Polo Collar T-shirt",
        brand: "HERE&NOW"
    },



]
export default data;

export function getProducts() {
    return new Promise(function (resolve, reject) {
        resolve({ 'data': data })
    })
}

export function getProductByID(id) {
    return new Promise(function (resolve, reject) {
        resolve({ 'data': data[id] })
    })
}