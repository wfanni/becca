import sos from "./assets/sos.png";

const workContent = {
    social: {
        title: "Social Media",
        intro: "Today, most businesses need social media presence in order to be successful. I create personalized, varied content for small and medium sized companies and help them build a loyal audience by communicating their business online.",
        bgStyles: "bg-socials bg-[length:100%] bg-no-repeat",
        works: [
            {   
                hasLogo: true,
                logo: `${sos}`,
                name: "sos",
                title: "SOS Children's Villages",
                intro: "SOS is a non-profit organisation that unites people to provide help to unpriviliged children around Hungary. In past 2 years I worked together with 15 influencers on different campaigns. With 5 of them I managed to establish a great relationship to be able to collaborate long term.",
                bgStyles: "bg-sos bg-[length:50%] bg-no-repeat bg-[right_-7%_center]"
            },
            {
                haslogo: false,
                logo: "fa-solid fa-heart",
                name: "reviews",
                title: "Cafés & restaurants",
                intro: "I'm happy to accept content creation requests from different bars, cafés and restaurants. I usually go for a friendly and trendy vibe in the videos, showing as much from the place's vibe as possible to reel in more customers.",
                bgStyles: ""
            }
        ]
    },
    marketing: {
        title: "Marketing",
        intro: "Today, most businesses need social media presence in order to be successful. I create personalized, varied content for small and medium sized companies and help them build a loyal audience by communicating their business online.",
        bgStyles: "bg-marketing bg-[length:100%] bg-no-repeat",
        works: [
            {   
                hasLogo: false,
                logo: "fa-solid fa-square-poll-vertical",
                name: "sos",
                title: "SOS Children's Villages",
                intro: "SOS is a non-profit organisation that unites people to provide help to unpriviliged children around Hungary. In past 2 years I worked together with 15 influencers on different campaigns. With 5 of them I managed to establish a great relationship to be able to collaborate long term.",
                bgStyles: "bg-sos bg-[length:50%] bg-no-repeat bg-[right_-7%_center]"
            }
        ]
    },
    photography: {
        title: "Photography",
        intro: "Today, most businesses need social media presence in order to be successful. I create personalized, varied content for small and medium sized companies and help them build a loyal audience by communicating their business online.",
        bgStyles: "bg-photography bg-[length:100%] bg-no-repeat",
        works: [
            {   
                hasLogo: false,
                logo: "fa-solid fa-mountain-sun",
                name: "travel",
                title: "Travel and landscape photography",
                intro: "SOS is a non-profit organisation that unites people to provide help to unpriviliged children around Hungary. In past 2 years I worked together with 15 influencers on different campaigns. With 5 of them I managed to establish a great relationship to be able to collaborate long term.",
                bgStyles: ""
            },
            {   
                hasLogo: false,
                logo: "fa-solid fa-mug-saucer",
                name: "product",
                title: "Product photography",
                intro: "SOS is a non-profit organisation that unites people to provide help to unpriviliged children around Hungary. In past 2 years I worked together with 15 influencers on different campaigns. With 5 of them I managed to establish a great relationship to be able to collaborate long term.",
                bgStyles: ""
            }
        ]
    },
    webdesign: {
        title: "Webdesign",
        intro: "Today, most businesses need social media presence in order to be successful. I create personalized, varied content for small and medium sized companies and help them build a loyal audience by communicating their business online.",
        bgStyles: "bg-[url('/src/assets/webdesign-bg12.png')] bg-[length:100%] bg-no-repeat",
        works: [
            {
                hasLogo: false,
                logo: "fa-solid fa-swatchbook",
                name: "Salgóvári Eszter",
                title: "Salgóvári Eszter - Massage Therapist",
                intro: "Following Eszter's ideas, I designed her website and wrote SEO optimized content for her upcoming business.",
                bgStyles: "bg-massage bg-[length:50%] bg-no-repeat bg-[right_-3%_bottom]"
            }
        ]
    },
}

export default workContent