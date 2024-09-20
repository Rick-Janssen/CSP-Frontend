import { useEffect, useState } from "react";
import "./ChangingImage.css";
const ChangingImage = ({isDutch, startIndex}) => {
    const [imageUrl, setImageUrl] = useState("");
    const [productPictures, setProductPictures] = useState([]);
    const dutchPictures = ["https://bols.com/cdn/shop/products/BolsZeerOudeGenever.png?v=1637596087&width=2048",
        "https://www.chocomel.de/wp-content/uploads/2017/01/1L-Pack-Wingcap.png",
        "https://dutchcandys.com/cdn/shop/files/deruiterHagelslagpuur.png?v=1692347437",
        "https://oetker-shop.hr/wp-content/uploads/2022/06/170003780-muffins-2.png",
        "https://www.jan.eu/wp-content/uploads/jan-poffertjes-38x.png"];

    const croatianPictures = [

        "https://www.badel1862.hr/wp-content/uploads/2023/09/Badel-Pelinkovac-Gorki-1L.png",
        
         "https://dobro.hr/wp-content/uploads/2017/01/prsut-dobro-web-800x665.png",
        
        "https://www.zagreb.info/wp-content/uploads/2017/02/16806907_1744022382576919_7000798493469960728_n.jpg",
        
        "https://www.cedevita.com/var/site/storage/images/naslovnica/proizvodi/naranca/200g/6469-6-cro-HR/200g.png"];

    
    useEffect(()=>{
        if(isDutch){
            let index = startIndex;
            setInterval(()=>{
                setImageUrl(dutchPictures[index]);
                index++;

                if(index == dutchPictures.length){
                    index = 0;
                }
            }, 2000);
        }else{
            let index = startIndex;
            setInterval(()=>{
                setImageUrl(croatianPictures[index]);
                index++;

                if(index == croatianPictures.length){
                    index = 0;
                }
            }, 2000);
        }


    },[])
    return (
        <img src={imageUrl}/>
    );
}

export default ChangingImage;