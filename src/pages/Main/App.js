import React, { useEffect, useState } from "react";

import { Container, Form, Checks, Fields, Buttons, Tabs } from "./styles";
import { FiChevronRight } from "react-icons/fi";
import { FaMotorcycle, FaCar } from "react-icons/fa";

import logo from "../../assets/logo.svg";
import api from "../../services/api";

function App() {
  const [makes, setMakes] = useState([]);
  const [tabSelected, setTabSelected] = useState("carro");
  const [models, setModels] = useState([]);
  const [versions, setVersion] = useState([]);

  useEffect(() => {
    api.get("/api/OnlineChallenge/Make").then((response) => {
      setMakes(response.data);
    });
  }, []);

  async function handleMakes(event) {
    const makeId = event.target.value;

    await api
      .get(`/api/OnlineChallenge/Model?MakeID=${makeId}`)
      .then((response) => {
        setModels(response.data);
      });

    setVersion([]);
  }

  async function handleModels(event) {
    const modelId = event.target.value;

    await api
      .get(`/api/OnlineChallenge/Version?ModelID=${modelId}`)
      .then((response) => {
        setVersion(response.data);
      });
  }

  return (
    <Container>
      <img className="logo" src={logo} alt="logo" />
      <Tabs>
        <button 
          className={tabSelected === "carro" && "actived"}
          onClick={() => setTabSelected("carro")}
        >
          <FaCar size={34} />
          <div>
            <span>COMPRAR</span>
            <span className="tabBtnType">CARROS</span>
          </div>
        </button>
        <button
          className={tabSelected === "moto" && "actived"}
          onClick={() => setTabSelected("moto")}        
        >
          <FaMotorcycle size={40} />
          <div>
            <span> COMPRAR</span>
            <span className="tabBtnType">MOTOS</span>
          </div>
        </button>
        <button></button>
      </Tabs>
      <Form>
        <Checks>
          <label>
            <input name="usados" type="checkbox" />
            Novos
          </label>
          <label>
            <input name="novos" type="checkbox" />
            Usados
          </label>
        </Checks>

        <Fields>
          <select className="2x-Field" name="onde" disabled>
            <option>São Paulo - SP</option>
          </select>
          <select name="marca" onChange={handleMakes}>
            <option selected={makes.length === 0 ? true : false} disabled>
              Marca: Todas
            </option>
            {makes.map((make) => (
              <option key={make.ID} value={make.ID}>
                {make.Name}
              </option>
            ))}
          </select>

          <select
            name="modelo"
            onChange={handleModels}
            disabled={models.length === 0 ? true : false}
          >
            <option selected={models.length === 0 ? true : false} disabled>
              Modelo: Todos
            </option>
            {models.map((model) => (
              <option key={model.ID} value={model.ID}>
                {model.Name}
              </option>
            ))}
          </select>
          <select name="ano" disabled>
            <option>Ano Desejado</option>
          </select>
          <select name="faixa" disabled>
            <option>Faixa de Preço</option>
          </select>
          <select
            className="2x-Field"
            name="versões"
            disabled={versions.length === 0 ? true : false}
          >
            <option selected={versions.length === 0 ? true : false} disabled>
              Versão: Todas
            </option>
            {versions.map((version) => (
              <option key={version.ID} value={version.ID}>
                {version.Name}
              </option>
            ))}
          </select>
        </Fields>

        <Buttons>
          <button type="button" className="searchBtn">
            <FiChevronRight />
            Busca Avançada
          </button>
          <button type="button" className="clearFilters">
            Limpar Filtros
          </button>
          <button type="button" className="showOffers">
            VER OFERTAS
          </button>
        </Buttons>
      </Form>
    </Container>
  );
}

export default App;
