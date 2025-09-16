import ContactFrom from "./ContactFrom";

export default function Contact() {
    return (
        <section className="max-w-[1440px] mx-auto p-5 md:px-10 md:py-20 flex flex-col md:items-center md:flex-row gap-5">
            <div>
                <h2 className="font-bold text-4xl lg:text-5xl tracking-tighter mb-5 text-balance">Ready to take your marketing to the next level?</h2>
                <p className="lg:text-lg/8 font-bold">Get a look at:</p>
                <ul className="pl-5 opacity-70 lg:text-base/8">
                    <li className="list-disc">How NinjaPromo works</li>
                    <li className="list-disc">How you can do marketing at scale better, faster and cheaper</li>
                    <li className="list-disc">How we&apos;re different from agencies, freelancers and in-house marketing teams (hint: we&apos;re 15x faster than hiring!)</li>
                    <li className="list-disc">The most suitable subscription plan for your needs</li>
                </ul>
            </div>
            <ContactFrom />
        </section>
    )
}
