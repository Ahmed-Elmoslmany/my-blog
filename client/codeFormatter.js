const fs = require('fs');
const relaceLinesWithBackSlashes= () => {
    // let text = "example1; example2; example3";
    let text = fs.readFileSync('./src/markdown/article2.md', 'utf-8');

    // Using regular expression to replace colon with newline
    // text = text.replace(/;/g, '\\n');
    // text = text.replace(/[\r\n]+/g, '\\n');
    // text = text.replace(/"/g, '\'');
    text = text.replace(/```js([\s\S]+?)```/g, '<Code language=\'js\'>$1</Code>');
    text = text.replace(/```bash([\s\S]+?)```/g, '<Code language=\'bash\'>$1</Code>');
    text = text.replace(/%(\w+)([\s\S]+?)%/g, '<span className=\'$1\'>$2</span>');

    text = text.replace(/`([\s\S]+?)`/g, '<span className=\'highlighted-text\'>$1</span>');
    text = text.replace(/~([\s\S]+?)~/g, '<div className=\'important-note\'>$1</div>');

    console.log(text);
}


relaceLinesWithBackSlashes()
