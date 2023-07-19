/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    screens: {
      mdTab: "38.75em", // 620px
      tab: "42.5em", // 680px
      tabLg: "52.18em", // 835px
      ...defaultTheme.screens,
    },
    fontFamily: {
      spartan: "League Spartan, sans-serif",
    },
    lineHeight: {
      body1: "15px",
      body2: "18px",
      heading1: "36px",
      heading2: "22px",
      heading3: "24px",
      heading4: "15px",
      subheading: "20px",
    },
    letterSpacing: {
      body1: "-0.25px",
      body2: "-0.23px",
      heading1: "-1px",
      heading2: "-0.63px",
      heading3: "-0.8px",
      heading4: "-0.25px",
      subheading: "-0.31px",
    },
    colors: {
      bgColorDark: "#141625",
      bgColorLight: "#F8F8FB",
      basicWhite: "#ffffff",
      basicBlack: "#000000",
      contentBgDark: "#1E2139",
      primaryPurple: "#7C5DFA",
      shadedPurple: "#9277FF",
      textLight: "#0C0E16",
      navbarLight: "#373B53",
      pendingStatus: "#FF8F00",
      paidStatus: "#33D69F",
      shadedTextDark: "#DFE3FA",
      shadedTextLight: "#7E88C3",
      shadedContentLight: "#F9FAFE",
      shadedContentDark: "#252945",
      textReallyDark: "#888EB0",
      toggleColorDark: "#858BB2",
      deleteBtn: "#EC5757",
      deleteBtnShaded: "#FF9797",
      avatarBorderColor: "#494E6E",
    },
    extend: {
      fontSize: {
        xtraSm: "11px",
        14: "14px",
        med: "15px",
        lrgHeading: "32px",
      },
      gridTemplateColumns: {
        mainMob: "24px repeat(10,1fr) 24px",
        formPageMob: "24px repeat(10,1fr) 24px",
        formPageTab: "56px repeat(10,1fr) 56px",
        mainDesk: "101px .5fr repeat(12,1fr) 1fr",
        invoiceMob: "24px repeat(10,1fr) 24px",
        singleInvoiceContainer: "13% 20% 20% 1fr min-content",
        singleInvoiceContainerLg: "15% 23% 23% 1fr min-content",
        invoiceTab: "48px repeat(10,1fr) 48px",
        invoiceMax: "repeat(12,1fr)",
        datesAddressMob: "1fr 41px 1fr",
        datesAddressTab: "auto 41px auto 53px auto",
        datesAddressDesk: "max-content 100px 100px 110px auto",
        itemListDesk: "204px 46px 90px 1fr",
      },
      gridTemplateRows: {
        firstRowMinContent: "min-content",
        invoiceContainerMobRows: "min-content 36px 1fr",
        datesAddressMob: "1fr 36px min-content",
        datesAddressTab: "none",
      },
      boxShadow: {
        filterShadow: "0px 10px 20px rgba(72, 84, 159, 0.25)",
        filterShadowDark: "0px 10px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
}

