import Image from "next/image";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <Image width={496} height={496} src="/404.svg" alt="404 Not Found" className="max-w-xl p-10" />
        </div>
    )
}
