import { lazy, Suspense } from 'react';
import PageSpinner from 'components/pageSpinner';

const CreatBusiness = () => {
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <h1>creat business</h1>
            </Suspense>
        </>
    )
}

export default CreatBusiness