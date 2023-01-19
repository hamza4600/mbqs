/// Dyanamic or all Product
import { useParams } from 'react-router-dom';
import CreatBusiness from '../creatBusi';

const ProcuctView = (prop) => {

    const { id } = useParams();
    console.log(id, "Product Dyamaic id Page");

    return (
        <>
            <CreatBusiness
                title={id} />


        </>
    )
}


export default ProcuctView;