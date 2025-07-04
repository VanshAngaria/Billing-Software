import './ManageItems.css';
import ItemList from '../../components/ItemList/ItemList.jsx';
import ItemForm from '../../components/ItemForm/ItemForm.jsx';
import React from 'react';


const ManageItems = () => {
  return (
    <div className="Items-container text-light">
      <div className="left-column">
        <ItemForm />
      </div>
      <div className="right-column">
        <ItemList />
      </div>
    </div>
  );
}

export default ManageItems;
