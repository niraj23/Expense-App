import Proptypes from 'prop-types';
import { IoFastFoodSharp } from 'react-icons/io5';
import { GiWorld, GiTransportationRings, GiPayMoney } from 'react-icons/gi';
import {
  FaPencilAlt, FaShoppingCart, FaTrash, FaFirstAid, FaPlug,
} from 'react-icons/fa';
import { useFormState } from '../hooks';
import '../assets/list.css';

const List = ({
  id, name, trackExpenses, updateList, deleteList,
}) => {
  const {
    state, handleChange, visible, toggleDisplay, reset,
  } = useFormState({ name });

  const placeholder = (name) => {
    switch (name) {
      case 'Food & Drinks': return <IoFastFoodSharp />;
      case 'Shopping': return <FaShoppingCart />;
      case 'Healthcare': return <FaFirstAid />;
      case 'Electricity': return <FaPlug />;
      case 'Transport': return <GiTransportationRings />;
      case 'Travel': return <GiWorld />;
      default: return <GiPayMoney />;
    }
  };

  const edit = () => {
    if (visible) {
      toggleDisplay();
      reset();
    } else {
      toggleDisplay();
    }
  };

  const update = (e) => {
    e.preventDefault();
    updateList(id, state);
    toggleDisplay();
  };

  return (
    <div className="card-container">
      <div className="cards">
        <div className="front">
        <span className="fs-2">{placeholder(name)}</span>
        </div>
        <div className="back">
          <span className="name" onClick={edit}>{name} <FaPencilAlt /> </span>
        {!visible && (
          <button type="button" className="category-btn" onClick={() => trackExpenses(id, name)}>
            Expenses
          </button>
        )}
        </div>
      </div>

      {visible && (
        <form className="list__editor" onSubmit={update}>
        <div className="inset">
          <input type="text" name="name" value={state.name} onChange={handleChange} />
            <button type="submit" className="btn list__btn">Rename</button>
            <button type="submit" className="btn list__btn" onClick={() => deleteList(id)}>
              <FaTrash />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

List.propTypes = {
  id: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  trackExpenses: Proptypes.func.isRequired,
  updateList: Proptypes.func.isRequired,
  deleteList: Proptypes.func.isRequired,
};

export default List;
