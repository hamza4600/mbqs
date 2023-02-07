import { lazy } from 'react';
// evevery page will have its own state of data
// arrage all routes in order 
export const authRoutes = {
    panel: '/panel',
    addbusines: '/add-business',
    creatbusines: '/creat-business',
    frontView: '/front-view', // front view of website
    busniessProfile: '/business-profile',
    newNewsPage: '/creat-news-page',
    addAbout: '/add-about',
    addAboutList: '/add-about-list',
    addEvent: '/add-event',
    addEventList: '/add-event-list',
    addContact: '/add-contact',
    addTerms: '/add-terms',
    addPrivacy: '/add-privacy',
    listAddPage: '/list-add-page',
    settAddDetail: '/setting-app-detail',
    headFooter: '/setting-head-footer',
    productView: '/product/:id',
    menuEdit : '/menu-edit', // edit menu
    // add new page 
    headerImg: '/header-img',
    backgroundImg: '/background-img',
    textImg: '/text-img',
    overLapText: '/overlap-text',
    viedoList: '/viedo-list',
    brandSlider: '/brand-slider',
    // new pages 
    newsPageList: '/new-page-list',
    newsBg : '/news-bg',
};

const listPageType = {  // every Page have its own Api for getting Data
    business: "Business",
    newPage: "new Page ",
    about: "About List",
    event: "Event List",
};
// add type Pages will be same only data will be different
const addType = {
    event: "Add Event Page",
    about: "Add About Page"
}

// add trem and privacy and faq and contact are same 
const Dashboard = lazy(() => import('./pages/dashboard'));
const CreatBusiness = lazy(() => import('./pages/creatBusi'));
const AddBusiness = lazy(() => import('./pages/addBusin'));
const ListViewPage = lazy(() => import('./pages/list-View'))
const BusinessProfile = lazy(() => import('./pages/profileBusin'));
const CreatnewPage = lazy(() => import('./pages/newPage'));
const AddAboutPage = lazy(() => import('./pages/addAbout'));
const EditPrivacy = lazy(() => import('./pages/privacy'));
const AddContactPage = lazy(() => import('./pages/addContact'));
const AppDetailSetting = lazy(() => import('./setting'));
const SettingHeaderFooter = lazy(() => import('./pages/sett-head'));
const ProductView = lazy(() => import('./pages/product'));
// new page layout is Same 
const BackgroundImage = lazy(() => import('./pages/bgImag'));
const HeaderImage = lazy(() => import('./pages/headImg'));
const TextImage = lazy(() => import('./pages/textImg'));
const OverLapppinText = lazy(() => import('./pages/overlapText'));
const ViedoList = lazy(() => import('./pages/viedoList'));
const BrandSlider = lazy(() => import('./pages/brandSlider'));
const EditMenu = lazy(() => import('./pages/menu'));
// more new Page will be added
const NewsBg = lazy(() => import('./pages/bgnews'));

const paths = [
    {
        id: 1,
        path: authRoutes.panel,
        component: <Dashboard />,
    },
    {
        id: 2,
        path: authRoutes.creatbusines,
        component: <CreatBusiness />,
    },
    {
        id: 3,
        path: authRoutes.addbusines,
        component: <AddBusiness />,
    },
    
    {
        id: 5,
        path: authRoutes.busniessProfile,
        component: <BusinessProfile />,
    },
    {
        id: 6,
        path: authRoutes.newNewsPage,
        component: <CreatnewPage />,
    },
    {
        id: 7,
        path: authRoutes.newsPageList,
        component: <ListViewPage type={listPageType.newPage} />,
    },
    {
        id: 8,
        path: authRoutes.addAbout,
        component: <AddAboutPage type={addType.about} /> // add Event is alos same
    },
    {
        id: 9,
        path: authRoutes.addAboutList,
        component: <ListViewPage type={listPageType.about} />,
    },
    {
        id: 9,
        path: authRoutes.addEvent,
        component: <AddAboutPage type={addType.event} /> // add Event is alos same
    },
    {
        id: 10,
        path: authRoutes.addEventList,
        component: <ListViewPage type={listPageType.event} />,
    },
    {
        id: 11,
        path: authRoutes.addTerms,
        component: <EditPrivacy type="edit Term Page" /> // add Event is alos same
    },
    {
        id: 12,
        path: authRoutes.addPrivacy,
        component: <EditPrivacy type="edit Privacy Page" /> // add Event is alos same
    },
    {
        id: 13,
        path: authRoutes.addContact,
        component: <AddContactPage />
    },
    {
        id: 14,
        path: authRoutes.listAddPage,
        component: <ListViewPage type={listPageType.business} />  // list of add page
    },
    {
        id: 15,
        path: authRoutes.settAddDetail,
        component: <AppDetailSetting />
    },
    {
        id: 16,
        path: authRoutes.headFooter,
        component: <SettingHeaderFooter />
    },
    {
        id: 17,
        path: authRoutes.productView,
        component: <ProductView />
    },
    // new page
    {
        id: 18,
        path: authRoutes.backgroundImg,
        component: <BackgroundImage />
    },
    {
        id: 19,
        path: authRoutes.headerImg,
        component: <HeaderImage />  
    }, 
    {
        id: 20,
        path: authRoutes.textImg,
        component: <TextImage />  
    }, 
    {
        id: 21,
        path: authRoutes.overLapText,
        component: <OverLapppinText /> 
    },
    {
        id: 22,
        path: authRoutes.viedoList,
        component: <ViedoList />
    },
    {
        id: 23,
        path: authRoutes.brandSlider,
        component: <BrandSlider />
    },
    {
        id: 24,
        path: authRoutes.menuEdit,
        component: <EditMenu />
    },
    {
        id: 25,
        path: authRoutes.newsBg,
        component: <NewsBg />
    }
];

export default paths;