class DataProcessor { // abstract

    processData() {
        throw new Error("Abstract method 'processData' must be implemented");
    }
}

class RealDataProcessor extends DataProcessor {

    processData(data = "") {
        console.log("RealDataProcessor: Start processing data...");
        let result = "";
        for (let i = 1; i <= 1_000_000 * data.length; i++) {
            result = `${data} ${i}`;
        }
        console.log("RealDataProcessor: Data processing complete.");
        return result;
    }
}

class MonitorProxy extends DataProcessor {

    constructor(processor) {
        super();
        this.processor = processor;
    }

    processData(data) {
        console.log("MonitorProxy: Monitoring start...");
        const start = performance.now();
        const processedData = this.processor.processData(data);
        const end = performance.now();
        console.log(`MonitorProxy: Processing time = ${end - start} ms`);
        console.log("MonitorProxy: Monitoring complete.");
        return processedData;
    }
}



function clientCode(dataProcessor) {
    const processedData = dataProcessor.processData("data");
    console.log(`Client: Processed data: ${processedData}`);
}

const realDataProcessor = new RealDataProcessor();
const monitorProxy = new MonitorProxy(realDataProcessor);

console.log("\n=== RealDataProcessor ===");
clientCode(realDataProcessor);

console.log("\n=== MonitorProxy ===");
clientCode(monitorProxy);
