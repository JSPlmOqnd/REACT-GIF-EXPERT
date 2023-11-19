import { GifItem } from "./GifItem";
// import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {

    // eslint-disable-next-line no-unused-vars
    const { images, isLoading } = useFetchGifs(category);
        
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<h2>Cargando ...</h2>)
            }
            <div className="card-grid">
                {
                    images.map( ( image ) => (
                        <GifItem
                            key={image.id}
                            /* title={ image.title }
                            url={ image.url } */
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
