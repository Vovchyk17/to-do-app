export default function Main() {
  return (
    <main
      id="main"
      className="container flex-auto flex justify-center items-center"
    >
      <div className="content w-full max-w-md bg-indigo-100 p-8 rounded ">
        <label className="input_text__label">
          <input
            type="text"
            placeholder="What needs to be done?"
            className="new_task"
          />
        </label>
      </div>
    </main>
  );
}
