import { lazy } from 'react';
import { authRoutes } from './routes';

// add trem and privacy and faq and contact are same 
const Dashboard = lazy(() => import('./pages/dashboard'));
const CreatBusiness = lazy(() => import('./pages/creatBusi'));
const AddBusiness = lazy(() => import('./pages/addBusin'));
const ListViewPage = lazy(() => import('./pages/list-View'))
const BusinessProfile = lazy(() => import('./pages/profileBusin'));
const CreatnewPage = lazy(() => import('./pages/newPage')); // 7 types of new page

const SettingHeaderFooter = lazy(() => import('./pages/sett-head'));
const ProductView = lazy(() => import('./pages/product'));
// new page layout is Same 
const HeaderImage = lazy(() => import('./pages/headImg'));
const TextImage = lazy(() => import('./pages/textImg'));
const OverLapppinText = lazy(() => import('./pages/overlapText')); // 4 types of OverLapppinText
const ViedoList = lazy(() => import('./pages/viedoList'));
const BrandSlider = lazy(() => import('./pages/brandSlider'));
const EditMenu = lazy(() => import('./pages/menu'));
// more new Page will be added
const NewsBg = lazy(() => import('./pages/bgnews')); // 4 types of BackGround
const Others = lazy(() => import('./pages/others'));
const Social = lazy(() => import('./pages/social'));
const NewsDetail = lazy(() => import('./pages/newsDetail'));
const SettingAppDetail = lazy(() => import('./pages/set-details'));
const EventDetail = lazy(() => import('./pages/event-details'));
const TextImagAbout = lazy(() => import('./pages/text-imgAbout'));
const PrivacyPolicy = lazy(() => import('./pages/privacyPolicy'));
const Terms = lazy(() => import('./pages/terms'));
const FAQ = lazy(() => import('./pages/faq'));
const Map = lazy(() => import('./pages/map'));
const ContactDetails = lazy(() => import('./pages/contactDetails'));

// 7 types of list page
const listPageType = {  // every Page have its own Api for getting Data
    business: { name: "Business List", type: "business" },
    about: { name: "About List", type: "about" },
    event: { name: "Event List", type: "event" },
    news: { name: "News List", type: "news" },
    contact: { name: "Contact List", type: "contact" },
    terms: { name: "Terms List", type: "terms" },
    privacy: { name: "Privacy List", type: "privacy" },
};


// Baground Images Types Pass all Other Data in below Object  
const bgType = {
    event: { name: "Event Background", type: "event" },
    news: { name: "News Background", type: "news" },
    business: { name: "Business Background", type: "business" },
    privacy: { name: "privacy Background", type: "privacy" },
    about: { name: "About Background", type: "about" },
    terms: { name: "Terms Background", type: "terms" },
    contact: { name: "Contact Background", type: "contact" },
}
// Overlapping text have 5 types
const overlapType = {
    event: { name: "Event Overlapping Text", type: "event" },
    news: { name: "News Overlapping Text", type: "news" },
    business: { name: "Business Overlapping Text", type: "business" },
    about: { name: "About Overlapping Text", type: "about" },
    contact: { name: "Contact Overlapping Text", type: "contact" },
};

// 7 types of Slider Pages in App
const sliderTypePages = {
    business: { name: "Business Slider", type: "business" }, // double
    news: { name: "News Slider", type: "news" },
    events: { name: "Events Slider", type: "events" },
    about: { name: "About Slider", type: "about" },
    contact: { name: "Contact Slider", type: "contact" }, // missing
    terms: { name: "Terms Slider", type: "terms" },
    privacy: { name: "Privacy Slider", type: "privacy" }
}


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
        component: <CreatnewPage type={sliderTypePages.news} />,
    },
    {
        id: 7,
        path: authRoutes.newsPageList,
        component: <ListViewPage type={listPageType.news} />,
    },
    {
        id: 8,
        path: authRoutes.addAbout,
        component: <CreatnewPage type={sliderTypePages.about} />
    },
    {
        id: 9,
        path: authRoutes.addAboutList,
        component: <ListViewPage type={listPageType.about} />,
    },
    {
        id: 9,
        path: authRoutes.addEvent,
        component: <CreatnewPage type={sliderTypePages.events} />
    },
    {
        id: 10,
        path: authRoutes.addEventList,
        component: <ListViewPage type={listPageType.event} />,
    },
    {
        id: 11,
        path: authRoutes.addTerms,
        component: <CreatnewPage type={sliderTypePages.terms} />
    },
    {
        id: 12,
        path: authRoutes.addPrivacy,
        component: <CreatnewPage type={sliderTypePages.privacy} />
    },
    {
        id: 13,
        path: authRoutes.addContact,
        component: <CreatnewPage type={sliderTypePages.contact} />
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
        path: authRoutes.pageView,
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
        component: <OverLapppinText type={overlapType.business} />
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
        component: <OverLapppinText type={overlapType.news} />
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
        component: <NewsBg type={bgType.terms} />
    },
    {
        id: 34,
        path: authRoutes.overLaptextEvent,
        component: <OverLapppinText type={overlapType.event} />
    },
    {
        id: 34,
        path: authRoutes.overLaptextAbout,
        component: <OverLapppinText type={overlapType.about} />
    },
    {
        id: 35,
        path: authRoutes.overLaptextContact,
        component: <OverLapppinText type={overlapType.contact} />
    },
    {
        id: 36,
        path: authRoutes.eventDetails,
        component: <EventDetail />
    },
    {
        id: 37,
        path: authRoutes.textImagAbout,
        component: <TextImagAbout />
    },
    {
        id: 38,
        path: authRoutes.privacy,
        component: <PrivacyPolicy />
    },
    {
        id: 39,
        path: authRoutes.terms,
        component: <Terms />
    },
    {
        id: 40,
        path: authRoutes.privacyList,
        component: <ListViewPage type={listPageType.privacy} />,
    },
    {
        id: 41,
        path: authRoutes.addTermsList,
        component: <ListViewPage type={listPageType.terms} />,
    },
    {
        id: 42,
        path: authRoutes.addContactList,
        component: <ListViewPage type={listPageType.contact} />,
    },
    {
        id: 43,
        path: authRoutes.faq,
        component: <FAQ />
    },
    {
        id: 44,
        path: authRoutes.contactDetails,
        component: <ContactDetails />
    },
    {
        id: 45,
        path: authRoutes.map,
        component: <Map />
    },
    {
        id: 46,
        path: authRoutes.contactBg,
        component: <NewsBg type={bgType.contact} />
    }
];

export default paths;