import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routes";
import DefaultComponent from "./components/DefaultComponent/DefaultComponent";
import { Fragment, useState } from "react";
import { productsContext } from "./Context/productsContext";

function App() {
  const [listCheckouts, setListCheckout] = useState();

  return (
    <productsContext.Provider value={{ listCheckouts }}>
      <Routes>
        {routes.map((route) => {
          const Page = route.element;
          const Layout = route.isHeader ? DefaultComponent : Fragment;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </productsContext.Provider>
  );
}

export default App;
