// all routes and data for slider page
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoDocumentTextOutline, } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";

import { RiDashboardLine } from "react-icons/ri";
import { TbFileInvoice } from "react-icons/tb";
import { IoLogInOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

import { authRoutes } from "Pages/auth/routes";

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
        route: authRoutes.newDetail
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
        route: authRoutes.overLaptextEvent
    },
    {
        id: 4,
        title: 'event details',
        route: authRoutes.eventDetails
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
        route: authRoutes.overLaptextAbout
    },
    {
        id: 4,
        title: 'Text & Image',
        route: authRoutes.textImagAbout
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
        route: authRoutes.privacy
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
        title: 'terms',
        route: authRoutes.terms
    }
];
// contact us
const contactMenu = [
    {
        id: 10,
        title: 'Header Image Slider',
        route: authRoutes.addContact
    },
    {
        id: 20,
        title: 'Background Image',
        route: authRoutes.contactBg
    },
    {
        id: 40,
        title: 'Over Lapping Text',
        route: authRoutes.overLaptextContact
    },
    {
        id: 50,
        title: 'FQA',
        route: authRoutes.faq
    },
    {
        id: 60,
        title: 'contact details',
        route: authRoutes.contactDetails
    },
    {
        id: 70,
        title: 'Map',
        route: authRoutes.map
    }
];

// Human Resource
const humanResource = [
    {
        id: 10,
        title: 'Header Image Slider',
        route: '/404'
    },
    {
        id: 20,
        title: 'Background Image',
        route: '/404'
    },
    {
        id: 40,
        title: 'Over Lapping Text',
        route: "/404"
    }
] 

export const sidebarData = [
    {
        id: 5,
        title: 'Dashboared',
        icon: <RiDashboardLine size={size} />,
        drop: [
            {
                id: 300,
                title: 'add new page',
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
        id: 1500,
        title: 'Products',
        icon: <RiShoppingCartLine size={size} />,
        drop: [
            {
                id: 300,
                title: 'add new page',
                route: authRoutes.listAddPage
            },
            {
                id: 4,
                title: 'List of Business',
                route: authRoutes.listAddPage
            }
        ]
    },
    {
        id: 5985,
        title: 'Invoice',
        icon: <TbFileInvoice size={size} />,
        drop: [
            {
                id: 399985,
                title: 'add new page',
                subMenu: authRoutes.listAddPage,
            },
            {
                id: 41,
                title: 'List of Business',
                route: authRoutes.listAddPage
            }
        ]
    },
    {
        id: 500,
        title: 'Business',
        icon: <IoIosAddCircleOutline size={size} />,
        drop: [
            {
                id: 300,
                title: 'add new page',
                route: authRoutes.listAddPage
            },
            {
                id: 4,
                title: 'List of Business',
                route: authRoutes.listAddPage
            }
        ]
    },
    // events
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
    // human resource
    {
        id: 7875,
        title: 'Human Resource',
        icon: <BsPeople size={size} />,
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
    // Login Set Up

    {
        id: 6785,
        title: 'Login Setup',
        icon: <IoLogInOutline size={22} />,
        drop: [
            {
                id: 199,
                title: 'Login Setup',
                route: authRoutes.loginSetup,
            },
            {
                id: 299,
                title: 'My Account',
                route: authRoutes.accountPage
            },
            {
                id: 2499,
                title: 'Login Activity',
                route: authRoutes.logActivity
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
    // {
    //     id: 8,
    //     title: 'about',
    //     icon: <RiUser2Line size={size} />,
    //     drop: [
    //         {
    //             id: 1,
    //             title: 'creat about page',
    //             subMenu: aboutMenu,
    //         },
    //         {
    //             id: 2,
    //             title: 'List about pages',
    //             route: authRoutes.addAboutList
    //         }
    //     ]
    // },
    // {
    //     id: 9,
    //     title: 'privacy',
    //     icon: <BiMessageAltDetail size={size} />,
    //     drop: [
    //         {
    //             id: 1,
    //             title: 'creat privacy page',
    //             subMenu: privacyMenu,
    //         },
    //         {
    //             id: 2,
    //             title: 'List privacy pages',
    //             route: authRoutes.privacyList
    //         }
    //     ]
    // },
    // {
    //     id: 12,
    //     title: 'terms & conditions',
    //     icon: <AiOutlineFileSearch size={size} />,
    //     drop: [
    //         {
    //             id: 1,
    //             title: 'creat terms page',
    //             subMenu: termsMenu,
    //         },
    //         {
    //             id: 2,
    //             title: 'List terms pages',
    //             route: authRoutes.addTermsList
    //         }
    //     ]
    // },
    {
        id: 10,
        title: 'contact',
        icon: <FiPhoneCall size={size} />,
        drop: [
            {
                id: 1,
                title: 'add contact page',
                subMenu: contactMenu,
            },
            {
                id: 10,
                title: 'List contact pages',
                route: authRoutes.addContactList
            }
        ]
    },
    {
        id: 13,
        title: 'settings',
        icon: <FiSettings size={size} />,
        drop: [
            {
                id: 2,
                title: 'header & footer',
                route: authRoutes.headFooter
            },
            // {
            //     id: 5,
            //     title: 'Login Setup',
            //     route: authRoutes.settAddDetail
            // },
            {
                id: 30,
                title: 'Add on media icon',
                route: authRoutes.mediaIcon
            },
            {
                id: 40,
                title: 'Human Resource',
                subMenu: humanResource,
            },
            {
                id: 50,
                title: 'My Account',
                route: authRoutes.account
            },
            {
                id: 60,
                title: 'Languages Setup',
                route: "/404"
            }
        ]
    }
]