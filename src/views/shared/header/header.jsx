import React from "react";
import clsx from "clsx";

import useHeaderStyles from "./header.styles";
import { ReactComponent as Logo } from "../../../images/logo.svg";
import Container from "../container/container.view";
import Search from "../../search/search.view";
import { ReactComponent as Close } from "../../../images/icons/close.svg";
import { ReactComponent as Menu } from "../../../images/icons/menu.svg";

import {
  TESTNET_API_HOSTNAME,
  MAINNET_API_HOSTNAME,
  WEBSITE_URL,
  TWITTER_URL,
} from "../../../constants";

function Header() {
  const classes = useHeaderStyles();
  const [isMenuVisible, setMenuVisible] = React.useState();

  /**
   * Handles open menu click
   *
   * @returns {void}
   */
  function handleOpenMenuClick() {
    setMenuVisible(true);
  }

  /**
   * Handles close menu click
   *
   * @returns {void}
   */
  function handleCloseMenuClick() {
    setMenuVisible(false);
  }

  return (
    <header className={classes.root}>
      <Container disableVerticalGutters>
        <div className={classes.wrapper}>
          <div
            className={clsx({
              [classes.row]: true,
              [classes.logoAndLinks]: true,
            })}
          >
            <div
              className={clsx({
                [classes.logo]: true,
                [classes.active]: true,
                [classes.notActive]: isMenuVisible,
              })}
            >
              <a href="/" target="_self" rel="noopener noreferrer">
                <Logo />
              </a>
            </div>
            <div
              className={clsx({
                [classes.linksWrapper]: isMenuVisible,
                [classes.menuButtons]: true,
              })}
            >
              <button
                className={clsx({
                  [classes.menuButton]: true,
                  [classes.active]: true,
                  [classes.notActive]: isMenuVisible,
                  [classes.hide]: true,
                })}
                onClick={() => handleOpenMenuClick()}
              >
                <Menu className={classes.icon} />
              </button>
              <button
                className={clsx({
                  [classes.menuButton]: true,
                  [classes.closeMenuButton]: true,
                  [classes.active]: isMenuVisible,
                  [classes.notActive]: !isMenuVisible,
                  [classes.hide]: true,
                })}
                onClick={() => handleCloseMenuClick()}
              >
                <Close className={classes.icon} />
              </button>
              <div
                className={clsx({
                  [classes.links]: true,
                  [classes.active]: isMenuVisible,
                  [classes.notActive]: !isMenuVisible,
                  [classes.show]: true,
                })}
              >
                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  Hermez website
                </a>
                <a
                  href={
                    process.env.REACT_APP_HERMEZ_API_URL.includes(MAINNET_API_HOSTNAME)
                      ? "https://wallet.hermez.io/"
                      : "https://wallet.testnet.hermez.io/"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  Hermez wallet
                </a>
                <a href="/tokens" target="_self" rel="noopener noreferrer" className={classes.link}>
                  Registered Tokens
                </a>
                <a
                  href={TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.link}
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className={`${classes.row} ${classes.headline}`}>
            <h1>
              Polygon Hermez Batch Explorer
              {process.env.REACT_APP_HERMEZ_API_URL.includes(TESTNET_API_HOSTNAME) && (
                <span className={classes.headerTestnetAddon}>Rinkeby Testnet</span>
              )}
            </h1>
          </div>
          <div className={`${classes.row} ${classes.search}`}>
            <Search />
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
