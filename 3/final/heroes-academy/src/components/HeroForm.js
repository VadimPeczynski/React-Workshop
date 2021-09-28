import React from "react";
import PropTypes from "prop-types";

import CheckBox from "./common/CheckBox";
import Input from "./common/Input";
import Select from "./common/Select";

const HeroForm = (props) => {
  return (
    <div className="card">
      <div className="card-header">Dodawanie herosa</div>
      <div className="card-body container">
        <form onSubmit={props.onSubmit}>
          <Input
            id="name"
            type="text"
            name="name"
            label="Nazwa"
            value={props.hero.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
            touched={props.touched.name}
            error={props.errors.name}
          />
          <Select
            id="team"
            name="team"
            label="Team"
            value={props.hero.team}
            onChange={props.onChange}
            onBlur={props.onBlur}
            touched={props.touched.team}
            error={props.errors.team}
            options={props.teams}
          />
          <Input
            id="secretIdentity"
            type="text"
            name="secretIdentity"
            label="Tożsamość"
            value={props.hero.secretIdentity}
            onChange={props.onChange}
          />
          <Input
            id="salary"
            type="number"
            name="salary"
            label="Wynagrodzenie"
            value={props.hero.salary}
            onChange={props.onChange}
            onBlur={props.onBlur}
            touched={props.touched.salary}
            error={props.errors.salary}
          />
          <Input
            id="strength"
            type="number"
            name="strength"
            label="Siła"
            value={props.hero.strength}
            onChange={props.onChange}
            onBlur={props.onBlur}
            touched={props.touched.strength}
            error={props.errors.strength}
          />
          <div className="mb-3">
            <label htmlFor="description">Opis</label>
            <textarea
              className="form-control"
              id="description"
              rows="3"
              name="description"
              value={props.hero.description}
              onChange={props.onChange}
            ></textarea>
          </div>
          <CheckBox
            id="active"
            name="active"
            label="Aktywny"
            value={props.hero.active}
            onChange={props.onChange}
          />
          <div style={{ margin: 2 }}>
            <button
              type="submit"
              className="btn btn-primary me-2"
              disabled={!props.isSubmitEnabled}
            >
              Dodaj
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={props.onCancel}
            >
              Anuluj
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

HeroForm.propTypes = {
  hero: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isSubmitEnabled: PropTypes.bool.isRequired,
};

export default HeroForm;
