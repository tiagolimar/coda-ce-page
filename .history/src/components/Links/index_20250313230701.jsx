import { FaInstagram } from "react-icons/fa";

const Links = ({ links }) => {
    return (
        <ul className="flex flex-col gap-8 ">
            <li className=>
                <a href="https://www.instagram.com/coda.ce">
                <FaInstagram />
                </a>
            </li>
        </ul>
    );
}

export default Links;