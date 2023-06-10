import { Route, Routes as Switch, BrowserRouter, Navigate } from "react-router-dom"
import { PagInicial } from "../pages/PagInicial/PagInicial"
import { Login } from "../pages/login/Login"

export const Routes = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<PagInicial />} />
        <Route path="/ " element={<Login />} />

        {/* adiciona um redirecionamento para uma pág, precisa ser a ult rota */}
        <Route path="*" element={ <Navigate to ="/pagina-inicial" />}/>
      </Switch>
    </BrowserRouter>
  )
}