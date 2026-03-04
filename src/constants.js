export const LANGUAGES = [
  { name: 'Python', id: 'python' },
  { name: 'Node', id: 'node' },
  { name: 'Ruby', id: 'ruby' },
  { name: 'Java', id: 'java' },
  { name: '.NET', id: 'dotnet' },
  { name: 'Go', id: 'go' },
  { name: 'Rust', id: 'rust' },
  { name: 'C++', id: 'cplusplus' },
  { name: 'Custom', id: 'custom' },
];

export const RUNTIMES = {
  python: [
    { name: 'Python 3.10', id: 'python3.10' },
    { name: 'Python 3.11', id: 'python3.11' },
    { name: 'Python 3.12', id: 'python3.12' },
    { name: 'Python 3.13', id: 'python3.13' },
    { name: 'Python 3.14', id: 'python3.14' },
  ],
  node: [
    { name: 'Node.js 20.x', id: 'node20.x' },
    { name: 'Node.js 22.x', id: 'node22.x' },
    { name: 'Node.js 24.x', id: 'node24.x' },
  ],
  ruby: [
    { name: 'Ruby 3.3', id: 'ruby3.3' },
    { name: 'Ruby 3.4', id: 'ruby3.4' },
  ],
  java: [
    { name: 'Java 8 on Amazon Linux 2', id: 'java8-amazon-linux-2' },
    { name: 'Java 11', id: 'java11' },
    { name: 'Java 17', id: 'java17' },
    { name: 'Java 21', id: 'java21' },
    { name: 'Java 25', id: 'java25' },
  ],
  dotnet: [
    { name: '.NET 8', id: 'dotnet8' },
    { name: '.NET 9', id: 'dotnet9' },
    { name: '.NET 10', id: 'dotnet10' },
  ],
  go: [
    { name: 'Amazon Linux 2', id: 'provided.al2' },
    { name: 'Amazon Linux 2023', id: 'provided.al2023' },
  ],
  rust: [
    { name: 'Amazon Linux 2', id: 'provided.al2' },
    { name: 'Amazon Linux 2023', id: 'provided.al2023' },
  ],
  cplusplus: [
    { name: 'Amazon Linux 2', id: 'provided.al2' },
    { name: 'Amazon Linux 2023', id: 'provided.al2023' },
  ],
  custom: [
    { name: 'Amazon Linux 2', id: 'provided.al2' },
    { name: 'Amazon Linux 2023', id: 'provided.al2023' },
  ],
};
