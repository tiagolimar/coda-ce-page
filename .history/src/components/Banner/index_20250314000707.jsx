import logo from "../../assets/logo.png";

const Banner = () => {
    return (
        <div className="flex flex-col gap-12 px-32 pt-12 mb-16 max-lg:px-2">
            <h1 className="text-5xl max-lg:hidden">
                O site da comunidade
            </h1>
            <div className="flex justify-center max-lg:items-center">
                <img src={logo} className="w-232" />
            </div>
            <div className="flex justify-end">
                <h2 className="text-4xl max-lg:hidden">
                    Feito especialmente para <strong className="text-(--secondary-color) font-bold">você</strong>, dev.
                </h2>
            </div>
        </div>
    );
}

export default Banner;