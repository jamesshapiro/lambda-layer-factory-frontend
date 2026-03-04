export const LANGUAGES = [
  { name: 'Python', id: 'python' },
  { name: 'Node', id: 'node' },
  { name: 'Ruby', id: 'ruby' },
  { name: 'Java', id: 'java' },
  { name: 'Go', id: 'go' },
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
    { name: 'Python 3.13', id: 'python3.13' },
  ],
  node: [
    { name: 'Node.js 18.x', id: 'node18.x' },
    { name: 'Node.js 20.x', id: 'node20.x' },
    { name: 'Node.js 22.x', id: 'node22.x' },
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
