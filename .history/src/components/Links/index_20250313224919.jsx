import Icon from "../Icon";

const Links = ({ links }) => {
    return (
        <ul>
            {links.map(link => (
                <li 
                key={link.id}
                className="border"
                >
                    <a
                       
                        href={link.path}>
                        {Icon(link.id)}
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Links;