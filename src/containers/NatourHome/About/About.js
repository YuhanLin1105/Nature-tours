import React from 'react';
import Utility from '../../Layout/Utiliy/Utility';
import Button from '../../../components/UI/Button/Button';
import imgNat1 from '../../../assets/img/nat-1-large.jpg';
import imgNat2 from '../../../assets/img/nat-2-large.jpg';
import imgNat3 from '../../../assets/img/nat-3-large.jpg';


const about = (props) => {
    return (
        <section class="section-about">
            <Utility uType={["u-center-text","u-margin-bottom-big"]}>
                <h2 class="heading-secondary">
                    Exciting tours for adventurous people
                </h2>
            </Utility>
            <div class="row">
                <div class="col-1-of-2">
                    <h3 class="heading-tertiary u-margin-bottom-small">
                        You are going to fall in love with nature
                    </h3>
                    <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus, earum magnam laborum quibusdam totam eius veniam voluptate labore officia aperiam, libero soluta nam hic magni corrupti quam est mollitia!
                    </p>
                    <h3 class="heading-tertiary u-margin-bottom-small">
                        Live adventures like you never have before
                    </h3>
                    <p class="paragraph">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione necessitatibus, libero soluta nam hic magni corrupti quam est mollitia!
                    </p>
                    <Button btnType="btn-text">Learn more &rarr;</Button>
                </div>

                <div class="col-1-of-2">
                    <div className="composition">
                        <img src={imgNat1}  className="composition__photo composition__photo--p1"/>
                        <img src={imgNat2}  className="composition__photo composition__photo--p2"/>
                        <img src={imgNat3}  className="composition__photo composition__photo--p3"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default about;