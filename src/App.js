import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./Styles/CssMaster.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Enums
import { Size } from "./Enums/Size";

//Components
import BeerTemplate from "./Components/Templates/BeerTemplate";
import SiteMapLinks from "./Components/Molecules/SiteMapLinks";
import GeneralLink, { LinkType } from "./Components/Atoms/GeneralLink";
import Social from "./Components/Molecules/Social";
import GeneralIcon, { IconType } from "./Components/Atoms/GeneralIcon";
import NavBar from "./Components/Organisms/NavBar";
import Footer from "./Components/Organisms/Footer";
import DropDownNavLink from "./Components/Atoms/DropDownNavLink";

//Pages
import Home from "./Components/Pages/Home";
import Us from "./Components/Pages/Us";
import BeerGarden from "./Components/Pages/BeerGarden";
import ComerciantesAmigos from "./Components/Pages/ComerciantesAmigos";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar logoPath="/images/LogoSalta.png">
          <GeneralLink type={LinkType.General} isExternal={false} path="/us">
            Nosotros
          </GeneralLink>

          <DropDownNavLink linkTitle="Variedades">
            <GeneralLink
              type={LinkType.General}
              isExternal={false}
              path="/products/rubia"
            >
              Salta Rubia
            </GeneralLink>
            <GeneralLink
              type={LinkType.General}
              isExternal={false}
              path="/products/negra"
            >
              Salta Negra
            </GeneralLink>
          </DropDownNavLink>
          <GeneralLink
            type={LinkType.General}
            isExternal={false}
            path="/comerciantes-amigos"
          >
            Comerciantes amigos
          </GeneralLink>
        </NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/us" element={<Us />} />
          <Route path="/beergarden" element={<BeerGarden />} />
          <Route path="/products/:id" element={<BeerTemplate />} />
          <Route path="/comerciantes-amigos" element={<ComerciantesAmigos />} />
        </Routes>
        <Footer>
          <SiteMapLinks>
            <GeneralLink type={LinkType.General} isExternal={false} path="/">
              Inicio
            </GeneralLink>
            <GeneralLink type={LinkType.General} isExternal={false} path="/us">
              Nosotros
            </GeneralLink>
            <GeneralLink
              type={LinkType.General}
              isExternal={false}
              path="/comerciantes-amigos"
            >
              Comerciantes Amigos
            </GeneralLink>
            <GeneralLink type={LinkType.General} isExternal={false} path="/">
              Variedades
            </GeneralLink>
            <GeneralLink type={LinkType.General} isExternal={false} path="/">
              Campañas
            </GeneralLink>
            <GeneralLink type={LinkType.General} isExternal={false} path="/">
              Términos y condiciones
            </GeneralLink>
            <GeneralLink type={LinkType.General} isExternal={false} path="/">
              Política de privacidad
            </GeneralLink>
            <GeneralLink
              type={LinkType.General}
              isExternal={true}
              path="https://www.ccu.com.ar/"
            >
              ccu
            </GeneralLink>
          </SiteMapLinks>
          <Social>
            <GeneralIcon
              color="#FFFFFF"
              type={IconType.SocialInstagram}
              size={Size.Md}
              url="https://www.instagram.com/saltacerveza/?hl=es-la"
              isExternal
            />
            <GeneralIcon
              color="#FFFFFF"
              type={IconType.SocialFacebook}
              size={Size.Md}
              url="https://www.facebook.com/cervezasalta/?ref=br_rs"
              isExternal
            />
            <GeneralIcon
              color="#FFFFFF"
              type={IconType.SocialYoutube}
              size={Size.Md}
              url="https://www.youtube.com/user/SaltaCerveza"
              isExternal
            />
          </Social>
        </Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
