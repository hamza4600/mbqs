import { Suspense, memo, useReducer, useState } from 'react';
import PageSpinner from 'components/pageSpinner';
import { EditPageHeader, EditPageLayout, PreviewBtnGroup, PreviewSectionHeader } from 'page-componet/layout/editPage';
import { Left, MapImages, Right } from './componets';
import { PreviewImage } from './style';

const EditSection = ({ title, data, dispatch, handelDropdown, section, setSection }) => {
    return (
        <>
            <EditPageHeader
                title={`${title ? title : 'Register New Business '}   Page`}
                hideIcon={true}
            >
                    {
                        section === 'right' ?
                            <Right
                                data={data}
                                dispatch={dispatch}
                                handelDropdown={handelDropdown}
                                setSection={setSection}
                            /> :
                            <Left
                                data={data}
                                dispatch={dispatch}
                                handelDropdown={handelDropdown}
                            />
                    }
            </EditPageHeader>
        </>
    )
}

const PreviewSection = ({ nextRoute, setSection, section , data}) => {
    console.log(data)
    const nextPage = () => {
        if (nextRoute !== null) {

            if (section === 'left') {
                setSection('right')
            }

            if (section === 'right') {
                window.location.href = '/auth/background-img'
            }
        }
        if (nextRoute === null) {
            window.location.href = '/auth/list-new-page'
        }
    }

    return (
        <>
            <PreviewSectionHeader>
            
                <PreviewImage>
                        {/* image */}
                        <MapImages
                            data={data.image}
                            title={'Images'}
                            />
                        {/* pdf */}
                        <MapImages
                            data={data.pdf}
                            title={'PDF'}
                        />
                        {/* business image */}
                        <MapImages
                            data={data.businessImage}
                            title={'Business Image'}
                        />
                        {/* business video */}
                        <MapImages
                            data={data.businessVideo}
                            title={'Business Video'}
                        />

                </PreviewImage>


                <PreviewBtnGroup    
                    showEditorBtn={false}
                    frontView={false}
                    nextPage={nextPage}
                />
            </PreviewSectionHeader>
        </>
    )
};


const CreatBusiness = ({ title, nextRoute }) => {

    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value
        }
    }

    const [data, dispatch] = useReducer(reducer, initialState);

    const handelDropdown = (value, index) => {
        dispatch({
            field: 'dropdown', value: {
                ...data.dropdown,
                [index]: value
            }
        })
    }

    const [section, setSection] = useState('left');

    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <EditPageLayout>
                    <EditSection
                        title={title}
                        data={data}
                        dispatch={dispatch}
                        handelDropdown={handelDropdown}
                        section={section}
                        setSection={setSection}
                    />
                    <PreviewSection
                        nextRoute={nextRoute}
                        data={data}
                        section={section}
                        setSection={setSection}
                    />
                </EditPageLayout>
            </Suspense>
        </>
    )
}

export default memo(CreatBusiness);

// initial Value
const initialState = {
    businessName: '',
    businessId: '',
    taxNum: '',
    vatNum: '',
    email: '',
    contactNum: '',
    address: '',
    postalCode: '',
    regesterDate: '',
    bussLiceseId: '',
    compBudget: '',
    opertionBudget: '',
    compDetails: '',
    referenceName: '',
    referencelink: '',
    // new state
    firstName: '',
    lastName: '',
    emailLeft: '',
    userName: '',
    password: '',
    rePassword: '',
    contactNumber: '',
    businessNumber: '',

    dropdown: {
        category: '',
        subCategory: '',
        city: '',
        state: '',
        country: '',
        // new state
        role: '',
    },
    // files state
    image: [],
    pdf: [],
    businessImage: [],
    businessVideo: [],
    // new fields 
    addNewField: []
};