export { Page };

import { usePageContext } from 'vike-react/usePageContext';

type PageContextData = {
    movie: {
        title: string;
        rel: string;
    };
};

function Page() {
    const { data } = usePageContext() as { data: PageContextData };
    const { movie } = data;


    return (
        <div>
            <h1>Dynamic Page</h1>
            <p>Movie name: {movie.title}</p>
            <p>Movie price:{movie.rel}</p>

        </div>
    );
}
