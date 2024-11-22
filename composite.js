class FileComponent { // abstract

    name;

    getSize() { // abstract
        throw new Error("Abstract method 'getSize' must be implemented");
    }

    printStructure() { // abstract
        throw new Error("Abstract method 'printStructure' must be implemented");
    }
}

class TextFile extends FileComponent {

    constructor(name, content = "") {
        super();
        this.name = name + ".txt";
        this.content = content;
    }

    getSize() {
        return this.content.length;
    }

    printStructure(indent = "") {
        console.log(indent + this.name);
    }
}

class Directory extends FileComponent {

    subcomponents = {};

    constructor(name) {
        super();
        this.name = name;
    }

    add(subcomponent) {
        this.subcomponents[subcomponent.name] = subcomponent;
    }

    remove(subcomponent) {
        delete this.subcomponents[subcomponent.name];
    }

    getSize() {
        let totalSize = 0;
        for (let subcomponent of Object.values(this.subcomponents)) {
            totalSize += subcomponent.getSize();
        }
        return totalSize;
    }

    printStructure(indent = "") {
        console.log(indent + this.name + "/");
        Object.values(this.subcomponents).forEach(subcomponent => {
            subcomponent.printStructure(indent + "    ")
        });
    }
}



function clientCode() {

    const rootDirectory = new Directory("root");
    const userDirectory = new Directory("user");

    const textFile1 = new TextFile("notes", "Meeting at 3 PM");
    const textFile2 = new TextFile("todo", "Buy groceries");
    const textFile3 = new TextFile("readme", "Project description");

    rootDirectory.add(userDirectory);

    userDirectory.add(textFile1);
    userDirectory.add(textFile2);
    rootDirectory.add(textFile3);

    console.log("\nGetting sizes:\n");
    console.log(`Size of root directory: ${rootDirectory.getSize()}`);
    console.log(`Size of user directory: ${userDirectory.getSize()}`);
    console.log(`Size of textFile3 (readme): ${textFile3.getSize()}`);

    console.log("\nPrinting directory structures:");
    console.log("\nRoot directory structure:");
    rootDirectory.printStructure();
    console.log("\nUser directory structure:");
    userDirectory.printStructure();
}

clientCode();
