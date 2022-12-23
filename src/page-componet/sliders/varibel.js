import { FiUserPlus } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsHeadset } from "react-icons/bs";
import { MdOutlineEngineering } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiUser2Line } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";

const size = 20;

export const sidebarData = [
    {
        id: 1,
        title: 'customer',
        icon: <FiUserPlus size={size} />,
        drop: [
            {
                id: 1,
                title: 'customer list',
                route: "/"
            },
            {
                id: 2,
                title: 'customer list',
                route: "/"
            }
        ]
    },
    {
        id: 2,
        title: 'area',
        icon: <GoLocation size={size} />,
        drop: [
            {
                id: 1,
                title: 'Area list',
                route: "/"
            },
            {
                id: 2,
                title: 'Area list',
                route: "/"
            }
        ]
    },
    {
        id: 3,
        title: 'products',
        icon: <AiOutlineShoppingCart size={size} />,
        drop: [
            {
                id: 1,
                title: 'products list',
                route: "/"
            },
            {
                id: 2,
                title: 'new products',
                route: "/"
            }
        ]
    },
    {
        id: 4,
        title: 'service',
        icon: <BsHeadset size={size} />,
        drop: [
            {
                id: 1,
                title: 'services list',
                route: "/"
            },
            {
                id: 2,
                title: 'new services',
                route: "/"
            }
        ]
    },
    {
        id: 5,
        title: 'engineers',
        icon: <MdOutlineEngineering size={size} />,
        drop: [
            {
                id: 1,
                title: 'structure engineers',
                route: "/"
            },
            {
                id: 2,
                title: 'architect ',
                route: "/"
            },
            {
                id: 3,
                title: 'Coastal engineer',
                route: "/"
            },
            {
                id: 4,
                title: 'earthquick engineer',
                route: "/"
            },
            {
                id: 5,
                title: 'geotechnical engineers',
                route: "/"
            },
            {
                id: 6,
                title: 'transport engineer',
                route: "/"
            },
            {
                id: 7,
                title: 'water engineer',
                route: "/"
            }
        ]
    },
    {
        id: 6,
        title: 'real estate',
        icon: <HiOutlineBuildingOffice2 size={size} />,
        drop: [
            {
                id: 1,
                title: 'properties ',
                route: "/"
            },
            {
                id: 2,
                title: 'Real estate Agent',
                route: "/"
            }
        ]
    },
    {
        id: 7,
        title: 'invoice',
        icon: <IoDocumentTextOutline size={size} />,
        drop: [
            {
                id: 1,
                title: 'create document',
                route: "/"
            }
        ]
    },
    {
        id: 8,
        title: 'agent',
        icon: <RiUser2Line size={size} />,
        drop: [
            {
                id: 1,
                title: 'agent list',
                route: "/"
            },
            {
                id: 2,
                title: 'seller agent',
                route: "/"
            }
        ]
    },
    {
        id: 9,
        title: 'news',
        icon: <BiMessageAltDetail size={size} />,
        drop: [
            {
                id: 1,
                title: 'news list',
                route: "/"
            },
            {
                id: 2,
                title: 'new news',
                route: "/"
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
                title: 'contact list',
                route: "/"
            },
            {
                id: 2,
                title: 'new contact',
                route: "/"
            }
        ]
    },
    {
        id: 11,
        title: 'front end',
        icon: <FiMonitor size={size} />,
        drop: [
            {
                id: 1,
                title: 'open front-end',
                route: "/"
            },
            {
                id: 2,
                title: 'new pages',
                route: "/"
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
                title: 'open terms',
                route: "/"
            },
            {
                id: 2,
                title: 'change terms',
                route: "/"
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
                title: 'open setting',
                route: "/"
            },
            {
                id: 2,
                title: 'change setting',
                route: "/"
            }
        ]
    },
]
