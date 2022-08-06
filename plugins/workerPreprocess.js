/**@type {import("svelte-preprocess/dist/types").PreprocessorGroup} */
export default () => [{
    /**@type {import("svelte-preprocess/dist/types").Preprocessor} */
    script(svelteFile) {
        const { filename, attributes, content } = svelteFile
        if (!attributes["sheetworker"])
            return { code: content }
        const context = attributes["context"] ?? "instance"
        workerCode[filename] = workerCode[filename] ?? {}
        workerCode[filename][context] = content
        return { code: "" }
    }
},
{
    /**@type {import("svelte-preprocess/dist/types").MarkupPreprocessor} */
    markup(svelteFile) {
        const { filename, content } = svelteFile

        const codeContexts = workerCode[filename]

        if (!codeContexts)
            return { code: content }

        let newCode = content

        for (const context in codeContexts) {
            if (Object.hasOwnProperty.call(codeContexts, context)) {
                const code = codeContexts[context];
                newCode = `{#if true}<script type="text/worker">${code}</script>{/if}
                ` + newCode
            }
        }

        delete workerCode[filename]

        return {
            code: newCode
        }
    }
}]

const workerCode = {}