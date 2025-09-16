export default function page() {
  return (
    <>
      <div>
        <h1 className="font-medium text-2xl sm:text-4xl tracking-tighter">
          Profile
        </h1>
        <p className="text-gray-400 text-sm sm:text-md tracking-tighter">
          Your Personal Informations
        </p>
      </div>
      <div className="flex gap-x-10 mt-5">
        <div className="avatar">
          <div className="ring-main ring-offset-base-100 w-56 rounded-full ring-2 ring-offset-2">
            <img
              className="max-w-56"
              src="/plabon.jpg"
              alt="Ahsanul Azim Plabon"
            />
          </div>
        </div>

        <fieldset className="fieldset w-xs mt-5">
          <label className="input">
            <span className="label">Title</span>
            <input
              type="text"
              className=""
              placeholder="My awesome page"
              value="Ahsanul Azim Plabon"
              disabled
            />
          </label>

          <label className="label">Slug</label>
          <input type="text" className="input" placeholder="my-awesome-page" />

          <label className="label">Author</label>
          <input type="text" className="input" placeholder="Name" />
        </fieldset>
      </div>
    </>
  );
}
