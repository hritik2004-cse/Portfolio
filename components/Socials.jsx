import { BiLogoFacebook, BiLogoInstagram, BiLogoLinkedin, BiLogoGithub, BiLogoYoutube } from 'react-icons/bi'

const socials = [
    {
        icon: <BiLogoFacebook />,
        path: ""
    },
    {
        icon: <BiLogoInstagram />,
        path: ""
    },
    {
        icon: <BiLogoLinkedin />,
        path: ""
    },
    {
        icon: <BiLogoGithub />,
        path: ""
    },
    {
        icon: <BiLogoYoutube />,
        path: "https://youtube.com/@hritik_is_coding?si=lI9tpo-bSLWQ7o6V"
    }
]

const Socials = ({ containerStyles, iconStyles }) => {
    return <div className={containerStyles}>
        {socials.map((items,index) =>{
            return(
                <div key={index} className={iconStyles}>
                    {items.icon}
                </div>
            )
        })}
    </div>
}

export default Socials
