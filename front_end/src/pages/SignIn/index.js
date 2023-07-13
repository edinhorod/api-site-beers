import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form, Container } from "./styles";
import api from "../../services/api";


export function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    const data = { email, password };
    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post('authenticate', data)
        setError("");
        localStorage.setItem("@mytapp:authToken", response.data.token);
        localStorage.setItem("@mytapp:userName", response.data.user.name);
        navigate(`/home`);
      } catch (error) {
        setError(error.response.data.error)
      }

    }
  }

  return (
    <Container>
      <Form >
        <img src="https://www.tastingtable.com/img/gallery/40-most-popular-beers-ranked-worst-to-best/l-intro-1658943990.jpg" alt="MyTapp" />
        {error && <p>{error}</p>}
        <input
          type="email"
          placeholder="Endereço de e-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          placeholder="Senha"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          value={password}
        />
        <button type="button" onClick={handleSignIn}>Entrar</button>
      </Form>
    </Container>
  );
}