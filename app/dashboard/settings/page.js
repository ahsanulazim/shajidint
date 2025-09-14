
export default function page() {
    return (
        <>
            <div>
                <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">Settings</h1>
                <p className="text-gray-400 text-sm sm:text-md tracking-tighter">Personalize Whatever You Like</p>
            </div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift mt-5">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Personal" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 1</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Security" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 2</div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Advanced" />
                <div className="tab-content bg-base-100 border-base-300 p-6">Tab content 3</div>
            </div>
        </>
    )
}
