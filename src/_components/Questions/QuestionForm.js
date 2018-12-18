import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../_common/TextInput';
import SelectInput from '../_common/SelectInput';

const QuestionForm = ({ question, allAuthors, onSave, onChange, saving, errors }) => {
  
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
          name="authorId"
          label="Author"
          value={question.authorId}
          defaultOption="Select Author"
          options={allAuthors}
          onChange={onChange} error={errors.authorId} />

        <TextInput
          name="category"
          label="Category"
          value={question.category}
          onChange={onChange}
          error={errors.category} />

        <TextInput
          name="length"
          label="Length"
          value={question.length}
          onChange={onChange}
          error={errors.length} />

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
//   allAuthors: React.PropTypes.array,
//   onSave: React.PropTypes.func.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   saving: React.PropTypes.bool,
//   errors: React.PropTypes.object
// };

export default QuestionForm;
