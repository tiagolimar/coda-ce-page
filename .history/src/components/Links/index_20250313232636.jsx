import { InstagramFilled } from "@ant-design/icons";

const Links = () => {
    return (
        <ul className="flex gap-12 px-86">
            <li>
                <a href="https://www.instagram.com/coda.ce">
                <InstagramFilled className="text-7xl"/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/coda.ce">
                <<WhatsAppOutlined className="text-7xl"/>
                </a>
            </li>
        </ul>
    );
}

export default Links;