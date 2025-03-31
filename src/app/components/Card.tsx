import Image from "next/image";

export default function Card({ style, image,ImageAlt, title, description }: Card) {
    return (
        <div className={style}>
            <div className="mb-2">
                 <Image src={image} alt={ImageAlt} className="mx-auto w-16" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
        </div>
    )
}

type Card = {
    style: string;
    image: string;
    ImageAlt: string;
    title: string;
    description: string
}