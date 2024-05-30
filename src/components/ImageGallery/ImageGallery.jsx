import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, onImageClick }) {
    return (
        <ul className={css.listContainer}>
            {items.map((item) => (
                <li key={item.id} onClick={() => onImageClick(item)}>
                    <ImageCard urls={item.urls} description={item.description} />
                </li>
            ))}
        </ul>
    );
}