// all routes and data for slider page
import { MdOutlineEngineering } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoDocumentTextOutline, IoGitCompareSharp } from "react-icons/io5";
import { RiUser2Line } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiFacebook, FiPhoneCall, FiTwitch, FiTwitter } from "react-icons/fi";
import { AiOutlineDownload, AiOutlineFileSearch, AiOutlineHome, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineMessage, AiOutlineShake, AiOutlineShopping, AiOutlineWhatsApp, AiOutlineYoutube } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { authRoutes } from "Pages/auth/routes";
import { BsBasket, BsFacebook, BsGenderFemale, BsTwitter } from "react-icons/bs";
import { GenIcon } from "react-icons";
import { FaWindowClose } from "react-icons/fa";

const size = 20;

const sharMenu = [
    {
        id: 99,
        title: 'Register New Business',
        route: authRoutes.creatbusines
    },
    {
        id: 20,
        title: 'Background Image',
        route: authRoutes.backgroundImg
    },
    {
        id: 10,
        title: 'Header Image Slider',
        route: authRoutes.headerImg
    },
    {
        id: 30,
        title: 'Text & Image',
        route: authRoutes.textImg
    },
    {
        id: 40,
        title: 'Over Lapping Text',
        route: authRoutes.overLapText
    },
    {
        id: 50,
        title: 'Videos List',
        route: authRoutes.viedoList
    },
    {
        id: 60,
        title: 'Brand Slider',
        route: authRoutes.brandSlider
    },
    {
        id: 70,
        title: 'Front Site View',
        route: authRoutes.frontView
    },
    {
        id: 80,
        title: 'Business Profile Page',
        route: authRoutes.busniessProfile // all data will be shown
    }
]
// For News
const newsMenu = [
    {
        id: 1,
        title: 'header image slider',
        route: authRoutes.newNewsPage
    },
    {
        id: 2,
        title: 'background image',
        route: authRoutes.newsBg,
    },
    {
        id: 3,
        title: 'over lapping text',
        route: authRoutes.overLaptextNews
    },
    {
        id: 4,
        title: 'news details',
        route: "#"
    }
];
// For Events
const eventMenu = [
    {
        id: 1,
        title: 'header image slider',
        route: authRoutes.addEvent
    },
    {
        id: 2,
        title: 'background image',
        route: authRoutes.eventBg,
    },
    {
        id: 3,
        title: 'over lapping text',
        route: "#"
    },
    {
        id: 4,
        title: 'event details',
        route: "#"
    }
];

// For About
const aboutMenu = [
    {
        id: 1,
        title: 'header image slider',
        route: authRoutes.addAbout
    },
    {
        id: 2,
        title: 'background image',
        route: authRoutes.aboutBg,
    },
    {
        id: 3,
        title: 'over lapping text',
        route: "#"
    },
    {
        id: 4,
        title: 'event details',
        route: "#"
    }
];
// Privacy Policy
const privacyMenu = [
    {
        id: 1,
        title: 'header image slider',
        route: authRoutes.addPrivacy
    },
    {
        id: 2,
        title: 'background image',
        route: authRoutes.privacyBg,
    },
    {
        id: 4,
        title: 'privacy policy',
        route: "#"
    }
];
// terms & conditions
const termsMenu = [
    {
        id: 1,
        title: 'header image slider',
        route: authRoutes.addTerms
    },
    {
        id: 2,
        title: 'background image',
        route: authRoutes.termsBg
    },
    {
        id: 4,
        title: 'privacy policy',
        route: "#"
    }
];
// contact us
const contactMenu = [
    {
        id: 10,
        title: 'Header Image Slider',
        route: authRoutes.headerImg
    },
    {
        id: 20,
        title: 'Background Image',
        route: authRoutes.backgroundImg
    },
    {
        id: 40,
        title: 'Over Lapping Text',
        route: authRoutes.overLapText
    },
    {
        id: 50,
        title: 'FQA',
        route: "/#"
    },
     {
        id: 60,
        title: 'contact details',
        route: '/#'
    },
     {
        id: 70,
        title: 'Map',
        route: '/#'
    },
    // {
    //     id: 30,
    //     title: 'Text & Image',
    //     route: authRoutes.textImg
    // },
    // {
    //     id: 50,
    //     title: 'Videos List',
    //     route: authRoutes.viedoList
    // },
    // {
    //     id: 60,
    //     title: 'Brand Slider',
    //     route: authRoutes.brandSlider
    // },
    // {
    //     id: 70,
    //     title: 'Front Site View',
    //     route: authRoutes.frontView
    // }
];

export const sidebarData = [
    {
        id: 5,
        title: 'our business',
        icon: <MdOutlineEngineering size={size} />,
        drop: [
            {
                id: 300,
                title: 'add new business',
                subMenu: sharMenu,
            },
            {
                id: 4,
                title: 'List of Business',
                route: authRoutes.listAddPage
            }
        ]
    },
    {
        id: 6,
        title: 'news',
        icon: <HiOutlineBuildingOffice2 size={size} />,
        drop: [
            {
                id: 1,
                title: 'add new page',
                subMenu: newsMenu,
            },
            {
                id: 2,
                title: 'list of news pages',
                route: authRoutes.newsPageList
            }
        ]
    },
    {
        id: 7,
        title: 'events',
        icon: <IoDocumentTextOutline size={size} />,
        drop: [
            {
                id: 1,
                title: 'create event page',
                subMenu: eventMenu,
            },
            {
                id: 2,
                title: 'list event page',
                route: authRoutes.addEventList
            }
        ]
    },
    {
        id: 8,
        title: 'about',
        icon: <RiUser2Line size={size} />,
        drop: [
            {
                id: 1,
                title: 'creat about page',
                subMenu: aboutMenu,
            },
            {
                id: 2,
                title: 'List about pages',
                route: authRoutes.addAboutList
            }
        ]
    },
    {
        id: 9,
        title: 'privacy',
        icon: <BiMessageAltDetail size={size} />,
        drop: [
            {
                id: 1,
                title: 'creat privacy page',
                subMenu: privacyMenu,
            },
            {
                id: 2,
                title: 'List privacy pages',
                route: '/#'
            }
        ]
    },
    {
        id: 12,
        title: 'terms & conditions',
        icon: <AiOutlineFileSearch size={size} />,
        drop: [
            {
                id: 1,
                title: 'creat terms page',
                subMenu: termsMenu,
            },
            {
                id: 2,
                title: 'List terms pages',
                route: '/#'
            }
        ]
    },
    {
        id: 10,
        title: 'contact',
        icon: <FiPhoneCall size={size} />,
        drop: [
            {
                id: 1,
                title: 'add contact page',
                // route: authRoutes.addContact
                subMenu: contactMenu,
            },
            {
                id: 10,
                title: 'List contact pages',
                route: "/#"
            }
        ]
    },
    {
        id: 13,
        title: 'setting',
        icon: <FiSettings size={size} />,
        drop: [
            {
                id: 6,
                title: 'Menu Edit',
                route: authRoutes.menuEdit
            },
            {
                id: 1,
                title: 'front website view',
                route: authRoutes.frontView
            },
            {
                id: 2,
                title: 'header & footer',
                route: authRoutes.headFooter
            },
            {
                id: 5,
                title: 'details',
                route: authRoutes.settAddDetail
            },
            {
                id: 30,
                title: 'Add on media icon',
                route: authRoutes.mediaIcon
            },
            {
                id: 40,
                title: 'other',
                route: authRoutes.others
            }
        ]
    },
]
export const iconsSettingsArray=[
    {
        id:1,
        title:'twitter',
        icon:<FiTwitter size={size} />
    },
    {
        id:2,
        title:'facebook',
        icon:<FiFacebook size={size} />
    },
    {
        id:3,
        title:'instagram',
        icon:<AiOutlineInstagram size={size} />
    
    },
    {
        id:4,
        title:'whatsapp',
        icon:<AiOutlineWhatsApp size={size} />
    },
    {
        id:5,
        title:'facebook',
        icon:<AiOutlineYoutube size={size} />
    },
    {
        id:6,
        title:'youtube',
        icon:<AiOutlineMail size={size} />
    },
    {
        id:7,
        title:'email',
        icon:<AiOutlineMail size={size} />
    },
    {
        id:8,
        title:'share',
        icon:<AiOutlineShake size={size} />
    },
    {
        id:9,
        title:'download',
        icon:<AiOutlineDownload size={size} />
    },
    {
        id:10,
        title:'love',
        icon:<BsGenderFemale size={size} />
    },
    {
        id:11,
        title:'bottle',
        icon:<FaWindowClose size={size} />
    },
    {
        id:12,
        title:'linkedin',
        icon:<AiOutlineLinkedin size={size} />
    },
    {
        id:13,
        title:'cart',
        icon:<AiOutlineShopping size={size} />
    },
    {
        id:14,
        title:'message',
        icon:<AiOutlineMessage size={size} />
    },
    {
        id:15,
        title:'home',
        icon:<AiOutlineHome size={size} />
    },
    {
        id:16,
        title:'aeroplane',
        icon:<IoGitCompareSharp size={size} />
    },
    {
        id:17,
        title:'basket',
        icon:<BsBasket size={size} />
    }

]
