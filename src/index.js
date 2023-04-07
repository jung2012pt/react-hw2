/*!

=========================================================
* Purity UI Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import MainLayout from "layouts/MainLayout.js";
import edittable from './components/Tables/edittable'

ReactDOM.render(
  <HashRouter>
    <Switch>
      {/* <Route path={`/auth`} component={AuthLayout} /> */}
      <Route path={`/admin`} component={AdminLayout} />
      {/* <Route path={`/main`} component={MainLayout} >
        <Route path=":id/edit"
          element={<edittable />} />

      </Route > */}
      {/* <Route path={`/rtl`} component={RTLLayout} /> */}
      <Redirect from={`/`} to="/admin/tables" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
  // <Route path="/" element={<MainLayout />} errorElement={<NotFound />}>
  //   <Route index element={<Home />} />
  //   <Route path="products" element={<ProductLayout />}>
  //     <Route index element={<ProductsPage />}
  //       loader={productsLoader}
  //       action={action}

  //       errorElement={<ErrorPage />} />
  //     <Route path=":id" element={<ProductDetailPage />} loader={detailLoader} />

  //     <Route path=":id/new" element={<NewProduct />} action={newAction} />
  //     <Route path=":id/edit" loader={editLoader}
  //       element={<EditProduct />} action={editAction} />
  //     <Route path=":id/destroy" action={destroy} />
  //   </Route>
  //   <Route path="about" element={<About />} />
  // </Route>
);
