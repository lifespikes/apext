import {readdir} from 'fs/promises'
import colors from '@colors/colors/safe'
import {isDirectory} from './isDirectory'
import {getComments, getMethodParam} from "./utils/parser";

const printEndpoint = async (parent: string, file: string) => {
    const numberOfWhiteSpaces = 30;
    const coloredPath = `${parent}/${colors.green(file)}`
    const comments = await getComments(`${parent}/${file}`);
    const {methods, originalLength} = getMethodParam(comments);

    const value = numberOfWhiteSpaces - originalLength;

    const whiteSpaces = Array(value < 0 ? 0 : value).fill(' ').join("");

    console.log(`${methods}${whiteSpaces} ${coloredPath}`)
}

export const traverseDir = async (path: string, parent: string = '/api') => {
    try {
        const dirs = await readdir(path)
        for (const file of dirs) {
            const absolutePath = `${path}/${file}`
            const relativePath = `${parent}/${file}`
            if (isDirectory(absolutePath)) {
                await traverseDir(absolutePath, relativePath)
            } else {
                await printEndpoint(parent, file)
            }
        }
    } catch (error: any) {
        if (typeof error === 'string') throw colors.red(error)
        else throw error
    }
    return
}
