import * as sass from "sass";
import postcss from "postcss";
import autoprefixer from "autoprefixer";
import cssnano from 'cssnano';



class ScssCompiler {

    constructor(scssCode) {
        this.scssCode = scssCode;
    }

    async compile() {
        return sass.compileString(this.scssCode).css;
    }
}

class ScssCompilerDecorator {
    
    constructor(compiler) {
        this.wrappee = compiler;
    }

    async compile() {
        return this.wrappee.compile();
    }
}

class AutoprefixerDecorator extends ScssCompilerDecorator {

    async compile() {
        const cssCode = await super.compile();
        const result = await postcss([autoprefixer]).process(cssCode, { from: undefined });
        return result.css;
    }
}

class CssNanoDecorator extends ScssCompilerDecorator {

    async compile() {
        const cssCode = await super.compile();
        const result = await postcss([cssnano]).process(cssCode, { from: undefined });
        return result.css;
    }
}



async function clientCode() {

    const scssCode = `
        $display: grid;
        div {
            display: $display;
            user-select: none;
        }
    `;

    let scssCompiler = new ScssCompiler(scssCode);
    
    const compiledScss = await scssCompiler.compile();
    console.log("\nCompiled SCSS Code:\n", compiledScss);

    scssCompiler = new AutoprefixerDecorator(scssCompiler);

    const autoprefixedScss = await scssCompiler.compile();
    console.log("\nAutoprefixed SCSS Code:\n", autoprefixedScss);

    scssCompiler = new CssNanoDecorator(scssCompiler);
    
    const minifiedScss = await scssCompiler.compile();
    console.log("\nMinified SCSS Code:\n", minifiedScss);
}

clientCode();
