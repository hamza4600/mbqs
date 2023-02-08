// evevery page will have its own state of data
import { lazy } from 'react';

// commmon pages only type of data will be different  
export const authRoutes = {
    panel: '/panel',
    addbusines: '/add-business',
    newNewsPage: '/creat-news-page',
    addContact: '/add-contact',
    // terms pages
    addTerms: '/add-terms',
    addTermsList: '/add-terms-list',
    termsBg: '/terms-bg',
    // events pages
    addEvent: '/add-event',
    addEventList: '/add-event-list',
    eventBg: '/event-bg',
    // about pages
    addAbout: '/add-about',
    addAboutList: '/add-about-list',
    aboutBg: '/about-bg',
    // privacy pages
    addPrivacy: '/add-privacy',
    privacyBg: '/privacy-bg',
    // news pages 
    newsPageList: '/new-page-list',
    newsBg: '/news-bg',
    overLaptextNews: '/overlap-text-news',
    newDetail: '/news-detail',
    // add new business
    creatbusines: '/creat-business',
    backgroundImg: '/background-img',
    headerImg: '/header-img',
    textImg: '/text-img',
    overLapText: '/overlap-text',
    viedoList: '/viedo-list',
    brandSlider: '/brand-slider',
    // setting pages
    menuEdit: '/menu-edit', // edit menu
    settAddDetail: '/setting-app-detail',
    headFooter: '/setting-head-footer',
    others: '/others',
    mediaIcon: '/media-icon',
    // Common Pages
    frontView: '/front-view', // front view of website
    busniessProfile: '/business-profile',
    listAddPage: '/list-new-page',
    // Dynamic Pages
    productView: '/product/:id',
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
// Baground Images Types Pass all Other Data in below Object  
const bgType = {
    event: { name: "Event Background", type: "event" },
    news: { name: "News Background", type: "news" },
    business: { name: "Business Background", type: "business" },
    privacy: { name: "Product Background", type: "product" },
    about: { name: "About Background", type: "about" },
    terms : { name: "Terms Background", type: "terms" },
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
const SettingHeaderFooter = lazy(() => import('./pages/sett-head'));
const ProductView = lazy(() => import('./pages/product'));
// new page layout is Same 
const HeaderImage = lazy(() => import('./pages/headImg'));
const TextImage = lazy(() => import('./pages/textImg'));
const OverLapppinText = lazy(() => import('./pages/overlapText'));
const ViedoList = lazy(() => import('./pages/viedoList'));
const BrandSlider = lazy(() => import('./pages/brandSlider'));
const EditMenu = lazy(() => import('./pages/menu'));
// more new Page will be added
const NewsBg = lazy(() => import('./pages/bgnews')); // 4 types of BackGround
const Others = lazy(() => import('./pages/others'));
const Social = lazy(() => import('./pages/social'));
const OverLapTextNews = lazy(() => import('./pages/ovLapnews'));
const NewsDetail = lazy(() => import('./pages/newsDetail'));
const SettingAppDetail = lazy(() => import('./pages/set-details'));

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
        component: <SettingAppDetail />
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
        component: <NewsBg type={bgType.business} />
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
        component: <NewsBg type={bgType.news} />
    },
    {
        id: 26,
        path: authRoutes.others,
        component: <Others />
    },
    {
        id: 27,
        path: authRoutes.mediaIcon,
        component: <Social />
    },
    {
        id: 28,
        path: authRoutes.overLaptextNews,
        component: <OverLapTextNews />
    },
    {
        id: 29,
        path: authRoutes.newDetail,
        component: <NewsDetail />
    },
    {
        id: 30,
        path: authRoutes.eventBg,
        component: <NewsBg type={bgType.event} />
    },
    {
        id: 31,
        path: authRoutes.aboutBg,
        component: <NewsBg type={bgType.about} />
    },
    {
        id: 32,
        path: authRoutes.privacyBg,
        component: <NewsBg type={bgType.privacy} />
    },
    {
        id: 33,
        path: authRoutes.termsBg,
        component: <NewsBg type={bgType.term} />
    }
];

export default paths;