export default function ContactFrom() {
    return (
        <form className="fieldset bg-white rounded-box shadow-md p-4 xl:p-8 md:max-w-xs xl:max-w-md 2xl:max-w-lg md:w-full">
            <h2 className="text-2xl xl:text-3xl font-bold tracking-tighter mb-2">Book a call with us</h2>

            <label className="floating-label mb-1">
                <span>First Name</span>
                <input type="text" placeholder="First Name" className="input input-md placeholder:tracking-tight w-full" required />
            </label>
            <label className="floating-label mb-1">
                <span>Last Name</span>
                <input type="text" placeholder="Last Name" className="input input-md placeholder:tracking-tight w-full" required />
            </label>
            <label className="floating-label mb-1">
                <span>Email</span>
                <input type="text" placeholder="Email" className="input input-md placeholder:tracking-tight w-full" required />
            </label>
            <label className="floating-label mb-1">
                <span>Massage</span>
                <textarea className="textarea placeholder:tracking-tight w-full" placeholder="What task would you like to solve?" required />
            </label>
            <button type="submit" className="btn btn-neutral !rounded-md">Book a Call</button>
        </form>
    )
}
