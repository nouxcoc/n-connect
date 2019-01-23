import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const NoteForm = ({ note, onSave, onHideEdit, onChange, saving, errors }) => {

  return (
    <div className="container pt-3">
      <form>

        <TextField
          label="Note"
          className="d-flex mb-4 pb-3"
          name="title"
          value={note.title}
          onChange={onChange}
        />
        <FormControl component="fieldset" className="d-block mb-4">
          <FormLabel component="legend" className="mb-0">Type</FormLabel>
          <RadioGroup
            aria-label="Type"
            name="type"
            className='d-block'
            onChange={onChange}
            value={note.type}
          >
            <FormControlLabel value="text" control={<Radio />} label="Text" />
            <FormControlLabel value="url" control={<Radio />} label="URL" />
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

NoteForm.propTypes = {
  note: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default NoteForm;
