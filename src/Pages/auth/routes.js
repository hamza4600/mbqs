import { lazy } from 'react';

// evevery page will have its own state of data
export const authRoutes = {
    panel: '/panel',
    addbusines: '/add-business',
    creatbusines: '/creat-business',
    listbussiness: '/business-list',
    busniessProfile: '/business-profile',
    newPage: '/new-page',
    newPageList: '/new-page-list',
    addAbout: '/add-about',
    addAboutList: '/add-about-list',
    addEvent: '/add-event',
    addEventList: '/add-event-list',
    addContact: '/add-contact',
    addTerms: '/add-terms',
    addPrivacy: '/add-privacy',
    settAddPage: '/setting-add-page',
    settAddDetail: '/setting-app-detail',
    headFooter: '/setting-head-footer',
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
// add trem and privacy and faq and contact are same;

const Dashboard = lazy(() => import('./pages/dashboard'));
const CreatBusiness = lazy(() => import('./pages/creatBusi'));
const AddBusiness = lazy(() => import('./pages/addBusin'));
const ListViewPage = lazy(() => import('./pages/list-View'))
const BusinessProfile = lazy(() => import('./pages/profileBusin'));
const CreatnewPage = lazy(() => import('./pages/newPage'));
const AddAboutPage = lazy(() => import('./pages/addAbout'));
const EditPrivacy = lazy(() => import('./pages/privacy'));
const AddContactPage = lazy(() => import('./pages/addContact'));
const AddnewPage = lazy(() => import('./pages/addPage'));
const AppDetailSetting = lazy(() => import('./setting'));
const SettingHeaderFooter = lazy(() => import('./pages/sett-head'));

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
        id: 4,
        path: authRoutes.listbussiness,
        component: <ListViewPage type={listPageType.business} />,
    },
    {
        id: 5,
        path: authRoutes.busniessProfile,
        component: <BusinessProfile />,
    },
    {
        id: 6,
        path: authRoutes.newPage,
        component: <CreatnewPage />,
    },
    {
        id: 7,
        path: authRoutes.newPageList,
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
        path: authRoutes.settAddPage,
        component: <AddnewPage />
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
    }
];

export default paths;