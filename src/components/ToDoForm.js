import { FaCheck, FaPlusCircle } from "react-icons/fa";

export default function ToDoForm({
  onSubmitForm,
  onToggleAll,
  isAnyItems,
  allChecked,
}) {
  return (
    <form className="content__form" onSubmit={onSubmitForm}>
      {isAnyItems && (
        <label className="checkbox_wrapper">
          <input
            type="checkbox"
            className="checked_all"
            disabled={!isAnyItems}
            checked={allChecked}
            onChange={(e) => onToggleAll(e.target.checked)}
          />
          <span>
            <FaCheck />
          </span>
        </label>
      )}
      <label className="input_text__label">
        <input
          type="text"
          placeholder="What needs to be done?"
          className="add_new_task"
        />
      </label>
      <button type="submit">
        <FaPlusCircle />
      </button>
    </form>
  );
}
