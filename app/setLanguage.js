
// set Languages by lang params
export default async function selectLanguages(LangName) {
    // select by name Language
    const AllLanguages = {
        "en-us": () => import("@/src/Languages/en.json").then((module) => module.default),
        en: () => import("@/src/Languages/en.json").then((module) => module.default),
        fa: () => import("@/src/Languages/fa.json").then((module) => module.default),
        "fa-ir": () => import("@/src/Languages/fa.json").then((module) => module.default),
    };
    return AllLanguages[LangName]();
};