import React, {PropsWithChildren} from "react";
import {IntlProvider} from "react-intl";


interface LocaleProviderProps {
    lang: string,
}

const LocaleProvider: React.FC<PropsWithChildren<LocaleProviderProps>> = (props) => {
    const {lang, children} = props;
    const Lazy = React.lazy(
        async () => {
            const json: any = await import( /* webpackChunkName: "lang/[index]-[request]" */ `./assets/strings/${lang.replace('-', '_')}.json`);
            return {
                default: () => (
                    <IntlProvider locale={lang} messages={json} defaultLocale={'en'}>{children}</IntlProvider>)
            };
        }
    );
    return (<Lazy/>)
};

// export default LocaleProvider;

export default React.memo(LocaleProvider);

