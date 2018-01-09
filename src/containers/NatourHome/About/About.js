import React from 'react';
import Utility from '../../Layout/Utiliy/Utility';
import Button from '../../../components/UI/Button/Button';
import imgNat1 from '../../../assets/img/nat-1-large.jpg';
import imgNat2 from '../../../assets/img/nat-2-large.jpg';
import imgNat3 from '../../../assets/img/nat-3-large.jpg';


const about = (props) => {
    const aboutContent = {
        title:"EXCITING TOURS FOR ADVENTUROUS PEOPLE",
        textContent: {
            title: "Exciting tours for adventurous people",
            subTitle1: "You are going to fall in love with nature",
            content1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus, earum magnam laborum quibusdam totam eius veniam voluptate labore officia aperiam, libero soluta nam hic magni corrupti quam est mollitia!",
            subTitle2: "Live adventures like you never have before",
            content2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus, libero soluta nam hic magni corrupti quam est mollitia!"
        },
        imgContent:{
            imgNat1,
            imgNat2,
            imgNat3
        }
    }

    return (
        <section className="section-about">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    {aboutContent.title}
                </h2>
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        {aboutContent.textContent.subTitle1}
                    </h3>
                    <p className="paragraph">
                        {aboutContent.textContent.content1}
                    </p>
                    <h3 className="heading-tertiary u-margin-bottom-small">
                        {aboutContent.textContent.subTitle2}
                    </h3>
                    <p className="paragraph">
                        {aboutContent.textContent.content2}
                    </p>
                    <Button btnType="btn-text">Learn more &rarr;</Button>
                </div>

                <div className="col-1-of-2">
                    <div className="composition">
                        <img src={aboutContent.imgContent.imgNat1} className="composition__photo composition__photo--p1" />
                        <img src={aboutContent.imgContent.imgNat2} className="composition__photo composition__photo--p2" />
                        <img src={aboutContent.imgContent.imgNat3} className="composition__photo composition__photo--p3" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about;