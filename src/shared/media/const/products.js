import { pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr12, pr13, pr14, pr15, pr16, pr17, pr18, pr19, pr20 } from '@/shared/media/imgs';

export const products = [
    {
        id: "1",
        title: "L'Oréal Paris True Match Super-Blendable Foundation Makeup",
        desc: "With patented color technology, True Match Makeup precisely matches your skin’s tone and undertone and coordinates perfectly with True Match Powder, Blush, and Concealer. Formulated with Precise Match Technology to provide the most natural true-to-you coverage. Ultra-pure formula contains no oils, fragrances, or pore-clogging fillers, so all you see is beautiful, radiant, flawless skin.",
        tags: ['Face', 'Foundation'],
        discPrice: 8.99,
        price: 10.99,
        imgs: [pr1, pr2, pr3, pr4],
        discount: 18
    },
    {
        id: "2",
        title: "Maybelline Instant Age Rewind Eraser Multi-Use Concealer",
        desc: "This multi-use concealer is the go-to product for dark circles, blemishes, and fine lines. Say goodbye to dark circles with the Instant Age Rewind Eraser Dark Circles Treatment Concealer. Formulated with goji berry and Haloxyl™.",
        tags: ['Face', 'Concealer'],
        discPrice: 6.49,
        price: 8.99,
        imgs: [pr2, pr6, pr7, pr8],
        discount: 28
    },
    {
        id: "3",
        title: "Revlon ColorStay Crème Eyeshadow",
        desc: "Silky smooth, blendable cream eyeshadow stays true all day without creasing. It goes on effortlessly and dries to a powder finish. Buildable coverage, easy to blend for a variety of looks. Wear alone or mix and layer to create endless eye looks. Up to 24-hour wear.",
        tags: ['Eyes', 'Eyeshadow'],
        discPrice: 7.99,
        price: 9.99,
        imgs: [pr3, pr10, pr11, pr12],
        discount: 20
    },
    {
        id: "4",
        title: "NYX PROFESSIONAL MAKEUP Epic Ink Liner",
        desc: "Live for super-sharp winged out eyeliner? Don’t just ‘like’ all your faves, draw 'em yourself using Epic Ink Liner! Featuring a slender and supple felt brush tip, this intensely pigmented, waterproof eyeliner pen lets you achieve precise, seamless, black liquid lines effortlessly.",
        tags: ['Eyes', 'Eyeliner'],
        discPrice: 7.49,
        price: 9.99,
        imgs: [pr4, pr14, pr15, pr16],
        discount: 25
    },
    {
        id: "5",
        title: "Covergirl Lash Blast Volume Mascara",
        desc: "Get a blast of bold, volumizing mascaras! Lash Blast's patented volume-boosting formula and patent-pending brush are designed to max-out each and every lash, leaving you with the ultimate big-lash look.",
        tags: ['Eyes', 'Mascara'],
        discPrice: 6.99,
        price: 8.99,
        imgs: [pr5, pr18, pr19, pr20],
        discount: 22
    },
    {
        id: "6",
        title: "Rimmel Stay Matte Primer",
        desc: "Control shine for up to 8 hours with the Rimmel Stay Matte Primer! This long-lasting, oil-free primer goes on silky smooth to refine and even out your complexion. It reduces the appearance of pores and helps your makeup stay put.",
        tags: ['Face', 'Primer'],
        discPrice: 5.99,
        price: 7.99,
        imgs: [pr6, pr2, pr3, pr4],
        discount: 25
    },
    {
        id: "7",
        title: "e.l.f. Poreless Putty Primer",
        desc: "Infused with Squalane for optimal hydration, this mineral-infused primer creates a smooth, poreless effect that looks naturally beautiful and lasts all day. The velvety texture glides effortlessly over the skin, smoothing over imperfections for a poreless effect.",
        tags: ['Face', 'Primer'],
        discPrice: 8.00,
        price: 10.00,
        imgs: [pr7, pr6, pr7, pr8],
        discount: 20
    },
    {
        id: "8",
        title: "Milani Baked Blush",
        desc: "A luxurious powder blush that features a mélange infusion of colors baked on Italian terracotta tiles. Easy to use, sensorial in texture, the nuances of color become extraordinarily luminous. Silky smooth application leaves your face looking healthy and radiant all day.",
        tags: ['Face', 'Blush'],
        discPrice: 7.99,
        price: 9.99,
        imgs: [pr8, pr10, pr11, pr12],
        discount: 20
    },
    {
        id: "9",
        title: "Physicians Formula Butter Bronzer",
        desc: "Physicians Formula Murumuru Butter Bronzer delivers a radiant Brazilian goddess glow! The ultra-luxurious formula is infused with Murumuru Butter and delivers a tropical, skin-perfecting glow. Moisturizing wonder features ultra-refined pearl and soft-focus pigments that smooth skin texture, brighten skin tone, and deliver a gorgeous bronze finish.",
        tags: ['Face', 'Bronzer'],
        discPrice: 10.49,
        price: 12.99,
        imgs: [pr9, pr14, pr15, pr16],
        discount: 19
    },
    {
        id: "10",
        title: "ColourPop Ultra Matte Liquid Lipstick",
        desc: "This thin, lightweight formula smoothly glides on the lips leaving intense pigment with a bold, ultra-matte look. It's very long-wearing and 100% kiss-proof.",
        tags: ['Lips', 'Liquid Lipstick'],
        discPrice: 5.00,
        price: 7.00,
        imgs: [pr10, pr18, pr19, pr20],
        discount: 29
    },
    {
        id: "11",
        title: "NYX PROFESSIONAL MAKEUP Butter Gloss",
        desc: "Buttery soft and silky smooth, NYX Professional Makeup Butter Gloss delivers sheer to medium coverage that melts onto your lips and is never sticky, leaving your lips soft, supple, and kissable.",
        tags: ['Lips', 'Lip Gloss'],
        discPrice: 4.49,
        price: 5.99,
        imgs: [pr11, pr2, pr3, pr4],
        discount: 25
    },
    {
        id: "12",
        title: "Revlon Super Lustrous Lipstick",
        desc: "Revlon Super Lustrous Lipstick is as essential as the little black dress. With 82 fabulous, fashionable shades, Revlon Super Lustrous Lipstick offers the widest range of colors, so you are sure to find one that looks gorgeous on you! Packed with mega-moisturizers and vitamins C and E for soft, smooth, sexy lips. Your lips stay kissably conditioned for lasting smoothness while the color stays rich and true.",
        tags: ['Lips', 'Lipstick'],
        discPrice: 6.29,
        price: 7.99,
        imgs: [pr12, pr6, pr7, pr8],
        discount: 21
    },
    {
        id: "13",
        title: "Neutrogena Hydro Boost Hydrating Water Gel",
        desc: "Neutrogena Hydro Boost Hydrating Water Gel instantly quenches dry skin and keeps it looking smooth, supple, and hydrated day after day. The unique water gel formula absorbs quickly, like a gel, but has the long-lasting, intense moisturizing power of a cream. It boosts skin's hydration level and locks it in all day. Formulated with hyaluronic acid, it's clinically proven to increase skin's hydration level and lock it in, leaving skin refreshingly clean and touchably supple, every time you cleanse.",
        tags: ['Skincare', 'Moisturizer'],
        discPrice: 16.97,
        price: 19.99,
        imgs: [pr10, pr10, pr11, pr12],
        discount: 15
    },
    {
        id: "14",
        title: "CeraVe Hydrating Facial Cleanser",
        desc: "CeraVe Hydrating Facial Cleanser is a unique formula that cleanses, hydrates, and helps restore the protective skin barrier with three essential ceramides (1, 3, 6-II). The formula also contains hyaluronic acid to help retain skin’s natural moisture. Fragrance-free and non-comedogenic, it's gentle on the skin and never drying.",
        tags: ['Skincare', 'Cleanser'],
        discPrice: 9.99,
        price: 11.99,
        imgs: [pr14, pr14, pr15, pr16],
        discount: 17
    },
    {
        id: "15",
        title: "Olay Regenerist Micro-Sculpting Cream",
        desc: "Olay Regenerist Micro-Sculpting Cream is an anti-aging moisturizer that hydrates to firm and lift, helping retain skin's youthful surface contours. The luxurious-feeling moisturizer immediately leaves skin hydrated and softens the look of fine lines and wrinkles, while noticeably improving skin’s texture.",
        tags: ['Skincare', 'Moisturizer'],
        discPrice: 22.99,
        price: 24.99,
        imgs: [pr15, pr18, pr19, pr20],
        discount: 8
    },
    {
        id: "16",
        title: "Cetaphil Daily Facial Moisturizer",
        desc: "Cetaphil Daily Facial Moisturizer with SPF 15 is a light, oil-free lotion that hydrates your skin while also helping to defend it against sunburn with UVA/UVB protection. It's non-greasy, non-irritating, and non-comedogenic, leaving your skin smooth and soft.",
        tags: ['Skincare', 'Moisturizer'],
        discPrice: 11.49,
        price: 13.99,
        imgs: [pr16, pr2, pr3, pr4],
        discount: 18
    },
    {
        id: "17",
        title: "The Ordinary Niacinamide 10% + Zinc 1% Serum",
        desc: "Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion. A high 10% concentration of this vitamin is supported in the formula by zinc salt of pyrrolidone carboxylic acid to balance visible aspects of sebum activity.",
        tags: ['Skincare', 'Serum'],
        discPrice: 5.90,
        price: 6.70,
        imgs: [pr17, pr6, pr7, pr8],
        discount: 12
    },
    {
        id: "18",
        title: "The Ordinary Niacinamide 10% + Zinc 1% Serum",
        desc: "Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion. A high 10% concentration of this vitamin is supported in the formula by zinc salt of pyrrolidone carboxylic acid to balance visible aspects of sebum activity.",
        tags: ['Skincare', 'Serum'],
        discPrice: 5.90,
        price: 6.70,
        imgs: [pr18, pr6, pr7, pr8],
        discount: 12
    },
    {
        id: "19",
        title: "The Ordinary Niacinamide 10% + Zinc 1% Serum",
        desc: "Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion. A high 10% concentration of this vitamin is supported in the formula by zinc salt of pyrrolidone carboxylic acid to balance visible aspects of sebum activity.",
        tags: ['Skincare', 'Serum'],
        discPrice: 5.90,
        price: 6.70,
        imgs: [pr19, pr6, pr7, pr8],
        discount: 12
    },
    {
        id: "20",
        title: "The Ordinary Niacinamide 10% + Zinc 1% Serum",
        desc: "Niacinamide (Vitamin B3) is indicated to reduce the appearance of skin blemishes and congestion. A high 10% concentration of this vitamin is supported in the formula by zinc salt of pyrrolidone carboxylic acid to balance visible aspects of sebum activity.",
        tags: ['Skincare', 'Serum'],
        discPrice: 5.90,
        price: 6.70,
        imgs: [pr6, pr6, pr7, pr8],
        discount: 12
    },
]