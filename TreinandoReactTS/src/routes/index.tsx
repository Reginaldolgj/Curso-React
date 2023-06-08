import { Route, Routes as Switch, BrowserRouter, Navigate } from "react-router-dom"
import { PagInicial } from "../PagInicial/PagInicial"

export const Routes = () => {

  return(
    <BrowserRouter>
      <Switch>
        <Route path="/pagina-inicial" element={<PagInicial />} />
        <Route path="*" element={ <Navigate to ="/pagina-inicial" />}/>
      </Switch>
    </BrowserRouter>
  )
}