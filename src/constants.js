export const LANGUAGES = [
  { name: 'Python', id: 'python' },
  { name: 'Node', id: 'node' },
  { name: 'Ruby', id: 'ruby' },
  { name: 'Java', id: 'java' },
  { name: 'Go', id: 'go' },
  { name: '.NET', id: 'dotnet' },
  { name: 'Rust', id: 'rust' },
  { name: 'C++', id: 'cplusplus' },
  { name: 'Custom', id: 'custom' },
];

export const RUNTIMES = {
  python: [
    { name: 'Python 3.9', id: 'python3.9' },
    { name: 'Python 3.10', id: 'python3.10' },
    { name: 'Python 3.11', id: 'python3.11' },
    { name: 'Python 3.12', id: 'python3.12' },
  ],
  node: [
    { name: 'Node.js 16.x', id: 'node16.x' },
    { name: 'Node.js 18.x', id: 'node18.x' },
    { name: 'Node.js 20.x', id: 'node20.x' },
  ],
  ruby: [
    { name: 'Ruby 3.2', id: 'ruby3.2' },
    { name: 'Ruby 3.3', id: 'ruby3.3' },
  ],
  java: [
    { name: 'Java 8 on Amazon Linux 2', id: 'java8-amazon-linux-2' },
    { name: 'Java 11', id: 'java11' },
    { name: 'Java 17', id: 'java17' },
    { name: 'Java 21', id: 'java21' },
  ],
  dotnet: [
    { name: '.NET 6', id: 'dotnet6' },
    { name: '.NET 8', id: 'dotnet8' },
  ],
  go: [
    { name: 'Amazon Linux 2', id: 'go-amazon-linux-2' },
    { name: 'Amazon Linux 2023', id: 'go-amazon-linux-2023' },
  ],
  rust: [
    { name: 'Amazon Linux 2', id: 'rust-amazon-linux-2' },
    { name: 'Amazon Linux 2023', id: 'rust-amazon-linux-2023' },
  ],
  cplusplus: [
    { name: 'Amazon Linux 2', id: 'cplusplus-amazon-linux-2' },
    { name: 'Amazon Linux 2023', id: 'cplusplus-amazon-linux-2023' },
  ],
  custom: [
    { name: 'Amazon Linux 2', id: 'custom-amazon-linux-2' },
    { name: 'Amazon Linux 2023', id: 'custom-amazon-linux-2023' },
  ],
};
