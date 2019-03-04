import React from 'react';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';

const QuestionForm = ({ question, allCategories, onSave, onHideEdit, onChange, saving, errors }) => {

  return (
    <div className="container pt-3">
      <form>

        <TextField
          label="Question"
          className="d-flex mb-4 pb-3"
          name="title"
          value={question.title}
          onChange={onChange}
        />
        <FormControl className="d-flex mb-4 pb-3">
          <InputLabel htmlFor="age-simple">Category</InputLabel>
          <Select
            value={question.categoryId}
            name="categoryId"
            onChange={onChange}
          >
            {allCategories.map((option) => {
              return <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>;
            })
            }
          </Select>
        </FormControl>
        <FormControl component="fieldset" className="d-block mb-4">
          <FormLabel component="legend" className="mb-0">Gender</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="type"
            className='d-block'
            onChange={onChange}
            value={question.type}
          >
            <FormControlLabel value="stakeholder" control={<Radio />} label="Stakeholder" />
            <FormControlLabel value="user" control={<Radio />} label="User" />
          </RadioGroup>
        </FormControl>

        <input
          type="reset"
          disabled={saving}
          value='Cancel'
          className="btn btn-outline-secondary"
          onClick={onHideEdit}
        />

        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className="btn float-right btn-primary"
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
