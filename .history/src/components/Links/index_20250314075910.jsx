import { motion } from "motion/react";
import { InstagramOutlined, WhatsAppOutlined, GithubOutlined } from "@ant-design/icons";

const Links = () => {
    return (
        <div className="flex px-32 justify-center max-lg:px-6">
            <ul className="flex flex-col gap-10">
                <motion.li 
                className="border-4 rounded-3xl w-228 px-12 py-8 hover:scale-105 transition-transform duration-200 max-lg:px-3 max-lg:w-88 max-lg:py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1, delay: 2 }} 
                >
                    <a
                        className="flex items-end gap-6"
                        target="_blank"
                        href="https://www.instagram.com/coda.ce">
                        <InstagramOutlined className="text-5xl max-lg:text-3xl" />
                        <h1 className="text-4xl max-lg:text-xl">
                            Siga nosso <strong className="text-(--primary-color)">Instagram</strong>
                        </h1>
                    </a>
                </motion.li>
                <motionnli 
                className="border-4 rounded-3xl w-228 px-12 py-8 hover:scale-105 transition-transform duration-200 max-lg:px-3 max-lg:w-88 max-lg:py-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1, delay: 2 }} 
                >
                    <a 
                    className="flex items-end gap-6"
                    target="_blank" 
                    href="https://www.instagram.com/coda.ce">
                        <WhatsAppOutlined className="text-5xl max-lg:text-3xl" />
                        <h1 className="text-4xl max-lg:text-xl">
                            Faça parte da <strong className="text-(--primary-color)">Comunidade</strong>
                        </h1>
                    </a>
                </motionnli>
                <li className="border-4 rounded-3xl w-228 px-12 py-8 hover:scale-105 transition-transform duration-200 max-lg:px-3 max-lg:w-88 max-lg:py-4">
                    <a 
                    className="flex items-end gap-6"
                    target="_blank" 
                    href="https://www.instagram.com/coda.ce">
                        <GithubOutlined className="text-5xl max-lg:text-3xl" />
                        <h1 className="text-4xl max-lg:text-xl">
                            Trilha do Aprendizado<strong className="text-(--primary-color) max-lg:hidden"> - FullStack</strong>
                        </h1>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Links;