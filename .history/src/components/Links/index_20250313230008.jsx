const Links = ({ links }) => {
    return (
        <ul className="flex flex-col gap">
            {links.map(link => (
                <li 
                key={link.id}
                className=" flex border-2 w-60 rounded-4xl box-content text-center justify-center"
                >
                    <a
                        className="flex text-2xl font-semibold gap-4" 
                        href={link.path}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Links;