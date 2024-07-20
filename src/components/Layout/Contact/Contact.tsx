import {IconGithub} from "../../../assets/shape/icon_github";

export const Contact = () => {
    return (
        <div className="contact_layout">
            <div className="contact_layout__text">
                <div className="contact_layout--desk">
                    Github
                </div>
                <div className="contact_layout__text--highlight">
                    <IconGithub/>
                    <a href="https://github.com/migerick" target="_blank" rel="noreferrer">
                        <div className="contact_layout--desk">
                            migerick
                        </div>
                        <div className="contact_layout--mobile">
                            github
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};