import registerElement from "./registerElement";

export function globalRegister(app) {
  app.use(registerElement)
}