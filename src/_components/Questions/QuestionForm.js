import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../_common/TextInput';
import SelectInput from '../_common/SelectInput';

const QuestionForm = ({ question, allCategories, onSave, onChange, saving, errors }) => {
  return (
    <div className="container">
      <form>
        <h1>Manage Question</h1>
        <TextInput
          name="title"
          label="Title"
          value={question.title}
          onChange={onChange}
          error={errors.title} />

        <SelectInput
          name="categoryId"
          label="Category"
          value={question.categoryId}
          defaultOption="Select Category"
          options={allCategories}
          onChange={onChange} error={errors.categoryId} />

        <TextInput
          name="type"
          label="Type"
          value={question.type}
          onChange={onChange}
          error={errors.type} />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn btn-primary"
          onClick={onSave} />
      </form>
    </div>
  );
};

// QuestionForm.propTypes = {
//   question: React.PropTypes.object.isRequired,
//   allCategories: React.PropTypes.array,
//   onSave: React.PropTypes.func.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   saving: React.PropTypes.bool,
//   errors: React.PropTypes.object
// };

export default QuestionForm;
