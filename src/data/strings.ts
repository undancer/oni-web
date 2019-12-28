import en from '../assets/strings/en.json';
import ko from '../assets/strings/ko.json';
import ru from '../assets/strings/ru.json';
import zh_CN from '../assets/strings/zh_CN.json';

let languages = () => ({
    en,
    ko,
    ru,
    'zh-CN': zh_CN
});

export const strings = (lang: string) => {
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    let langs = languages()[lang];

    let language: any = {};

    Object.keys(langs).forEach(lang => {
        let value = langs[lang];
        language[lang] = value;
    });

    return language;
};

export default languages;
