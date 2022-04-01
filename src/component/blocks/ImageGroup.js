import React, { useState } from "react";
import Input from "../controls/Input";
import Image from "../blocks/Image";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function ImageGroup(props) {
    const [imgs, setImgs] = useState([]);
    const [rerender, setRerender] = useState(false);

    const handleOwlChange = () => {
        setRerender(false);
    }

    const handleChange = (event) => {
        const files = event.target.files;
        const srcs = Array.from(files).map((file) => URL.createObjectURL(file));
        setImgs(srcs);
        setRerender(true);

        props.onChange(event);
    }

    return  <div className="form-group images">
                <div className={"gallery " + (imgs.length === 0 ? "empty" : "") + (imgs.length > 3 ? "show-dots" : "")}>
                    <OwlCarousel onChange = {handleOwlChange} className="owl-theme" margin={57} dots autoWidth>
                        {imgs.map((src, i) =>
                          <div key={i} className="item"><Image src={src} /></div>
                        )}
                    </OwlCarousel>
                </div>
                <Input name={props.name} onChange={handleChange} type="file" label="Загрузить изображения" accept="image/*" multiple />
                {props.validate&&<span className="error">{props.error}</span>}
            </div>
}