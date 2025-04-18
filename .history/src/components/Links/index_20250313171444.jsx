const Links = ({ links }) => {
    return (
        links.map(link => (
            <a key={link.id} href={link.path}>
                <i></i>
                {link.name}
            </a>
        ))
      );
}
 
export default Links;