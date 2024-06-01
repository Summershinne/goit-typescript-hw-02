import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import React from "react";
import { Image } from "../App/App.types";

interface ImageGalleryProps{
    items: Image[];
    onImageClick: (item: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
    return (
        <ul className={css.listContainer}>
            {items.map((item) => (
                <li key={item.id} >
                    <ImageCard image={item} onClick={onImageClick} />
                </li>
            ))}
        </ul>
    );
};
export default ImageGallery;