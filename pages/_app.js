import { ChakraProvider } from "@chakra-ui/react";
import Fonts from "../components/font";
import Layout from "../components/layouts/main";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import { wrapper } from "../store/store";
import Script from "next/script";

const Website = ({ Component, pageProps, router }) => (
  <ChakraProvider theme={theme}>
    {/* Umami Analytics */}
    <Script
      defer
      src="https://cloud.umami.is/script.js"
      data-website-id="483056d8-45cc-49ce-b83d-4a35c235d235"
    />
    <Fonts />
    <Layout router={router}>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  </ChakraProvider>
);

export default wrapper.withRedux(Website);

// import { ChakraProvider } from "@chakra-ui/react";
// import Fonts from "../components/font";
// import Layout from "../components/layouts/main";
// import theme from "../lib/theme";
// import { AnimatePresence } from "framer-motion";
// import { wrapper, store } from "../store/store";
// import { Provider } from "react-redux";
// import withRedux from "next-redux-wrapper";
// import App from "next/app";

// class MyApp extends App {
//   static async getInitialProps({ Component, ctx }) {
//     const pageProps = Component.getInitialProps
//       ? await Component.getInitialProps(ctx)
//       : {};

//     console.log(pageProps);
//     return { pageProps: pageProps };
//   }
//   render() {
//     const { Component, pageProps, router } = this.props;
//     return (
//       <Provider store={store}>
//         <ChakraProvider theme={theme}>
//           <Fonts />
//           <Layout router={router}>
//             <AnimatePresence exitBeforeEnter initial={true}>
//               <Component {...pageProps} key={router.route} />
//             </AnimatePresence>
//           </Layout>
//         </ChakraProvider>
//       </Provider>
//     );
//   }
// }

// const makeStore = () => store;

// export default withRedux(makeStore)(MyApp);
