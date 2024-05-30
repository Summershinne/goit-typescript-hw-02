import css from "./ImageCard.module.css";

export default function ImageCard({ urls, description, onClick }) {


    return (
        <div>
            <img className={css.img} src={urls.small} alt={description} onClick={onClick=()=>{urls.regular}} />
        </div>
    );
}