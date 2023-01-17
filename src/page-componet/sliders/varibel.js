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

export const sidebarData = [
    {
        id: 5,
        title: 'our business',
        icon: <MdOutlineEngineering size={size} />,
        drop: [
            {
                id: 1,
                title: 'create business page',
                route: authRoutes.creatbusines
            },
            {
                id: 2,
                title: 'list business page',
                route: authRoutes.listbussiness
            },
            {
                id: 3,
                title: 'business profile',
                route: authRoutes.busniessProfile
            }, 
            {
                id: 4,
                title: 'background image',
                route: authRoutes.backgroundImg
            },
            {
                id: 5,
                title: 'image slider',
                // route: authRoutes.imageSlider
            }, 
            {
                id: 6,
                title: 'text & business',
                // route: authRoutes.textBusiness
            }, 
            {
                id: 7,
                title: 'over lapping text',
                // route: authRoutes.overlappingText
            }, 
            {
                id: 8,
                title: 'video list',
                // route: authRoutes.videoList
            }, 
            {
                id: 9,
                title: 'brand slider',
                // route: authRoutes.brandSlider
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
                route : authRoutes.addAboutList
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
            }
        ]
    },
    {
        id: 13,
        title: 'setting',
        icon: <FiSettings size={size} />,
        drop: [
            {
                id: 1,
                title: 'front website view',
                route: authRoutes.settAddPage
            },
            {
                id: 2,
                title: 'header & footer',
                route: authRoutes.headFooter
            },
            {
                id: 3,
                title: 'add new page',
                route: authRoutes.settAddPage
            },
            {
                id: 4,
                title: 'details',
                route: authRoutes.settAddDetail
            }
        ]
    },
]
