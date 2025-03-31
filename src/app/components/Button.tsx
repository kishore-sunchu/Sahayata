import Link from "next/link";

export default function Button({ content, className, isLink, linkTo = '/' }: button) {
    return (
        <button className={className}>
            {
                isLink && linkTo ?
                    <Link href={linkTo}>{content}</Link>
                    :
                    content
            }
        </button>
    )
}

type button = {
    content: number | string;
    className: string;
    isLink?: boolean;
    linkTo?:  string;
}