import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
// import Input from '@material-ui/core/Input';
import RippleLoader from '../_components/_common/RippleLoader';

const LoginForm = ({ handleSubmit, onChange, username, password, submitted, errors, handleBlur }) => {

  return (
    <div className="container">
      <form>

        <TextField
          placeholder="USERNAME"
          name='username'
          value={username}
          className="login-form-control"
          onChange={onChange}
          error={(submitted && !username) || errors}
          fullWidth
          autoFocus
          margin="normal"
          variant="outlined"
          onBlur={handleBlur}
        />


        <TextField
          placeholder="PASSWORD"
          name='password'
          type="password"
          className="login-form-control"
          onChange={onChange}
          value={password}
          error={(submitted && !password) || errors}
          fullWidth
          margin="normal"
          variant="outlined"
        />

        <Fab variant="extended" onClick={handleSubmit} type="submit" color="primary" aria-label="Add" className="btn-primary mt-3">
          Login
          {submitted && username && password && <RippleLoader />}

        </Fab>

      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.bool
};

export default LoginForm;
