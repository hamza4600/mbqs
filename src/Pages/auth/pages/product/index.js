/// Dyanamic or all Product
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProcuctView = (prop) => {

    const { id } = useParams();
    console.log(id, "Product Dyamaic id Page");

    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id, setProduct])

    console.log(product, "profile");
    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <h1>Product View Page</h1>
            <h1>{id}</h1>

            {loading && <h1>Loading...</h1>}

            {product && (
                <div>
                    <hr />
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        value={product.title}
                        name="title"
                        onChange={handleChange}
                    />

                    <img 
                        src={product.image}
                        alt={product.title}
                        style={{ maxWidth: "350px" }}
                    />

                    <hr />
                    < label htmlFor="price">Price</label>
                    <input
                        type="text"
                        value={product.price}
                        name="price"
                        onChange={handleChange}
                    />
                    <hr />
                    <label htmlFor="category">Category</label>
                    <input
                        type="text"
                        value={product.category}
                        name="category"
                        onChange={handleChange}
                    />
                    <hr />
                    <label htmlFor="description">Description</label>
                    <textarea
                        value={product.description}
                        name="description"
                        onChange={handleChange}
                        cols={50}
                        rows={8}
                    />

                </div>
            )
            }
            <hr />
        </>
    )
}


export default ProcuctView;