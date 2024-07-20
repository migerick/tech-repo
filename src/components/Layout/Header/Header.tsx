import {IconLogoTruck} from "../../../assets/shape/icon_logo_meta";
import {Contact} from "../Contact/Contact";

export const Header = () => {
    return (
        <div className="header">
            <div className="header__container u_mar--auto">
                <div className="header__logo--desk">
                    <IconLogoTruck/>
                </div>
                <div className="header__logo--mobile">
                    <IconLogoTruck width={92}/>
                </div>
                <Contact/>
            </div>
        </div>
    );
};