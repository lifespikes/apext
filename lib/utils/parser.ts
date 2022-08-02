import {findPagesDir} from "../findPagesDir";
import fs from "fs";
import colors from "@colors/colors/safe";
import {MethodsType} from "../../types";

export const methodRegex = /@methods[\s\S]*?]/g;
export const commentsRegex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
export const arrayRegex = /[\s\[\]\@methods]/g;

const methodsColors = {
    get: colors.blue,
    post: colors.yellow,
    put: colors.yellow,
    patch: colors.yellow,
    delete: colors.red,
    head: colors.grey,
}

/*
* Get all comments from a file
*/
export const getComments = async (path: string): Promise<string | null> => {
    const pagesPath = await findPagesDir();
    try {
        const content = fs.readFileSync(`${pagesPath}/${path}`, "utf8");
        const comments = content.match(commentsRegex)

        // Comments always return a single string array containing comments that match the pattern
        return comments ? comments[0] : null;
    } catch (e) {
        return null;
    }
}

const colorizeMethods = (methods: string[]) => {
    return methods.map(method => {
        const methodFn = methodsColors[method.toLocaleLowerCase() as MethodsType];
        return methodFn ? methodFn(method) : colors.grey(method);
    }).join('|')
}


export const getMethodParam = (comment: string | null) => {

    const methodMatch = comment ? comment.match(methodRegex) : null

    if (!comment || !methodMatch) {
        return {methods: [], originalLength: 0};
    }
    const methods = methodMatch[0].replace(arrayRegex, "").split(",").filter(Boolean);

    return {
        originalLength: methods.join('|').length,
        methods: colorizeMethods(methods)
    };
}
