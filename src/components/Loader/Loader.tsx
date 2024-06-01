import React from "react";
import css from "./Loader.module.css";
import { InfinitySpin } from 'react-loader-spinner'

interface LoaderProps{
    loading: boolean;
};

const Loader: React.FC<LoaderProps> = ({ loading }) => {
    return (
    <div>
       {loading && <InfinitySpin
            width="200"
            color="blueviolet"
            // ariaLabel="infinity-spin-loading"
            />} 
            </div>
    )
};

export default Loader;


