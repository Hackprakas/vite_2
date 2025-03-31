export { Page };

import { useData } from 'vike-react/useData'

export type ProductData = {
    name: string;
    price: number;
    ids: string;
}

function Page() {
    const data = useData<ProductData>()
    const { name, price, ids } = data

    return (
        <div>
            <h1>Dynamic Page</h1>
            <p>Movie name: {name}</p>
            <p>Movie price:{ids}</p>

        </div>
    );
}
