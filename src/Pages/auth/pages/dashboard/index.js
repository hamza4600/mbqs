import { lazy, Suspense } from 'react';
import PageSpinner from 'components/pageSpinner';

//  all components are lazy loaded 
const Dashboard = () => {
    return (
        <>
            <Suspense fallback={<PageSpinner />}>
                <h1>Dashboard</h1>                   
            </Suspense>
        </>
    )
}

export default Dashboard