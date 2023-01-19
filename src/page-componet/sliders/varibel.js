import { MdOutlineEngineering } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiUser2Line } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { authRoutes } from "Pages/auth/routes";

const size = 20;
// for MBIQS Submenu

const sharMenu = [
    {
        id: 99,
        title: 'Register New Business',
        route: authRoutes.creatbusines
    },
    {
        id: 80,
        title: 'Business Profile Page',
        route: authRoutes.busniessProfile // all data will be shown
    },
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
    }
]

export const sidebarData = [
    {
        id: 5,
        title: 'our business',
        icon: <MdOutlineEngineering size={size} />,
        drop: [
            // main drop with sun drop
            // {
            //     id: 3,
            //     title: 'add new business',
            //     icon: <HiOutlineBuildingOffice2 size={size} />,
            //     drop : sharMenu,
            // },
            {
                id: 300,
                // title: 'Cash Pairing',
                title: 'add new business',
                subMenu: sharMenu,
            },
            {
                id: 4,
                title: 'List of Business',
                icon: <HiOutlineBuildingOffice2 size={size} />,
                drop: sharMenu,
                route: authRoutes.listAddPage 
            },
            // {
            //     id: 400,
            //     title: 'EV-Fog',
            //     subMenu: sharMenu,
            // },
            // {
            //     id: 600,
            //     title: 'Gym Fighters',
            //     subMenu: sharMenu,
            // },
            // {
            //     id: 700,
            //     title: 'Latex Tire',
            //     subMenu: sharMenu,
            // },
            // {
            //     id: 100,
            //     title: 'MBIQS',
            //     subMenu: sharMenu, // sub drop down  can have some changes
            // },
            // {
            //     id: 200,
            //     title: 'Mian Builder',
            //     subMenu: sharMenu,
            // },
            // {
            //     id: 1000,
            //     title: 'Miner Man',
            //     subMenu: sharMenu,
            // },
            // {
            //     id: 500,
            //     title: 'Sagwan Wood',
            //     subMenu: sharMenu,
            // },
            // {
            //     id: 800,
            //     title: 'Snaithe',
            //     subMenu: sharMenu,
            // },   
            // {
            //     id: 900,
            //     title: 'Warbler Studio',
            //     subMenu: sharMenu,
            // },

        ]
    },
    {
        id: 6,
        title: 'news',
        icon: <HiOutlineBuildingOffice2 size={size} />,
        drop: [
            {
                id: 1,
                title: 'creat news page',
                route: authRoutes.newPage
            },
            {
                id: 2,
                title: 'list news page',
                route: authRoutes.newPageList
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
                route: authRoutes.addEvent
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
        title: 'about us',
        icon: <RiUser2Line size={size} />,
        drop: [
            {
                id: 1,
                title: 'creat about page',
                route: authRoutes.addAbout
            },
            {
                id: 2,
                title: 'List about page',
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
                route: authRoutes.addPrivacy
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
                route: authRoutes.addTerms
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
                title: 'creat contact page',
                route: authRoutes.addContact
            },
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
            }
        ]
    },
    {
        id: 13,
        title: 'setting',
        icon: <FiSettings size={size} />,
        drop: [
            // {
            //     id: 3,
            //     title: 'add new business',
            //     route: authRoutes.creatbusines
            // },
            // {
            //     id: 4,
            //     title: 'List of Business',
            //     route: authRoutes.listAddPage  // list business
            // },
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
        ]
    },
]
