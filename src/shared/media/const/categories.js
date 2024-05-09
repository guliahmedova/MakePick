import { accessories, bath, blush, deodorant, eyes, facialcare, lipstick, oralcare, shaving } from "@/shared/media/imgs";

export const categories = [
    {
        id: "1",
        img: blush,
        title: "Face",
        subCategories: [
            {
                id: "11",
                title: "Blusher"
            },
            {
                id: "12",
                title: "Foundation"
            },
            {
                id: "13",
                title: "Face Powder"
            }
        ]
    },
    {
        id: "2",
        img: eyes,
        title: "Eyes",
        subCategories: [
            {
                id: "11",
                title: "Blusher"
            },
            {
                id: "12",
                title: "Foundation"
            },
            {
                id: "13",
                title: "Face Powder"
            }
        ]
    },
    {
        id: "3",
        img: lipstick,
        title: "Lips",
        subCategories: [
            {
                id: "11",
                title: "Blusher"
            },
            {
                id: "12",
                title: "Foundation"
            },
            {
                id: "13",
                title: "Face Powder"
            }
        ]
    },
    {
        id: "4",
        img: accessories,
        title: "Accessories",
        subCategories: null
    },
    {
        id: "5",
        img: shaving,
        title: "Shaving Needs",
        subCategories: null
    },
    {
        id: "6",
        img: oralcare,
        title: "Oral Care",
        subCategories: null
    },
    {
        id: "7",
        img: facialcare,
        title: "Facial Care",
        subCategories: null
    },
    {
        id: "8",
        img: deodorant,
        title: "Deodorant",
        subCategories: null
    },
    {
        id: "9",
        img: bath,
        title: "Bath Oil",
        subCategories: null
    }
];