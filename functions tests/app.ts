type config ={
    readonly version: string;
    readonly name: string;
    readonly serialNumber: number;
}

const config: config = {
    version: '1.0.0',
    name: 'app',
    serialNumber: 0.1
}

function getConfig(): config {
    return config;
}
function getVersion(): string {
    return config.version;
}

