import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ToDoForm = ({ todo, onSave, onHideEdit, onChange, saving, errors }) => {

  return (
    <div className="container pt-3">
      <form>

        <TextField
          label="Question"
          className="d-flex mb-4 pb-3"
          name="title"
          value={todo.title}
          onChange={onChange}
        />
        <FormControl component="fieldset" className="d-block mb-4">
          <FormLabel component="legend" className="mb-0">Type</FormLabel>
          <RadioGroup
            aria-label="Type"
            name="type"
            className='d-block'
            onChange={onChange}
            value={todo.type}
          >
            <FormControlLabel value="work" control={<Radio />} label="Work" />
            <FormControlLabel value="personal" control={<Radio />} label="Personal" />
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

ToDoForm.propTypes = {
  todo: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ToDoForm;
