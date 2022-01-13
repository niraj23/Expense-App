import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';

const ExpenseForm = ({
  id, title, amount, date, notes, setter, submit, cancel, remove,
}) => {
  const newExpense = id <= 0;

  return (
    <form className="row mw-form mx-auto px-1" onSubmit={submit}>
        <div className="inset">
        {/* <VoiceInput label="Title" changeOnEntityType="title" type="text" value={title} onChange={setter} minLength={2} required /> */}
        <label for="title">Title*</label>
        <input type="text" name="title" value={title} onChange={setter} minLength={2} required />
      <Form.Group className={`${newExpense ? 'col-sm-4' : 'col-5'} mb-3`} controlId="amount">
        <label for="amount">Amount ($)*</label>
        <input type="number" name="amount" value={amount} onChange={setter} min={0.01} step={0.01} required />
      </Form.Group>
      <Form.Group className={`${newExpense ? 'col-sm-8' : 'col-7'} mb-3`} controlId="date">
      {/* <VoiceDatePicker label="Date" changeOnEntityType="date" type="date" name="date" value={date} onChange={setter} required /> */}
        <label for="date">Date*</label>
        <input type="date" name="date" value={date} onChange={setter} required />
      </Form.Group>
        <label for="notes">Description</label>
        <input as="textarea" rows={3} name="notes" value={notes} onChange={setter} maxLength={140} />
        </div>
      {newExpense ? (
        <div className="col-12">
          <button type="submit" className="w-100 mb-3">Create new expense</button>
          <button type="submit" variant="bg-light" className="w-100 color-mix-two" onClick={cancel}>Cancel</button>
        </div>
      ) : (
        <div className="col-12 mb-2 px-0 text-end">
          <button type="submit" className="fw-bold" size="sm">Update</button>
          <button type="submit" className="ms-3" size="sm" onClick={() => remove(id)}>
            <FaTrash />
          </button>
        </div>
      )}
    </form>
  );
};

ExpenseForm.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  amount: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  date: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  cancel: PropTypes.func,
  remove: PropTypes.func,
  setter: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

ExpenseForm.defaultProps = {
  id: -1,
  cancel: () => {},
  remove: () => {},
};

export default ExpenseForm;
