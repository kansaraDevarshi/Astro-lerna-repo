import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead, l as Fragment } from '../astro_D6YO-W98.mjs';
import 'kleur/colors';
import 'html-escaper';
import { g as getSession } from './__WD8JyDyD.mjs';
import { $ as $$Layout } from './dashboard_Di1quh0o.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const session = await getSession(Astro2.request);
  console.log("session>>>>>>>>>>.", JSON.stringify(session));
  const isAuthenticated = session && session.user;
  Astro2.cookies.set("session", JSON.stringify(session));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Signin/Signup" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1> ${isAuthenticated ? `Hi ${session?.user?.name ?? ""}` : "You are not logged in !"} </h1> ${!isAuthenticated ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <button id="login">Login With Github</button> <button id="login-with-google">Login With Google</button> ` })}` : renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <h2>
Go to <a href="/dashboard/">dashboard</a> </h2> <button id="logout">Logout</button> ` })}`}  </main> ` })}`;
}, "/home/devarshi/workspace/astro-mono-lerna/packages/my-astro-app/src/pages/index.astro", void 0);

const $$file = "/home/devarshi/workspace/astro-mono-lerna/packages/my-astro-app/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
