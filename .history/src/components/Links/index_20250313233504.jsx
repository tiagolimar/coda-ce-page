import { InstagramOutlined, WhatsAppOutlined } from "@ant-design/icons";

const Links = () => {
    return (
        <div className="px-32">
            <h1>Acesse nossas redes</h1>
            <ul className="flex gap-12 pl-102">
                <li>
                    <a href="https://www.instagram.com/coda.ce">
                        <InstagramOutlined
                            className="text-7xl hover:text-primary-color" /
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/coda.ce">
                        <WhatsAppOutlined
                            className="text-7xl"
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links;