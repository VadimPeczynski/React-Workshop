import React, { useState, useEffect } from "react";

import { getHeroById, saveHero } from "../api/heroesApi";
import { getTeams } from "../api/teamsApi";
import { toast } from "react-toastify";
import HeroForm from "./HeroForm";

const HeroEdit = (props) => {
  useEffect(() => {
    const id = props.match.params.id;
    if (id) {
      getHeroById(id).then((_hero) => {
        setHero(_hero);
        setIsSubmitEnabled(true);
      });
    }
  }, [props.match.params.id]);

  useEffect(() => {
    getTeams().then((_teams) => {
      setTeams(_teams);
    });
  }, []);

  const [teams, setTeams] = useState([]);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

  const [hero, setHero] = useState({
    id: null,
    name: "",
    team: "",
    secretIdentity: "",
    salary: 0,
    description: "",
    strength: 0,
    logoUrl: "",
    active: false,
  });

  function handleChange({ target }) {
    let value;
    switch (target.type) {
      case "checkbox":
        value = target.checked;
        break;
      default:
        value = target.value;
        break;
    }
    setHero({ ...hero, [target.name]: value });
  }

  function handleBlur({ target }) {
    setTouched({ ...touched, [target.name]: true });
    checkIsValid();
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (hasValidationErrors()) {
      return;
    }
    saveHero(hero).then(() => {
      props.history.push("/heroes");
      toast.success("Bohater zapisany!");
    });
  }

  function checkIsValid() {
    setIsSubmitEnabled(!hasValidationErrors());
  }

  function hasValidationErrors() {
    const _errors = {};
    if (!hero.name) _errors.name = "Nazwa bohatera jest wymagana";
    if (!hero.team) _errors.team = "Team bohatera jest wymagany";
    if (hero.salary < 0)
      _errors.salary = "Wynagrodzenie bohatera nie może być mniejsze niż 0";
    if (hero.strength < 0 || hero.strength > 5)
      _errors.strength =
        "Siła bohatera nie może być mniejsza niż 0 i większa niż 5";

    setErrors(_errors);
    return Object.keys(_errors).length > 0;
  }

  return (
    <HeroForm
      hero={hero}
      teams={teams}
      errors={errors}
      touched={touched}
      onSubmit={handleSubmit}
      onBlur={handleBlur}
      onChange={handleChange}
      isSubmitEnabled={isSubmitEnabled}
    />
  );
};

export default HeroEdit;
