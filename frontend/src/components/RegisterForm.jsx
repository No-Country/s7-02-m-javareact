import React, { useState } from "react";

//Icons
import {
  key,
  movil,
  woman,
} from "./../assets/images";
import Logo from "./../assets/logo2.svg";
import email  from "./../assets/auth/email.svg"

import UploadDni from "./UploadDni.jsx";

//Components
import TermsAndConditions from "./TermsAndConditions";

//Formik
import { Formik, Field, ErrorMessage, Form } from "formik";

//Yup
import * as Yup from "yup";

/**
 *
 * Cambiar el color del texto de los inputs a negro.
 */

//Validation Schema
const required = "* Campo obligatorio";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "El nombre debe contener mas de 3 caracteres")
    .required(required),
  lastname: Yup.string()
    .min(3, "El apellido debe contener mas de 2 caracteres")
    .required(required),
  day: Yup.number()
    .required(required)
    .min(1, "Debe ingresar una fecha válida")
    .max(31, "Debe ingresar una fecha válida"),
  month: Yup.number()
    .required(required)
    .min(1, "Debe ingresar una fecha válida")
    .max(12, "Debe ingresar una fecha válida"),
  year: Yup.number()
    .required(required)
    .min(1900, "Debe ingresar una fecha válida")
    .max(2050, "Debe ingresar una fecha válida"),
  email: Yup.string().email("Debe ser un email válido").required(required),
  password: Yup.string()
    .min(8, "Debe contener al menos 8 caracteres de largo")
    .required(required),
  confirmPassword: Yup.string()
    .min(8, "Debe contener al menos 8 caracteres de largo")
    .required(required)
    .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
  telNumber: Yup.string()
    .matches(phoneRegExp, "El número de teléfono no es válido")
    .required(required),
});

function RegisterForm() {
  const [userRegistered, setUserRegistered] = useState(null);

  const storeUser = (user) => {
    setUserRegistered(user);
  };
  const handleRegister = (user) => {
    console.log(user);
  };

  return (
    <>
      {userRegistered ? (
        <TermsAndConditions userRegistered={userRegistered} />
      ) : (
        <Formik
          initialValues={{
            name: "",
            lastname: "",
            day: "",
            month: "",
            year: "",
            date: "",
            telNumber: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            let user = {};

            user = {
              name: values.name,
              lastname: values.lastname,
              day: values.day,
              month: values.month,
              year: values.year,
              date: values.date,
              telNumber: values.telNumber,
              email: values.email,
              password: values.password,
            };

            storeUser(user);
          }}
        >
          {({ errors }) => (
            <Form className="w-full p-0 md:px-20 md:py-10 md:border-none ">
              <div className="col-span-12 md:col-span-6 flex flex-col items-center justify-center px-[4rem]">
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "130px", marginBottom: "30px" }}
                />
              </div>
              <div className="flex max-md:flex-col justify-between mb-2">
                <div class="w-3/6 max-md:w-full">
                  <label
                    for="nombre"
                    className="block text-sm font-medium text-gray-900  "
                  >
                    Nombre:
                  </label>
                  <div className="flex mb-1">
                    <span style={{border:"none"}} className=" inline-flex bg-gray-200 items-center px-3 text-sm text-gray-900 rounded-l-md  ">
                      <img src={woman} />
                    </span>
                    <Field
                      type="text"
                      id="nombre"
                      name="name"
                      style={{
                        color: "black",
                        border: "0.1px solid #E0E0E0",
                        borderLeft:"none"
                      }}
                      className="rounded-none bg-gray-200 rounded-r-lg mr-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                    />
                  </div>
                  <ErrorMessage
                    name="name"
                    component={() => {
                      return (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.name}
                        </div>
                      );
                    }}
                  />
                </div>

                <div className="w-3/6 max-md:w-full">
                  <label
                    htmlFor="apellido"
                    className="block  text-sm font-medium text-gray-900 "
                  >
                    Apellido:
                  </label>
                  <div className="flex mb-1">
                    <Field
                      type="text"
                      id="apellido"
                      name="lastname"
                      style={{ color: "black", border: "0.1px solid #E0E0E0" }}
                      className="rounded-lg bg-gray-200 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <ErrorMessage
                    name="lastname"
                    component={() => {
                      return (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.lastname}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>
              <div></div>

              <label
                htmlFor="cumpleanios"
                className="block  text-sm font-medium text-gray-900 "
              >
                Fecha de nacimiento:
              </label>
              <div className="flex justify-between">
                <div className="flex-col w-1/4">
                  <Field
                    type="number"
                    name="day"
                    placeholder="Dia"
                    min="01"
                    max="31"
                    id="dias"
                    style={{
                      color: "black",
                      border: "0.1px solid #E0E0E0",
                      width: "100%",
                    }}
                    className="rounded-lg bg-gray-200  mr-5  text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="day"
                    component={() => {
                      return (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.day}
                        </div>
                      );
                    }}
                  />
                </div>
                <div className="flex-col w-1/4">
                  <Field
                    type="number"
                    name="month"
                    id="meses"
                    placeholder="Mes"
                    min="1"
                    max="12"
                    style={{
                      color: "black",
                      border: "0.1px solid #E0E0E0",
                      width: "100%",
                    }}
                    className=" rounded-lg bg-gray-200   mr-5 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="month"
                    component={() => {
                      return (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.month}
                        </div>
                      );
                    }}
                  />
                </div>
                <div className="flex-col w-1/4">
                  <Field
                    type="number"
                    name="year"
                    id="anios"
                    placeholder="Año"
                    min="1900"
                    max="2050"
                    style={{
                      color: "black",
                      border: "0.1px solid #E0E0E0",
                      width: "100%",
                    }}
                    className=" rounded-lg bg-gray-200 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="year"
                    component={() => {
                      return (
                        <div style={{ color: "red", fontSize: "12px" }}>
                          {errors.year}
                        </div>
                      );
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mt-3 text-sm font-medium text-gray-900 "
                >
                  Email:
                </label>
                <div className="flex mb-1">
                  <span style={{border:"none"}} className="inline-flex bg-gray-200 items-center px-2 text-sm text-gray-900 border border-r-5 border-gray-300 rounded-l-md  ">
                    <img
                      src={email}
                      style={{ height: "18px", width: "28px" }}
                    />
                  </span>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    style={{ color: "black", border: "0.1px solid #E0E0E0",borderLeft:"none" }}
                    className="rounded-r-lg bg-gray-200 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  "
                  />
                </div>
                <ErrorMessage
                  name="email"
                  component={() => {
                    return (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.email}
                      </div>
                    );
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mt-3 text-sm font-medium text-gray-900 "
                >
                  Contraseña:
                </label>
                <div className="flex mb-1">
                  <span style={{border:"none"}} className=" bg-gray-200 inline-flex items-center px-2 text-sm text-gray-900 border border-r-5 border-gray-300 rounded-l-md  ">
                    <img src={key} style={{ height: "28px", width: "28px" }} />
                  </span>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    style={{ color: "black", border: "0.1px solid #E0E0E0", borderLeft:"none" }}
                    className="rounded-r-lg bg-gray-200 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  component={() => {
                    return (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.password}
                      </div>
                    );
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mt-2 text-sm font-medium text-gray-900 "
                >
                  Confirmar contraseña:
                </label>
                <div className="flex mb-1">
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    style={{ color: "black", border: "0.1px solid #E0E0E0" }}
                    className="rounded-lg bg-gray-200 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <ErrorMessage
                  name="confirmPassword"
                  component={() => {
                    return (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.confirmPassword}
                      </div>
                    );
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block mt-2 text-sm font-medium text-gray-900 "
                >
                  Teléfono:
                </label>
                <div className="flex mb-1">
                  <span style={{border:"none"}} className=" bg-gray-200 inline-flex items-center px-4 text-sm text-gray-900 border border-r-5 border-gray-300 rounded-l-md  ">
                    <img src={movil} />
                  </span>
                  <Field
                    type="text"
                    id="telefono"
                    name="telNumber"
                    style={{ color: "black", border: "0.1px solid #E0E0E0",borderLeft:"none" }}
                    className="rounded-r-lg bg-gray-200 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <ErrorMessage
                  name="telNumber"
                  component={() => {
                    return (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.telNumber}
                      </div>
                    );
                  }}
                />
              </div>

              <p className="text-center text-black mt-4">
                Para completar tu perfil, debes cargar tu Documento Nacional de
                Identidad
              </p>

              <UploadDni />

              {/**
         * 
        <div>
        <label className="block text-sm font-medium text-center mt-3 text-gray-900">Carga tu Documento Nacional de Identidad</label>
        <label className="block text-sm font-medium mt-1 text-gray-900">Foto frontal:</label>
        <div className="flex mb-1">
            <Field type="file" id="frontDni" placeholder="foto frontal" name="frontDni" style={{color:"black",border:"0.1px solid #E0E0E0"}} className="rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <ErrorMessage
                name="frontDni"
                component={() => {
                  return <div style={{color:"red", fontSize:"12px"}}>{errors.frontDni}</div>;
                }}
              />
         <label className="block text-sm font-medium mt-1 text-gray-900">Foto del Dorso:</label>
         <div className="flex mb-1">
            <Field type="file" id="dorsoDni"  name="dorsoDni" style={{color:"black",border:"0.1px solid #E0E0E0"}} className="rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5   dark:border-white-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>  
        <ErrorMessage
                name="dorsoDni"
                component={() => {
                  return <div style={{color:"red", fontSize:"12px"}}>{errors.dorsoDni}</div>;
                }}
              />     
        </div>
         */}
              <div className="text-center mt-10">
                <button
                  type="submit"
                  className="text-white bg-[#ED1E79] shadow-lg  focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:hover:bg-[#f0428f]"
                >
                  Continuar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}

export default RegisterForm;
