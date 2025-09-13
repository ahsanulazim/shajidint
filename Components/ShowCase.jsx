import Image from "next/image";

export default function ShowCase({ content, reverse }) {



    return (
        <div className="hero">
            <div className={`hero-content max-w-none p-0 flex-col justify-between ${reverse ? "lg:flex-row-reverse mt-10" : "lg:flex-row"} gap-15`}>
                <Image width={576} height={448}
                    src={content.img}
                    className="rounded-lg w-full lg:max-w-md xl:max-w-xl"
                    alt={content.title}
                />
                <div>
                    <h3 className="font-bold text-success uppercase mb-2">{content.title}</h3>
                    <h2 className="text-4xl font-bold tracking-tight text-balance">{content.heading}</h2>
                    <p className="py-6 text-pretty tracking-tight opacity-70">
                        {content.desc}
                    </p>
                    <button className="btn btn-success rounded-md">{content.btn1}</button>
                    <button className="btn btn-neutral ml-5 rounded-md">{content.btn2}</button>
                </div>
            </div>
        </div>
    )
}
