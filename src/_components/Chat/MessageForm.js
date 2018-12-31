import React from 'react';
import PropTypes from 'prop-types';

const MessageForm = ({ message, onSave, onChange, errors }) => {
  return (
    <div className="message-type-cntr pl-4 py-3 pr-1 border-top border-med-light">
      <form>
      <div className="btn-cntr float-right">
          <button
            type="submit"
            disabled={message.msg == ""}
            className="border-0 bg-transparent p-2"
            onClick={onSave} ><i className="material-icons">
              send
          </i></button>
        </div>
        <div className="input-cntr mr-5">
          <input
            type="text"
            name="msg"
            className="form-control"
            placeholder="Type your message"
            value={message.msg}
            onChange={onChange} />
        </div>
        
      </form>
    </div>
  );
};

// QuestionForm.propTypes = {
//   question: React.PropTypes.object.isRequired,
//   allAuthors: React.PropTypes.array,
//   onSave: React.PropTypes.func.isRequired,
//   onChange: React.PropTypes.func.isRequired,
//   errors: React.PropTypes.object
// };

export default MessageForm;
